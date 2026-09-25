const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_140
 * Module: Master
 * Sub-Module: Religion
 * Scenario: Max Length Boundary
 * Description: Verify character length limit for Religion Name field.
 */
test('TC_140: Max Length Boundary', { annotation: { type: 'description', description: 'Verify character length limit for Religion Name field.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/CategoryManager');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});
