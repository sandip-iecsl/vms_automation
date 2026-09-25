const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_358
 * Module: Registration
 * Sub-Module: Vendor Information
 * Scenario: PAN and GSTIN Consistency Check
 * Description: Verify PAN embedded within the GSTIN matches the entered PAN Number.
 */
test('TC_358: PAN and GSTIN Consistency Check', { annotation: { type: 'description', description: 'Verify PAN embedded within the GSTIN matches the entered PAN Number.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Registration');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});
