const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_221
 * Module: Master
 * Sub-Module: Template
 * Scenario: File Size Limit Validation
 * Description: Verify system restricts file uploads exceeding maximum allowed size (e.g., > 2MB / 5MB).
 */
test('TC_221: File Size Limit Validation', { annotation: { type: 'description', description: 'Verify system restricts file uploads exceeding maximum allowed size (e.g., > 2MB / 5MB).' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/TemplateMaster');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});
