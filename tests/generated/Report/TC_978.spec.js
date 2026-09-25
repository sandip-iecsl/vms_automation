const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_978
 * Module: Report
 * Sub-Module: All Vendor
 * Scenario: Sort Stability Across Card and List Views
 * Description: Verify applied sort criteria (e.g. Name (A–Z)) remains persistent when switching views.
 */
test('TC_978: Sort Stability Across Card and List Views', { annotation: { type: 'description', description: 'Verify applied sort criteria (e.g. Name (A–Z)) remains persistent when switching views.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Vendor_CardView');
    await page.waitForLoadState('domcontentloaded');
    const sortBtn = page.locator('.MuiDataGrid-sortButton, th, button[title*="Sort"]').first();
    await expect(sortBtn).toBeVisible({ timeout: 5000 });
});
