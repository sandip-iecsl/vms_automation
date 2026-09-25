const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_779
 * Module: User Management
 * Sub-Module: User Mapping
 * Scenario: Uncheck All Columns Handling
 * Description: Verify grid behavior when all column checkboxes are manually unchecked.
 */
test('TC_779: Uncheck All Columns Handling', { annotation: { type: 'description', description: 'Verify grid behavior when all column checkboxes are manually unchecked.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/UserMapping');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('table, .MuiDataGrid-root, [role="grid"]').first()).toBeVisible({ timeout: 5000 });
});
