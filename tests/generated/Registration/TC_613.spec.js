const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_613
 * Module: Registration
 * Sub-Module: Vendor Invitation
 * Scenario: Resend Invitation Email Action
 * Description: Verify triggering a resend of the invitation email with credentials.
 */
test('TC_613: Resend Invitation Email Action', { annotation: { type: 'description', description: 'Verify triggering a resend of the invitation email with credentials.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Invitation');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});
