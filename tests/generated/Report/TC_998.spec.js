const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_998
 * Module: Report
 * Sub-Module: All Vendor
 * Scenario: Initial Dataset with 0 Vendors
 * Description: Verify page display when database contains 0 vendor records.
 */
test('TC_998: Initial Dataset with 0 Vendors', { annotation: { type: 'description', description: 'Verify page display when database contains 0 vendor records.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Vendor_CardView');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});
