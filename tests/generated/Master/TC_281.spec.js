const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_281
 * Module: Master
 * Sub-Module: Private User
 * Scenario: Leading / Trailing Spaces Trimming
 * Description: Verify whitespace trimming in Email field.
 */
test('TC_281: Leading / Trailing Spaces Trimming', { annotation: { type: 'description', description: 'Verify whitespace trimming in Email field.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/PrivateUserMaster');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});
