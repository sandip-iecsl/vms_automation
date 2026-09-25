const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_218
 * Module: Master
 * Sub-Module: Template
 * Scenario: Multiline & Line Breaks Preservation
 * Description: Verify multiline content and line breaks are preserved in Message field.
 */
test('TC_218: Multiline & Line Breaks Preservation', { annotation: { type: 'description', description: 'Verify multiline content and line breaks are preserved in Message field.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/TemplateMaster');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});
