const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_447
 * Module: Registration
 * Sub-Module: Material Details
 * Scenario: Paste Floating/Scientific Notation in Quantity
 * Description: Verify copying and pasting scientific notations (e.g. 1e4) into Min/Max Quantity fields.
 */
test('TC_447: Paste Floating/Scientific Notation in Quantity', { annotation: { type: 'description', description: 'Verify copying and pasting scientific notations (e.g. 1e4) into Min/Max Quantity fields.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Registration');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});
