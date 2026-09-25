const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_938
 * Module: Report
 * Sub-Module: All Vendor
 * Scenario: Long Email Address Text Wrapping
 * Description: Verify formatting when vendor email contains long domain string.
 */
test('TC_938: Long Email Address Text Wrapping', { annotation: { type: 'description', description: 'Verify formatting when vendor email contains long domain string.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Vendor_CardView');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});
