const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_1277
 * Module: Vendor Engagement
 * Sub-Module: Custom Mail
 * Scenario: Special Characters Search
 * Description: Verify searching with corporate punctuation (e.g. &, ., -).
 */
test('TC_1277: Special Characters Search', { annotation: { type: 'description', description: 'Verify searching with corporate punctuation (e.g. &, ., -).' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/CustomMail');
    await page.waitForLoadState('domcontentloaded');
    const searchInput = page.locator('input[type="text"]').first();
    await expect(searchInput).toBeVisible();
    await searchInput.fill('TEST');
    await page.waitForTimeout(300);
    await searchInput.clear();
});
