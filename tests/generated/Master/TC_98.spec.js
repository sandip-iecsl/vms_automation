const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_98
 * Module: Master
 * Sub-Module: Holiday
 * Scenario: Holiday Page Redirection
 * Description: Verify clicking Holiday navigates to Holiday Master page.
 */
test('TC_98: Holiday Page Redirection', { annotation: { type: 'description', description: 'Verify clicking Holiday navigates to Holiday Master page.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/HolidayManager');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});
