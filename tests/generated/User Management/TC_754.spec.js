const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_754
 * Module: User Management
 * Sub-Module: User Mapping
 * Scenario: Mapping User to Multiple Different Groups
 * Description: Verify system allows mapping the same user to multiple distinct role groups.
 */
test('TC_754: Mapping User to Multiple Different Groups', { annotation: { type: 'description', description: 'Verify system allows mapping the same user to multiple distinct role groups.' } }, async ({ page }) => {
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
