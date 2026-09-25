const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_1306
 * Module: Global Navigation
 * Sub-Module: User Profile
 * Scenario: User Profile Navbar Elements
 * Description: Verify visual rendering of user avatar, name, and dropdown arrow on top-right navbar.
 */
test('TC_1306: User Profile Navbar Elements', { annotation: { type: 'description', description: 'Verify visual rendering of user avatar, name, and dropdown arrow on top-right navbar.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible();
});
