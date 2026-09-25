const mammoth = require('mammoth');
const path = require('path');
const fs = require('fs');

async function extractDoc(filePath, outName) {
    try {
        const result = await mammoth.extractRawText({ path: filePath });
        console.log(`\n=================== ${outName} ===================`);
        console.log(result.value);
        fs.writeFileSync(path.join(__dirname, `${outName}.txt`), result.value);
    } catch (e) {
        console.error(`Error reading ${outName}:`, e.message);
    }
}

async function run() {
    await extractDoc(path.join(__dirname, "../url's.docx"), 'urls_doc');
    await extractDoc(path.join(__dirname, "../vms_ui_pages.docx"), 'vms_ui_pages_doc');
}

run();
