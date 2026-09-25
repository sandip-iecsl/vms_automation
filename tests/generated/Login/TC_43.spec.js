const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_43
 * Module: Login
 * Sub-Module: Footer
 * Scenario: IECSL External Website Redirection
 * Description: Verify IECSL web link redirects to official portal.
 */
test('TC_43: IECSL External Website Redirection', { annotation: { type: 'description', description: 'Verify IECSL web link redirects to official portal.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await expect(page).toHaveURL(/vms\.iecsl\.in/i);
});
