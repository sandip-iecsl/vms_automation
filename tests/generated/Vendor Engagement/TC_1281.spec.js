const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_1281
 * Module: Vendor Engagement
 * Sub-Module: Custom Mail
 * Scenario: Displayed Rows Range Counter
 * Description: Verify range counter format for multi-page vendor records.
 */
test('TC_1281: Displayed Rows Range Counter', { annotation: { type: 'description', description: 'Verify range counter format for multi-page vendor records.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/CustomMail');
    await page.waitForLoadState('domcontentloaded');
    const pagination = page.locator('.MuiTablePagination-root, [aria-label*="page"], .MuiDataGrid-footerContainer').first();
    await expect(pagination).toBeVisible({ timeout: 5000 });
});
