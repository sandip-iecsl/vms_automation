const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// PowerShell command to unzip vms_ui_pages.docx to a temp folder
const targetZip = path.join(__dirname, '../vms_ui_pages.docx');
const destDir = path.join(__dirname, '../extracted_ui_doc');

if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
}

try {
    execSync(`powershell -Command "Expand-Archive -Path '${targetZip}' -DestinationPath '${destDir}' -Force"`);
    const mediaDir = path.join(destDir, 'word/media');
    if (fs.existsSync(mediaDir)) {
        const files = fs.readdirSync(mediaDir);
        console.log(`Extracted ${files.length} images from vms_ui_pages.docx:`, files.slice(0, 10));
    } else {
        console.log('No word/media found');
    }
} catch (e) {
    console.error('Error expanding archive:', e.message);
}
