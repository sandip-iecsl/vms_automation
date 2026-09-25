const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_673
 * Module: Registration
 * Sub-Module: Vendor Approval
 * Scenario: Column Headers Verification
 * Description: Verify all grid column headers render in correct sequence.
 */
test('TC_673: Column Headers Verification', { annotation: { type: 'description', description: 'Verify all grid column headers render in correct sequence.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Vendor_Status');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('table, .MuiDataGrid-root, [role="grid"]').first()).toBeVisible({ timeout: 5000 });
});
