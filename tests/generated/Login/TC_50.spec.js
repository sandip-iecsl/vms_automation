const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_50
 * Module: Login
 * Sub-Module: Security
 * Scenario: Session creation after login
 * Description: Verify session creation after successful login
 */
test('TC_50: Session creation after login', { annotation: { type: 'description', description: 'Verify session creation after successful login' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
});
