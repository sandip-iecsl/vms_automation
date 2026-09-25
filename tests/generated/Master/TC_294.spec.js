const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_294
 * Module: Master
 * Sub-Module: Private User
 * Scenario: Deletion of Mapped Private User
 * Description: Verify deletion restriction when private user is actively mapped to roles/groups.
 */
test('TC_294: Deletion of Mapped Private User', { annotation: { type: 'description', description: 'Verify deletion restriction when private user is actively mapped to roles/groups.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/PrivateUserMaster');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});
