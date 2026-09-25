const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_12
 * Module: Login
 * Sub-Module: Business ID
 * Scenario: SQL Injection / Script Sanitization
 * Description: Verify input sanitization for SQL injection / XSS scripts in Business ID.
 */
test('TC_12: SQL Injection / Script Sanitization', { annotation: { type: 'description', description: 'Verify input sanitization for SQL injection / XSS scripts in Business ID.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login("' OR '1'='1", '@123456');
    await expect(page.locator('input[name="username"]')).toBeVisible();
});
