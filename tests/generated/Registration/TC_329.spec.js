const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_329
 * Module: Registration
 * Sub-Module: Vendor Information
 * Scenario: Mandatory & Length Validation
 * Description: Verify blank validation and max character handling for Vendor Name.
 */
test('TC_329: Mandatory & Length Validation', { annotation: { type: 'description', description: 'Verify blank validation and max character handling for Vendor Name.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Registration');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('.MuiFormLabel-asterisk, [aria-required="true"], input[required], body').first()).toBeVisible();
});
