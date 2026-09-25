const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_1313
 * Module: Global Navigation
 * Sub-Module: User Profile
 * Scenario: Session Invalidation Action
 * Description: Verify clicking \'Logout\' invalidates authentication session and redirects to Login.
 */
test('TC_1313: Session Invalidation Action', { annotation: { type: 'description', description: 'Verify clicking \'Logout\' invalidates authentication session and redirects to Login.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.getByText('SANDIPAN TEST').first().click();
    await page.getByRole('menuitem', { name: 'Logout' }).click();
    await expect(page.locator('input[name="username"]')).toBeVisible({ timeout: 10000 });
});
