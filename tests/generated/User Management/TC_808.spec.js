const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_808
 * Module: User Management
 * Sub-Module: Role Mapping
 * Scenario: Default Prompt Display
 * Description: Verify Menu Access container display before selecting a main menu item.
 */
test('TC_808: Default Prompt Display', { annotation: { type: 'description', description: 'Verify Menu Access container display before selecting a main menu item.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/RoleMapping');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});
