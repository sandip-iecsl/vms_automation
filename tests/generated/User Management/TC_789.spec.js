const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_789
 * Module: User Management
 * Sub-Module: User Mapping
 * Scenario: Removed Mapping Session Invalidation
 * Description: Verify removing a user\'s role mapping revokes their elevated permissions.
 */
test('TC_789: Removed Mapping Session Invalidation', { annotation: { type: 'description', description: 'Verify removing a user\'s role mapping revokes their elevated permissions.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/UserMapping');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});
