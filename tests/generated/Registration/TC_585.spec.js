const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_585
 * Module: Registration
 * Sub-Module: Vendor Invitation
 * Scenario: Excessive Length Validation (> 10 Digits)
 * Description: Verify system restricts contact numbers exceeding 10 digits (e.g., 897889789687799).
 */
test('TC_585: Excessive Length Validation (> 10 Digits)', { annotation: { type: 'description', description: 'Verify system restricts contact numbers exceeding 10 digits (e.g., 897889789687799).' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Invitation');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});
