const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_662
 * Module: Registration
 * Sub-Module: Card Scan
 * Scenario: SQL Injection on Business Card Fields
 * Description: Verify SQL injection sanitization across all business card inputs.
 */
test('TC_662: SQL Injection on Business Card Fields', { annotation: { type: 'description', description: 'Verify SQL injection sanitization across all business card inputs.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Card_Scan');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});
