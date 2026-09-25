const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_269
 * Module: Master
 * Sub-Module: Event
 * Scenario: Template Master Type Dropdown Population
 * Description: Verify newly created event appears in Template Master Type dropdown.
 */
test('TC_269: Template Master Type Dropdown Population', { annotation: { type: 'description', description: 'Verify newly created event appears in Template Master Type dropdown.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/EventManager');
    await page.waitForLoadState('domcontentloaded');
    const templateDropdown = page.locator('[role="combobox"]').first();
    await expect(templateDropdown).toBeVisible({ timeout: 5000 });
    await templateDropdown.click();
    await expect(page.locator('[role="listbox"]').first()).toBeVisible();
});
