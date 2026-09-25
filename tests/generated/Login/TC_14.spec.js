const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_14
 * Module: Login
 * Sub-Module: User name
 * Scenario: Empty Username Validation
 * Description: Verify validation when User name field is left completely empty.
 */
test('TC_14: Empty Username Validation', { annotation: { type: 'description', description: 'Verify validation when User name field is left completely empty.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await page.locator('input[name="password"]').fill('@123456');
    await page.getByRole('button', { name: /login/i }).click();
    await expect(page.locator('input[name="username"]')).toHaveAttribute('required', '');
});
