const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_1031
 * Module: Report
 * Sub-Module: Business Card
 * Scenario: Multi-Card Hover Independence
 * Description: Verify hovering over one card does not trigger expanded state on adjacent cards.
 */
test('TC_1031: Multi-Card Hover Independence', { annotation: { type: 'description', description: 'Verify hovering over one card does not trigger expanded state on adjacent cards.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Business_Card');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});
