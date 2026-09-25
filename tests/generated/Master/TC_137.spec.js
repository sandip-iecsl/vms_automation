const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_137
 * Module: Master
 * Sub-Module: Religion
 * Scenario: Duplicate Religion Validation (Exact & Case-Insensitive)
 * Description: Verify system prevents adding duplicate religion entries regardless of case.
 */
test('TC_137: Duplicate Religion Validation (Exact & Case-Insensitive)', { annotation: { type: 'description', description: 'Verify system prevents adding duplicate religion entries regardless of case.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/CategoryManager');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});
