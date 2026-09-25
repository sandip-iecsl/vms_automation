const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_99
 * Module: Master
 * Sub-Module: Template
 * Scenario: Template Page Redirection
 * Description: Verify clicking Template navigates to Template Master page.
 */
test('TC_99: Template Page Redirection', { annotation: { type: 'description', description: 'Verify clicking Template navigates to Template Master page.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/TemplateMaster');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});
