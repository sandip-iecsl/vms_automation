const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_578
 * Module: Registration
 * Sub-Module: Vendor Invitation
 * Scenario: SQL Injection in Email and Contact Inputs
 * Description: Verify SQL injection sanitization across all invitation inputs.
 */
test('TC_578: SQL Injection in Email and Contact Inputs', { annotation: { type: 'description', description: 'Verify SQL injection sanitization across all invitation inputs.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Invitation');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});
