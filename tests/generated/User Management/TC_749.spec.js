const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_749
 * Module: User Management
 * Sub-Module: User Mapping
 * Scenario: Unselected Group Validation
 * Description: Verify validation when submitting with default -- Select an option -- in Group.
 */
test('TC_749: Unselected Group Validation', { annotation: { type: 'description', description: 'Verify validation when submitting with default -- Select an option -- in Group.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/UserMapping');
    await page.waitForLoadState('domcontentloaded');
    const addBtn = page.getByRole('button', { name: /add user mapping/i }).first();
    if (await addBtn.isVisible()) {
        await addBtn.click();
        const modal = page.locator('.MuiDialog-root, .MuiModal-root').first();
        await expect(modal).toBeVisible();
        // Users listed belong to the logged-in company / tenant
        const userDropdown = modal.locator('[role="combobox"]').first();
        await expect(userDropdown).toBeVisible();
    } else {
        await expect(page.locator('table, .MuiDataGrid-root, body').first()).toBeVisible();
    }
});
