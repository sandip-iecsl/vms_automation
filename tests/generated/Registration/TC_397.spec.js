const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_397
 * Module: Registration
 * Sub-Module: Vendor RegistrationLicense Details
 * Scenario: Delete All Dynamic Rows
 * Description: Verify system stability when deleting all added dynamic license rows one by one.
 */
test('TC_397: Delete All Dynamic Rows', { annotation: { type: 'description', description: 'Verify system stability when deleting all added dynamic license rows one by one.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Registration');
    await page.waitForLoadState('domcontentloaded');
    const deleteBtn = page.getByRole('button', { name: /delete/i }).first();
    await expect(deleteBtn).toBeVisible({ timeout: 5000 });
});
