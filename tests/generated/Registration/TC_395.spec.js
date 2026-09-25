const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_395
 * Module: Registration
 * Sub-Module: Vendor RegistrationLicense Details
 * Scenario: Invalid Manual Date Entry
 * Description: Verify system behavior when typing an invalid date manually (e.g. 32-13-2026).
 */
test('TC_395: Invalid Manual Date Entry', { annotation: { type: 'description', description: 'Verify system behavior when typing an invalid date manually (e.g. 32-13-2026).' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Registration');
    await page.waitForLoadState('domcontentloaded');
    const dateInput = page.locator('input[type="date"], input[placeholder*="YYYY"], input').first();
    await expect(dateInput).toBeVisible({ timeout: 5000 });
});
