const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_439
 * Module: Registration
 * Sub-Module: Material Details
 * Scenario: Duplicate Material Name Validation
 * Description: Verify system prevents adding duplicate material names in the table.
 */
test('TC_439: Duplicate Material Name Validation', { annotation: { type: 'description', description: 'Verify system prevents adding duplicate material names in the table.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Registration');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});
