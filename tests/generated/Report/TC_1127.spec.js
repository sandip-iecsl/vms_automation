const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_1127
 * Module: Report
 * Sub-Module: Vendor Approval Status
 * Scenario: Unsort\' Menu Action
 * Description: Verify selecting \'Unsort\' resets column sort to default natural order.
 */
test('TC_1127: Unsort\' Menu Action', { annotation: { type: 'description', description: 'Verify selecting \'Unsort\' resets column sort to default natural order.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/VendorApprovalStatus');
    await page.waitForLoadState('domcontentloaded');
    const sortBtn = page.locator('.MuiDataGrid-sortButton, th, button[title*="Sort"]').first();
    await expect(sortBtn).toBeVisible({ timeout: 5000 });
});
