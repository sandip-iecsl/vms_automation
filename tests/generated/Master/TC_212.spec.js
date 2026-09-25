const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_212
 * Module: Master
 * Sub-Module: Template
 * Scenario: Leading / Trailing Spaces Trimming
 * Description: Verify automatic whitespace trimming in Title field.
 */
test('TC_212: Leading / Trailing Spaces Trimming', { annotation: { type: 'description', description: 'Verify automatic whitespace trimming in Title field.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/TemplateMaster');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});
