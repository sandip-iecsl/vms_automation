const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_88
 * Module: Login
 * Sub-Module: Change/Reset Password
 * Scenario: Tablet view validation
 * Description: Verify responsiveness in tablet view
 */
test('TC_88: Tablet view validation', { annotation: { type: 'description', description: 'Verify responsiveness in tablet view' } }, async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 });
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await expect(page.getByText('Welcome to VMS')).toBeVisible();
});
