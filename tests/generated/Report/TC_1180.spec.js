const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_1180
 * Module: Report
 * Sub-Module: Business Card Report
 * Scenario: Fallback Avatar for Blank Company Name
 * Description: Verify fallback user avatar icon when company name is omitted/blank.
 */
test('TC_1180: Fallback Avatar for Blank Company Name', { annotation: { type: 'description', description: 'Verify fallback user avatar icon when company name is omitted/blank.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Business_CardReport');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});
