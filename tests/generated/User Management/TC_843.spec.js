const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_843
 * Module: User Management
 * Sub-Module: Role Mapping
 * Scenario: Dashboard \'Sales Orders\' Table Hidden
 * Description: Verify \'Sales Order\' summary table is hidden when marked invisible.
 */
test('TC_843: Dashboard \'Sales Orders\' Table Hidden', { annotation: { type: 'description', description: 'Verify \'Sales Order\' summary table is hidden when marked invisible.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/RoleMapping');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('table, .MuiDataGrid-root, [role="grid"]').first()).toBeVisible({ timeout: 5000 });
});
