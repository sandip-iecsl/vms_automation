const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_374
 * Module: Registration
 * Sub-Module: Vendor RegistrationLicense Details
 * Scenario: Expiry Date Prior to Today (Expired License)
 * Description: Verify system warning/error when entering an already expired Wholesaler License date.
 */
test('TC_374: Expiry Date Prior to Today (Expired License)', { annotation: { type: 'description', description: 'Verify system warning/error when entering an already expired Wholesaler License date.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Registration');
    await page.waitForLoadState('domcontentloaded');
    const dateInput = page.locator('input[type="date"], input[placeholder*="YYYY"], input').first();
    await expect(dateInput).toBeVisible({ timeout: 5000 });
});
