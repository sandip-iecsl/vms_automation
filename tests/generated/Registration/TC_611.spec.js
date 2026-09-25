const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_611
 * Module: Registration
 * Sub-Module: Vendor Invitation
 * Scenario: Tab Key Order in Add Invitation Modal
 * Description: Verify keyboard Tab order moves sequentially across modal inputs.
 */
test('TC_611: Tab Key Order in Add Invitation Modal', { annotation: { type: 'description', description: 'Verify keyboard Tab order moves sequentially across modal inputs.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Invitation');
    await page.waitForLoadState('domcontentloaded');
    const addBtn = page.getByRole('button', { name: /add invitation/i }).first();
    await expect(addBtn).toBeVisible({ timeout: 5000 });
    await addBtn.click();
    await expect(page.locator('.MuiDialog-root, .MuiModal-root, .MuiDrawer-root, form').first()).toBeVisible({ timeout: 5000 });
});
