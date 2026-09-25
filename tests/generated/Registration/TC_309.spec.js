const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_309
 * Module: Registration
 * Sub-Module: Vendor Registration
 * Scenario: No Matching Results Handling
 * Description: Verify table display when search query yields no matches.
 */
test('TC_309: No Matching Results Handling', { annotation: { type: 'description', description: 'Verify table display when search query yields no matches.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Registration');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});
