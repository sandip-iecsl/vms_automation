const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_17
 * Module: Login
 * Sub-Module: User name
 * Scenario: Max Character Length Boundary
 * Description: Verify system boundary handling when inputting more than 100 characters in Username.
 */
test('TC_17: Max Character Length Boundary', { annotation: { type: 'description', description: 'Verify system boundary handling when inputting more than 100 characters in Username.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    const longStr = 'a'.repeat(150);
    await page.locator('input[name="username"]').fill(longStr);
    await expect(page.locator('input[name="username"]')).toBeVisible();
});
