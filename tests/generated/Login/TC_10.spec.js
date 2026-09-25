const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_10
 * Module: Login
 * Sub-Module: Business ID
 * Scenario: Optional Field Verification
 * Description: Verify Business ID field can be left blank without blocking mandatory validation.
 */
test('TC_10: Optional Field Verification', { annotation: { type: 'description', description: 'Verify Business ID field can be left blank without blocking mandatory validation.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
});
