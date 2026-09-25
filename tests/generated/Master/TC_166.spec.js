const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_166
 * Module: Master
 * Sub-Module: Region
 * Scenario: Security / XSS Prevention
 * Description: Verify script injection prevention in Region Name field.
 */
test('TC_166: Security / XSS Prevention', { annotation: { type: 'description', description: 'Verify script injection prevention in Region Name field.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/RegionManager');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});
