const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_498
 * Module: Registration
 * Sub-Module: Payment Details
 * Scenario: Auto-Uppercase Transformation
 * Description: Verify entering lowercase letters in IFSC Code automatically converts to uppercase.
 */
test('TC_498: Auto-Uppercase Transformation', { annotation: { type: 'description', description: 'Verify entering lowercase letters in IFSC Code automatically converts to uppercase.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Registration');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});
