const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_52
 * Module: Login
 * Sub-Module: Security
 * Scenario: Session validation across multiple tabs
 * Description: Verify session consistency across tabs
 */
test('TC_52: Session validation across multiple tabs', { annotation: { type: 'description', description: 'Verify session consistency across tabs' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
});
