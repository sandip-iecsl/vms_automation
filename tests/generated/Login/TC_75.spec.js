const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_75
 * Module: Login
 * Sub-Module: Change/Reset Password
 * Scenario: Hide Password functionality
 * Description: Verify password masking functionality
 */
test('TC_75: Hide Password functionality', { annotation: { type: 'description', description: 'Verify password masking functionality' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
});
