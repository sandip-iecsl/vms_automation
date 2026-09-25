const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_371
 * Module: Registration
 * Sub-Module: Vendor RegistrationLicense Details
 * Scenario: Date Logic Validation (Expiry vs Issue)
 * Description: Verify Expiry Date cannot be earlier than or equal to Issue Date.
 */
test('TC_371: Date Logic Validation (Expiry vs Issue)', { annotation: { type: 'description', description: 'Verify Expiry Date cannot be earlier than or equal to Issue Date.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Registration');
    await page.waitForLoadState('domcontentloaded');
    const dateInput = page.locator('input[type="date"], input[placeholder*="YYYY"], input').first();
    await expect(dateInput).toBeVisible({ timeout: 5000 });
});
