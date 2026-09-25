const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_79
 * Module: Login
 * Sub-Module: Change/Reset Password
 * Scenario: Save/Submit button visibility
 * Description: Verify Save/Submit button display
 */
test('TC_79: Save/Submit button visibility', { annotation: { type: 'description', description: 'Verify Save/Submit button display' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
});
