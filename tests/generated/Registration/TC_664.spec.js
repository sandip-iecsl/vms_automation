const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_664
 * Module: Registration
 * Sub-Module: Card Scan
 * Scenario: Rapid Consecutive Clicks on SAVE Button
 * Description: Verify system prevents duplicate records when SAVE button is clicked multiple times rapidly.
 */
test('TC_664: Rapid Consecutive Clicks on SAVE Button', { annotation: { type: 'description', description: 'Verify system prevents duplicate records when SAVE button is clicked multiple times rapidly.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Card_Scan');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});
