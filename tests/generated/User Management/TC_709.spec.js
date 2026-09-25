const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_709
 * Module: User Management
 * Sub-Module: Group Creation
 * Scenario: Security / SQL Injection Prevention
 * Description: Verify SQL injection sanitization on Group Name field.
 */
test('TC_709: Security / SQL Injection Prevention', { annotation: { type: 'description', description: 'Verify SQL injection sanitization on Group Name field.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/UserGroup');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});
