const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_33
 * Module: Login
 * Sub-Module: Vendor Workflow
 * Scenario: Vendor Registration Form Redirection
 * Description: Verify invited vendor is redirected to Vendor Registration Multi-Step Form on login.
 */
test('TC_33: Vendor Registration Form Redirection', { annotation: { type: 'description', description: 'Verify invited vendor is redirected to Vendor Registration Multi-Step Form on login.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await expect(page).toHaveURL(/vms\.iecsl\.in/i);
});
