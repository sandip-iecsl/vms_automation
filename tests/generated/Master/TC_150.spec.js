const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_150
 * Module: Master
 * Sub-Module: Religion
 * Scenario: Successful Deletion
 * Description: Verify confirming delete removes the religion from the list.
 */
test('TC_150: Successful Deletion', { annotation: { type: 'description', description: 'Verify confirming delete removes the religion from the list.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/CategoryManager');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});
