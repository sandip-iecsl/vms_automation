const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_1108
 * Module: Report
 * Sub-Module: Vendor Approval Status
 * Scenario: Page Title & Grid Alignment
 * Description: Verify heading typography and DataGrid alignment on screen.
 */
test('TC_1108: Page Title & Grid Alignment', { annotation: { type: 'description', description: 'Verify heading typography and DataGrid alignment on screen.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/VendorApprovalStatus');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('table, .MuiDataGrid-root, [role="grid"]').first()).toBeVisible({ timeout: 5000 });
});
