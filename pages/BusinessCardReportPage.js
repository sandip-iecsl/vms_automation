// class BusinessCardReportPage {
//     constructor(page) {
//         this.page = page;
//         this.searchButton = page.getByRole('button', { name: /search/i }).or(page.getByText('Search'));
//         this.tableRows = page.locator('table tbody tr');
//     }

//     /**
//      * Triggers the search/filter action and waits for network calls and DOM update.
//      */
//     async search() {
//         await this.searchButton.click();

//         // 1. Wait for fetch/XHR network requests to complete
//         await this.page.waitForLoadState('networkidle');

//         // 2. Wait explicitly for at least one table row or result element to become visible
//         await this.tableRows.first().waitFor({ state: 'visible', timeout: 10000 });
//     }
// }

// module.exports = { BusinessCardReportPage };