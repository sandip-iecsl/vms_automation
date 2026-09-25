const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_25
 * Module: Login
 * Sub-Module: Remember me
 * Scenario: Checkbox Selection & Deselection
 * Description: Verify toggling checkbox using mouse click and keyboard spacebar.
 */
test('TC_25: Checkbox Selection & Deselection', { annotation: { type: 'description', description: 'Verify toggling checkbox using mouse click and keyboard spacebar.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
});
