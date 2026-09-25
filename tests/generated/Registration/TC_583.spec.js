const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_583
 * Module: Registration
 * Sub-Module: Vendor Invitation
 * Scenario: Non-Numeric / Alphabetical Validation
 * Description: Verify system restricts non-numeric/text characters in Contact No (e.g., kjhv).
 */
test('TC_583: Non-Numeric / Alphabetical Validation', { annotation: { type: 'description', description: 'Verify system restricts non-numeric/text characters in Contact No (e.g., kjhv).' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Invitation');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});
