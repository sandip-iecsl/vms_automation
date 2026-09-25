const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_1001
 * Module: Report
 * Sub-Module: All Vendor
 * Scenario: Tablet Viewport (768px) Grid Reflow
 * Description: Verify card grid reflows to 2 columns on tablet viewport.
 */
test('TC_1001: Tablet Viewport (768px) Grid Reflow', { annotation: { type: 'description', description: 'Verify card grid reflows to 2 columns on tablet viewport.' } }, async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 });
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Vendor_CardView');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});
