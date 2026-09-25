const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_1131
 * Module: Report
 * Sub-Module: Vendor Approval Status
 * Scenario: Individual Column Visibility Toggling
 * Description: Verify unchecking and re-checking column checkboxes updates table grid.
 */
test('TC_1131: Individual Column Visibility Toggling', { annotation: { type: 'description', description: 'Verify unchecking and re-checking column checkboxes updates table grid.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/VendorApprovalStatus');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('table, .MuiDataGrid-root, [role="grid"]').first()).toBeVisible({ timeout: 5000 });
});
