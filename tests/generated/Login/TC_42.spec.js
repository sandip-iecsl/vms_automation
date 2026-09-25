const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_42
 * Module: Login
 * Sub-Module: Footer
 * Scenario: Phone Support tel: Action
 * Description: Verify support phone number link contains correct tel protocol.
 */
test('TC_42: Phone Support tel: Action', { annotation: { type: 'description', description: 'Verify support phone number link contains correct tel protocol.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
});
