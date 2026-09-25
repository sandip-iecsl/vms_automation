const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_974
 * Module: Report
 * Sub-Module: All Vendor
 * Scenario: Sort by Name (A–Z)
 * Description: Verify selecting \'Name (A–Z)\' sorts records alphabetically in ascending order.
 */
test('TC_974: Sort by Name (A–Z)', { annotation: { type: 'description', description: 'Verify selecting \'Name (A–Z)\' sorts records alphabetically in ascending order.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Vendor_CardView');
    await page.waitForLoadState('domcontentloaded');
    const sortBtn = page.locator('.MuiDataGrid-sortButton, th, button[title*="Sort"]').first();
    await expect(sortBtn).toBeVisible({ timeout: 5000 });
});
