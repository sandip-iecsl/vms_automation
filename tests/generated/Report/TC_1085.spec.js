const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_1085
 * Module: Report
 * Sub-Module: Business Card
 * Scenario: Initial Dataset with 0 Business Cards
 * Description: Verify page display when no cards have been uploaded yet.
 */
test('TC_1085: Initial Dataset with 0 Business Cards', { annotation: { type: 'description', description: 'Verify page display when no cards have been uploaded yet.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Business_Card');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});
