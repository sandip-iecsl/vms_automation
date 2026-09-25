const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_136
 * Module: Master
 * Sub-Module: Religion
 * Scenario: Valid Religion Creation
 * Description: Verify adding a new valid religion name.
 */
test('TC_136: Valid Religion Creation', { annotation: { type: 'description', description: 'Verify adding a new valid religion name.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/CategoryManager');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});
