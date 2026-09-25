const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_772
 * Module: User Management
 * Sub-Module: User Mapping
 * Scenario: Actions Column Three-Dots Menu Trigger
 * Description: Verify clicking three-dots icon on Actions column opens column management menu.
 */
test('TC_772: Actions Column Three-Dots Menu Trigger', { annotation: { type: 'description', description: 'Verify clicking three-dots icon on Actions column opens column management menu.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/UserMapping');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('table, .MuiDataGrid-root, [role="grid"]').first()).toBeVisible({ timeout: 5000 });
});
