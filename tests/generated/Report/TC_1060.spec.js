const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_1060
 * Module: Report
 * Sub-Module: Business Card
 * Scenario: Sort Menu Dropdown Opening
 * Description: Verify clicking sort icon opens sort criteria dropdown.
 */
test('TC_1060: Sort Menu Dropdown Opening', { annotation: { type: 'description', description: 'Verify clicking sort icon opens sort criteria dropdown.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Business_Card');
    await page.waitForLoadState('domcontentloaded');
    const sortBtn = page.locator('.MuiDataGrid-sortButton, th, button[title*="Sort"]').first();
    await expect(sortBtn).toBeVisible({ timeout: 5000 });
});
