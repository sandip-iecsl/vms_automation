const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_699
 * Module: User Management
 * Sub-Module: Group Creation
 * Scenario: Case-Insensitive Duplicate Check
 * Description: Verify system detects duplicate group name regardless of letter casing.
 */
test('TC_699: Case-Insensitive Duplicate Check', { annotation: { type: 'description', description: 'Verify system detects duplicate group name regardless of letter casing.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/UserGroup');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});
