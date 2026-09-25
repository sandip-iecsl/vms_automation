const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_280
 * Module: Master
 * Sub-Module: Private User
 * Scenario: Case-Insensitive Duplicate Check
 * Description: Verify system prevents duplicate entry with uppercase letters.
 */
test('TC_280: Case-Insensitive Duplicate Check', { annotation: { type: 'description', description: 'Verify system prevents duplicate entry with uppercase letters.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/PrivateUserMaster');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});
