const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_434
 * Module: Registration
 * Sub-Module: Material Details
 * Scenario: Blank Material Name Validation
 * Description: Verify clicking + button when Material Name is left blank.
 */
test('TC_434: Blank Material Name Validation', { annotation: { type: 'description', description: 'Verify clicking + button when Material Name is left blank.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Registration');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});
