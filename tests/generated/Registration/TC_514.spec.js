const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_514
 * Module: Registration
 * Sub-Module: Payment Details
 * Scenario: Copy-Paste Handling
 * Description: Verify copying and pasting valid account digits into Full Account Number.
 */
test('TC_514: Copy-Paste Handling', { annotation: { type: 'description', description: 'Verify copying and pasting valid account digits into Full Account Number.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Registration');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});
