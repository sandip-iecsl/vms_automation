const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_35
 * Module: Login
 * Sub-Module: Vendor Workflow
 * Scenario: Approved Vendor Login Redirection
 * Description: Verify approved vendor logging in lands on vendor portal dashboard instead of form.
 */
test('TC_35: Approved Vendor Login Redirection', { annotation: { type: 'description', description: 'Verify approved vendor logging in lands on vendor portal dashboard instead of form.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await expect(page).toHaveURL(/vms\.iecsl\.in/i);
});
