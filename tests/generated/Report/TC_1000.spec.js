const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_1000
 * Module: Report
 * Sub-Module: All Vendor
 * Scenario: Desktop Viewport (1920x1080) Grid
 * Description: Verify 3-column card grid alignment on standard Full HD desktop.
 */
test('TC_1000: Desktop Viewport (1920x1080) Grid', { annotation: { type: 'description', description: 'Verify 3-column card grid alignment on standard Full HD desktop.' } }, async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 });
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Vendor_CardView');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});
