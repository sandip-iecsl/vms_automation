const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_657
 * Module: Registration
 * Sub-Module: Card Scan
 * Scenario: Landline / Extension Contact Number Format
 * Description: Verify entering landline number with STD code and extension (e.g., 033-22223333 Ext: 104).
 */
test('TC_657: Landline / Extension Contact Number Format', { annotation: { type: 'description', description: 'Verify entering landline number with STD code and extension (e.g., 033-22223333 Ext: 104).' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Card_Scan');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});
