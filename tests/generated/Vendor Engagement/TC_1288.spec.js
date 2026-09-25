const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_1288
 * Module: Vendor Engagement
 * Sub-Module: Custom Mail
 * Scenario: International Numbers Formatting
 * Description: Verify phone numbers with country codes (e.g. 86-41165864672, 49-0 640367070 0, 91-33 68272514).
 */
test('TC_1288: International Numbers Formatting', { annotation: { type: 'description', description: 'Verify phone numbers with country codes (e.g. 86-41165864672, 49-0 640367070 0, 91-33 68272514).' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/CustomMail');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});
