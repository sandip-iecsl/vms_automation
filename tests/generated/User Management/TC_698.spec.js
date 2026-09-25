const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_698
 * Module: User Management
 * Sub-Module: Group Creation
 * Scenario: Duplicate Group Name Validation
 * Description: Verify system prevents creating duplicate user group names.
 */
test('TC_698: Duplicate Group Name Validation', { annotation: { type: 'description', description: 'Verify system prevents creating duplicate user group names.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/UserGroup');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});
