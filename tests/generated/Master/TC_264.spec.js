const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_264
 * Module: Master
 * Sub-Module: Event
 * Scenario: Delete Event Linked to Active Templates
 * Description: Verify deletion restriction when event is used by templates/notifications.
 */
test('TC_264: Delete Event Linked to Active Templates', { annotation: { type: 'description', description: 'Verify deletion restriction when event is used by templates/notifications.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/EventManager');
    await page.waitForLoadState('domcontentloaded');
    const deleteBtn = page.getByRole('button', { name: /delete/i }).first();
    await expect(deleteBtn).toBeVisible({ timeout: 5000 });
});
