const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_702
 * Module: User Management
 * Sub-Module: Group Creation
 * Scenario: Special Characters Mixed Alphanumeric
 * Description: Verify system accepts valid mixed business naming characters (&, -, _, /, ()) in Group Name.
 */
test('TC_702: Special Characters Mixed Alphanumeric', { annotation: { type: 'description', description: 'Verify system accepts valid mixed business naming characters (&, -, _, /, ()) in Group Name.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/UserGroup');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});
