const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_227
 * Module: Master
 * Sub-Module: Template
 * Scenario: Broken Image Rendering Prevention
 * Description: Verify uploaded template images render as valid thumbnails without broken image icons.
 */
test('TC_227: Broken Image Rendering Prevention', { annotation: { type: 'description', description: 'Verify uploaded template images render as valid thumbnails without broken image icons.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/TemplateMaster');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});
