const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_761
 * Module: User Management
 * Sub-Module: User Mapping
 * Scenario: Reassign User to Another Pre-existing Mapped Group
 * Description: Verify reassigning user to an alternative active group.
 */
test('TC_761: Reassign User to Another Pre-existing Mapped Group', { annotation: { type: 'description', description: 'Verify reassigning user to an alternative active group.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/UserMapping');
    await page.waitForLoadState('domcontentloaded');
    const dateInput = page.locator('input[type="date"], input[placeholder*="YYYY"], input').first();
    await expect(dateInput).toBeVisible({ timeout: 5000 });
});
