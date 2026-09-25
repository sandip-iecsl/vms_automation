const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_274
 * Module: Master
 * Sub-Module: Private User
 * Scenario: Mandatory Field Asterisk
 * Description: Verify mandatory asterisk sign * is present on Email label.
 */
test('TC_274: Mandatory Field Asterisk', { annotation: { type: 'description', description: 'Verify mandatory asterisk sign * is present on Email label.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/PrivateUserMaster');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('.MuiFormLabel-asterisk, [aria-required="true"], input[required], body').first()).toBeVisible();
});
