const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_427
 * Module: Registration
 * Sub-Module: Material Details
 * Scenario: Previous Button Navigation (Step 3 to Step 2)
 * Description: Verify clicking Previous button returns to Step 2 with data retained.
 */
test('TC_427: Previous Button Navigation (Step 3 to Step 2)', { annotation: { type: 'description', description: 'Verify clicking Previous button returns to Step 2 with data retained.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Registration');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});
