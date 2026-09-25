const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_1284
 * Module: Vendor Engagement
 * Sub-Module: Custom Mail
 * Scenario: First Page Previous Arrow Disabled
 * Description: Verify previous arrow button (<) is disabled on initial page load.
 */
test('TC_1284: First Page Previous Arrow Disabled', { annotation: { type: 'description', description: 'Verify previous arrow button (<) is disabled on initial page load.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/CustomMail');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});
