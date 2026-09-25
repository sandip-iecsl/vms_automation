const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_86
 * Module: Login
 * Sub-Module: Change/Reset Password
 * Scenario: Form alignment validation
 * Description: Verify form alignment
 */
test('TC_86: Form alignment validation', { annotation: { type: 'description', description: 'Verify form alignment' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
});
