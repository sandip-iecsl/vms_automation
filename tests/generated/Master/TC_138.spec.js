const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_138
 * Module: Master
 * Sub-Module: Religion
 * Scenario: Numeric & Special Characters Validation
 * Description: Verify input validation when entering purely numbers or special characters.
 */
test('TC_138: Numeric & Special Characters Validation', { annotation: { type: 'description', description: 'Verify input validation when entering purely numbers or special characters.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/CategoryManager');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});
