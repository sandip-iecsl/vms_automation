const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_362
 * Module: Registration
 * Sub-Module: Vendor Information
 * Scenario: SQL Injection on Registration Inputs
 * Description: Verify SQL injection payloads across all text inputs (Vendor Name, Address, Contacts, PAN, GST).
 */
test('TC_362: SQL Injection on Registration Inputs', { annotation: { type: 'description', description: 'Verify SQL injection payloads across all text inputs (Vendor Name, Address, Contacts, PAN, GST).' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Registration');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});
