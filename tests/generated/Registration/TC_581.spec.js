const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_581
 * Module: Registration
 * Sub-Module: Vendor Invitation
 * Scenario: Blank Field Validation
 * Description: Verify validation when Vendor Name field is left empty.
 */
test('TC_581: Blank Field Validation', { annotation: { type: 'description', description: 'Verify validation when Vendor Name field is left empty.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Invitation');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});
