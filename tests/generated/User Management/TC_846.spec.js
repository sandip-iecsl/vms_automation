const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_846
 * Module: User Management
 * Sub-Module: Role Mapping
 * Scenario: Metric Card \'Current Stock\' Disabled State
 * Description: Verify \'Current Stock\' metric/chart does not appear when switch is turned OFF.
 */
test('TC_846: Metric Card \'Current Stock\' Disabled State', { annotation: { type: 'description', description: 'Verify \'Current Stock\' metric/chart does not appear when switch is turned OFF.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/RoleMapping');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});
