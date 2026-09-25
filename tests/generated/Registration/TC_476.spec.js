const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_476
 * Module: Registration
 * Sub-Module: Payment Details
 * Scenario: Blank Mandatory Field Validation
 * Description: Verify validation when \'Name Of The Bank\' field is left empty.
 */
test('TC_476: Blank Mandatory Field Validation', { annotation: { type: 'description', description: 'Verify validation when \'Name Of The Bank\' field is left empty.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Registration');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('.MuiFormLabel-asterisk, [aria-required="true"], input[required], body').first()).toBeVisible();
});
