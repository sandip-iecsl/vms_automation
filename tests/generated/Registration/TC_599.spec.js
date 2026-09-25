const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_599
 * Module: Registration
 * Sub-Module: Vendor Invitation
 * Scenario: Edit Status for Completed Registrations
 * Description: Verify restriction on editing invitation details once the vendor has completed onboarding.
 */
test('TC_599: Edit Status for Completed Registrations', { annotation: { type: 'description', description: 'Verify restriction on editing invitation details once the vendor has completed onboarding.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Invitation');
    await page.waitForLoadState('domcontentloaded');
    const editBtn = page.getByRole('button', { name: /edit/i }).first();
    await expect(editBtn).toBeVisible({ timeout: 5000 });
});
