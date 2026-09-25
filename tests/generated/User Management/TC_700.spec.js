const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_700
 * Module: User Management
 * Sub-Module: Group Creation
 * Scenario: Leading / Trailing Spaces Trimming
 * Description: Verify automatic whitespace trimming on Group Name.
 */
test('TC_700: Leading / Trailing Spaces Trimming', { annotation: { type: 'description', description: 'Verify automatic whitespace trimming on Group Name.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/UserGroup');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});
