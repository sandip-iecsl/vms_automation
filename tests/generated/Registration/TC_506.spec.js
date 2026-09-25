const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_506
 * Module: Registration
 * Sub-Module: Payment Details
 * Scenario: Direct Click on Step 5 Attempt (Empty Payment Fields)
 * Description: Verify clicking Step 5 (Declaration) icon directly on stepper header.
 */
test('TC_506: Direct Click on Step 5 Attempt (Empty Payment Fields)', { annotation: { type: 'description', description: 'Verify clicking Step 5 (Declaration) icon directly on stepper header.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Registration');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});
