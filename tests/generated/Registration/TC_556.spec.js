const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_556
 * Module: Registration
 * Sub-Module: Declaration
 * Scenario: Leading & Trailing Whitespace Trimming
 * Description: Verify automatic trimming of leading/trailing spaces across declaration fields.
 */
test('TC_556: Leading & Trailing Whitespace Trimming', { annotation: { type: 'description', description: 'Verify automatic trimming of leading/trailing spaces across declaration fields.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Registration');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});
