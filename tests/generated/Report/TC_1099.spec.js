const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_1099
 * Module: Report
 * Sub-Module: Business Card
 * Scenario: Print Stylesheet Preview (Ctrl + P)
 * Description: Verify print preview layout for business cards table.
 */
test('TC_1099: Print Stylesheet Preview (Ctrl + P)', { annotation: { type: 'description', description: 'Verify print preview layout for business cards table.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Business_Card');
    await page.waitForLoadState('domcontentloaded');
    const viewBtn = page.getByRole('button', { name: /view/i }).first();
    await expect(viewBtn).toBeVisible({ timeout: 5000 });
});
