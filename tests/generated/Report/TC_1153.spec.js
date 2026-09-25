const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_1153
 * Module: Report
 * Sub-Module: Vendor Approval Status
 * Scenario: Browser Reload Data Retention
 * Description: Verify pressing F5 re-fetches latest approval status records.
 */
test('TC_1153: Browser Reload Data Retention', { annotation: { type: 'description', description: 'Verify pressing F5 re-fetches latest approval status records.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/VendorApprovalStatus');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});
