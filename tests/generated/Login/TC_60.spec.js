const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_60
 * Module: Login
 * Sub-Module: Security
 * Scenario: SQL injection attempt in Email field
 * Description: Verify SQL injection prevention
 */
test('TC_60: SQL injection attempt in Email field', { annotation: { type: 'description', description: 'Verify SQL injection prevention' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login("' OR '1'='1", '@123456');
    await expect(page.locator('input[name="username"]')).toBeVisible();
});
