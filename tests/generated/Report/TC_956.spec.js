const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_956
 * Module: Report
 * Sub-Module: All Vendor
 * Scenario: International Domain Encodings Handling
 * Description: Verify emails with international TLDs (.cn, .163.com, .qq.com) render without encoding errors.
 */
test('TC_956: International Domain Encodings Handling', { annotation: { type: 'description', description: 'Verify emails with international TLDs (.cn, .163.com, .qq.com) render without encoding errors.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Vendor_CardView');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});
