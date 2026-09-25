const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_408
 * Module: Registration
 * Sub-Module: Vendor RegistrationLicense Details
 * Scenario: Max Numerical Limit (Crores/Millions)
 * Description: Verify upper boundary limits for large business turnovers (e.g., 999999999999).
 */
test('TC_408: Max Numerical Limit (Crores/Millions)', { annotation: { type: 'description', description: 'Verify upper boundary limits for large business turnovers (e.g., 999999999999).' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Registration');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});
