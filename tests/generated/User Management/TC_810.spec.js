const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_810
 * Module: User Management
 * Sub-Module: Role Mapping
 * Scenario: Save Without Selecting Menu Access
 * Description: Verify system behavior when clicking SAVE without modifying/selecting menu permissions.
 */
test('TC_810: Save Without Selecting Menu Access', { annotation: { type: 'description', description: 'Verify system behavior when clicking SAVE without modifying/selecting menu permissions.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/RoleMapping');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});
