const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_300
 * Module: Registration
 * Sub-Module: Vendor Registration
 * Scenario: Vendor List URL Access
 * Description: Verify Vendor List page loads directly via valid URL.
 */
test('TC_300: Vendor List URL Access', { annotation: { type: 'description', description: 'Verify Vendor List page loads directly via valid URL.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Registration');
    await page.waitForLoadState('domcontentloaded');
    await expect(page).toHaveURL(new RegExp('/Registration'));
});
