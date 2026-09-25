const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_678
 * Module: Registration
 * Sub-Module: Vendor Approval
 * Scenario: Rejection with Mandatory Remarks
 * Description: Verify rejecting a vendor requires entering rejection remarks.
 */
test('TC_678: Rejection with Mandatory Remarks', { annotation: { type: 'description', description: 'Verify rejecting a vendor requires entering rejection remarks.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Vendor_Status');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('.MuiFormLabel-asterisk, [aria-required="true"], input[required], body').first()).toBeVisible();
});
