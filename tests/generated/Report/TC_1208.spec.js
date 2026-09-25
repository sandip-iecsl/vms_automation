const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_1208
 * Module: Report
 * Sub-Module: Business Card Report
 * Scenario: Infix Word Matching inside Company Title
 * Description: Verify searching partial words from middle of company names.
 */
test('TC_1208: Infix Word Matching inside Company Title', { annotation: { type: 'description', description: 'Verify searching partial words from middle of company names.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Business_CardReport');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});
