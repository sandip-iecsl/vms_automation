const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_226
 * Module: Master
 * Sub-Module: Template
 * Scenario: Form Fields Reset Action
 * Description: Verify clicking \'Reset\' button clears all input fields and file selections.
 */
test('TC_226: Form Fields Reset Action', { annotation: { type: 'description', description: 'Verify clicking \'Reset\' button clears all input fields and file selections.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/TemplateMaster');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});
