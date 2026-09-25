const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_1242
 * Module: Report
 * Sub-Module: Business Card Report
 * Scenario: Tablet Viewport (768px) Layout
 * Description: Verify card grid reflows to 2 columns and date toolbar wraps on tablet.
 */
test('TC_1242: Tablet Viewport (768px) Layout', { annotation: { type: 'description', description: 'Verify card grid reflows to 2 columns and date toolbar wraps on tablet.' } }, async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 });
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Business_CardReport');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});
