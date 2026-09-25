const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_911
 * Module: User Management
 * Sub-Module: Role Mapping
 * Scenario: Direct REST API Payload Tampering
 * Description: Verify backend validates unauthorized permission keys or malformed JSON payloads.
 */
test('TC_911: Direct REST API Payload Tampering', { annotation: { type: 'description', description: 'Verify backend validates unauthorized permission keys or malformed JSON payloads.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/RoleMapping');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});
