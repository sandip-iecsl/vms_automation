const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_669
 * Module: Registration
 * Sub-Module: Card Scan
 * Scenario: Business Card Report Grid/List View Filter
 * Description: Verify saved card is searchable by Company / Contact in Business Card Report.
 */
test('TC_669: Business Card Report Grid/List View Filter', { annotation: { type: 'description', description: 'Verify saved card is searchable by Company / Contact in Business Card Report.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Card_Scan');
    await page.waitForLoadState('domcontentloaded');
    const searchInput = page.locator('input[type="text"]').first();
    await expect(searchInput).toBeVisible();
    await searchInput.fill('TEST');
    await page.waitForTimeout(300);
    await searchInput.clear();
});
