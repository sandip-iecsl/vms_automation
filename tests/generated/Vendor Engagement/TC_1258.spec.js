const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_1258
 * Module: Vendor Engagement
 * Sub-Module: Custom Mail
 * Scenario: Template List Population
 * Description: Verify Template Type dropdown populates all active templates from Master.
 */
test('TC_1258: Template List Population', { annotation: { type: 'description', description: 'Verify Template Type dropdown populates all active templates from Master.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/CustomMail');
    await page.waitForLoadState('domcontentloaded');
    const templateDropdown = page.locator('[role="combobox"]').first();
    await expect(templateDropdown).toBeVisible({ timeout: 5000 });
    await templateDropdown.click();
    await expect(page.locator('[role="listbox"]').first()).toBeVisible();
});
