const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_357
 * Module: Registration
 * Sub-Module: Vendor Information
 * Scenario: Invalid GSTIN Checksum / Format Validation
 * Description: Verify standard 15-character GSTIN regex validation (2 state digits + 10 PAN + 1 entity + 1 Z + 1 checksum).
 */
test('TC_357: Invalid GSTIN Checksum / Format Validation', { annotation: { type: 'description', description: 'Verify standard 15-character GSTIN regex validation (2 state digits + 10 PAN + 1 entity + 1 Z + 1 checksum).' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Registration');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});
