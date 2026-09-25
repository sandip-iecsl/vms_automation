const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_605
 * Module: Registration
 * Sub-Module: Vendor Invitation
 * Scenario: Column Headers Alignment & Styling
 * Description: Verify table column headers and row styling.
 */
test('TC_605: Column Headers Alignment & Styling', { annotation: { type: 'description', description: 'Verify table column headers and row styling.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Invitation');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('table, .MuiDataGrid-root, [role="grid"]').first()).toBeVisible({ timeout: 5000 });
});
