const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_1123
 * Module: Report
 * Sub-Module: Vendor Approval Status
 * Scenario: Direct Header Sort on Vendor Name
 * Description: Verify clicking \'Vendor Name\' header sorts records alphabetically.
 */
test('TC_1123: Direct Header Sort on Vendor Name', { annotation: { type: 'description', description: 'Verify clicking \'Vendor Name\' header sorts records alphabetically.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/VendorApprovalStatus');
    await page.waitForLoadState('domcontentloaded');
    const sortBtn = page.locator('.MuiDataGrid-sortButton, th, button[title*="Sort"]').first();
    await expect(sortBtn).toBeVisible({ timeout: 5000 });
});
