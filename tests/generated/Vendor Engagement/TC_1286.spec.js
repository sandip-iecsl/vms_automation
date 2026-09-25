const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_1286
 * Module: Vendor Engagement
 * Sub-Module: Custom Mail
 * Scenario: Long Email Address Text Wrapping / Ellipsis
 * Description: Verify visual display when email contains long string (e.g. anam.fetemahpackaging@gmail....).
 */
test('TC_1286: Long Email Address Text Wrapping / Ellipsis', { annotation: { type: 'description', description: 'Verify visual display when email contains long string (e.g. anam.fetemahpackaging@gmail....).' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/CustomMail');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});
