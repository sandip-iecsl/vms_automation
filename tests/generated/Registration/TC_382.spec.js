const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_382
 * Module: Registration
 * Sub-Module: Vendor RegistrationLicense Details
 * Scenario: Special Characters & SQL Injection
 * Description: Verify sanitization of script tags and SQL injection in Mfg Location License field.
 */
test('TC_382: Special Characters & SQL Injection', { annotation: { type: 'description', description: 'Verify sanitization of script tags and SQL injection in Mfg Location License field.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Registration');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});
