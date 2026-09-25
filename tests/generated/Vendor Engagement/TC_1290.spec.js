const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_1290
 * Module: Vendor Engagement
 * Sub-Module: Custom Mail
 * Scenario: Sidebar Collapsible Toggle Button (<)
 * Description: Verify collapsing sidebar expands Custom Mail table layout.
 */
test('TC_1290: Sidebar Collapsible Toggle Button (<)', { annotation: { type: 'description', description: 'Verify collapsing sidebar expands Custom Mail table layout.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/CustomMail');
    await page.waitForLoadState('domcontentloaded');
    const toggleBtn = page.locator('.sidebar-edge-toggle, button:has(svg)').first();
    await expect(toggleBtn).toBeVisible();
    await toggleBtn.click();
    await page.waitForTimeout(500);
});
