const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_3
 * Module: Login
 * Sub-Module: URL
 * Scenario: Invalid Sub-Path Redirection
 * Description: Verify navigation handling when an invalid sub-path is entered.
 */
test('TC_3: Invalid Sub-Path Redirection', { annotation: { type: 'description', description: 'Verify navigation handling when an invalid sub-path is entered.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await expect(page).toHaveURL(/vms\.iecsl\.in/i);
});
