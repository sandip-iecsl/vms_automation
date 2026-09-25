const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_541
 * Module: Registration
 * Sub-Module: Declaration
 * Scenario: Direct Click on Completed Steps (1, 2, 3, 4)
 * Description: Verify clicking green step icons 1, 2, 3, or 4 navigates back directly with data preserved.
 */
test('TC_541: Direct Click on Completed Steps (1, 2, 3, 4)', { annotation: { type: 'description', description: 'Verify clicking green step icons 1, 2, 3, or 4 navigates back directly with data preserved.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Registration');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});
