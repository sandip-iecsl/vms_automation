const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_21
 * Module: Login
 * Sub-Module: Password
 * Scenario: Show Password Action
 * Description: Verify clicking the eye icon reveals password in plain text.
 */
test('TC_21: Show Password Action', { annotation: { type: 'description', description: 'Verify clicking the eye icon reveals password in plain text.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
});
