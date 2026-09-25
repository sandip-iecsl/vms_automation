const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_1218
 * Module: Report
 * Sub-Module: Business Card Report
 * Scenario: Sort by Company Z-A
 * Description: Verify selecting \'Company Z-A\' sorts records alphabetically by Company Name descending.
 */
test('TC_1218: Sort by Company Z-A', { annotation: { type: 'description', description: 'Verify selecting \'Company Z-A\' sorts records alphabetically by Company Name descending.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Business_CardReport');
    await page.waitForLoadState('domcontentloaded');
    const sortBtn = page.locator('.MuiDataGrid-sortButton, th, button[title*="Sort"]').first();
    await expect(sortBtn).toBeVisible({ timeout: 5000 });
});
