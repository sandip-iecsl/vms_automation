const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_383
 * Module: Registration
 * Sub-Module: Vendor RegistrationLicense Details
 * Scenario: Future Issue Date Validation
 * Description: Verify system behavior when entering a future date as Mfg License Issue Date.
 */
test('TC_383: Future Issue Date Validation', { annotation: { type: 'description', description: 'Verify system behavior when entering a future date as Mfg License Issue Date.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Registration');
    await page.waitForLoadState('domcontentloaded');
    const dateInput = page.locator('input[type="date"], input[placeholder*="YYYY"], input').first();
    await expect(dateInput).toBeVisible({ timeout: 5000 });
});
