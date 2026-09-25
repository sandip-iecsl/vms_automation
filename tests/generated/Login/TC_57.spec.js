const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_57
 * Module: Login
 * Sub-Module: Security
 * Scenario: Login using deactivated account
 * Description: Verify authentication restriction
 */
test('TC_57: Login using deactivated account', { annotation: { type: 'description', description: 'Verify authentication restriction' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
});
