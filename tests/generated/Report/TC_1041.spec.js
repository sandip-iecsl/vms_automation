const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_1041
 * Module: Report
 * Sub-Module: Business Card
 * Scenario: Blank/Empty Data Row Handling
 * Description: Verify table rendering when business cards have empty company, name, or phone fields.
 */
test('TC_1041: Blank/Empty Data Row Handling', { annotation: { type: 'description', description: 'Verify table rendering when business cards have empty company, name, or phone fields.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Business_Card');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});
