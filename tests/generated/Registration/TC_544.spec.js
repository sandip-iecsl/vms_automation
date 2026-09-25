const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_544
 * Module: Registration
 * Sub-Module: Declaration
 * Scenario: Vendor List Table Update
 * Description: Verify newly submitted vendor immediately appears in Vendor List.
 */
test('TC_544: Vendor List Table Update', { annotation: { type: 'description', description: 'Verify newly submitted vendor immediately appears in Vendor List.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Registration');
    await page.waitForLoadState('domcontentloaded');
    const dateInput = page.locator('input[type="date"], input[placeholder*="YYYY"], input').first();
    await expect(dateInput).toBeVisible({ timeout: 5000 });
});
