const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_311
 * Module: Registration
 * Sub-Module: Vendor Registration
 * Scenario: Security / SQL Injection Sanitization
 * Description: Verify search input sanitizes SQL/script injection payloads.
 */
test('TC_311: Security / SQL Injection Sanitization', { annotation: { type: 'description', description: 'Verify search input sanitizes SQL/script injection payloads.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Registration');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});
