const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_8
 * Module: Login
 * Sub-Module: UI
 * Scenario: Mobile / Tablet Viewport Layout
 * Description: Verify layout responsiveness across 768px (tablet) and 375px (mobile) screen widths.
 */
test('TC_8: Mobile / Tablet Viewport Layout', { annotation: { type: 'description', description: 'Verify layout responsiveness across 768px (tablet) and 375px (mobile) screen widths.' } }, async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 });
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await expect(page.getByText('Welcome to VMS')).toBeVisible();
});
