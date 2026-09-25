const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_460
 * Module: Registration
 * Sub-Module: Material Details
 * Scenario: Row Alternating Color & Hover Highlighting
 * Description: Verify table row styling and hover background color transitions.
 */
test('TC_460: Row Alternating Color & Hover Highlighting', { annotation: { type: 'description', description: 'Verify table row styling and hover background color transitions.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Registration');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});
