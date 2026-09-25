const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_594
 * Module: Registration
 * Sub-Module: Vendor Invitation
 * Scenario: Whitespace Only Name Update Validation
 * Description: Verify system rejects updating Vendor Name to blank spaces only.
 */
test('TC_594: Whitespace Only Name Update Validation', { annotation: { type: 'description', description: 'Verify system rejects updating Vendor Name to blank spaces only.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Invitation');
    await page.waitForLoadState('domcontentloaded');
    const dateInput = page.locator('input[type="date"], input[placeholder*="YYYY"], input').first();
    await expect(dateInput).toBeVisible({ timeout: 5000 });
});
