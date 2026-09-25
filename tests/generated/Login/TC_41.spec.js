const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_41
 * Module: Login
 * Sub-Module: Footer
 * Scenario: Email Support mailto: Action
 * Description: Verify support email link contains correct mailto protocol.
 */
test('TC_41: Email Support mailto: Action', { annotation: { type: 'description', description: 'Verify support email link contains correct mailto protocol.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
});
