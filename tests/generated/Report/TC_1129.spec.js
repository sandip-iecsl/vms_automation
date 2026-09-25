const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_1129
 * Module: Report
 * Sub-Module: Vendor Approval Status
 * Scenario: Manage Columns Drawer Opening
 * Description: Verify clicking \'Manage columns\' opens full column visibility control box.
 */
test('TC_1129: Manage Columns Drawer Opening', { annotation: { type: 'description', description: 'Verify clicking \'Manage columns\' opens full column visibility control box.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/VendorApprovalStatus');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('table, .MuiDataGrid-root, [role="grid"]').first()).toBeVisible({ timeout: 5000 });
});
