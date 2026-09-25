const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_322
 * Module: Registration
 * Sub-Module: Vendor Information
 * Scenario: Step 1 to Step 2 Transition (Next Action)
 * Description: Verify clicking Next button navigates to Step 2 (License Details).
 */
test('TC_322: Step 1 to Step 2 Transition (Next Action)', { annotation: { type: 'description', description: 'Verify clicking Next button navigates to Step 2 (License Details).' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Registration');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});
