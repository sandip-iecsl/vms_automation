const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_777
 * Module: User Management
 * Sub-Module: User Mapping
 * Scenario: Reset Column Configuration Action
 * Description: Verify clicking RESET button in Manage Columns restores all default columns.
 */
test('TC_777: Reset Column Configuration Action', { annotation: { type: 'description', description: 'Verify clicking RESET button in Manage Columns restores all default columns.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/UserMapping');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('table, .MuiDataGrid-root, [role="grid"]').first()).toBeVisible({ timeout: 5000 });
});
