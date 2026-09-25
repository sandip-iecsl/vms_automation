const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_1
 * Module: Login
 * Sub-Module: URL
 * Scenario: Valid URL Access
 * Description: Verify user can access the VMS Login page using a valid URL.
 */
test('TC_1: Valid URL Access', { annotation: { type: 'description', description: 'Verify user can access the VMS Login page using a valid URL.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await expect(page).toHaveURL(/vms\.iecsl\.in/i);
});
