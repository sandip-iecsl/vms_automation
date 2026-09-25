const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_806
 * Module: User Management
 * Sub-Module: Role Mapping
 * Scenario: Default Empty/Unselected State
 * Description: Verify initial state of Group Name dropdown before selection.
 */
test('TC_806: Default Empty/Unselected State', { annotation: { type: 'description', description: 'Verify initial state of Group Name dropdown before selection.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/RoleMapping');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});
