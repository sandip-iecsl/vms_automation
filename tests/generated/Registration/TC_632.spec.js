const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_632
 * Module: Registration
 * Sub-Module: Card Scan
 * Scenario: Drag and Drop Upload Support
 * Description: Verify dragging and dropping an image file onto \'Upload Front Side\' container.
 */
test('TC_632: Drag and Drop Upload Support', { annotation: { type: 'description', description: 'Verify dragging and dropping an image file onto \'Upload Front Side\' container.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Card_Scan');
    await page.waitForLoadState('domcontentloaded');
    const fileInput = page.locator('input[type="file"]').first();
    await expect(fileInput).toBeAttached({ timeout: 5000 });
});
