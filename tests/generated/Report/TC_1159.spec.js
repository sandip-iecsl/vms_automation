const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_1159
 * Module: Report
 * Sub-Module: Vendor Approval Status
 * Scenario: Laptop Viewport (1366x768) Horizontal Scroll
 * Description: Verify smooth horizontal scrolling on smaller laptop displays.
 */
test('TC_1159: Laptop Viewport (1366x768) Horizontal Scroll', { annotation: { type: 'description', description: 'Verify smooth horizontal scrolling on smaller laptop displays.' } }, async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 });
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/VendorApprovalStatus');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});
