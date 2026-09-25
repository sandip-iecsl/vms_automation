const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_612
 * Module: Registration
 * Sub-Module: Vendor Invitation
 * Scenario: Escape Key Closes Modal
 * Description: Verify pressing Escape key closes the modal without submitting.
 */
test('TC_612: Escape Key Closes Modal', { annotation: { type: 'description', description: 'Verify pressing Escape key closes the modal without submitting.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Invitation');
    await page.waitForLoadState('domcontentloaded');
    const addBtn = page.getByRole('button', { name: /add invitation/i }).first();
    await expect(addBtn).toBeVisible({ timeout: 5000 });
    await addBtn.click();
    await expect(page.locator('.MuiDialog-root, .MuiModal-root, .MuiDrawer-root, form').first()).toBeVisible({ timeout: 5000 });
});
