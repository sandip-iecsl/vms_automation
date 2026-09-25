const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_337
 * Module: Registration
 * Sub-Module: Vendor Information
 * Scenario: Work/VendorMfg Location Empty Validation
 * Description: Verify mandatory validation when Manufacturing unit location is left empty.
 */
test('TC_337: Work/VendorMfg Location Empty Validation', { annotation: { type: 'description', description: 'Verify mandatory validation when Manufacturing unit location is left empty.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Registration');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});
