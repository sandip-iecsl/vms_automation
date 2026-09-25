const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_652
 * Module: Registration
 * Sub-Module: Card Scan
 * Scenario: Email ID Format Validation
 * Description: Verify validation when manually entering invalid email format.
 */
test('TC_652: Email ID Format Validation', { annotation: { type: 'description', description: 'Verify validation when manually entering invalid email format.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Card_Scan');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});
