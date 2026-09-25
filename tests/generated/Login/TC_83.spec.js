const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_83
 * Module: Login
 * Sub-Module: Change/Reset Password
 * Scenario: SQL Injection validation
 * Description: Verify SQL Injection protection
 */
test('TC_83: SQL Injection validation', { annotation: { type: 'description', description: 'Verify SQL Injection protection' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login("' OR '1'='1", '@123456');
    await expect(page.locator('input[name="username"]')).toBeVisible();
});
