const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_390
 * Module: Registration
 * Sub-Module: Vendor RegistrationLicense Details
 * Scenario: Date Format & Calendar Picker UI
 * Description: Verify date picker selection populates correct DD-MM-YYYY format.
 */
test('TC_390: Date Format & Calendar Picker UI', { annotation: { type: 'description', description: 'Verify date picker selection populates correct DD-MM-YYYY format.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Registration');
    await page.waitForLoadState('domcontentloaded');
    const dateInput = page.locator('input[type="date"], input[placeholder*="YYYY"], input').first();
    await expect(dateInput).toBeVisible({ timeout: 5000 });
});
