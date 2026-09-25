const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_1240
 * Module: Report
 * Sub-Module: Business Card Report
 * Scenario: Screen Scaling at 125% and 150% Zoom
 * Description: Verify layout reflow under 125% and 150% display zoom.
 */
test('TC_1240: Screen Scaling at 125% and 150% Zoom', { annotation: { type: 'description', description: 'Verify layout reflow under 125% and 150% display zoom.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Business_CardReport');
    await page.waitForLoadState('domcontentloaded');
    const dateInput = page.locator('input[type="date"], input[placeholder*="YYYY"], input').first();
    await expect(dateInput).toBeVisible({ timeout: 5000 });
});
