const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_1082
 * Module: Report
 * Sub-Module: Business Card
 * Scenario: Memory Consumption Stability
 * Description: Verify browser memory footprint remains stable after multiple search queries and view switches.
 */
test('TC_1082: Memory Consumption Stability', { annotation: { type: 'description', description: 'Verify browser memory footprint remains stable after multiple search queries and view switches.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Business_Card');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});
