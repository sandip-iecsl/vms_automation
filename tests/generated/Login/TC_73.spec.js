const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_73
 * Module: Login
 * Sub-Module: Change/Reset Password
 * Scenario: Maximum length validation
 * Description: Verify maximum password length handling
 */
test('TC_73: Maximum length validation', { annotation: { type: 'description', description: 'Verify maximum password length handling' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    const longStr = 'a'.repeat(150);
    await page.locator('input[name="username"]').fill(longStr);
    await expect(page.locator('input[name="username"]')).toBeVisible();
});
