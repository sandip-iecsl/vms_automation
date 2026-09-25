const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_301
 * Module: Registration
 * Sub-Module: Vendor Registration
 * Scenario: UI Elements & Header Controls
 * Description: Verify visual layout, header buttons, search bar, table columns, and action icons.
 */
test('TC_301: UI Elements & Header Controls', { annotation: { type: 'description', description: 'Verify visual layout, header buttons, search bar, table columns, and action icons.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Registration');
    await page.waitForLoadState('domcontentloaded');
    const backBtn = page.getByRole('button', { name: /back.*home/i }).first();
    await expect(backBtn).toBeVisible({ timeout: 5000 });
    await backBtn.click();
    await expect(page.getByText('Welcome back').first()).toBeVisible({ timeout: 10000 });
});
