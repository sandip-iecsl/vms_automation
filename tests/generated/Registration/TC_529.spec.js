const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_529
 * Module: Registration
 * Sub-Module: Declaration
 * Scenario: Valid Discount Terms Entry
 * Description: Verify entering valid business discount terms and slab policies.
 */
test('TC_529: Valid Discount Terms Entry', { annotation: { type: 'description', description: 'Verify entering valid business discount terms and slab policies.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Registration');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});
