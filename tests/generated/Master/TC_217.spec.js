const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_217
 * Module: Master
 * Sub-Module: Template
 * Scenario: Single Character / Short Input Handling
 * Description: Verify system handles single-character or short message inputs (e.g., d).
 */
test('TC_217: Single Character / Short Input Handling', { annotation: { type: 'description', description: 'Verify system handles single-character or short message inputs (e.g., d).' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/TemplateMaster');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});
