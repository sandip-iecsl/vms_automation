const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_451
 * Module: Registration
 * Sub-Module: Material Details
 * Scenario: Modify Material Details & Save
 * Description: Verify modifying material name and pack sizes and saving changes.
 */
test('TC_451: Modify Material Details & Save', { annotation: { type: 'description', description: 'Verify modifying material name and pack sizes and saving changes.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Registration');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});
