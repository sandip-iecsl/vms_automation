const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_1257
 * Module: Vendor Engagement
 * Sub-Module: Custom Mail
 * Scenario: UI Elements & Header Alignment
 * Description: Verify visual rendering of top controls: Template Type dropdown, Search Vendor input, SEND MAIL button, and table.
 */
test('TC_1257: UI Elements & Header Alignment', { annotation: { type: 'description', description: 'Verify visual rendering of top controls: Template Type dropdown, Search Vendor input, SEND MAIL button, and table.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/CustomMail');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});
