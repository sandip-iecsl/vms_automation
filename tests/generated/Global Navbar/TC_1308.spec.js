const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_1308
 * Module: Global Navigation
 * Sub-Module: User Profile
 * Scenario: Menu Dismissal on Outside Click
 * Description: Verify clicking anywhere outside closes the profile dropdown menu.
 */
test('TC_1308: Menu Dismissal on Outside Click', { annotation: { type: 'description', description: 'Verify clicking anywhere outside closes the profile dropdown menu.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.getByText('SANDIPAN TEST').first().click();
    await page.mouse.click(10, 10);
    await expect(page.getByRole('menuitem', { name: 'Logout' })).not.toBeVisible();
});
