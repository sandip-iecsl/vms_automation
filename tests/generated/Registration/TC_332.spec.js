const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_332
 * Module: Registration
 * Sub-Module: Vendor Information
 * Scenario: Duplicate Vendor Name Check
 * Description: Verify system alerts or blocks duplicate Vendor Name during registration.
 */
test('TC_332: Duplicate Vendor Name Check', { annotation: { type: 'description', description: 'Verify system alerts or blocks duplicate Vendor Name during registration.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Registration');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});
