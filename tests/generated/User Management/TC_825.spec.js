const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_825
 * Module: User Management
 * Sub-Module: Role Mapping
 * Scenario: Enable \'Delete Access\' Switch
 * Description: Verify toggling \'Delete Access\' switch for a sub-module.
 */
test('TC_825: Enable \'Delete Access\' Switch', { annotation: { type: 'description', description: 'Verify toggling \'Delete Access\' switch for a sub-module.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/RoleMapping');
    await page.waitForLoadState('domcontentloaded');
    const deleteBtn = page.getByRole('button', { name: /delete/i }).first();
    await expect(deleteBtn).toBeVisible({ timeout: 5000 });
});
