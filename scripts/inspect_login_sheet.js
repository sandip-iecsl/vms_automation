const xlsx = require('xlsx');
const path = require('path');

const filePath = path.join(__dirname, '../data/VMS.xlsx');
const workbook = xlsx.readFile(filePath);
const sheet = workbook.Sheets['Login'];
const data = xlsx.utils.sheet_to_json(sheet);

console.log('Login Test Cases (First 20):');
data.slice(0, 20).forEach(row => {
    console.log(`\nTC_ID: ${row.TC_ID}`);
    console.log(`Scenario: ${row['Test Scenario']}`);
    console.log(`Description: ${row['Test Description']}`);
    console.log(`Steps: ${JSON.stringify(row['Test Steps'])}`);
    console.log(`Expected Outcome: ${JSON.stringify(row['Expected Outcome'])}`);
});
