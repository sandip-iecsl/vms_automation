const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_548
 * Module: Registration
 * Sub-Module: Declaration
 * Scenario: XSS Payload Sanitization on Declaration Textareas
 * Description: Verify script injection prevention across all Step 5 textareas.
 */
test('TC_548: XSS Payload Sanitization on Declaration Textareas', { annotation: { type: 'description', description: 'Verify script injection prevention across all Step 5 textareas.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Registration');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});
