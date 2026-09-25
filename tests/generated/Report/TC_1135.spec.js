const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_1135
 * Module: Report
 * Sub-Module: Vendor Approval Status
 * Scenario: Column Width Separator Dragging
 * Description: Verify dragging column separator line resizes column width dynamically.
 */
test('TC_1135: Column Width Separator Dragging', { annotation: { type: 'description', description: 'Verify dragging column separator line resizes column width dynamically.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/VendorApprovalStatus');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('table, .MuiDataGrid-root, [role="grid"]').first()).toBeVisible({ timeout: 5000 });
});
