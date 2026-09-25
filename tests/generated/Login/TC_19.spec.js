const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_19
 * Module: Login
 * Sub-Module: Password
 * Scenario: Empty Password Validation
 * Description: Verify validation when Password field is left empty.
 */
test('TC_19: Empty Password Validation', { annotation: { type: 'description', description: 'Verify validation when Password field is left empty.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await page.locator('input[name="username"]').fill('sandipan@mailinator.com');
    await page.getByRole('button', { name: /login/i }).click();
    await expect(page.locator('input[name="password"]')).toHaveAttribute('required', '');
});
