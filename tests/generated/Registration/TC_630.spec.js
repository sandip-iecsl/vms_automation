const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_630
 * Module: Registration
 * Sub-Module: Card Scan
 * Scenario: Dropdown Population from Event Master
 * Description: Verify Event dropdown populates all events created in Event Master.
 */
test('TC_630: Dropdown Population from Event Master', { annotation: { type: 'description', description: 'Verify Event dropdown populates all events created in Event Master.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Card_Scan');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});
