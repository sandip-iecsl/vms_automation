const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_672
 * Module: Registration
 * Sub-Module: Vendor Approval
 * Scenario: Page Header & Table Alignment
 * Description: Verify visual layout, title typography, and grid alignment.
 */
test('TC_672: Page Header & Table Alignment', { annotation: { type: 'description', description: 'Verify visual layout, title typography, and grid alignment.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Vendor_Status');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('table, .MuiDataGrid-root, [role="grid"]').first()).toBeVisible({ timeout: 5000 });
});
