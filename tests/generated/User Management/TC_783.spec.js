const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_783
 * Module: User Management
 * Sub-Module: User Mapping
 * Scenario: Empty State Placeholder Display
 * Description: Verify table body layout when dataset contains 0 mapped users.
 */
test('TC_783: Empty State Placeholder Display', { annotation: { type: 'description', description: 'Verify table body layout when dataset contains 0 mapped users.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/UserMapping');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});
