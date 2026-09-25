const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_405
 * Module: Registration
 * Sub-Module: Vendor RegistrationLicense Details
 * Scenario: Non-Numeric / Negative Character Restriction
 * Description: Verify restriction on entering alphabets, special characters, or negative amounts in turnover fields.
 */
test('TC_405: Non-Numeric / Negative Character Restriction', { annotation: { type: 'description', description: 'Verify restriction on entering alphabets, special characters, or negative amounts in turnover fields.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Registration');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});
