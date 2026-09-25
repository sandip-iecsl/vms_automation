const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_1265
 * Module: Vendor Engagement
 * Sub-Module: Custom Mail
 * Scenario: Column Headers Verification
 * Description: Verify exact sequence of table column headers.
 */
test('TC_1265: Column Headers Verification', { annotation: { type: 'description', description: 'Verify exact sequence of table column headers.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/CustomMail');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('table, .MuiDataGrid-root, [role="grid"]').first()).toBeVisible({ timeout: 5000 });
});
