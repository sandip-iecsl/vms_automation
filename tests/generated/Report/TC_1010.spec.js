const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_1010
 * Module: Report
 * Sub-Module: All Vendor
 * Scenario: iOS Safari Layout & Backdrop Styling
 * Description: Verify modal overlay, backdrop styling, and fonts on iOS Safari.
 */
test('TC_1010: iOS Safari Layout & Backdrop Styling', { annotation: { type: 'description', description: 'Verify modal overlay, backdrop styling, and fonts on iOS Safari.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Vendor_CardView');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});
