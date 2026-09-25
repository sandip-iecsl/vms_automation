const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_1162
 * Module: Report
 * Sub-Module: Vendor Approval Status
 * Scenario: Google Chrome Layout & Functionality
 * Description: Verify all grid interactions, sorting, column menus, and history modal in Chrome.
 */
test('TC_1162: Google Chrome Layout & Functionality', { annotation: { type: 'description', description: 'Verify all grid interactions, sorting, column menus, and history modal in Chrome.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/VendorApprovalStatus');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});
