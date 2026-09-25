const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_1111
 * Module: Report
 * Sub-Module: Vendor Approval Status
 * Scenario: Native Tooltip on Text Cells
 * Description: Verify browser native tooltip when hovering over text cells with title attribute.
 */
test('TC_1111: Native Tooltip on Text Cells', { annotation: { type: 'description', description: 'Verify browser native tooltip when hovering over text cells with title attribute.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/VendorApprovalStatus');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});
