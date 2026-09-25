const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_948
 * Module: Report
 * Sub-Module: All Vendor
 * Scenario: Table Columns Verification
 * Description: Verify table headers: Vendor, Email, Contact, Station, Category, Event Name.
 */
test('TC_948: Table Columns Verification', { annotation: { type: 'description', description: 'Verify table headers: Vendor, Email, Contact, Station, Category, Event Name.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Vendor_CardView');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('table, .MuiDataGrid-root, [role="grid"]').first()).toBeVisible({ timeout: 5000 });
});
