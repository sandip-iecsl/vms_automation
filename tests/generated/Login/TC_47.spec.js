const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_47
 * Module: Login
 * Sub-Module: Logout
 * Scenario: Successful logout
 * Description: Verify logout functionality
 */
test('TC_47: Successful logout', { annotation: { type: 'description', description: 'Verify logout functionality' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
});
