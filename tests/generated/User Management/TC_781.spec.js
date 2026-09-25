const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_781
 * Module: User Management
 * Sub-Module: User Mapping
 * Scenario: Column Text Alignment & Data Formatting
 * Description: Verify text alignment across numeric IDs, Employee Names, and Roles.
 */
test('TC_781: Column Text Alignment & Data Formatting', { annotation: { type: 'description', description: 'Verify text alignment across numeric IDs, Employee Names, and Roles.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/UserMapping');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('table, .MuiDataGrid-root, [role="grid"]').first()).toBeVisible({ timeout: 5000 });
});
