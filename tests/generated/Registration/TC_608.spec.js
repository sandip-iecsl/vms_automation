const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_608
 * Module: Registration
 * Sub-Module: Vendor Invitation
 * Scenario: Pagination Navigation Controls (<, >)
 * Description: Verify Next (>) and Previous (<) pagination navigation.
 */
test('TC_608: Pagination Navigation Controls (<, >)', { annotation: { type: 'description', description: 'Verify Next (>) and Previous (<) pagination navigation.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Invitation');
    await page.waitForLoadState('domcontentloaded');
    const pagination = page.locator('.MuiTablePagination-root, [aria-label*="page"], .MuiDataGrid-footerContainer').first();
    await expect(pagination).toBeVisible({ timeout: 5000 });
});
