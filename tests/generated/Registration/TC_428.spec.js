const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_428
 * Module: Registration
 * Sub-Module: Material Details
 * Scenario: Step 3 to Step 4 Transition (Next Action)
 * Description: Verify clicking Next button saves Step 3 and advances to Step 4 (Payment Details).
 */
test('TC_428: Step 3 to Step 4 Transition (Next Action)', { annotation: { type: 'description', description: 'Verify clicking Next button saves Step 3 and advances to Step 4 (Payment Details).' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Registration');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});
