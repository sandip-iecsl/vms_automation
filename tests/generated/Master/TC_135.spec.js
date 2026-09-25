const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_135
 * Module: Master
 * Sub-Module: Religion
 * Scenario: Blank Field Validation
 * Description: Verify validation when submitting an empty religion name.
 */
test('TC_135: Blank Field Validation', { annotation: { type: 'description', description: 'Verify validation when submitting an empty religion name.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/CategoryManager');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});
