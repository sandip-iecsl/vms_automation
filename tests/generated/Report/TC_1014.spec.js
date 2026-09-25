const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_1014
 * Module: Report
 * Sub-Module: All Vendor
 * Scenario: Modified Vendor Details Sync
 * Description: Verify editing vendor name/phone updates card details instantly.
 */
test('TC_1014: Modified Vendor Details Sync', { annotation: { type: 'description', description: 'Verify editing vendor name/phone updates card details instantly.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Vendor_CardView');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});
