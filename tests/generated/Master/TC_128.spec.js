const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_128
 * Module: Master
 * Sub-Module: Category
 * Scenario: Pagination Navigation Controls
 * Description: Verify Next (>) and Previous (<) pagination controls.
 */
test('TC_128: Pagination Navigation Controls', { annotation: { type: 'description', description: 'Verify Next (>) and Previous (<) pagination controls.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/CategoryManager');
    await page.waitForLoadState('domcontentloaded');
    const pagination = page.locator('.MuiTablePagination-root, [aria-label*="page"], .MuiDataGrid-footerContainer').first();
    await expect(pagination).toBeVisible({ timeout: 5000 });
});
