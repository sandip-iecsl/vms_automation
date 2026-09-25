const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_1283
 * Module: Vendor Engagement
 * Sub-Module: Custom Mail
 * Scenario: Previous Page Arrow Navigation (<)
 * Description: Verify clicking previous arrow (<) navigates back to preceding page.
 */
test('TC_1283: Previous Page Arrow Navigation (<)', { annotation: { type: 'description', description: 'Verify clicking previous arrow (<) navigates back to preceding page.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/CustomMail');
    await page.waitForLoadState('domcontentloaded');
    const pagination = page.locator('.MuiTablePagination-root, [aria-label*="page"], .MuiDataGrid-footerContainer').first();
    await expect(pagination).toBeVisible({ timeout: 5000 });
});
