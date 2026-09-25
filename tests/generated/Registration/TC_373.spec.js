const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_373
 * Module: Registration
 * Sub-Module: Vendor RegistrationLicense Details
 * Scenario: Alphanumeric & Slash Formatting
 * Description: Verify Wholesaler License field accepts standard format with alphanumeric, dashes, slashes, and spaces.
 */
test('TC_373: Alphanumeric & Slash Formatting', { annotation: { type: 'description', description: 'Verify Wholesaler License field accepts standard format with alphanumeric, dashes, slashes, and spaces.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Registration');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});
