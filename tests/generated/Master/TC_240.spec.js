const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_240
 * Module: Master
 * Sub-Module: Template
 * Scenario: Custom Mail Template Dropdown Population
 * Description: Verify newly created template is available for selection in Vendor Engagement -> Custom Mail.
 */
test('TC_240: Custom Mail Template Dropdown Population', { annotation: { type: 'description', description: 'Verify newly created template is available for selection in Vendor Engagement -> Custom Mail.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/TemplateMaster');
    await page.waitForLoadState('domcontentloaded');
    const templateDropdown = page.locator('[role="combobox"]').first();
    await expect(templateDropdown).toBeVisible({ timeout: 5000 });
    await templateDropdown.click();
    await expect(page.locator('[role="listbox"]').first()).toBeVisible();
});
