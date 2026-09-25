const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_4
 * Module: Login
 * Sub-Module: UI
 * Scenario: Page Title & Favicon
 * Description: Verify browser tab title and favicon render accurately.
 */
test('TC_4: Page Title & Favicon', { annotation: { type: 'description', description: 'Verify browser tab title and favicon render accurately.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await expect(page).toHaveURL(/vms\.iecsl\.in/i);
});
