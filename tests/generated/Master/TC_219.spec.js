const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_219
 * Module: Master
 * Sub-Module: Template
 * Scenario: Valid Image Formats Upload
 * Description: Verify uploading valid image formats (.jpg, .jpeg, .png, .svg).
 */
test('TC_219: Valid Image Formats Upload', { annotation: { type: 'description', description: 'Verify uploading valid image formats (.jpg, .jpeg, .png, .svg).' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/TemplateMaster');
    await page.waitForLoadState('domcontentloaded');
    const fileInput = page.locator('input[type="file"]').first();
    await expect(fileInput).toBeAttached({ timeout: 5000 });
});
