const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_34
 * Module: Login
 * Sub-Module: Vendor Workflow
 * Scenario: Post-Login Multi-Step Progression
 * Description: Verify vendor can navigate through subsequent registration tabs post-login.
 */
test('TC_34: Post-Login Multi-Step Progression', { annotation: { type: 'description', description: 'Verify vendor can navigate through subsequent registration tabs post-login.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
});
