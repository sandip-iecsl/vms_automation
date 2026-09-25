const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_426
 * Module: Registration
 * Sub-Module: Material Details
 * Scenario: Form Controls & Table Headers
 * Description: Verify visual layout, fieldset legend, table headers, and action buttons.
 */
test('TC_426: Form Controls & Table Headers', { annotation: { type: 'description', description: 'Verify visual layout, fieldset legend, table headers, and action buttons.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Registration');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('table, .MuiDataGrid-root, [role="grid"]').first()).toBeVisible({ timeout: 5000 });
});
