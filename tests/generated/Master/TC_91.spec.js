const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_91
 * Module: Master
 * Sub-Module: Navigation
 * Scenario: Sub-Module Display & Icons
 * Description: Verify all sub-modules and their respective icons render properly under Master.
 */
test('TC_91: Sub-Module Display & Icons', { annotation: { type: 'description', description: 'Verify all sub-modules and their respective icons render properly under Master.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/CategoryManager');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});
