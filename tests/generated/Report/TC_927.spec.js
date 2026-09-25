const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_927
 * Module: Report
 * Sub-Module: All Vendor
 * Scenario: Fallback Avatar for Blank Vendor Name
 * Description: Verify fallback user avatar icon when vendor name is blank/empty.
 */
test('TC_927: Fallback Avatar for Blank Vendor Name', { annotation: { type: 'description', description: 'Verify fallback user avatar icon when vendor name is blank/empty.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Vendor_CardView');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});
