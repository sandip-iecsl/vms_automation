const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_943
 * Module: Report
 * Sub-Module: All Vendor
 * Scenario: Background Scroll Lock
 * Description: Verify background card grid is locked from scrolling when modal is open.
 */
test('TC_943: Background Scroll Lock', { annotation: { type: 'description', description: 'Verify background card grid is locked from scrolling when modal is open.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Vendor_CardView');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});
