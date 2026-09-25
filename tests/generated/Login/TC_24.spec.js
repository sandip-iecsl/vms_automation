const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_24
 * Module: Login
 * Sub-Module: Remember me
 * Scenario: Checkbox Default State
 * Description: Verify default unchecked state of \'Remember me\' checkbox.
 */
test('TC_24: Checkbox Default State', { annotation: { type: 'description', description: 'Verify default unchecked state of \'Remember me\' checkbox.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
});
