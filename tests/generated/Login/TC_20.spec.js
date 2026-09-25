const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_20
 * Module: Login
 * Sub-Module: Password
 * Scenario: Default Character Masking
 * Description: Verify characters entered into password input are masked.
 */
test('TC_20: Default Character Masking', { annotation: { type: 'description', description: 'Verify characters entered into password input are masked.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await expect(page.locator('input[name="password"]')).toHaveAttribute('type', 'password');
});
