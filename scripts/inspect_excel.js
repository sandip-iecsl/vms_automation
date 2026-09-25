const xlsx = require('xlsx');
const path = require('path');

const filePath = path.join(__dirname, '../data/VMS.xlsx');
const workbook = xlsx.readFile(filePath);

console.log('Sheet Names:', workbook.SheetNames);

for (const name of workbook.SheetNames) {
    const sheet = workbook.Sheets[name];
    const data = xlsx.utils.sheet_to_json(sheet);
    console.log(`\nSheet: ${name}, Total Rows: ${data.length}`);
    if (data.length > 0) {
        console.log('Sample Row Keys:', Object.keys(data[0]));
        console.log('Sample Row:', data[0]);
    }
}
