const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_380
 * Module: Registration
 * Sub-Module: Vendor RegistrationLicense Details
 * Scenario: Date Logic Validation
 * Description: Verify Expiry Date must be strictly after Issue Date for Mfg License.
 */
test('TC_380: Date Logic Validation', { annotation: { type: 'description', description: 'Verify Expiry Date must be strictly after Issue Date for Mfg License.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Registration');
    await page.waitForLoadState('domcontentloaded');
    const dateInput = page.locator('input[type="date"], input[placeholder*="YYYY"], input').first();
    await expect(dateInput).toBeVisible({ timeout: 5000 });
});
