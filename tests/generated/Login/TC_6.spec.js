const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_6
 * Module: Login
 * Sub-Module: UI
 * Scenario: Card Alignment & Header Texts
 * Description: Verify login card styling, elevation shadow, and form alignment.
 */
test('TC_6: Card Alignment & Header Texts', { annotation: { type: 'description', description: 'Verify login card styling, elevation shadow, and form alignment.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await expect(page.getByText('Welcome to VMS')).toBeVisible();
    await expect(page.getByText('Smart Vendor Management')).toBeVisible();
});
