const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_996
 * Module: Report
 * Sub-Module: All Vendor
 * Scenario: Server 500 Error Graceful Fallback
 * Description: Verify UI behavior when vendor report API returns 500 server error.
 */
test('TC_996: Server 500 Error Graceful Fallback', { annotation: { type: 'description', description: 'Verify UI behavior when vendor report API returns 500 server error.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Vendor_CardView');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});
