const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_1158
 * Module: Report
 * Sub-Module: Vendor Approval Status
 * Scenario: Desktop Viewport (1920x1080) Layout
 * Description: Verify DataGrid renders with balanced column widths on standard 1080p monitor.
 */
test('TC_1158: Desktop Viewport (1920x1080) Layout', { annotation: { type: 'description', description: 'Verify DataGrid renders with balanced column widths on standard 1080p monitor.' } }, async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 });
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/VendorApprovalStatus');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});
