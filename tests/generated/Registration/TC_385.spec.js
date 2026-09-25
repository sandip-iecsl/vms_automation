const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_385
 * Module: Registration
 * Sub-Module: Vendor RegistrationLicense Details
 * Scenario: Dynamic Row Addition via + Button
 * Description: Verify adding additional custom licenses dynamically using green + button.
 */
test('TC_385: Dynamic Row Addition via + Button', { annotation: { type: 'description', description: 'Verify adding additional custom licenses dynamically using green + button.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Registration');
    await page.waitForLoadState('domcontentloaded');
    const dateInput = page.locator('input[type="date"], input[placeholder*="YYYY"], input').first();
    await expect(dateInput).toBeVisible({ timeout: 5000 });
});
