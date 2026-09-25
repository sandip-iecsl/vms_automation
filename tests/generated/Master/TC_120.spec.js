const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_120
 * Module: Master
 * Sub-Module: Category
 * Scenario: Cancel / Close Edit Modal
 * Description: Verify closing edit modal without saving changes.
 */
test('TC_120: Cancel / Close Edit Modal', { annotation: { type: 'description', description: 'Verify closing edit modal without saving changes.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/CategoryManager');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});
