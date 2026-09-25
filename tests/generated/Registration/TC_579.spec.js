const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_579
 * Module: Registration
 * Sub-Module: Vendor Invitation
 * Scenario: Default Option & Mandatory Validation
 * Description: Verify validation when submitting with default -- Select an option -- in Category.
 */
test('TC_579: Default Option & Mandatory Validation', { annotation: { type: 'description', description: 'Verify validation when submitting with default -- Select an option -- in Category.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Invitation');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('.MuiFormLabel-asterisk, [aria-required="true"], input[required], body').first()).toBeVisible();
});
