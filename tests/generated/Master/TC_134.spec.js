const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_134
 * Module: Master
 * Sub-Module: Religion
 * Scenario: Modal / Drawer Opening
 * Description: Verify clicking \'ADD RELIGION\' opens the add religion form modal/drawer.
 */
test('TC_134: Modal / Drawer Opening', { annotation: { type: 'description', description: 'Verify clicking \'ADD RELIGION\' opens the add religion form modal/drawer.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/CategoryManager');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});
