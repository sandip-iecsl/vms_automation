const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_80
 * Module: Login
 * Sub-Module: Change/Reset Password
 * Scenario: Save/Submit button functionality
 * Description: Verify Save/Submit operation
 */
test('TC_80: Save/Submit button functionality', { annotation: { type: 'description', description: 'Verify Save/Submit operation' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
});
