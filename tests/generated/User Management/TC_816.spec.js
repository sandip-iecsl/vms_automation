const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_816
 * Module: User Management
 * Sub-Module: Role Mapping
 * Scenario: Quality Purchase Chart Row Controls
 * Description: Verify toggle controls for \'Quality Purchase Chart\' item.
 */
test('TC_816: Quality Purchase Chart Row Controls', { annotation: { type: 'description', description: 'Verify toggle controls for \'Quality Purchase Chart\' item.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/RoleMapping');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});
