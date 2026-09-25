class GlobalNavbarPage {
    constructor(page) {
        this.page = page;
        this.userProfileBadge = page.getByText('SANDIPAN TEST', { exact: true });
        this.viewProfileMenu = page.getByText('View Profile');
        this.changePasswordMenu = page.getByText('Change Password');
        this.logoutMenu = page.getByText('Logout');
    }
}
module.exports = { GlobalNavbarPage };
