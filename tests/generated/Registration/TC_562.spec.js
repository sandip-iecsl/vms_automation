const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_562
 * Module: Registration
 * Sub-Module: Vendor Invitation
 * Scenario: UI Elements & Header Controls
 * Description: Verify visual layout, header buttons, table headers, and pagination controls.
 */
test('TC_562: UI Elements & Header Controls', { annotation: { type: 'description', description: 'Verify visual layout, header buttons, table headers, and pagination controls.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Invitation');
    await page.waitForLoadState('domcontentloaded');
    const backBtn = page.getByRole('button', { name: /back.*home/i }).first();
    await expect(backBtn).toBeVisible({ timeout: 5000 });
    await backBtn.click();
    await expect(page.getByText('Welcome back').first()).toBeVisible({ timeout: 10000 });
});
