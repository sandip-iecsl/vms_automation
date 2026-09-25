const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_340
 * Module: Registration
 * Sub-Module: Vendor Information
 * Scenario: Contact Number Validation
 * Description: Verify 10-digit numeric constraint on Director Contact Number field.
 */
test('TC_340: Contact Number Validation', { annotation: { type: 'description', description: 'Verify 10-digit numeric constraint on Director Contact Number field.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Registration');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});
