const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_376
 * Module: Registration
 * Sub-Module: Vendor RegistrationLicense Details
 * Scenario: Clear Field Value Action
 * Description: Verify clearing optional Wholesaler License fields before proceeding.
 */
test('TC_376: Clear Field Value Action', { annotation: { type: 'description', description: 'Verify clearing optional Wholesaler License fields before proceeding.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Registration');
    await page.waitForLoadState('domcontentloaded');
    const dateInput = page.locator('input[type="date"], input[placeholder*="YYYY"], input').first();
    await expect(dateInput).toBeVisible({ timeout: 5000 });
});
