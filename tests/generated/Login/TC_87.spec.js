const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_87
 * Module: Login
 * Sub-Module: Change/Reset Password
 * Scenario: Mobile view validation
 * Description: Verify responsiveness in mobile view
 */
test('TC_87: Mobile view validation', { annotation: { type: 'description', description: 'Verify responsiveness in mobile view' } }, async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 });
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await expect(page.getByText('Welcome to VMS')).toBeVisible();
});
