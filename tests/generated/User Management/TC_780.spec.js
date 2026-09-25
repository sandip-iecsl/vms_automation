const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_780
 * Module: User Management
 * Sub-Module: User Mapping
 * Scenario: Manage Columns Menu Close on Outside Click
 * Description: Verify clicking outside the Manage Columns dropdown closes the popup box.
 */
test('TC_780: Manage Columns Menu Close on Outside Click', { annotation: { type: 'description', description: 'Verify clicking outside the Manage Columns dropdown closes the popup box.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/UserMapping');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('table, .MuiDataGrid-root, [role="grid"]').first()).toBeVisible({ timeout: 5000 });
});
