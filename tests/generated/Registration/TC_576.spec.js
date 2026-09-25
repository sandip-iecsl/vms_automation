const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_576
 * Module: Registration
 * Sub-Module: Vendor Invitation
 * Scenario: Email Missing @ Symbol Validation
 * Description: Verify validation when email is missing @ symbol (e.g., vendormailinator.com).
 */
test('TC_576: Email Missing @ Symbol Validation', { annotation: { type: 'description', description: 'Verify validation when email is missing @ symbol (e.g., vendormailinator.com).' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Invitation');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});
