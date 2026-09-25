const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_61
 * Module: Login
 * Sub-Module: Security
 * Scenario: SQL injection attempt in Password field
 * Description: Verify SQL injection prevention
 */
test('TC_61: SQL injection attempt in Password field', { annotation: { type: 'description', description: 'Verify SQL injection prevention' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login("' OR '1'='1", '@123456');
    await expect(page.locator('input[name="username"]')).toBeVisible();
});
