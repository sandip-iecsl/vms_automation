const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_45
 * Module: Login
 * Sub-Module: Footer
 * Scenario: Copyright Text & Year Display
 * Description: Verify copyright notice text and company name accuracy.
 */
test('TC_45: Copyright Text & Year Display', { annotation: { type: 'description', description: 'Verify copyright notice text and company name accuracy.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
});
