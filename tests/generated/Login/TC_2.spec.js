const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_2
 * Module: Login
 * Sub-Module: URL
 * Scenario: HTTP to HTTPS Redirection
 * Description: Verify entering HTTP automatically redirects to secure HTTPS protocol.
 */
test('TC_2: HTTP to HTTPS Redirection', { annotation: { type: 'description', description: 'Verify entering HTTP automatically redirects to secure HTTPS protocol.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await expect(page).toHaveURL(/vms\.iecsl\.in/i);
});
