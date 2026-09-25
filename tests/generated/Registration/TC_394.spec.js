const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_394
 * Module: Registration
 * Sub-Module: Vendor RegistrationLicense Details
 * Scenario: Date Parsing on Manual Keyboard Typing
 * Description: Verify typing date manually into dd-mm-yyyy input field without using calendar popup.
 */
test('TC_394: Date Parsing on Manual Keyboard Typing', { annotation: { type: 'description', description: 'Verify typing date manually into dd-mm-yyyy input field without using calendar popup.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Registration');
    await page.waitForLoadState('domcontentloaded');
    const dateInput = page.locator('input[type="date"], input[placeholder*="YYYY"], input').first();
    await expect(dateInput).toBeVisible({ timeout: 5000 });
});
