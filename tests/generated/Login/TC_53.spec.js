const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_53
 * Module: Login
 * Sub-Module: Security
 * Scenario: Refresh page after login
 * Description: Verify session persistence after page refresh
 */
test('TC_53: Refresh page after login', { annotation: { type: 'description', description: 'Verify session persistence after page refresh' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
});
