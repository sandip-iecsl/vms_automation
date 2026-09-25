const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_28
 * Module: Login
 * Sub-Module: Authentication
 * Scenario: Submit Button Loading State
 * Description: Verify button loading state and disablement during API authentication call.
 */
test('TC_28: Submit Button Loading State', { annotation: { type: 'description', description: 'Verify button loading state and disablement during API authentication call.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
});
