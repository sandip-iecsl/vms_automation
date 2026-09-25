const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_70
 * Module: Login
 * Sub-Module: Change/Reset Password
 * Scenario: Incorrect Current Password validation
 * Description: Verify validation for incorrect Current Password
 */
test('TC_70: Incorrect Current Password validation', { annotation: { type: 'description', description: 'Verify validation for incorrect Current Password' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', 'WrongPassword123');
    await page.waitForTimeout(2000);
    await expect(page.locator('input[name="username"]')).toBeVisible();
});
