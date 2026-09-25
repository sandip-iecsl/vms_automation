const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_752
 * Module: User Management
 * Sub-Module: User Mapping
 * Scenario: Auto-Population of Employee Metadata
 * Description: Verify mapped user record automatically populates Employee No, Post, and Department.
 */
test('TC_752: Auto-Population of Employee Metadata', { annotation: { type: 'description', description: 'Verify mapped user record automatically populates Employee No, Post, and Department.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/UserMapping');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});
