class LoginPage {
    constructor(page) {
        this.page = page;
        this.unameInput = page.locator('input[name="username"]');
        this.pwdInput = page.locator('input[name="password"]');
        this.loginButton = page.getByRole('button', { name: /login/i });
    }

    async goto() {
        await this.page.goto('https://vms.iecsl.in');
    }

    async login(username, password) {
        await this.unameInput.fill(username);
        await this.pwdInput.fill(password);
        await this.loginButton.click();
        // await this.resultsTable.waitFor({ state: 'visible', timeout: 5000 });
    }
}
module.exports = { LoginPage };
