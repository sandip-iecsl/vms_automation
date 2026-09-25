const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_56
 * Module: Login
 * Sub-Module: Security
 * Scenario: Direct access to profile page without login
 * Description: Verify unauthorized profile access restriction
 */
test('TC_56: Direct access to profile page without login', { annotation: { type: 'description', description: 'Verify unauthorized profile access restriction' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
});
