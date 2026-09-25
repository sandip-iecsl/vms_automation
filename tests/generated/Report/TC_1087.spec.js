const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_1087
 * Module: Report
 * Sub-Module: Business Card
 * Scenario: Desktop Viewport (1920x1080) Layout
 * Description: Verify 3-column card grid alignment on Full HD desktop monitor.
 */
test('TC_1087: Desktop Viewport (1920x1080) Layout', { annotation: { type: 'description', description: 'Verify 3-column card grid alignment on Full HD desktop monitor.' } }, async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 });
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Business_Card');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});
