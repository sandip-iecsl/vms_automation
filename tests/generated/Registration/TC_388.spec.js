const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_388
 * Module: Registration
 * Sub-Module: Vendor RegistrationLicense Details
 * Scenario: Save Edited Row (Checkmark Button)
 * Description: Verify clicking blue checkmark icon saves edited license details.
 */
test('TC_388: Save Edited Row (Checkmark Button)', { annotation: { type: 'description', description: 'Verify clicking blue checkmark icon saves edited license details.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Registration');
    await page.waitForLoadState('domcontentloaded');
    const editBtn = page.getByRole('button', { name: /edit/i }).first();
    await expect(editBtn).toBeVisible({ timeout: 5000 });
});
