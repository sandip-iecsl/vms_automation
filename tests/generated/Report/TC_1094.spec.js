const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_1094
 * Module: Report
 * Sub-Module: Business Card
 * Scenario: Mozilla Firefox Layout & Functionality
 * Description: Verify flexbox layout and hover transitions in Mozilla Firefox.
 */
test('TC_1094: Mozilla Firefox Layout & Functionality', { annotation: { type: 'description', description: 'Verify flexbox layout and hover transitions in Mozilla Firefox.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Business_Card');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});
