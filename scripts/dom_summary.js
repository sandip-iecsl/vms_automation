const fs = require('fs');
const path = require('path');
const dir = 'd:/Automations/VMS_Automation/dom_snapshots';

let out = '';
fs.readdirSync(dir).sort().forEach(f => {
    const j = JSON.parse(fs.readFileSync(path.join(dir, f), 'utf8'));
    if (j.error) { out += f + ' ERROR\n'; return; }
    const b = [...new Set(j.filter(e => e.tag === 'button' && e.text).map(e => e.text))];
    const h = j.filter(e => ['h1','h2','h3','h4','h5','h6'].includes(e.tag)).map(e => e.text);
    const i = j.filter(e => e.tag === 'input').map(e => `${e.type}|${e.name}|${e.placeholder}|${e.id}`);
    out += `\n=== ${f.replace('.json','')} ===\n`;
    out += `  Buttons: ${JSON.stringify(b)}\n`;
    out += `  Headings: ${JSON.stringify(h)}\n`;
    out += `  Inputs: ${JSON.stringify(i)}\n`;
});

fs.writeFileSync('d:/Automations/VMS_Automation/dom_snapshots/SUMMARY.txt', out);
console.log('Written to SUMMARY.txt');
