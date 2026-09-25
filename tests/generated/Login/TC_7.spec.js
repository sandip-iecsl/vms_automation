const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_7
 * Module: Login
 * Sub-Module: UI
 * Scenario: Tab Key Traversal
 * Description: Verify keyboard tab sequence navigates form fields in logical order.
 */
test('TC_7: Tab Key Traversal', { annotation: { type: 'description', description: 'Verify keyboard tab sequence navigates form fields in logical order.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await page.locator('input[name="username"]').focus();
    await page.keyboard.press('Tab');
    await expect(page.locator('input[name="password"]')).toBeFocused();
});
