const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_1314
 * Module: Global Navigation
 * Sub-Module: User Profile
 * Scenario: Browser Back Button After Logout
 * Description: Verify clicking browser Back button after logout does not restore authenticated pages.
 */
test('TC_1314: Browser Back Button After Logout', { annotation: { type: 'description', description: 'Verify clicking browser Back button after logout does not restore authenticated pages.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.getByText('SANDIPAN TEST').first().click();
    await page.getByRole('menuitem', { name: 'Logout' }).click();
    await expect(page.locator('input[name="username"]')).toBeVisible({ timeout: 10000 });
});
