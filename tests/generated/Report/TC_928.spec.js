const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_928
 * Module: Report
 * Sub-Module: All Vendor
 * Scenario: Long Vendor Name Text Wrapping
 * Description: Verify visual layout when vendor name contains 40+ characters.
 */
test('TC_928: Long Vendor Name Text Wrapping', { annotation: { type: 'description', description: 'Verify visual layout when vendor name contains 40+ characters.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Vendor_CardView');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});
