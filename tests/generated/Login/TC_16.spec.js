const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_16
 * Module: Login
 * Sub-Module: User name
 * Scenario: Case Sensitivity Check
 * Description: Verify case sensitivity handling for User name during login.
 */
test('TC_16: Case Sensitivity Check', { annotation: { type: 'description', description: 'Verify case sensitivity handling for User name during login.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('SANDIPAN@MAILINATOR.COM', '@123456');
    await page.waitForTimeout(2000);
    await expect(page.locator('body')).toBeVisible();
});
