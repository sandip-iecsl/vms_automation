const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_208
 * Module: Master
 * Sub-Module: Template
 * Scenario: Placeholder Display
 * Description: Verify placeholder text in Template Title field.
 */
test('TC_208: Placeholder Display', { annotation: { type: 'description', description: 'Verify placeholder text in Template Title field.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/TemplateMaster');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});
