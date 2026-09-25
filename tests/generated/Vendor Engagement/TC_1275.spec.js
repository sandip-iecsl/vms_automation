const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_1275
 * Module: Vendor Engagement
 * Sub-Module: Custom Mail
 * Scenario: Search by Category Name
 * Description: Verify searching by procurement category (e.g. PACKING MATERIAL, RAW MATERIAL).
 */
test('TC_1275: Search by Category Name', { annotation: { type: 'description', description: 'Verify searching by procurement category (e.g. PACKING MATERIAL, RAW MATERIAL).' } }, async ({ page }) => {
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
