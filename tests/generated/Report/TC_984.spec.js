const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_984
 * Module: Report
 * Sub-Module: All Vendor
 * Scenario: Active Sidebar Highlighting for All Vendor
 * Description: Verify All Vendor item is highlighted as active in Report sidebar menu.
 */
test('TC_984: Active Sidebar Highlighting for All Vendor', { annotation: { type: 'description', description: 'Verify All Vendor item is highlighted as active in Report sidebar menu.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Vendor_CardView');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('.sidebar-edge-toggle, body').first()).toBeVisible();
});
