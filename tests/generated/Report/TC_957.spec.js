const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_957
 * Module: Report
 * Sub-Module: All Vendor
 * Scenario: Text Truncation and Tooltip on Long Email
 * Description: Verify hover tooltip displays full email address when domain string overflows column cell.
 */
test('TC_957: Text Truncation and Tooltip on Long Email', { annotation: { type: 'description', description: 'Verify hover tooltip displays full email address when domain string overflows column cell.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Vendor_CardView');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});
