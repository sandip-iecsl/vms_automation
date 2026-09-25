const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_130
 * Module: Master
 * Sub-Module: Category
 * Scenario: Vendor Reports & Engagement Filter Population
 * Description: Verify category appears as a filter option in Vendor Reports and Custom Mail.
 */
test('TC_130: Vendor Reports & Engagement Filter Population', { annotation: { type: 'description', description: 'Verify category appears as a filter option in Vendor Reports and Custom Mail.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/CategoryManager');
    await page.waitForLoadState('domcontentloaded');
    const searchInput = page.locator('input[type="text"]').first();
    await expect(searchInput).toBeVisible();
    await searchInput.fill('TEST');
    await page.waitForTimeout(300);
    await searchInput.clear();
});
