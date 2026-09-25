const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_11
 * Module: Login
 * Sub-Module: Business ID
 * Scenario: Leading / Trailing Spaces
 * Description: Verify system automatically trims leading/trailing spaces in Business ID.
 */
test('TC_11: Leading / Trailing Spaces', { annotation: { type: 'description', description: 'Verify system automatically trims leading/trailing spaces in Business ID.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
});
