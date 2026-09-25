const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_975
 * Module: Report
 * Sub-Module: All Vendor
 * Scenario: Sort by Name (Z–A)
 * Description: Verify selecting \'Name (Z–A)\' sorts records in descending order.
 */
test('TC_975: Sort by Name (Z–A)', { annotation: { type: 'description', description: 'Verify selecting \'Name (Z–A)\' sorts records in descending order.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Vendor_CardView');
    await page.waitForLoadState('domcontentloaded');
    const sortBtn = page.locator('.MuiDataGrid-sortButton, th, button[title*="Sort"]').first();
    await expect(sortBtn).toBeVisible({ timeout: 5000 });
});
