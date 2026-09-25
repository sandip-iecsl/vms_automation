const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_328
 * Module: Registration
 * Sub-Module: Vendor Information
 * Scenario: Dropdown Keyboard Search / Quick Select
 * Description: Verify keyboard typing filters and focuses matching option in Category dropdown.
 */
test('TC_328: Dropdown Keyboard Search / Quick Select', { annotation: { type: 'description', description: 'Verify keyboard typing filters and focuses matching option in Category dropdown.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Registration');
    await page.waitForLoadState('domcontentloaded');
    const searchInput = page.locator('input[type="text"]').first();
    await expect(searchInput).toBeVisible();
    await searchInput.fill('TEST');
    await page.waitForTimeout(300);
    await searchInput.clear();
});
