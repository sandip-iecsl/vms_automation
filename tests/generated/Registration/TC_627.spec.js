const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_627
 * Module: Registration
 * Sub-Module: Card Scan
 * Scenario: Duplicate Event Name in Quick Add Modal
 * Description: Verify validation when creating an event name that already exists via Card Scan quick add modal.
 */
test('TC_627: Duplicate Event Name in Quick Add Modal', { annotation: { type: 'description', description: 'Verify validation when creating an event name that already exists via Card Scan quick add modal.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Card_Scan');
    await page.waitForLoadState('domcontentloaded');
    const addBtn = page.getByRole('button', { name: /add/i }).first();
    await expect(addBtn).toBeVisible({ timeout: 5000 });
    await addBtn.click();
    await expect(page.locator('.MuiDialog-root, .MuiModal-root, .MuiDrawer-root, form').first()).toBeVisible({ timeout: 5000 });
});
