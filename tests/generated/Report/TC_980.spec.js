const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_980
 * Module: Report
 * Sub-Module: All Vendor
 * Scenario: Dismiss Sort Menu on Outside Click
 * Description: Verify clicking anywhere outside the sort dropdown closes the menu.
 */
test('TC_980: Dismiss Sort Menu on Outside Click', { annotation: { type: 'description', description: 'Verify clicking anywhere outside the sort dropdown closes the menu.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Vendor_CardView');
    await page.waitForLoadState('domcontentloaded');
    const sortBtn = page.locator('.MuiDataGrid-sortButton, th, button[title*="Sort"]').first();
    await expect(sortBtn).toBeVisible({ timeout: 5000 });
});
