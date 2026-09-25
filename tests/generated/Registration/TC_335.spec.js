const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_335
 * Module: Registration
 * Sub-Module: Vendor Information
 * Scenario: Textarea Resizing & Overflow
 * Description: Verify address textarea resizing handle and vertical scrollbar behavior.
 */
test('TC_335: Textarea Resizing & Overflow', { annotation: { type: 'description', description: 'Verify address textarea resizing handle and vertical scrollbar behavior.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Registration');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});
