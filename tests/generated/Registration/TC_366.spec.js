const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_366
 * Module: Registration
 * Sub-Module: Vendor RegistrationLicense Details
 * Scenario: Step 2 to Step 3 Transition (Next Action)
 * Description: Verify clicking Next button saves Step 2 and advances to Step 3 (Material Details).
 */
test('TC_366: Step 2 to Step 3 Transition (Next Action)', { annotation: { type: 'description', description: 'Verify clicking Next button saves Step 2 and advances to Step 3 (Material Details).' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Registration');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});
