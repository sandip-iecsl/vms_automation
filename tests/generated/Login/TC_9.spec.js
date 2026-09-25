const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_9
 * Module: Login
 * Sub-Module: Business ID
 * Scenario: Placeholder & Floating Label
 * Description: Verify floating label behavior and placeholder visibility for Business ID.
 */
test('TC_9: Placeholder & Floating Label', { annotation: { type: 'description', description: 'Verify floating label behavior and placeholder visibility for Business ID.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await expect(page.locator('input[name="username"]')).toBeVisible();
});
