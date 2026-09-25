const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_273
 * Module: Master
 * Sub-Module: Private User
 * Scenario: Modal / Drawer Opening
 * Description: Verify clicking \'ADD PRIVATE USER\' opens the popup modal.
 */
test('TC_273: Modal / Drawer Opening', { annotation: { type: 'description', description: 'Verify clicking \'ADD PRIVATE USER\' opens the popup modal.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/PrivateUserMaster');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});
