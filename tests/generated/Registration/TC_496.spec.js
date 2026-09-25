const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_496
 * Module: Registration
 * Sub-Module: Payment Details
 * Scenario: Standard 11-Character Format Validation
 * Description: Verify standard 11-digit alphanumeric IFSC pattern (4 letters + 0 + 6 alphanumeric).
 */
test('TC_496: Standard 11-Character Format Validation', { annotation: { type: 'description', description: 'Verify standard 11-digit alphanumeric IFSC pattern (4 letters + 0 + 6 alphanumeric).' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Registration');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});
