const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_39
 * Module: Login
 * Sub-Module: Forgot Password
 * Scenario: Forgot Password Anchor Tag Check (href="#")
 * Description: Verify clicking \'Forgot Password?\' link when href is defined as #.
 */
test('TC_39: Forgot Password Anchor Tag Check (href="#")', { annotation: { type: 'description', description: 'Verify clicking \'Forgot Password?\' link when href is defined as #.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await expect(page.getByText('Forgot Password?')).toBeVisible();
    await page.getByText('Forgot Password?').click();
});
