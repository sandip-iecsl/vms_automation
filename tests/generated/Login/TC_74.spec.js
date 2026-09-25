const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_74
 * Module: Login
 * Sub-Module: Change/Reset Password
 * Scenario: Show Password functionality
 * Description: Verify visibility toggle functionality
 */
test('TC_74: Show Password functionality', { annotation: { type: 'description', description: 'Verify visibility toggle functionality' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
});
