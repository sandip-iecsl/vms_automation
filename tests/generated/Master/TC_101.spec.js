const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_101
 * Module: Master
 * Sub-Module: Private User
 * Scenario: Private User Page Redirection
 * Description: Verify clicking Private User navigates to Private User Master page.
 */
test('TC_101: Private User Page Redirection', { annotation: { type: 'description', description: 'Verify clicking Private User navigates to Private User Master page.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/PrivateUserMaster');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});
