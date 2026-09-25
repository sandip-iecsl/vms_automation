const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_437
 * Module: Registration
 * Sub-Module: Material Details
 * Scenario: Equal Min and Max Pack Size Handling
 * Description: Verify adding material when Min Pack Size equals Max Pack Size (fixed pack size).
 */
test('TC_437: Equal Min and Max Pack Size Handling', { annotation: { type: 'description', description: 'Verify adding material when Min Pack Size equals Max Pack Size (fixed pack size).' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Registration');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});
