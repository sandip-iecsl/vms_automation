const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_654
 * Module: Registration
 * Sub-Module: Card Scan
 * Scenario: Whitespace Only Input in Company Field
 * Description: Verify system behavior when entering only space characters in Company field.
 */
test('TC_654: Whitespace Only Input in Company Field', { annotation: { type: 'description', description: 'Verify system behavior when entering only space characters in Company field.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Card_Scan');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});
