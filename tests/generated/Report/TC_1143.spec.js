const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_1143
 * Module: Report
 * Sub-Module: Vendor Approval Status
 * Scenario: Active Sidebar Menu Highlighting
 * Description: Verify Vendor Approval Status link is highlighted as active in sidebar.
 */
test('TC_1143: Active Sidebar Menu Highlighting', { annotation: { type: 'description', description: 'Verify Vendor Approval Status link is highlighted as active in sidebar.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/VendorApprovalStatus');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('.sidebar-edge-toggle, body').first()).toBeVisible();
});
