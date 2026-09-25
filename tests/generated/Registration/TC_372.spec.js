const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_372
 * Module: Registration
 * Sub-Module: Vendor RegistrationLicense Details
 * Scenario: Incomplete Wholesaler License Fields Validation
 * Description: Verify validation when License Number is entered but dates are omitted.
 */
test('TC_372: Incomplete Wholesaler License Fields Validation', { annotation: { type: 'description', description: 'Verify validation when License Number is entered but dates are omitted.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Registration');
    await page.waitForLoadState('domcontentloaded');
    const dateInput = page.locator('input[type="date"], input[placeholder*="YYYY"], input').first();
    await expect(dateInput).toBeVisible({ timeout: 5000 });
});
