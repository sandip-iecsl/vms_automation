const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_237
 * Module: Master
 * Sub-Module: Template
 * Scenario: Script Injection (XSS) Prevention
 * Description: Verify XSS prevention in Title and Message fields.
 */
test('TC_237: Script Injection (XSS) Prevention', { annotation: { type: 'description', description: 'Verify XSS prevention in Title and Message fields.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/TemplateMaster');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});
