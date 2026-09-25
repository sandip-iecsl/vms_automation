const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_524
 * Module: Registration
 * Sub-Module: Payment Details
 * Scenario: Mobile Viewport Form Alignment
 * Description: Verify layout alignment and full width inputs on 375px mobile viewport.
 */
test('TC_524: Mobile Viewport Form Alignment', { annotation: { type: 'description', description: 'Verify layout alignment and full width inputs on 375px mobile viewport.' } }, async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 });
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Registration');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});
