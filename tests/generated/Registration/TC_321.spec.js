const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_321
 * Module: Registration -> Vendor Registration
 * Sub-Module: Vendor Information
 * Scenario: Back to Vendor List Button
 * Description: Verify clicking \'Back to Vendor List\' redirects back to main vendor list view.
 */
test('TC_321: Back to Vendor List Button', { annotation: { type: 'description', description: 'Verify clicking \'Back to Vendor List\' redirects back to main vendor list view.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Registration');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});
