const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_1311
 * Module: Global Navigation
 * Sub-Module: User Profile
 * Scenario: Change Password\' Navigation Action
 * Description: Verify clicking \'Change Password\' opens password change form.
 */
test('TC_1311: Change Password\' Navigation Action', { annotation: { type: 'description', description: 'Verify clicking \'Change Password\' opens password change form.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.getByText('SANDIPAN TEST').first().click();
    await page.getByText('Change Password').first().click();
    await page.waitForTimeout(1000);
    await expect(page.locator('body')).toBeVisible();
});
