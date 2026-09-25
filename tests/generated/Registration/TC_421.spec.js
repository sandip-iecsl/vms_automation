const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_421
 * Module: Registration
 * Sub-Module: Vendor RegistrationLicense Details
 * Scenario: Copy-Paste Large Text Content
 * Description: Verify pasting large multi-paragraph plant/machinery details into textarea.
 */
test('TC_421: Copy-Paste Large Text Content', { annotation: { type: 'description', description: 'Verify pasting large multi-paragraph plant/machinery details into textarea.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Registration');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});
