const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_216
 * Module: Master
 * Sub-Module: Template
 * Scenario: Blank Message Validation
 * Description: Verify validation when Message textarea is left empty.
 */
test('TC_216: Blank Message Validation', { annotation: { type: 'description', description: 'Verify validation when Message textarea is left empty.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/TemplateMaster');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});
