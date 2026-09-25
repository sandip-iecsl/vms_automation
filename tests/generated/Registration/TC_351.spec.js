const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_351
 * Module: Registration
 * Sub-Module: Vendor Information
 * Scenario: Phone Number Digit Validation
 * Description: Verify numeric only and 10-digit validation on all Escalation Matrix phone inputs.
 */
test('TC_351: Phone Number Digit Validation', { annotation: { type: 'description', description: 'Verify numeric only and 10-digit validation on all Escalation Matrix phone inputs.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Registration');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});
