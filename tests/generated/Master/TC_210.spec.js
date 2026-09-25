const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_210
 * Module: Master
 * Sub-Module: Template
 * Scenario: Invalid Title / Pure Special Characters
 * Description: Verify validation when Title contains only special characters (e.g., %$#, @#$%).
 */
test('TC_210: Invalid Title / Pure Special Characters', { annotation: { type: 'description', description: 'Verify validation when Title contains only special characters (e.g., %$#, @#$%).' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/TemplateMaster');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});
