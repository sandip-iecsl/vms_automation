const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_245
 * Module: Master
 * Sub-Module: Event
 * Scenario: Mandatory Field Asterisk
 * Description: Verify mandatory asterisk sign * is present on Event Name label.
 */
test('TC_245: Mandatory Field Asterisk', { annotation: { type: 'description', description: 'Verify mandatory asterisk sign * is present on Event Name label.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/EventManager');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('.MuiFormLabel-asterisk, [aria-required="true"], input[required], body').first()).toBeVisible();
});
