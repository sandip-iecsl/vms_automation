const fs = require('fs');
const path = require('path');

class JsonReporter {
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

        const reportFile = path.join(reportsDir, `Execution_Report_${timestamp}.json`);
        const latestFile = path.join(reportsDir, `Latest_Execution_Report.json`);

        const allTests = this.suite ? this.suite.allTests() : [];
        let passed = 0;
        let failed = 0;
        let skipped = 0;

        const moduleStats = {};
        const testDetails = [];

        allTests.forEach((test, index) => {
            const outcome = test.outcome();
            const totalDurationSec = test.results.reduce((acc, r) => acc + r.duration, 0) / 1000;

            let status = 'SKIPPED';
            let errorDetails = null;

            if (outcome === 'expected') {
                passed++;
                status = 'PASSED';
            } else if (outcome === 'unexpected') {
                failed++;
                status = 'FAILED';
                const lastResult = test.results[test.results.length - 1];
                if (lastResult && lastResult.error) {
                    errorDetails = {
                        message: lastResult.error.message || '',
                        stack: lastResult.error.stack || '',
                        value: lastResult.error.value || ''
                    };
                }
            } else {
                skipped++;
            }

            // Extract Module and TC ID from path
            const relativePath = path.relative(process.cwd(), test.location.file);
            const pathParts = relativePath.split(path.sep);
            const moduleName = pathParts.length >= 3 ? pathParts[2] : 'General';
            const fileName = path.basename(relativePath, '.spec.js');

            // Module aggregation
            if (!moduleStats[moduleName]) {
                moduleStats[moduleName] = { total: 0, passed: 0, failed: 0, skipped: 0 };
            }
            moduleStats[moduleName].total++;
            if (status === 'PASSED') moduleStats[moduleName].passed++;
            else if (status === 'FAILED') moduleStats[moduleName].failed++;
            else moduleStats[moduleName].skipped++;

            // Extract annotations
            const descAnno = test.annotations.find(a => a.type === 'description');
            const description = descAnno ? descAnno.description : null;

            testDetails.push({
                id: index + 1,
                tcId: fileName,
                module: moduleName,
                title: test.title,
                description: description,
                status: status,
                durationSeconds: parseFloat(totalDurationSec.toFixed(2)),
                location: {
                    file: relativePath,
                    line: test.location.line,
                    column: test.location.column
                },
                error: errorDetails
            });
        });

        const totalTests = allTests.length;
        const passRate = totalTests > 0 ? parseFloat(((passed / totalTests) * 100).toFixed(2)) : 0.0;

        // Structured JSON Object
        const jsonReport = {
            metadata: {
                title: "Playwright Test Execution Summary",
                timestamp: now.toISOString(),
                formattedDate: now.toLocaleString('en-US', { dateStyle: 'full', timeStyle: 'medium' }),
                durationSeconds: parseFloat((result.duration / 1000).toFixed(2)),
                status: result.status.toUpperCase(),
                framework: "Playwright"
            },
            summary: {
                totalTests: totalTests,
                passed: passed,
                failed: failed,
                skipped: skipped,
                passRatePercentage: passRate
            },
            moduleBreakdown: Object.keys(moduleStats).map(mod => ({
                moduleName: mod,
                total: moduleStats[mod].total,
                passed: moduleStats[mod].passed,
                failed: moduleStats[mod].failed,
                skipped: moduleStats[mod].skipped,
                passRatePercentage: parseFloat(((moduleStats[mod].passed / moduleStats[mod].total) * 100).toFixed(2))
            })),
            tests: testDetails
        };

        const jsonContent = JSON.stringify(jsonReport, null, 2);

        fs.writeFileSync(reportFile, jsonContent);
        fs.writeFileSync(latestFile, jsonContent);

        console.log(`\n📄 Detailed JSON Execution Report generated successfully:\n - ${reportFile}\n - ${latestFile}\n`);
    }
}

module.exports = JsonReporter;