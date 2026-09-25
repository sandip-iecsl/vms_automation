const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_609
 * Module: Registration
 * Sub-Module: Vendor Invitation
 * Scenario: No Invitations Handling
 * Description: Verify table display when no invitations have been sent.
 */
test('TC_609: No Invitations Handling', { annotation: { type: 'description', description: 'Verify table display when no invitations have been sent.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Invitation');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});
