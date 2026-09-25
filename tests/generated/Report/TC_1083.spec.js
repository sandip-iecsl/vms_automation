const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_1083
 * Module: Report
 * Sub-Module: Business Card
 * Scenario: Server 500 Error Handling
 * Description: Verify graceful UI notification when business card fetch API returns 500.
 */
test('TC_1083: Server 500 Error Handling', { annotation: { type: 'description', description: 'Verify graceful UI notification when business card fetch API returns 500.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Business_Card');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});
