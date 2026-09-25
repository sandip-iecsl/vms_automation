const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_18
 * Module: Login
 * Sub-Module: Password
 * Scenario: Mandatory Asterisk Indicator
 * Description: Verify mandatory asterisk sign * is present on User password label.
 */
test('TC_18: Mandatory Asterisk Indicator', { annotation: { type: 'description', description: 'Verify mandatory asterisk sign * is present on User password label.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    const asterisk = page.locator('.MuiFormLabel-asterisk, .MuiInputLabel-asterisk').first();
    await expect(asterisk).toBeVisible();
});
