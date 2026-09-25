const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_1144
 * Module: Report
 * Sub-Module: Vendor Approval Status
 * Scenario: Collapsible Sidebar Toggle Button (<)
 * Description: Verify clicking sidebar toggle button collapses and expands sidebar menu.
 */
test('TC_1144: Collapsible Sidebar Toggle Button (<)', { annotation: { type: 'description', description: 'Verify clicking sidebar toggle button collapses and expands sidebar menu.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/VendorApprovalStatus');
    await page.waitForLoadState('domcontentloaded');
    const toggleBtn = page.locator('.sidebar-edge-toggle, button:has(svg)').first();
    await expect(toggleBtn).toBeVisible();
    await toggleBtn.click();
    await page.waitForTimeout(500);
});
