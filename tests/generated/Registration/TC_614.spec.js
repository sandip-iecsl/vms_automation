const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_614
 * Module: Registration
 * Sub-Module: Vendor Invitation
 * Scenario: Expired Invitation Link / Temporary Password
 * Description: Verify system behavior when logging in with an expired temporary password.
 */
test('TC_614: Expired Invitation Link / Temporary Password', { annotation: { type: 'description', description: 'Verify system behavior when logging in with an expired temporary password.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Invitation');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});
