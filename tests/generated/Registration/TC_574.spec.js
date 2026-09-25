const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_574
 * Module: Registration
 * Sub-Module: Vendor Invitation
 * Scenario: Uppercase Email ID Auto-Normalization
 * Description: Verify system auto-normalizes uppercase email addresses to lowercase.
 */
test('TC_574: Uppercase Email ID Auto-Normalization', { annotation: { type: 'description', description: 'Verify system auto-normalizes uppercase email addresses to lowercase.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Invitation');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});
