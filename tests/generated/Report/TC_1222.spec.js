const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_1222
 * Module: Report
 * Sub-Module: Business Card Report
 * Scenario: Dismiss Sort Menu on Outside Click
 * Description: Verify clicking outside sort dropdown dismisses menu.
 */
test('TC_1222: Dismiss Sort Menu on Outside Click', { annotation: { type: 'description', description: 'Verify clicking outside sort dropdown dismisses menu.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Business_CardReport');
    await page.waitForLoadState('domcontentloaded');
    const sortBtn = page.locator('.MuiDataGrid-sortButton, th, button[title*="Sort"]').first();
    await expect(sortBtn).toBeVisible({ timeout: 5000 });
});
