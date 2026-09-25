const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_54
 * Module: Login
 * Sub-Module: Security
 * Scenario: Login from another browser/device
 * Description: Verify concurrent login handling
 */
test('TC_54: Login from another browser/device', { annotation: { type: 'description', description: 'Verify concurrent login handling' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
});
