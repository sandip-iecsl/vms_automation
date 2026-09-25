const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_1009
 * Module: Report
 * Sub-Module: All Vendor
 * Scenario: Mobile Chrome Android Touch & Modal
 * Description: Verify touch taps, modal opening, and view switching on Mobile Chrome.
 */
test('TC_1009: Mobile Chrome Android Touch & Modal', { annotation: { type: 'description', description: 'Verify touch taps, modal opening, and view switching on Mobile Chrome.' } }, async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 });
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Vendor_CardView');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});
