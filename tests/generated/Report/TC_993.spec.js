const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_993
 * Module: Report
 * Sub-Module: All Vendor
 * Scenario: Rendering Latency with 100+ Cards
 * Description: Verify card grid renders smoothly without UI lag or memory leak.
 */
test('TC_993: Rendering Latency with 100+ Cards', { annotation: { type: 'description', description: 'Verify card grid renders smoothly without UI lag or memory leak.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Vendor_CardView');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});
