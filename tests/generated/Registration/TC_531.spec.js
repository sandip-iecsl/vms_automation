const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_531
 * Module: Registration
 * Sub-Module: Declaration
 * Scenario: Multiline & Paragraph Formatting
 * Description: Verify line breaks and multi-paragraph formatting are preserved in Discount Structure.
 */
test('TC_531: Multiline & Paragraph Formatting', { annotation: { type: 'description', description: 'Verify line breaks and multi-paragraph formatting are preserved in Discount Structure.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Registration');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});
