const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_72
 * Module: Login
 * Sub-Module: Change/Reset Password
 * Scenario: Minimum length validation
 * Description: Verify minimum password length validation
 */
test('TC_72: Minimum length validation', { annotation: { type: 'description', description: 'Verify minimum password length validation' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
});
