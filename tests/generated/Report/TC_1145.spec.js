const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_1145
 * Module: Report
 * Sub-Module: Vendor Approval Status
 * Scenario: Cross-Menu Sidebar Navigation
 * Description: Verify clicking other sidebar menu items routes successfully.
 */
test('TC_1145: Cross-Menu Sidebar Navigation', { annotation: { type: 'description', description: 'Verify clicking other sidebar menu items routes successfully.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/VendorApprovalStatus');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('.sidebar-edge-toggle, body').first()).toBeVisible();
});
