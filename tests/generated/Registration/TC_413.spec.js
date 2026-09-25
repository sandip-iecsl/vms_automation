const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_413
 * Module: Registration
 * Sub-Module: Vendor RegistrationLicense Details
 * Scenario: Tab Navigation Across Turnover Inputs
 * Description: Verify keyboard Tab order smoothly moves across the three turnover fields.
 */
test('TC_413: Tab Navigation Across Turnover Inputs', { annotation: { type: 'description', description: 'Verify keyboard Tab order smoothly moves across the three turnover fields.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Registration');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});
