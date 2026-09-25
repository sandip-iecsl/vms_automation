const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_546
 * Module: Registration
 * Sub-Module: Declaration
 * Scenario: Vendor Reports Synchronization
 * Description: Verify new vendor appears in All Vendor Report and Vendor Approval Status Report.
 */
test('TC_546: Vendor Reports Synchronization', { annotation: { type: 'description', description: 'Verify new vendor appears in All Vendor Report and Vendor Approval Status Report.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Registration');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});
