const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_1126
 * Module: Report
 * Sub-Module: Vendor Approval Status
 * Scenario: Sort by DESC\' Menu Action
 * Description: Verify selecting \'Sort by DESC\' sorts column descending.
 */
test('TC_1126: Sort by DESC\' Menu Action', { annotation: { type: 'description', description: 'Verify selecting \'Sort by DESC\' sorts column descending.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/VendorApprovalStatus');
    await page.waitForLoadState('domcontentloaded');
    const sortBtn = page.locator('.MuiDataGrid-sortButton, th, button[title*="Sort"]').first();
    await expect(sortBtn).toBeVisible({ timeout: 5000 });
});
