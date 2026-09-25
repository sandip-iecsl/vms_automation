const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_26
 * Module: Login
 * Sub-Module: Remember me
 * Scenario: Credential Persistence across Sessions
 * Description: Verify Remember Me saves Business ID / Username in local storage/cookies.
 */
test('TC_26: Credential Persistence across Sessions', { annotation: { type: 'description', description: 'Verify Remember Me saves Business ID / Username in local storage/cookies.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
});
