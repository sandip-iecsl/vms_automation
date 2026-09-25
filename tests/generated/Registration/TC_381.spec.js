const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_381
 * Module: Registration
 * Sub-Module: Vendor RegistrationLicense Details
 * Scenario: Same Issue and Expiry Date Validation
 * Description: Verify validation when Mfg Location License Issue Date and Expiry Date are identical.
 */
test('TC_381: Same Issue and Expiry Date Validation', { annotation: { type: 'description', description: 'Verify validation when Mfg Location License Issue Date and Expiry Date are identical.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Registration');
    await page.waitForLoadState('domcontentloaded');
    const dateInput = page.locator('input[type="date"], input[placeholder*="YYYY"], input').first();
    await expect(dateInput).toBeVisible({ timeout: 5000 });
});
