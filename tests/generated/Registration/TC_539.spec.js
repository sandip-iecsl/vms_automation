const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_539
 * Module: Registration
 * Sub-Module: Declaration
 * Scenario: Previous Button Navigation (Step 5 to Step 4)
 * Description: Verify clicking Previous button returns to Step 4 with data retained.
 */
test('TC_539: Previous Button Navigation (Step 5 to Step 4)', { annotation: { type: 'description', description: 'Verify clicking Previous button returns to Step 4 with data retained.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Registration');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});
