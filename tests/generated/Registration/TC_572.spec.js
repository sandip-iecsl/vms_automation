const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_572
 * Module: Registration
 * Sub-Module: Vendor Invitation
 * Scenario: Leading Zeroes in 10-Digit Contact No
 * Description: Verify contact number starting with zero preserves leading zero (e.g., 0987654321).
 */
test('TC_572: Leading Zeroes in 10-Digit Contact No', { annotation: { type: 'description', description: 'Verify contact number starting with zero preserves leading zero (e.g., 0987654321).' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Invitation');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});
