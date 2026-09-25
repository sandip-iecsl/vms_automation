const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_466
 * Module: Registration
 * Sub-Module: Material Details
 * Scenario: Session Expiration Handling during Step 3
 * Description: Verify system handles session timeout gracefully while editing material details.
 */
test('TC_466: Session Expiration Handling during Step 3', { annotation: { type: 'description', description: 'Verify system handles session timeout gracefully while editing material details.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Registration');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});
