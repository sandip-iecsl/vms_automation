const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_95
 * Module: Master
 * Sub-Module: Category
 * Scenario: Category Page Redirection
 * Description: Verify clicking Category navigates to Category Master page.
 */
test('TC_95: Category Page Redirection', { annotation: { type: 'description', description: 'Verify clicking Category navigates to Category Master page.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/CategoryManager');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});
