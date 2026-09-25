const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_40
 * Module: Login
 * Sub-Module: Registration
 * Scenario: Registration Anchor Tag Check (href="#")
 * Description: Verify clicking \'Registration\' link when href is defined as #.
 */
test('TC_40: Registration Anchor Tag Check (href="#")', { annotation: { type: 'description', description: 'Verify clicking \'Registration\' link when href is defined as #.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
});
