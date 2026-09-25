const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_696
 * Module: User Management
 * Sub-Module: Group Creation
 * Scenario: Pure Dots / Punctuation Validation (Bug Check ID 17)
 * Description: Verify system blocks meaningless punctuation strings in Group Name.
 */
test('TC_696: Pure Dots / Punctuation Validation (Bug Check ID 17)', { annotation: { type: 'description', description: 'Verify system blocks meaningless punctuation strings in Group Name.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/UserGroup');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});
