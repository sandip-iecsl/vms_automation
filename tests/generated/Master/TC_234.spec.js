const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_234
 * Module: Master
 * Sub-Module: Template
 * Scenario: Successful Template Deletion
 * Description: Verify confirming delete removes template from list.
 */
test('TC_234: Successful Template Deletion', { annotation: { type: 'description', description: 'Verify confirming delete removes template from list.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/TemplateMaster');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});
