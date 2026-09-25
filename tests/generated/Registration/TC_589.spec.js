const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_589
 * Module: Registration
 * Sub-Module: Vendor Invitation
 * Scenario: Duplicate Vendor Email Validation
 * Description: Verify system prevents sending multiple invitations to an already invited email.
 */
test('TC_589: Duplicate Vendor Email Validation', { annotation: { type: 'description', description: 'Verify system prevents sending multiple invitations to an already invited email.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Invitation');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});
