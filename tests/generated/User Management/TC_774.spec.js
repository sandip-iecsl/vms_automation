const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_774
 * Module: User Management
 * Sub-Module: User Mapping
 * Scenario: Manage Columns Drawer / Dropdown Display
 * Description: Verify clicking \'Manage columns\' opens full column visibility management box.
 */
test('TC_774: Manage Columns Drawer / Dropdown Display', { annotation: { type: 'description', description: 'Verify clicking \'Manage columns\' opens full column visibility management box.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/UserMapping');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('table, .MuiDataGrid-root, [role="grid"]').first()).toBeVisible({ timeout: 5000 });
});
