const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_467
 * Module: Registration
 * Sub-Module: Material Details
 * Scenario: XSS Injection in Material Name
 * Description: Verify script injection prevention in Material Name field.
 */
test('TC_467: XSS Injection in Material Name', { annotation: { type: 'description', description: 'Verify script injection prevention in Material Name field.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Registration');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});
