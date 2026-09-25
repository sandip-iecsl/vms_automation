const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_105
 * Module: Master
 * Sub-Module: Category
 * Scenario: Category Manager URL Access
 * Description: Verify Category Manager page loads directly via valid URL.
 */
test('TC_105: Category Manager URL Access', { annotation: { type: 'description', description: 'Verify Category Manager page loads directly via valid URL.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/CategoryManager');
    await page.waitForLoadState('domcontentloaded');
    await expect(page).toHaveURL(new RegExp('/CategoryManager'));
});
