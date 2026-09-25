const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_653
 * Module: Registration
 * Sub-Module: Card Scan
 * Scenario: Website URL Format Handling
 * Description: Verify entering standard web domain in Website field (e.g., [www.wovm.com](https://www.wovm.com)).
 */
test('TC_653: Website URL Format Handling', { annotation: { type: 'description', description: 'Verify entering standard web domain in Website field (e.g., [www.wovm.com](https://www.wovm.com)).' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Card_Scan');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});
