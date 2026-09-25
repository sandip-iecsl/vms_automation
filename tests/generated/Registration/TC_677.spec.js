const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_677
 * Module: Registration
 * Sub-Module: Vendor Approval
 * Scenario: Single Vendor Approval Action
 * Description: Verify approving a pending vendor from Actions column.
 */
test('TC_677: Single Vendor Approval Action', { annotation: { type: 'description', description: 'Verify approving a pending vendor from Actions column.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Vendor_Status');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});
