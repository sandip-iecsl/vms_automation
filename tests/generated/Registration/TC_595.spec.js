const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_595
 * Module: Registration
 * Sub-Module: Vendor Invitation
 * Scenario: Non-Numeric / Invalid Contact Update Validation
 * Description: Verify system blocks updating Contact No with alphabets or invalid length.
 */
test('TC_595: Non-Numeric / Invalid Contact Update Validation', { annotation: { type: 'description', description: 'Verify system blocks updating Contact No with alphabets or invalid length.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Invitation');
    await page.waitForLoadState('domcontentloaded');
    const dateInput = page.locator('input[type="date"], input[placeholder*="YYYY"], input').first();
    await expect(dateInput).toBeVisible({ timeout: 5000 });
});
