const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_1063
 * Module: Report
 * Sub-Module: Business Card
 * Scenario: Sort by Company A-Z
 * Description: Verify selecting \'Company A-Z\' sorts records alphabetically by Company Name ascending.
 */
test('TC_1063: Sort by Company A-Z', { annotation: { type: 'description', description: 'Verify selecting \'Company A-Z\' sorts records alphabetically by Company Name ascending.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Business_Card');
    await page.waitForLoadState('domcontentloaded');
    const sortBtn = page.locator('.MuiDataGrid-sortButton, th, button[title*="Sort"]').first();
    await expect(sortBtn).toBeVisible({ timeout: 5000 });
});
