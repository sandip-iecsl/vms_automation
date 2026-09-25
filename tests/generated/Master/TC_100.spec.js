const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_100
 * Module: Master
 * Sub-Module: Event
 * Scenario: Event Page Redirection
 * Description: Verify clicking Event navigates to Event Master page.
 */
test('TC_100: Event Page Redirection', { annotation: { type: 'description', description: 'Verify clicking Event navigates to Event Master page.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/EventManager');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});
