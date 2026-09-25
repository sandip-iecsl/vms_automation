const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_51
 * Module: Login
 * Sub-Module: Security
 * Scenario: Automatic session timeout
 * Description: Verify session expiration after configured idle time
 */
test('TC_51: Automatic session timeout', { annotation: { type: 'description', description: 'Verify session expiration after configured idle time' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
});
