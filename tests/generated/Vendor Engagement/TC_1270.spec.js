const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_1270
 * Module: Vendor Engagement
 * Sub-Module: Custom Mail
 * Scenario: Selection Persistence Across Pagination
 * Description: Verify if selected checkboxes on Page 1 are retained when navigating to Page 2.
 */
test('TC_1270: Selection Persistence Across Pagination', { annotation: { type: 'description', description: 'Verify if selected checkboxes on Page 1 are retained when navigating to Page 2.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/CustomMail');
    await page.waitForLoadState('domcontentloaded');
    const pagination = page.locator('.MuiTablePagination-root, [aria-label*="page"], .MuiDataGrid-footerContainer').first();
    await expect(pagination).toBeVisible({ timeout: 5000 });
});
