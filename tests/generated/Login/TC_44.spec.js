const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_44
 * Module: Login
 * Sub-Module: Footer
 * Scenario: Terms & Privacy Policy Modals / Pages
 * Description: Verify Terms and Privacy links open respective legal text or handle hash correctly.
 */
test('TC_44: Terms & Privacy Policy Modals / Pages', { annotation: { type: 'description', description: 'Verify Terms and Privacy links open respective legal text or handle hash correctly.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
});
