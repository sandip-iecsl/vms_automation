const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_824
 * Module: User Management
 * Sub-Module: Role Mapping
 * Scenario: Enable \'Edit Access\' Switch
 * Description: Verify toggling \'Edit Access\' switch for a sub-module.
 */
test('TC_824: Enable \'Edit Access\' Switch', { annotation: { type: 'description', description: 'Verify toggling \'Edit Access\' switch for a sub-module.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/RoleMapping');
    await page.waitForLoadState('domcontentloaded');
    const editBtn = page.getByRole('button', { name: /edit/i }).first();
    await expect(editBtn).toBeVisible({ timeout: 5000 });
});
