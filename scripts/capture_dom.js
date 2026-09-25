/**
 * Captures DOM structure of all VMS pages after login.
 * Outputs selector hints for building accurate POMs.
 */
const { chromium } = require('@playwright/test');
const fs = require('fs');
const path = require('path');

const PAGES = {
    'Dashboard':         'https://vms.iecsl.in/Dashboard',
    'CategoryManager':   'https://vms.iecsl.in/CategoryManager',
    'RegionManager':     'https://vms.iecsl.in/RegionManager',
    'HolidayManager':    'https://vms.iecsl.in/HolidayManager',
    'TemplateMaster':    'https://vms.iecsl.in/TemplateMaster',
    'EventManager':      'https://vms.iecsl.in/EventManager',
    'PrivateUser':       'https://vms.iecsl.in/PrivateUser',
    'Registration':      'https://vms.iecsl.in/Registration',
    'Invitation':        'https://vms.iecsl.in/Invitation',
    'Card_Scan':         'https://vms.iecsl.in/Card_Scan',
    'Vendor_Status':     'https://vms.iecsl.in/Vendor_Status',
    'UserGroup':         'https://vms.iecsl.in/UserGroup',
    'UserMapping':       'https://vms.iecsl.in/UserMapping',
    'RoleMapping':       'https://vms.iecsl.in/RoleMapping',
    'Vendor_CardView':   'https://vms.iecsl.in/Vendor_CardView',
    'Business_Card':     'https://vms.iecsl.in/Business_Card',
    'VendorApprovalStatus': 'https://vms.iecsl.in/VendorApprovalStatus',
    'Business_CardReport':  'https://vms.iecsl.in/Business_CardReport',
    'CustomMail':        'https://vms.iecsl.in/CustomMail',
};

(async () => {
    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();

    // Login first
    await page.goto('https://vms.iecsl.in');
    await page.locator('input[name="username"]').fill('sandipan@mailinator.com');
    await page.locator('input[name="password"]').fill('@123456');
    await page.getByRole('button', { name: /login/i }).click();
    await page.waitForTimeout(3000);

    const outDir = path.join(__dirname, '../dom_snapshots');
    fs.mkdirSync(outDir, { recursive: true });

    for (const [name, url] of Object.entries(PAGES)) {
        console.log(`Capturing: ${name} -> ${url}`);
        try {
            await page.goto(url, { waitUntil: 'networkidle', timeout: 15000 });
            await page.waitForTimeout(1500);

            // Capture key interactive elements
            const snapshot = await page.evaluate(() => {
                const els = [];
                // Buttons
                document.querySelectorAll('button').forEach(b => {
                    els.push({ tag: 'button', text: b.textContent.trim().substring(0, 80), class: b.className.substring(0, 100) });
                });
                // Inputs
                document.querySelectorAll('input').forEach(i => {
                    els.push({ tag: 'input', type: i.type, name: i.name, placeholder: i.placeholder, id: i.id });
                });
                // Links
                document.querySelectorAll('a').forEach(a => {
                    els.push({ tag: 'a', text: a.textContent.trim().substring(0, 60), href: a.href });
                });
                // Select / Dropdowns
                document.querySelectorAll('select, [role="combobox"], [role="listbox"]').forEach(s => {
                    els.push({ tag: s.tagName.toLowerCase(), role: s.getAttribute('role'), id: s.id, class: s.className.substring(0, 80) });
                });
                // Tables
                document.querySelectorAll('table, [role="grid"]').forEach(t => {
                    const headers = Array.from(t.querySelectorAll('th')).map(th => th.textContent.trim());
                    els.push({ tag: 'table', headers: headers.slice(0, 15) });
                });
                // Sidebar nav items
                document.querySelectorAll('[class*="sidebar"] a, [class*="sidebar"] button, [class*="nav"] li, .MuiListItemText-root').forEach(n => {
                    els.push({ tag: 'nav-item', text: n.textContent.trim().substring(0, 60) });
                });
                // Headings
                document.querySelectorAll('h1,h2,h3,h4,h5,h6').forEach(h => {
                    els.push({ tag: h.tagName.toLowerCase(), text: h.textContent.trim().substring(0, 80) });
                });
                return els;
            });

            fs.writeFileSync(
                path.join(outDir, `${name}.json`),
                JSON.stringify(snapshot, null, 2)
            );
            console.log(`  -> ${snapshot.length} elements captured`);
        } catch (err) {
            console.log(`  -> ERROR: ${err.message}`);
            fs.writeFileSync(path.join(outDir, `${name}.json`), JSON.stringify({ error: err.message }));
        }
    }

    await browser.close();
    console.log('\nDone! All DOM snapshots saved to dom_snapshots/');
})();
