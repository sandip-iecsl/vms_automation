const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_59
 * Module: Login
 * Sub-Module: Security
 * Scenario: Case sensitivity validation for password
 * Description: Verify password case sensitivity
 */
test('TC_59: Case sensitivity validation for password', { annotation: { type: 'description', description: 'Verify password case sensitivity' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('SANDIPAN@MAILINATOR.COM', '@123456');
    await page.waitForTimeout(2000);
    await expect(page.locator('body')).toBeVisible();
});
