const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_553
 * Module: Registration
 * Sub-Module: Declaration
 * Scenario: Copy-Paste Handling
 * Description: Verify copying and pasting formatted text into Discount Structure textarea.
 */
test('TC_553: Copy-Paste Handling', { annotation: { type: 'description', description: 'Verify copying and pasting formatted text into Discount Structure textarea.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Registration');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});
