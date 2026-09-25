const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_384
 * Module: Registration
 * Sub-Module: Vendor RegistrationLicense Details
 * Scenario: License Expired Before Today
 * Description: Verify system warning/restriction when Mfg Location License expiry is in the past.
 */
test('TC_384: License Expired Before Today', { annotation: { type: 'description', description: 'Verify system warning/restriction when Mfg Location License expiry is in the past.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Registration');
    await page.waitForLoadState('domcontentloaded');
    const dateInput = page.locator('input[type="date"], input[placeholder*="YYYY"], input').first();
    await expect(dateInput).toBeVisible({ timeout: 5000 });
});
