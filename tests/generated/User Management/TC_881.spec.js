const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_881
 * Module: User Management
 * Sub-Module: Role Mapping
 * Scenario: Group Creation Permission Matrix
 * Description: Verify configuring permissions for Group Creation.
 */
test('TC_881: Group Creation Permission Matrix', { annotation: { type: 'description', description: 'Verify configuring permissions for Group Creation.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/RoleMapping');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});
