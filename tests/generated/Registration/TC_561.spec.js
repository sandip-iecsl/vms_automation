const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_561
 * Module: Registration
 * Sub-Module: Vendor Invitation
 * Scenario: Vendor Invitation URL Access
 * Description: Verify Vendor Invitation page loads directly via valid URL.
 */
test('TC_561: Vendor Invitation URL Access', { annotation: { type: 'description', description: 'Verify Vendor Invitation page loads directly via valid URL.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Invitation');
    await page.waitForLoadState('domcontentloaded');
    await expect(page).toHaveURL(new RegExp('/Invitation'));
});
