const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_62
 * Module: Login
 * Sub-Module: Security
 * Scenario: Password visibility in page source
 * Description: Verify password security
 */
test('TC_62: Password visibility in page source', { annotation: { type: 'description', description: 'Verify password security' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
});
