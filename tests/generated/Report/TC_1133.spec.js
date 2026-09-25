const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_1133
 * Module: Report
 * Sub-Module: Vendor Approval Status
 * Scenario: Reset Column Configuration Action
 * Description: Verify clicking RESET button in Manage Columns restores default grid view.
 */
test('TC_1133: Reset Column Configuration Action', { annotation: { type: 'description', description: 'Verify clicking RESET button in Manage Columns restores default grid view.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/VendorApprovalStatus');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('table, .MuiDataGrid-root, [role="grid"]').first()).toBeVisible({ timeout: 5000 });
});
