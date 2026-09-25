const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_48
 * Module: Login
 * Sub-Module: Logout
 * Scenario: Access application after logout using browser back button
 * Description: Verify restricted access after logout
 */
test('TC_48: Access application after logout using browser back button', { annotation: { type: 'description', description: 'Verify restricted access after logout' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
});
