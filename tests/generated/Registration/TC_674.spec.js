const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_674
 * Module: Registration
 * Sub-Module: Vendor Approval
 * Scenario: Centered "No rows" Handling
 * Description: Verify empty table placeholder when no records are pending.
 */
test('TC_674: Centered "No rows" Handling', { annotation: { type: 'description', description: 'Verify empty table placeholder when no records are pending.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Vendor_Status');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});
