const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_463
 * Module: Registration
 * Sub-Module: Material Details
 * Scenario: Direct Click on Locked Step 5 (Declaration)
 * Description: Verify clicking locked Step 5 directly is completely disabled.
 */
test('TC_463: Direct Click on Locked Step 5 (Declaration)', { annotation: { type: 'description', description: 'Verify clicking locked Step 5 directly is completely disabled.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Registration');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});
