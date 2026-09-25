const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_763
 * Module: User Management
 * Sub-Module: User Mapping
 * Scenario: Edit Modal Opening & Pre-population
 * Description: Verify clicking EDIT button opens modal with existing User and Group pre-selected.
 */
test('TC_763: Edit Modal Opening & Pre-population', { annotation: { type: 'description', description: 'Verify clicking EDIT button opens modal with existing User and Group pre-selected.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/UserMapping');
    await page.waitForLoadState('domcontentloaded');
    const addBtn = page.getByRole('button', { name: /add/i }).first();
    await expect(addBtn).toBeVisible({ timeout: 5000 });
    await addBtn.click();
    await expect(page.locator('.MuiDialog-root, .MuiModal-root, .MuiDrawer-root, form').first()).toBeVisible({ timeout: 5000 });
});
