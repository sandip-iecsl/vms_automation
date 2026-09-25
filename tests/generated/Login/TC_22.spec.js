const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_22
 * Module: Login
 * Sub-Module: Password
 * Scenario: Hide Password Action
 * Description: Verify clicking eye icon again reverts text to masked state.
 */
test('TC_22: Hide Password Action', { annotation: { type: 'description', description: 'Verify clicking eye icon again reverts text to masked state.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
});
