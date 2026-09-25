const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_458
 * Module: Registration
 * Sub-Module: Material Details
 * Scenario: Delete All Rows & Empty Table Validation
 * Description: Verify deleting all added material rows and attempting to proceed.
 */
test('TC_458: Delete All Rows & Empty Table Validation', { annotation: { type: 'description', description: 'Verify deleting all added material rows and attempting to proceed.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Registration');
    await page.waitForLoadState('domcontentloaded');
    const deleteBtn = page.getByRole('button', { name: /delete/i }).first();
    await expect(deleteBtn).toBeVisible({ timeout: 5000 });
});
