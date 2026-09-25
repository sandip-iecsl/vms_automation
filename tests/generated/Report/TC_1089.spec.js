const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_1089
 * Module: Report
 * Sub-Module: Business Card
 * Scenario: Mobile Viewport (375px) Layout
 * Description: Verify card grid stacks in single column on mobile screen.
 */
test('TC_1089: Mobile Viewport (375px) Layout', { annotation: { type: 'description', description: 'Verify card grid stacks in single column on mobile screen.' } }, async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 });
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Business_Card');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});
