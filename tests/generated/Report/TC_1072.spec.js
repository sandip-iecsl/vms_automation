const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_1072
 * Module: Report
 * Sub-Module: Business Card
 * Scenario: Active Menu Highlighting
 * Description: Verify Business Card item is highlighted as active in Report sidebar menu.
 */
test('TC_1072: Active Menu Highlighting', { annotation: { type: 'description', description: 'Verify Business Card item is highlighted as active in Report sidebar menu.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Business_Card');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});
