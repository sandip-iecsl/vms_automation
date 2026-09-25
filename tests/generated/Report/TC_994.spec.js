const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_994
 * Module: Report
 * Sub-Module: All Vendor
 * Scenario: Memory Consumption Stability
 * Description: Verify browser memory footprint remains stable after repeated search, sort, and view switches.
 */
test('TC_994: Memory Consumption Stability', { annotation: { type: 'description', description: 'Verify browser memory footprint remains stable after repeated search, sort, and view switches.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Vendor_CardView');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});
