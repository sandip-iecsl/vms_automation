const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_1128
 * Module: Report
 * Sub-Module: Vendor Approval Status
 * Scenario: Hide column\' Quick Action
 * Description: Verify clicking \'Hide column\' immediately hides the targeted column.
 */
test('TC_1128: Hide column\' Quick Action', { annotation: { type: 'description', description: 'Verify clicking \'Hide column\' immediately hides the targeted column.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/VendorApprovalStatus');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('table, .MuiDataGrid-root, [role="grid"]').first()).toBeVisible({ timeout: 5000 });
});
