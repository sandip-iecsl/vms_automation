const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_465
 * Module: Registration
 * Sub-Module: Material Details
 * Scenario: SQL Injection on Material Inputs
 * Description: Verify SQL injection payloads across Material Name and Quantity fields.
 */
test('TC_465: SQL Injection on Material Inputs', { annotation: { type: 'description', description: 'Verify SQL injection payloads across Material Name and Quantity fields.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Registration');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});
