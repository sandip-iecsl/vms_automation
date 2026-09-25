const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_23
 * Module: Login
 * Sub-Module: Password
 * Scenario: Incorrect Password Error
 * Description: Verify error handling when entering an incorrect password.
 */
test('TC_23: Incorrect Password Error', { annotation: { type: 'description', description: 'Verify error handling when entering an incorrect password.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', 'WrongPassword123');
    await page.waitForTimeout(2000);
    await expect(page.locator('input[name="username"]')).toBeVisible();
});
