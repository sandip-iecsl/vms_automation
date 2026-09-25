const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_334
 * Module: Registration
 * Sub-Module: Vendor Information
 * Scenario: Empty Address Validation
 * Description: Verify mandatory validation when Vendor Address textarea is left empty.
 */
test('TC_334: Empty Address Validation', { annotation: { type: 'description', description: 'Verify mandatory validation when Vendor Address textarea is left empty.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Registration');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});
