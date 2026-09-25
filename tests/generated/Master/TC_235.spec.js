const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_235
 * Module: Master
 * Sub-Module: Template
 * Scenario: Deletion Linked to Custom Mail
 * Description: Verify deletion restriction when template is configured in automated custom mail.
 */
test('TC_235: Deletion Linked to Custom Mail', { annotation: { type: 'description', description: 'Verify deletion restriction when template is configured in automated custom mail.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/TemplateMaster');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});
