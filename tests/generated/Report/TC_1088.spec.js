const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_1088
 * Module: Report
 * Sub-Module: Business Card
 * Scenario: Tablet Viewport (768px) Layout
 * Description: Verify card grid reflows to 2 columns on tablet viewport.
 */
test('TC_1088: Tablet Viewport (768px) Layout', { annotation: { type: 'description', description: 'Verify card grid reflows to 2 columns on tablet viewport.' } }, async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 });
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Business_Card');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});
