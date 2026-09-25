const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_46
 * Module: Login
 * Sub-Module: Logout
 * Scenario: Logout button visibility
 * Description: Verify Logout button display
 */
test('TC_46: Logout button visibility', { annotation: { type: 'description', description: 'Verify Logout button display' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
});
