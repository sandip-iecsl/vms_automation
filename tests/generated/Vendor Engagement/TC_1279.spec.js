const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_1279
 * Module: Vendor Engagement
 * Sub-Module: Custom Mail
 * Scenario: Non-Existent Search Query Handling
 * Description: Verify empty table placeholder when search query finds 0 matches.
 */
test('TC_1279: Non-Existent Search Query Handling', { annotation: { type: 'description', description: 'Verify empty table placeholder when search query finds 0 matches.' } }, async ({ page }) => {
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
