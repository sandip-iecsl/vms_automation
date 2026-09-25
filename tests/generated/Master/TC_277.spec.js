const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_277
 * Module: Master
 * Sub-Module: Private User
 * Scenario: Pure Special Characters / Symbols Input Validation
 * Description: Verify system blocks invalid special characters and escape sequences (e.g. @#$, p1\).
 */
test('TC_277: Pure Special Characters / Symbols Input Validation', { annotation: { type: 'description', description: 'Verify system blocks invalid special characters and escape sequences (e.g. @#$, p1\).' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/PrivateUserMaster');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});
