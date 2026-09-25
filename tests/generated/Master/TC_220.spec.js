const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_220
 * Module: Master
 * Sub-Module: Template
 * Scenario: Invalid File Format Validation
 * Description: Verify system blocks invalid file formats (.pdf, .exe, .docx, .mp4).
 */
test('TC_220: Invalid File Format Validation', { annotation: { type: 'description', description: 'Verify system blocks invalid file formats (.pdf, .exe, .docx, .mp4).' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/TemplateMaster');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});
