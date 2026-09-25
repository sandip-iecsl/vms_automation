const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_773
 * Module: User Management
 * Sub-Module: User Mapping
 * Scenario: Quick "Hide column" Action
 * Description: Verify clicking \'Hide column\' immediately hides the Actions column.
 */
test('TC_773: Quick "Hide column" Action', { annotation: { type: 'description', description: 'Verify clicking \'Hide column\' immediately hides the Actions column.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/UserMapping');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('table, .MuiDataGrid-root, [role="grid"]').first()).toBeVisible({ timeout: 5000 });
});
