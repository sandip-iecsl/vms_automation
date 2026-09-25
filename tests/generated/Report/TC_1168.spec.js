const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_1168
 * Module: Report
 * Sub-Module: Business Card Report
 * Scenario: Back to Home Button Action
 * Description: Verify clicking \'BACK TO HOME\' button redirects user to Dashboard.
 */
test('TC_1168: Back to Home Button Action', { annotation: { type: 'description', description: 'Verify clicking \'BACK TO HOME\' button redirects user to Dashboard.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Business_CardReport');
    await page.waitForLoadState('domcontentloaded');
    const backBtn = page.getByRole('button', { name: /back.*home/i }).first();
    await expect(backBtn).toBeVisible({ timeout: 5000 });
    await backBtn.click();
    await expect(page.getByText('Welcome back').first()).toBeVisible({ timeout: 10000 });
});
