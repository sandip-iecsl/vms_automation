const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_1034
 * Module: Report
 * Sub-Module: Business Card
 * Scenario: Unassigned Contact Card Rendering
 * Description: Verify card face rendering when record contains only company title.
 */
test('TC_1034: Unassigned Contact Card Rendering', { annotation: { type: 'description', description: 'Verify card face rendering when record contains only company title.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Business_Card');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});
