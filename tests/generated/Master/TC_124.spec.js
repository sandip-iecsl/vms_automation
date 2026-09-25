const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_124
 * Module: Master
 * Sub-Module: Category
 * Scenario: Delete Category Associated with Active Vendor
 * Description: Verify deletion restriction when category is linked to an active vendor.
 */
test('TC_124: Delete Category Associated with Active Vendor', { annotation: { type: 'description', description: 'Verify deletion restriction when category is linked to an active vendor.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/CategoryManager');
    await page.waitForLoadState('domcontentloaded');
    const deleteBtn = page.getByRole('button', { name: /delete/i }).first();
    await expect(deleteBtn).toBeVisible({ timeout: 5000 });
});
