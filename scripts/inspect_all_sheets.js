const xlsx = require('xlsx');
const path = require('path');

const filePath = path.join(__dirname, '../data/VMS.xlsx');
const workbook = xlsx.readFile(filePath);

const targetSheets = [
    'Global Navbar',
    'Login',
    'Master',
    'Registration',
    'User Management',
    'Vendor Engagement',
    'Report'
];

targetSheets.forEach(sheetName => {
    const sheet = workbook.Sheets[sheetName];
    if (!sheet) return;
    const rows = xlsx.utils.sheet_to_json(sheet);
    console.log(`\n=== SHEET: ${sheetName} (Total: ${rows.length}) ===`);
    rows.slice(0, 5).forEach(r => {
        console.log(`TC: ${r.TC_ID} | Sub: ${r['Sub-Module']} | Scenario: ${r['Test Scenario']} | Steps: ${JSON.stringify(r['Test Steps'])}`);
    });
});
