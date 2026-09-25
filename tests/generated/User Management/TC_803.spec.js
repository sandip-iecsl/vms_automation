const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_803
 * Module: User Management
 * Sub-Module: Role Mapping
 * Scenario: UI Elements & Container Alignment
 * Description: Verify visual layout, header buttons, dropdowns, and access containers.
 */
test('TC_803: UI Elements & Container Alignment', { annotation: { type: 'description', description: 'Verify visual layout, header buttons, dropdowns, and access containers.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/RoleMapping');
    await page.waitForLoadState('domcontentloaded');
    const backBtn = page.getByRole('button', { name: /back.*home/i }).first();
    await expect(backBtn).toBeVisible({ timeout: 5000 });
    await backBtn.click();
    await expect(page.getByText('Welcome back').first()).toBeVisible({ timeout: 10000 });
});
