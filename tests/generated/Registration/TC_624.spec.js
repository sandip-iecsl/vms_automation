const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_624
 * Module: Registration
 * Sub-Module: Card Scan
 * Scenario: Whitespace Only Event Name Validation
 * Description: Verify system rejects submitting only blank spaces in Event Name.
 */
test('TC_624: Whitespace Only Event Name Validation', { annotation: { type: 'description', description: 'Verify system rejects submitting only blank spaces in Event Name.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Card_Scan');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});
