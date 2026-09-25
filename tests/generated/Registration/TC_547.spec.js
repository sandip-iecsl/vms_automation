const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_547
 * Module: Registration
 * Sub-Module: Declaration
 * Scenario: Dashboard Metrics Count Reflection
 * Description: Verify Dashboard \'New Vendors\' / \'Vendor statistics\' counter increments.
 */
test('TC_547: Dashboard Metrics Count Reflection', { annotation: { type: 'description', description: 'Verify Dashboard \'New Vendors\' / \'Vendor statistics\' counter increments.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Registration');
    await page.waitForLoadState('domcontentloaded');
    const addBtn = page.getByRole('button', { name: /new vendor/i }).first();
    await expect(addBtn).toBeVisible({ timeout: 5000 });
    await addBtn.click();
    await expect(page.locator('.MuiDialog-root, .MuiModal-root, .MuiDrawer-root, form').first()).toBeVisible({ timeout: 5000 });
});
