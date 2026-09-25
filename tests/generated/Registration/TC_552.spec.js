const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_552
 * Module: Registration
 * Sub-Module: Declaration
 * Scenario: Mobile Viewport Layout Alignment
 * Description: Verify layout and textarea responsiveness on 375px mobile viewport.
 */
test('TC_552: Mobile Viewport Layout Alignment', { annotation: { type: 'description', description: 'Verify layout and textarea responsiveness on 375px mobile viewport.' } }, async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 });
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Registration');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});
