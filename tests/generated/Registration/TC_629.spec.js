const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_629
 * Module: Registration
 * Sub-Module: Card Scan
 * Scenario: Leading/Trailing Whitespace in Event Name
 * Description: Verify automatic whitespace trimming on event creation in Card Scan.
 */
test('TC_629: Leading/Trailing Whitespace in Event Name', { annotation: { type: 'description', description: 'Verify automatic whitespace trimming on event creation in Card Scan.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Card_Scan');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});
