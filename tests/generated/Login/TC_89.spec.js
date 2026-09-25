const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_89
 * Module: Login
 * Sub-Module: Change/Reset Password
 * Scenario: Cross-browser validation
 * Description: Verify compatibility across browsers
 */
test('TC_89: Cross-browser validation', { annotation: { type: 'description', description: 'Verify compatibility across browsers' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
});
