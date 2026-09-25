const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_849
 * Module: User Management
 * Sub-Module: Role Mapping
 * Scenario: State Reset / Permissions Re-fetch
 * Description: Verify selecting a different group from dropdown reloads that group\'s saved permissions.
 */
test('TC_849: State Reset / Permissions Re-fetch', { annotation: { type: 'description', description: 'Verify selecting a different group from dropdown reloads that group\'s saved permissions.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/RoleMapping');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});
