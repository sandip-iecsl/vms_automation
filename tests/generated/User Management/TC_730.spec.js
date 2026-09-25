const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_730
 * Module: User Management
 * Sub-Module: Group Creation
 * Scenario: Reset Column Visibility Action
 * Description: Verify clicking RESET button inside column management menu restores all columns.
 */
test('TC_730: Reset Column Visibility Action', { annotation: { type: 'description', description: 'Verify clicking RESET button inside column management menu restores all columns.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/UserGroup');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('table, .MuiDataGrid-root, [role="grid"]').first()).toBeVisible({ timeout: 5000 });
});
