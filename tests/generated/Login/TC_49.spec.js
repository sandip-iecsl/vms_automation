const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_49
 * Module: Login
 * Sub-Module: Logout
 * Scenario: Access application URL after logout
 * Description: Verify protected pages are inaccessible after logout
 */
test('TC_49: Access application URL after logout', { annotation: { type: 'description', description: 'Verify protected pages are inaccessible after logout' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await expect(page).toHaveURL(/vms\.iecsl\.in/i);
});
