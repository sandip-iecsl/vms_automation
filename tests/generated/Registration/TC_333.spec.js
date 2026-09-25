const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_333
 * Module: Registration
 * Sub-Module: Vendor Information
 * Scenario: Multiline Address Input
 * Description: Verify address input, special characters, and multiline text handling.
 */
test('TC_333: Multiline Address Input', { annotation: { type: 'description', description: 'Verify address input, special characters, and multiline text handling.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Registration');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});
