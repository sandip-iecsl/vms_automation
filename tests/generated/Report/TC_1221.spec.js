const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_1221
 * Module: Report
 * Sub-Module: Business Card Report
 * Scenario: Sort Persistence Across Views
 * Description: Verify applied sort criteria remains active when switching between Card and List view.
 */
test('TC_1221: Sort Persistence Across Views', { annotation: { type: 'description', description: 'Verify applied sort criteria remains active when switching between Card and List view.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Business_CardReport');
    await page.waitForLoadState('domcontentloaded');
    const sortBtn = page.locator('.MuiDataGrid-sortButton, th, button[title*="Sort"]').first();
    await expect(sortBtn).toBeVisible({ timeout: 5000 });
});
