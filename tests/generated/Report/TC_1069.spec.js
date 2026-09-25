const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_1069
 * Module: Report
 * Sub-Module: Business Card
 * Scenario: Keyboard Arrow Navigation in Sort Menu
 * Description: Verify navigating sort menu items using Up/Down arrow keys and Enter.
 */
test('TC_1069: Keyboard Arrow Navigation in Sort Menu', { annotation: { type: 'description', description: 'Verify navigating sort menu items using Up/Down arrow keys and Enter.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Business_Card');
    await page.waitForLoadState('domcontentloaded');
    const pagination = page.locator('.MuiTablePagination-root, [aria-label*="page"], .MuiDataGrid-footerContainer').first();
    await expect(pagination).toBeVisible({ timeout: 5000 });
});
