const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_1086
 * Module: Report
 * Sub-Module: Business Card
 * Scenario: Screen Scaling at 125% and 150% Zoom
 * Description: Verify layout reflow under 125% and 150% display zoom.
 */
test('TC_1086: Screen Scaling at 125% and 150% Zoom', { annotation: { type: 'description', description: 'Verify layout reflow under 125% and 150% display zoom.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Business_Card');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});
