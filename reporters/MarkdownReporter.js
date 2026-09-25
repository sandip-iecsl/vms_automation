const fs = require('fs');
const path = require('path');

class MarkdownReporter {
    onBegin(config, suite) {
        this.suite = suite;
    }

    onEnd(result) {
        const reportsDir = path.join(process.cwd(), 'reports');
        if (!fs.existsSync(reportsDir)) {
            fs.mkdirSync(reportsDir, { recursive: true });
        }

        const now = new Date();
        const timestamp = now.toISOString().replace(/[:.]/g, '-');
        const formattedDate = now.toLocaleString('en-US', {
            dateStyle: 'full',
            timeStyle: 'medium'
        });

        const reportFile = path.join(reportsDir, `Execution_Report_${timestamp}.md`);
        const latestFile = path.join(reportsDir, `Latest_Execution_Report.md`);

        const allTests = this.suite ? this.suite.allTests() : [];
        let passed = 0;
        let failed = 0;
        let skipped = 0;

        const moduleStats = {};
        const rows = [];

        allTests.forEach((test, index) => {
            const outcome = test.outcome();
            const duration = (test.results.reduce((acc, r) => acc + r.duration, 0) / 1000).toFixed(2);
            let statusBadge = '⚪ **SKIPPED**';
            let errorMsg = '-';

            if (outcome === 'expected') {
                passed++;
                statusBadge = '✅ **PASSED**';
            } else if (outcome === 'unexpected') {
                failed++;
                statusBadge = '❌ **FAILED**';
                const lastResult = test.results[test.results.length - 1];
                if (lastResult && lastResult.error) {
                    errorMsg = `\`\`\`${(lastResult.error.message || '').split('\n')[0].replace(/`/g, "'")}\`\`\``;
                }
            } else {
                skipped++;
            }

            // Extract TC_ID and Module from path or title
            const relativePath = path.relative(process.cwd(), test.location.file);
            const pathParts = relativePath.split(path.sep);
            const moduleName = pathParts.length >= 3 ? pathParts[2] : 'General';
            const fileName = path.basename(relativePath, '.spec.js');

            // Track module stats
            if (!moduleStats[moduleName]) {
                moduleStats[moduleName] = { total: 0, passed: 0, failed: 0, skipped: 0 };
            }
            moduleStats[moduleName].total++;
            if (outcome === 'expected') moduleStats[moduleName].passed++;
            else if (outcome === 'unexpected') moduleStats[moduleName].failed++;
            else moduleStats[moduleName].skipped++;

            // Extract description from annotations
            const descAnno = test.annotations.find(a => a.type === 'description');
            const description = descAnno ? descAnno.description.replace(/\|/g, '\\|') : '-';
            const testTitle = test.title.replace(/\|/g, '\\|');

            rows.push({
                index: index + 1,
                tcId: fileName,
                module: moduleName,
                title: testTitle,
                description: description,
                status: statusBadge,
                duration: `${duration}s`,
                error: errorMsg
            });
        });

        const passRate = allTests.length > 0 ? ((passed / allTests.length) * 100).toFixed(1) : '0.0';
        const overallBadge = result.status === 'passed' 
            ? '![Passed](https://img.shields.io/badge/Status-PASSED-brightgreen?style=for-the-badge)'
            : '![Failed](https://img.shields.io/badge/Status-FAILED-red?style=for-the-badge)';

        let md = `# 📊 Playwright Test Execution Summary\n\n`;
        md += `${overallBadge} ![Pass Rate](https://img.shields.io/badge/Pass_Rate-${passRate}%25-blue?style=for-the-badge)\n\n`;

        md += `> [!NOTE]\n`;
        md += `> **Execution Timestamp**: ${formattedDate}  \n`;
        md += `> **Total Duration**: ${(result.duration / 1000).toFixed(2)} seconds  \n`;
        md += `> **Framework**: Playwright + Chromium  \n\n`;

        md += `## 📈 Executive Summary\n\n`;
        md += `| Metric | Count | Percentage |\n`;
        md += `| :--- | :---: | :---: |\n`;
        md += `| 🎯 **Total Test Cases** | **${allTests.length}** | 100% |\n`;
        md += `| ✅ **Passed** | **${passed}** | ${passRate}% |\n`;
        md += `| ❌ **Failed** | **${failed}** | ${(100 - parseFloat(passRate)).toFixed(1)}% |\n`;
        md += `| ⚪ **Skipped** | **${skipped}** | 0.0% |\n\n`;

        md += `### 📦 Module Breakdown\n\n`;
        md += `| Module Name | Total Tests | Passed | Failed | Pass Rate |\n`;
        md += `| :--- | :---: | :---: | :---: | :---: |\n`;
        for (const [mod, stats] of Object.entries(moduleStats)) {
            const modRate = ((stats.passed / stats.total) * 100).toFixed(1);
            md += `| **${mod}** | ${stats.total} | ${stats.passed} | ${stats.failed} | ${modRate}% |\n`;
        }
        md += `\n---\n\n`;

        md += `## 📝 Detailed Test Execution Results\n\n`;
        md += `| # | TC ID | Module | Scenario / Title | Description | Status | Duration | Error Details |\n`;
        md += `| :-: | :--- | :--- | :--- | :--- | :-: | :-: | :--- |\n`;

        rows.forEach(r => {
            md += `| ${r.index} | \`${r.tcId}\` | **${r.module}** | ${r.title} | ${r.description} | ${r.status} | \`${r.duration}\` | ${r.error} |\n`;
        });

        md += `\n---\n\n`;
        md += `*Report generated automatically by VMS Automation Engine Custom Reporter.*  \n`;
        md += `*Detailed traces & video recordings stored in \`test-results/\` directory.*\n`;

        fs.writeFileSync(reportFile, md);
        fs.writeFileSync(latestFile, md);

        console.log(`\n📄 Enhanced Execution Report generated successfully:\n - ${reportFile}\n - ${latestFile}\n`);
    }
}

module.exports = MarkdownReporter;
