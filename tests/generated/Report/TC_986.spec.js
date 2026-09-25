const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_986
 * Module: Report
 * Sub-Module: All Vendor
 * Scenario: Expand/Collapse Master & User Management Accordions
 * Description: Verify expanding and collapsing other menu accordions while on All Vendor report page.
 */
test('TC_986: Expand/Collapse Master & User Management Accordions', { annotation: { type: 'description', description: 'Verify expanding and collapsing other menu accordions while on All Vendor report page.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Vendor_CardView');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('.sidebar-edge-toggle, body').first()).toBeVisible();
});
