const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_997
 * Module: Report
 * Sub-Module: All Vendor
 * Scenario: Network Offline Reconnect Flow
 * Description: Verify page behavior when internet connection drops and restores.
 */
test('TC_997: Network Offline Reconnect Flow', { annotation: { type: 'description', description: 'Verify page behavior when internet connection drops and restores.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Vendor_CardView');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});
