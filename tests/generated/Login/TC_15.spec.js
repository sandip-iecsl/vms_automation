const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_15
 * Module: Login
 * Sub-Module: User name
 * Scenario: Invalid Email / Username Format
 * Description: Verify system behavior when invalid format username is entered.
 */
test('TC_15: Invalid Email / Username Format', { annotation: { type: 'description', description: 'Verify system behavior when invalid format username is entered.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('invaliduser@@mail', '@123456');
    await expect(page.locator('input[name="username"]')).toBeVisible();
});
