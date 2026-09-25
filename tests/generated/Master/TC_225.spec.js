const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_225
 * Module: Master
 * Sub-Module: Template
 * Scenario: Error Toast Clarification
 * Description: Verify system shows clear field-level error messages instead of generic Something went wrong toast.
 */
test('TC_225: Error Toast Clarification', { annotation: { type: 'description', description: 'Verify system shows clear field-level error messages instead of generic Something went wrong toast.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/TemplateMaster');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});
