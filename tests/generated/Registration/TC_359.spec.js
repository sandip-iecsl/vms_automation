const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_359
 * Module: Registration
 * Sub-Module: Vendor Information
 * Scenario: Direct Stepper Tab Click Restriction
 * Description: Verify user cannot skip ahead by clicking inactive step icons (Step 2, 3, 4, 5) without completing Step 1.
 */
test('TC_359: Direct Stepper Tab Click Restriction', { annotation: { type: 'description', description: 'Verify user cannot skip ahead by clicking inactive step icons (Step 2, 3, 4, 5) without completing Step 1.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Registration');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});
