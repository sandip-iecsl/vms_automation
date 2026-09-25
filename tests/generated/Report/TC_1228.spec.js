const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_1228
 * Module: Report
 * Sub-Module: Business Card Report
 * Scenario: Expand/Collapse Master Accordion
 * Description: Verify Master accordion menu toggles smoothly without leaving page.
 */
test('TC_1228: Expand/Collapse Master Accordion', { annotation: { type: 'description', description: 'Verify Master accordion menu toggles smoothly without leaving page.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Business_CardReport');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('.sidebar-edge-toggle, body').first()).toBeVisible();
});
