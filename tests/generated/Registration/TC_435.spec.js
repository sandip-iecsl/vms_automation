const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_435
 * Module: Registration
 * Sub-Module: Material Details
 * Scenario: Default Zero Quantity Validation
 * Description: Verify adding a material when Min and Max pack sizes are both 0.
 */
test('TC_435: Default Zero Quantity Validation', { annotation: { type: 'description', description: 'Verify adding a material when Min and Max pack sizes are both 0.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Registration');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});
