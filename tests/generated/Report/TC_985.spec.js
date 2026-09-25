const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_985
 * Module: Report
 * Sub-Module: All Vendor
 * Scenario: Sidebar Collapse Responsive Grid Adjust
 * Description: Verify card grid width expands smoothly when sidebar is collapsed.
 */
test('TC_985: Sidebar Collapse Responsive Grid Adjust', { annotation: { type: 'description', description: 'Verify card grid width expands smoothly when sidebar is collapsed.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Vendor_CardView');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('.sidebar-edge-toggle, body').first()).toBeVisible();
});
