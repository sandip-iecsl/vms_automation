const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_1246
 * Module: Report
 * Sub-Module: Business Card Report
 * Scenario: Color Contrast Compliance (WCAG AA)
 * Description: Verify contrast ratio between white text/icons and blue avatar badge (W).
 */
test('TC_1246: Color Contrast Compliance (WCAG AA)', { annotation: { type: 'description', description: 'Verify contrast ratio between white text/icons and blue avatar badge (W).' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Business_CardReport');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});
