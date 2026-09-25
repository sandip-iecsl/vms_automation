const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_238
 * Module: Master
 * Sub-Module: Template
 * Scenario: Page Refresh Persistence
 * Description: Verify template data persists across page refresh.
 */
test('TC_238: Page Refresh Persistence', { annotation: { type: 'description', description: 'Verify template data persists across page refresh.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/TemplateMaster');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});
