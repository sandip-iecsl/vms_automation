class MasterPage {
    constructor(page) {
        this.page = page;
        this.masterMenu = page.getByRole('button', { name: /master/i }).or(page.getByText('Master'));
    }

    async navigateTo(subModule) {
        await this.masterMenu.click();
        await this.page.getByText(subModule, { exact: true }).click();
    }
}
module.exports = { MasterPage };
