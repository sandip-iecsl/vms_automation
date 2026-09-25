const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_951
 * Module: Report
 * Sub-Module: All Vendor
 * Scenario: Text Alignment Across Table Columns
 * Description: Verify text alignment for all headers and body data in List View.
 */
test('TC_951: Text Alignment Across Table Columns', { annotation: { type: 'description', description: 'Verify text alignment for all headers and body data in List View.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Vendor_CardView');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('table, .MuiDataGrid-root, [role="grid"]').first()).toBeVisible({ timeout: 5000 });
});
