const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_1307
 * Module: Global Navigation
 * Sub-Module: User Profile
 * Scenario: Menu Toggle on Name/Avatar Click
 * Description: Verify clicking user name/avatar opens user profile dropdown menu.
 */
test('TC_1307: Menu Toggle on Name/Avatar Click', { annotation: { type: 'description', description: 'Verify clicking user name/avatar opens user profile dropdown menu.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.getByText('SANDIPAN TEST').first().click();
    await expect(page.getByRole('menuitem', { name: 'Logout' })).toBeVisible();
});
