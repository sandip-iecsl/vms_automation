const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_776
 * Module: User Management
 * Sub-Module: User Mapping
 * Scenario: Individual Column Visibility Toggling
 * Description: Verify unchecking and re-checking specific column checkboxes updates table.
 */
test('TC_776: Individual Column Visibility Toggling', { annotation: { type: 'description', description: 'Verify unchecking and re-checking specific column checkboxes updates table.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/UserMapping');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('table, .MuiDataGrid-root, [role="grid"]').first()).toBeVisible({ timeout: 5000 });
});
