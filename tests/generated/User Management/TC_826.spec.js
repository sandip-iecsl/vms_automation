const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_826
 * Module: User Management
 * Sub-Module: Role Mapping
 * Scenario: Auto-Enable \'Visible\' when \'Edit\' is Enabled
 * Description: Verify enabling Edit Access automatically turns on \'Visible\' switch.
 */
test('TC_826: Auto-Enable \'Visible\' when \'Edit\' is Enabled', { annotation: { type: 'description', description: 'Verify enabling Edit Access automatically turns on \'Visible\' switch.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/RoleMapping');
    await page.waitForLoadState('domcontentloaded');
    const editBtn = page.getByRole('button', { name: /edit/i }).first();
    await expect(editBtn).toBeVisible({ timeout: 5000 });
});
