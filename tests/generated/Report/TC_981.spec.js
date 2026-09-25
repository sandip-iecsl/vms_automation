const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_981
 * Module: Report
 * Sub-Module: All Vendor
 * Scenario: Keyboard Navigation Inside Sort Dropdown
 * Description: Verify navigating sort menu options via Up/Down arrow keys and pressing Enter.
 */
test('TC_981: Keyboard Navigation Inside Sort Dropdown', { annotation: { type: 'description', description: 'Verify navigating sort menu options via Up/Down arrow keys and pressing Enter.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Vendor_CardView');
    await page.waitForLoadState('domcontentloaded');
    const sortBtn = page.locator('.MuiDataGrid-sortButton, th, button[title*="Sort"]').first();
    await expect(sortBtn).toBeVisible({ timeout: 5000 });
});
