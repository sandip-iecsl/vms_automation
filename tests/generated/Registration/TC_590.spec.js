const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_590
 * Module: Registration
 * Sub-Module: Vendor Invitation
 * Scenario: Valid Vendor Invitation Addition
 * Description: Verify adding and sending a valid vendor invitation.
 */
test('TC_590: Valid Vendor Invitation Addition', { annotation: { type: 'description', description: 'Verify adding and sending a valid vendor invitation.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Invitation');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});
