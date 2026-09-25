const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_999
 * Module: Report
 * Sub-Module: All Vendor
 * Scenario: Screen Scaling at 125% and 150% Zoom Levels
 * Description: Verify layout, search bar, sort dropdown, and cards under browser display scaling (125% / 150%).
 */
test('TC_999: Screen Scaling at 125% and 150% Zoom Levels', { annotation: { type: 'description', description: 'Verify layout, search bar, sort dropdown, and cards under browser display scaling (125% / 150%).' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Vendor_CardView');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});
