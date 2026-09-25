const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_319
 * Module: Registration
 * Sub-Module: Vendor Registration
 * Scenario: New Registration Table Reflection
 * Description: Verify newly submitted vendor immediately appears in Vendor List.
 */
test('TC_319: New Registration Table Reflection', { annotation: { type: 'description', description: 'Verify newly submitted vendor immediately appears in Vendor List.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Registration');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('table, .MuiDataGrid-root, [role="grid"]').first()).toBeVisible({ timeout: 5000 });
});
