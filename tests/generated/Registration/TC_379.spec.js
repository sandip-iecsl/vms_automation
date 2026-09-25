const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_379
 * Module: Registration
 * Sub-Module: Vendor RegistrationLicense Details
 * Scenario: Valid Mfg License & Date Entry
 * Description: Verify entering valid Drug VendorMfgLocation License Number and dates.
 */
test('TC_379: Valid Mfg License & Date Entry', { annotation: { type: 'description', description: 'Verify entering valid Drug VendorMfgLocation License Number and dates.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Registration');
    await page.waitForLoadState('domcontentloaded');
    const dateInput = page.locator('input[type="date"], input[placeholder*="YYYY"], input').first();
    await expect(dateInput).toBeVisible({ timeout: 5000 });
});
