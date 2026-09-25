const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_32
 * Module: Login
 * Sub-Module: Vendor Workflow
 * Scenario: Invited Vendor First-Time Login
 * Description: Verify invited vendor can log in using credentials received via email invitation.
 */
test('TC_32: Invited Vendor First-Time Login', { annotation: { type: 'description', description: 'Verify invited vendor can log in using credentials received via email invitation.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
});
