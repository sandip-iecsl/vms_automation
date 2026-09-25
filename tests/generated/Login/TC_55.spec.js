const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_55
 * Module: Login
 * Sub-Module: Security
 * Scenario: Direct access to dashboard without login
 * Description: Verify unauthorized dashboard access restriction
 */
test('TC_55: Direct access to dashboard without login', { annotation: { type: 'description', description: 'Verify unauthorized dashboard access restriction' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
});
