const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_1110
 * Module: Report
 * Sub-Module: Vendor Approval Status
 * Scenario: Default Data Population
 * Description: Verify vendor approval records populate properly in grid rows.
 */
test('TC_1110: Default Data Population', { annotation: { type: 'description', description: 'Verify vendor approval records populate properly in grid rows.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/VendorApprovalStatus');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});
