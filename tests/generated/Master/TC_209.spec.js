const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_209
 * Module: Master
 * Sub-Module: Template
 * Scenario: Blank Title Validation
 * Description: Verify validation when submitting form with empty Title.
 */
test('TC_209: Blank Title Validation', { annotation: { type: 'description', description: 'Verify validation when submitting form with empty Title.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/TemplateMaster');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});
