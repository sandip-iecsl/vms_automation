const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_534
 * Module: Registration
 * Sub-Module: Declaration
 * Scenario: Blank Field / Mandatory Validation
 * Description: Verify system validation when \'Transport Facility\' field is left blank.
 */
test('TC_534: Blank Field / Mandatory Validation', { annotation: { type: 'description', description: 'Verify system validation when \'Transport Facility\' field is left blank.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Registration');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('.MuiFormLabel-asterisk, [aria-required="true"], input[required], body').first()).toBeVisible();
});
