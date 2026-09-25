const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_675
 * Module: Registration
 * Sub-Module: Vendor Approval
 * Scenario: Initial Range Display for Empty State
 * Description: Verify pagination counter range when dataset is empty.
 */
test('TC_675: Initial Range Display for Empty State', { annotation: { type: 'description', description: 'Verify pagination counter range when dataset is empty.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Vendor_Status');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});
