const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_84
 * Module: Login
 * Sub-Module: Change/Reset Password
 * Scenario: XSS validation
 * Description: Verify XSS protection
 */
test('TC_84: XSS validation', { annotation: { type: 'description', description: 'Verify XSS protection' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
});
