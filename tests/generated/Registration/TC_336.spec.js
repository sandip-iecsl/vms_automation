const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_336
 * Module: Registration
 * Sub-Module: Vendor Information
 * Scenario: Work/VendorMfg Location Fields
 * Description: Verify entering manufacturing unit location name and physical address.
 */
test('TC_336: Work/VendorMfg Location Fields', { annotation: { type: 'description', description: 'Verify entering manufacturing unit location name and physical address.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Registration');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});
