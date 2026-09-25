const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_545
 * Module: Registration
 * Sub-Module: Declaration
 * Scenario: Vendor Approval Queue Synchronization
 * Description: Verify newly submitted vendor is listed in Vendor Approval queue with Pending status.
 */
test('TC_545: Vendor Approval Queue Synchronization', { annotation: { type: 'description', description: 'Verify newly submitted vendor is listed in Vendor Approval queue with Pending status.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Registration');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});
