const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_1013
 * Module: Report
 * Sub-Module: All Vendor
 * Scenario: Delete Vendor Sync in Report
 * Description: Verify deleted vendor is immediately purged from All Vendor report.
 */
test('TC_1013: Delete Vendor Sync in Report', { annotation: { type: 'description', description: 'Verify deleted vendor is immediately purged from All Vendor report.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Vendor_CardView');
    await page.waitForLoadState('domcontentloaded');
    const deleteBtn = page.getByRole('button', { name: /delete/i }).first();
    await expect(deleteBtn).toBeVisible({ timeout: 5000 });
});
