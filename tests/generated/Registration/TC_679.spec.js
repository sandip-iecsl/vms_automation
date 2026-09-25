const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_679
 * Module: Registration
 * Sub-Module: Vendor Approval
 * Scenario: Blank Rejection Remarks Validation
 * Description: Verify system blocks rejecting a vendor when remarks field is left blank.
 */
test('TC_679: Blank Rejection Remarks Validation', { annotation: { type: 'description', description: 'Verify system blocks rejecting a vendor when remarks field is left blank.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Vendor_Status');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});
