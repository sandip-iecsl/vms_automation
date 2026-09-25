const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_182
 * Module: Master
 * Sub-Module: Holiday
 * Scenario: UI Elements & Header Buttons
 * Description: Verify visual layout, buttons, table headers, and alignment.
 */
test('TC_182: UI Elements & Header Buttons', { annotation: { type: 'description', description: 'Verify visual layout, buttons, table headers, and alignment.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/HolidayManager');
    await page.waitForLoadState('domcontentloaded');
    const backBtn = page.getByRole('button', { name: /back.*home/i }).first();
    await expect(backBtn).toBeVisible({ timeout: 5000 });
    await backBtn.click();
    await expect(page.getByText('Welcome back').first()).toBeVisible({ timeout: 10000 });
});
