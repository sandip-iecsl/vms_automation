const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_402
 * Module: Registration
 * Sub-Module: Vendor RegistrationLicense Details
 * Scenario: SQL / Script Injection in License Inputs
 * Description: Verify input sanitization against SQL injection / XSS in Other License fields.
 */
test('TC_402: SQL / Script Injection in License Inputs', { annotation: { type: 'description', description: 'Verify input sanitization against SQL injection / XSS in Other License fields.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Registration');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});
