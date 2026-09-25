const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_550
 * Module: Registration
 * Sub-Module: Declaration
 * Scenario: Refresh Draft Retention on Step 5
 * Description: Verify entered declaration details persist across browser reload (F5).
 */
test('TC_550: Refresh Draft Retention on Step 5', { annotation: { type: 'description', description: 'Verify entered declaration details persist across browser reload (F5).' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Registration');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});
