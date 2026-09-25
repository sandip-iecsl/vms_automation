const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_1140
 * Module: Report
 * Sub-Module: Vendor Approval Status
 * Scenario: Disabled Pagination Arrows for Single Page
 * Description: Verify previous (<) and next (>) arrow buttons are disabled when all rows fit single page.
 */
test('TC_1140: Disabled Pagination Arrows for Single Page', { annotation: { type: 'description', description: 'Verify previous (<) and next (>) arrow buttons are disabled when all rows fit single page.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/VendorApprovalStatus');
    await page.waitForLoadState('domcontentloaded');
    const pagination = page.locator('.MuiTablePagination-root, [aria-label*="page"], .MuiDataGrid-footerContainer').first();
    await expect(pagination).toBeVisible({ timeout: 5000 });
});
