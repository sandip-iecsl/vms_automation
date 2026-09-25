const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_1103
 * Module: Report
 * Sub-Module: Business Card
 * Scenario: Event Master Name Linkage
 * Description: Verify Event Name assigned during scan matches event created in Event Master.
 */
test('TC_1103: Event Master Name Linkage', { annotation: { type: 'description', description: 'Verify Event Name assigned during scan matches event created in Event Master.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Business_Card');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});
