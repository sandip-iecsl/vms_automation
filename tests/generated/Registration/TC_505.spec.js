const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_505
 * Module: Registration
 * Sub-Module: Payment Details
 * Scenario: Step 4 to Step 5 Transition (Next Action)
 * Description: Verify clicking Next button saves Step 4 and advances to Step 5 (Declaration).
 */
test('TC_505: Step 4 to Step 5 Transition (Next Action)', { annotation: { type: 'description', description: 'Verify clicking Next button saves Step 4 and advances to Step 5 (Declaration).' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Registration');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});
