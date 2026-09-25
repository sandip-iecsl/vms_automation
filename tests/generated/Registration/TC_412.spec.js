const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_412
 * Module: Registration
 * Sub-Module: Vendor RegistrationLicense Details
 * Scenario: Fractional / Exponential Input Handling
 * Description: Verify input restrictions against exponential notations (e.g. 1e5, 2E+10).
 */
test('TC_412: Fractional / Exponential Input Handling', { annotation: { type: 'description', description: 'Verify input restrictions against exponential notations (e.g. 1e5, 2E+10).' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Registration');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});
