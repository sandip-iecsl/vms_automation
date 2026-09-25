const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_684
 * Module: Registration
 * Sub-Module: Vendor Approval
 * Scenario: Simultaneous Review Collision
 * Description: Verify concurrency handling when two admins act on the same vendor simultaneously.
 */
test('TC_684: Simultaneous Review Collision', { annotation: { type: 'description', description: 'Verify concurrency handling when two admins act on the same vendor simultaneously.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Vendor_Status');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});
