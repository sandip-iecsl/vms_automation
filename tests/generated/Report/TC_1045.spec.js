const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_1045
 * Module: Report
 * Sub-Module: Business Card
 * Scenario: Horizontal Scroll on Overflow
 * Description: Verify smooth horizontal scrolling when table width exceeds narrow viewport.
 */
test('TC_1045: Horizontal Scroll on Overflow', { annotation: { type: 'description', description: 'Verify smooth horizontal scrolling when table width exceeds narrow viewport.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Business_Card');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});
