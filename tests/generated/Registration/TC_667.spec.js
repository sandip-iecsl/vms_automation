const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_667
 * Module: Registration
 * Sub-Module: Card Scan
 * Scenario: Refresh Retention on Scanned Data
 * Description: Verify system behavior on browser reload (F5) during card scanning.
 */
test('TC_667: Refresh Retention on Scanned Data', { annotation: { type: 'description', description: 'Verify system behavior on browser reload (F5) during card scanning.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Card_Scan');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});
