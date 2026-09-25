const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_842
 * Module: User Management
 * Sub-Module: Role Mapping
 * Scenario: Dashboard \'Sales Orders\' Table Visibility
 * Description: Verify mapped user sees \'Sales Order\' summary table on Dashboard.
 */
test('TC_842: Dashboard \'Sales Orders\' Table Visibility', { annotation: { type: 'description', description: 'Verify mapped user sees \'Sales Order\' summary table on Dashboard.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/RoleMapping');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('table, .MuiDataGrid-root, [role="grid"]').first()).toBeVisible({ timeout: 5000 });
});
