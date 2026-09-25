const { chromium } = require('@playwright/test');

(async () => {
    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();

    // Login
    await page.goto('https://vms.iecsl.in');
    await page.locator('input[name="username"]').fill('sandipan@mailinator.com');
    await page.locator('input[name="password"]').fill('@123456');
    await page.getByRole('button', { name: /login/i }).click();
    await page.waitForTimeout(3000);

    // 1. Inspect UserMapping
    console.log('=== Inspecting UserMapping ===');
    await page.goto('https://vms.iecsl.in/UserMapping', { waitUntil: 'networkidle' });
    const addBtn = page.getByRole('button', { name: /add user mapping/i });
    console.log('Add User Mapping button visible:', await addBtn.isVisible());
    if (await addBtn.isVisible()) {
        await addBtn.click();
        await page.waitForTimeout(1000);
        // see modal content
        const modalHtml = await page.evaluate(() => {
            const m = document.querySelector('.MuiDialog-root, .MuiModal-root');
            if (!m) return 'No modal found';
            return {
                title: m.querySelector('h2, .MuiDialogTitle-root')?.textContent,
                labels: Array.from(m.querySelectorAll('label')).map(l => l.textContent),
                inputs: Array.from(m.querySelectorAll('input, select, [role="combobox"]')).map(i => ({
                    tag: i.tagName,
                    role: i.getAttribute('role'),
                    id: i.id,
                    name: i.name
                })),
                buttons: Array.from(m.querySelectorAll('button')).map(b => b.textContent)
            };
        });
        console.log('Modal details:', JSON.stringify(modalHtml, null, 2));

        // Click cancel/close if open
        const closeBtn = page.getByRole('button', { name: /cancel|close/i }).first();
        if (await closeBtn.isVisible()) await closeBtn.click();
    }

    // 2. Inspect CustomMail
    console.log('\n=== Inspecting CustomMail ===');
    await page.goto('https://vms.iecsl.in/CustomMail', { waitUntil: 'networkidle' });
    const cmDetails = await page.evaluate(() => {
        return {
            headings: Array.from(document.querySelectorAll('h1,h2,h3,h4,h5,h6')).map(h => h.textContent),
            buttons: Array.from(document.querySelectorAll('button')).map(b => b.textContent.trim()).filter(Boolean),
            labels: Array.from(document.querySelectorAll('label')).map(l => l.textContent),
            inputs: Array.from(document.querySelectorAll('input')).map(i => ({
                type: i.type,
                name: i.name,
                placeholder: i.placeholder,
                id: i.id
            })),
            tableHeaders: Array.from(document.querySelectorAll('th, [role="columnheader"]')).map(th => th.textContent.trim()).filter(Boolean)
        };
    });
    console.log('CustomMail details:', JSON.stringify(cmDetails, null, 2));

    await browser.close();
})();
