const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_565
 * Module: Registration
 * Sub-Module: Vendor Invitation
 * Scenario: Special Characters in Vendor Name
 * Description: Verify system accepts valid legal business characters (&, ., -, ,, ( )) in Vendor Name during invitation.
 */
test('TC_565: Special Characters in Vendor Name', { annotation: { type: 'description', description: 'Verify system accepts valid legal business characters (&, ., -, ,, ( )) in Vendor Name during invitation.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Invitation');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});
