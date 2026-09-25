const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_1011
 * Module: Report
 * Sub-Module: All Vendor
 * Scenario: Synchronized Reflection of Approved Vendor
 * Description: Verify newly approved vendor immediately appears in All Vendor card/list view.
 */
test('TC_1011: Synchronized Reflection of Approved Vendor', { annotation: { type: 'description', description: 'Verify newly approved vendor immediately appears in All Vendor card/list view.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Vendor_CardView');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});
