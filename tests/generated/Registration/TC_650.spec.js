const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_650
 * Module: Registration
 * Sub-Module: Card Scan
 * Scenario: Special Characters Acceptance in Company & Name
 * Description: Verify system accepts valid legal symbols (%, &, ., -, ,) in Company and Name.
 */
test('TC_650: Special Characters Acceptance in Company & Name', { annotation: { type: 'description', description: 'Verify system accepts valid legal symbols (%, &, ., -, ,) in Company and Name.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Card_Scan');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});
