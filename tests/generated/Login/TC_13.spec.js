const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_13
 * Module: Login
 * Sub-Module: User name
 * Scenario: Mandatory Asterisk Indicator
 * Description: Verify mandatory asterisk sign * is present on User name label.
 */
test('TC_13: Mandatory Asterisk Indicator', { annotation: { type: 'description', description: 'Verify mandatory asterisk sign * is present on User name label.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    const asterisk = page.locator('.MuiFormLabel-asterisk, .MuiInputLabel-asterisk').first();
    await expect(asterisk).toBeVisible();
});
