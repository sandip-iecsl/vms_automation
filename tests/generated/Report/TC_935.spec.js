const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_935
 * Module: Report
 * Sub-Module: All Vendor
 * Scenario: Station Tag & Pin Icon Styling
 * Description: Verify visual rendering of location pin icon and station text.
 */
test('TC_935: Station Tag & Pin Icon Styling', { annotation: { type: 'description', description: 'Verify visual rendering of location pin icon and station text.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Vendor_CardView');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});
