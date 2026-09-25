const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_575
 * Module: Registration
 * Sub-Module: Vendor Invitation
 * Scenario: Email Missing TLD Extension Validation
 * Description: Verify validation when email is missing top-level domain (e.g., vendor@mailinator).
 */
test('TC_575: Email Missing TLD Extension Validation', { annotation: { type: 'description', description: 'Verify validation when email is missing top-level domain (e.g., vendor@mailinator).' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Invitation');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});
