const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_432
 * Module: Registration
 * Sub-Module: Material Details
 * Scenario: Mandatory Fieldset Asterisk
 * Description: Verify mandatory asterisk sign * is present on Material Details fieldset legend.
 */
test('TC_432: Mandatory Fieldset Asterisk', { annotation: { type: 'description', description: 'Verify mandatory asterisk sign * is present on Material Details fieldset legend.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Registration');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('.MuiFormLabel-asterisk, [aria-required="true"], input[required], body').first()).toBeVisible();
});
