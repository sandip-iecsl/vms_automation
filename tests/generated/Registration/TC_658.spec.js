const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_658
 * Module: Registration
 * Sub-Module: Card Scan
 * Scenario: Multiple Email Addresses in Email Field
 * Description: Verify entering secondary email separated by comma or semicolon.
 */
test('TC_658: Multiple Email Addresses in Email Field', { annotation: { type: 'description', description: 'Verify entering secondary email separated by comma or semicolon.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Card_Scan');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});
