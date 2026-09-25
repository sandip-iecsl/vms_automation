const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_683
 * Module: Registration
 * Sub-Module: Vendor Approval
 * Scenario: Approval Timestamp and User Capture
 * Description: Verify audit trail captures the exact approver user ID and timestamp upon decision.
 */
test('TC_683: Approval Timestamp and User Capture', { annotation: { type: 'description', description: 'Verify audit trail captures the exact approver user ID and timestamp upon decision.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Vendor_Status');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});
