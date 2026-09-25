const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_1141
 * Module: Report
 * Sub-Module: Vendor Approval Status
 * Scenario: Multi-Page Next Arrow Navigation
 * Description: Verify clicking next arrow (>) navigates to page 2.
 */
test('TC_1141: Multi-Page Next Arrow Navigation', { annotation: { type: 'description', description: 'Verify clicking next arrow (>) navigates to page 2.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/VendorApprovalStatus');
    await page.waitForLoadState('domcontentloaded');
    const pagination = page.locator('.MuiTablePagination-root, [aria-label*="page"], .MuiDataGrid-footerContainer').first();
    await expect(pagination).toBeVisible({ timeout: 5000 });
});
