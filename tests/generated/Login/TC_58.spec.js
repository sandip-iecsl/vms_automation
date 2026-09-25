const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_58
 * Module: Login
 * Sub-Module: Security
 * Scenario: Login using locked account
 * Description: Verify locked account restriction
 */
test('TC_58: Login using locked account', { annotation: { type: 'description', description: 'Verify locked account restriction' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
});
