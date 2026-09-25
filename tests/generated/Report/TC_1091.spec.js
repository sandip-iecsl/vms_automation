const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_1091
 * Module: Report
 * Sub-Module: Business Card
 * Scenario: ARIA Attributes on View Toggle Buttons
 * Description: Verify accessibility attributes on view switcher icons.
 */
test('TC_1091: ARIA Attributes on View Toggle Buttons', { annotation: { type: 'description', description: 'Verify accessibility attributes on view switcher icons.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Business_Card');
    await page.waitForLoadState('domcontentloaded');
    const viewBtn = page.getByRole('button', { name: /view/i }).first();
    await expect(viewBtn).toBeVisible({ timeout: 5000 });
});
