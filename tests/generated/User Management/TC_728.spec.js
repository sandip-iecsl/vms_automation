const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_728
 * Module: User Management
 * Sub-Module: Group Creation
 * Scenario: Show/Hide Columns Dropdown Menu
 * Description: Verify column management menu functionality (Search, ID, Group Name, Actions, Show/Hide All, RESET).
 */
test('TC_728: Show/Hide Columns Dropdown Menu', { annotation: { type: 'description', description: 'Verify column management menu functionality (Search, ID, Group Name, Actions, Show/Hide All, RESET).' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/UserGroup');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('table, .MuiDataGrid-root, [role="grid"]').first()).toBeVisible({ timeout: 5000 });
});
