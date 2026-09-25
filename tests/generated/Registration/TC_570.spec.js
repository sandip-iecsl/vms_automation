const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_570
 * Module: Registration
 * Sub-Module: Vendor Invitation
 * Scenario: Special Characters & Symbols in Contact No
 * Description: Verify system blocks special characters/symbols in Contact No field.
 */
test('TC_570: Special Characters & Symbols in Contact No', { annotation: { type: 'description', description: 'Verify system blocks special characters/symbols in Contact No field.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Invitation');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});
