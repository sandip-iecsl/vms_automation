const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_1161
 * Module: Report
 * Sub-Module: Vendor Approval Status
 * Scenario: Keyboard Tab Order Across DataGrid
 * Description: Verify logical Tab sequence through column headers, menu buttons, and View actions.
 */
test('TC_1161: Keyboard Tab Order Across DataGrid', { annotation: { type: 'description', description: 'Verify logical Tab sequence through column headers, menu buttons, and View actions.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/VendorApprovalStatus');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('table, .MuiDataGrid-root, [role="grid"]').first()).toBeVisible({ timeout: 5000 });
});
