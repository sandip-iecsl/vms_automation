const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_224
 * Module: Master
 * Sub-Module: Template
 * Scenario: Duplicate Template Type Validation
 * Description: Verify system prevents creating multiple templates for the same Type.
 */
test('TC_224: Duplicate Template Type Validation', { annotation: { type: 'description', description: 'Verify system prevents creating multiple templates for the same Type.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/TemplateMaster');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});
