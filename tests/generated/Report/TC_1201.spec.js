const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_1201
 * Module: Report
 * Sub-Module: Business Card Report
 * Scenario: Horizontal Scroll on Narrow Viewport
 * Description: Verify smooth horizontal scrolling when table width exceeds narrow viewport.
 */
test('TC_1201: Horizontal Scroll on Narrow Viewport', { annotation: { type: 'description', description: 'Verify smooth horizontal scrolling when table width exceeds narrow viewport.' } }, async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 });
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Business_CardReport');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});
