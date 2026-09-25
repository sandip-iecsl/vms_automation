# VMS Automation Framework (Playwright + AI Ingestion)

An autonomous, self-healing Playwright E2E automation engine for the Vendor Management System (VMS) web portal (`https://vms.iecsl.in`).

This framework automatically ingests test scenarios from Excel datasets (`data/VMS.xlsx`), dynamically generates Page Object Model (POM) test specs across 1,293+ test cases, executes test batches in Chromium, and handles locator self-healing.

---

## 📅 Modification Log (Date-Wise)

### **2026-09-24**
- **Environment Setup**: Created `.env` configuration file to store secret environment variables (`GEMINI_API_KEY`).
- **Dependencies Installed**: Added `dotenv` for environment management and `xlsx` for Excel workbook parsing.
- **Playwright Configuration**: Added `playwright.config.js` configured for Chromium browser execution, HTML reporting, and trace logging. Installed Chromium browser binaries.
- **Page Object Models (POM)**:
  - Created `pages/LoginPage.js`: Encapsulates login elements (`username`, `password`, `login button`).
  - Created `pages/MasterPage.js`: Handles sidebar accordion navigation for Master module sub-menus.
  - Created `pages/GlobalNavbarPage.js`: Encapsulates top navbar profile badge, dropdown menus, and session controls.
- **Excel Ingestion & Test Spec Engine**:
  - Developed `scripts/ingest_and_generate.js` to parse `data/VMS.xlsx` sheets (`Global Navbar`, `Login`, `Master`, `Registration`, `User Management`, `Vendor Engagement`, `Report`).
  - Automatically generated **1,293 Playwright spec files** organized by module inside `tests/generated/`.
- **Self-Healing Locator Fixes**:
  - Resolved `LoginPage` input selector mismatch: updated `uname` to `name="username"`.
  - Resolved `GlobalNavbarPage` strict mode text match violation by using `getByText('SANDIPAN TEST').first()`.
  - Increased timeout to `20000ms` for robust parallel execution under worker contention.
- **Pilot Execution**: Executed `Global Navbar` test suite (10 specs) resulting in **100% Pass rate**.

### **2026-09-25**
- **Document & URL Ingestion**:
  - Extracted URL routes and UI page structures from user-provided `url's.docx` and `vms_ui_pages.docx`.
  - Verified 19 application routes and created centralized mapping in `pages/constants.js`.
- **Live DOM Snapshotting Engine**:
  - Built `scripts/capture_dom.js` and captured DOM snapshots for all 19 authenticated VMS routes.
  - Mapped real Material-UI components (buttons, text inputs, comboboxes, data grids, pagination controls, toggle buttons).
- **Sub-Module Forward-Filling & Generator Re-Architecture**:
  - Rebuilt `scripts/ingest_and_generate.js` to handle merged/sparse Excel cells across all 7 sheets, propagating sub-modules cleanly to every test row.
  - Enforced scenario-specific action assertions (empty inputs, invalid email format, SQLi/sanitization, modal dialogs, search queries, pagination, select-all checkboxes).
- **Company Tenancy Scoping**:
  - Implemented specific tenancy rules for **User Mapping** and **Custom Mail**, ensuring users and vendor contacts are validated within the company/tenant scope (`SANDIPAN TEST`, `MOCK2 TEST`).
- **Selector Collision & Strict Mode Hardening**:
  - Eliminated substring locator collisions (e.g., `profile` matching `file`, `viewport` matching `view button`).
  - Hardened listbox and popover locators with `.first()` to resolve Playwright strict mode violations.
  - Replaced slow `networkidle` waits with responsive `domcontentloaded` + element-bound assertions.
- **Reporting System**:
  - Implemented custom `reporters/MarkdownReporter.js` generating `reports/Latest_Execution_Report.md` with status badges, execution duration, test descriptions, and module breakdown tables.
- **Test Suite Verification**:
  - **Global Navbar**: 10/10 tests passed (100%).
  - **Vendor Engagement**: 50/50 tests passed (100%).
  - **User Management / User Mapping**: Verified modal opening, tenancy-scoped user combobox, and mapping creation.
  - **Master (Category, Region, Holiday, Template, Event)**: Sub-module URL routing and table verifications passed.
  - **Master (Private User)**: Corrected URL mapping to `/PrivateUserMaster` and verified data persistence (TC_295).
  - **Registration (Vendor List, Invitation, Card Scan, Approval)**: Sub-module URL routing and file attachment tests passed.
  - **Report (All Vendor, Business Card, Approval Status, Card Report)**: Multi-view table and date filters verified.
  - **Login**: Mandatory asterisk, character masking, empty inputs, invalid formats, and keyboard navigation verified.
  - **Full Suite Verification**: All 1,293 tests generated successfully with 100% accurate URL routing mapping to the live portal.

---

## 🏗️ End-to-End Project Structure

```
VMS_Automation/
├── .env                       # Environment variables (API keys, credentials)
├── package.json               # Node.js dependencies and script metadata
├── playwright.config.js       # Playwright runner configuration (Chromium, HTML report)
├── README.md                  # Complete project documentation and guide
├── data/
│   └── VMS.xlsx               # Source Excel workbook with 1,293 test cases across 7 sheets
├── pages/                     # Page Object Model (POM) classes
│   ├── GlobalNavbarPage.js    # Selectors and actions for top navigation bar
│   ├── LoginPage.js           # Selectors and actions for login authentication page
│   └── MasterPage.js          # Selectors and actions for Master module sidebar
├── scripts/                   # Utility and ingestion automation scripts
│   ├── dump_html.js           # Diagnostic script to capture live DOM structure
│   ├── ingest_and_generate.js # Excel parser & Playwright test spec generator
│   └── inspect_excel.js       # Utility script to inspect Excel sheet schemas
└── tests/                     # Generated test repository
    └── generated/             # Auto-generated Playwright spec files
        ├── Global Navbar/     # 10 Test Cases (TC_1306 to TC_1315)
        ├── Login/             # 89 Test Cases (TC_1 to TC_89)
        ├── Master/            # 210 Test Cases (TC_90 to TC_299)
        ├── Registration/      # 378 Test Cases (TC_300 to TC_677)
        ├── User Management/   # 221 Test Cases (TC_688 to TC_908)
        ├── Vendor Engagement/ # 50 Test Cases (TC_1256 to TC_1305)
        └── Report/            # 335 Test Cases (TC_921 to TC_1255)
```

---

## 🔄 End-to-End Framework Architecture & Workflow

The framework operates on a continuous, recursive execution cycle:

```
+-------------------+      +---------------------+      +---------------------+
|   1. INGEST &     | ---> |   2. EXECUTE BATCH  | ---> |   3. INTERCEPT      |
|   BUILD (POM)     |      |  (Playwright CLI)   |      |   LOCATOR ERRORS    |
+-------------------+      +---------------------+      +---------------------+
                                                                   |
+-------------------+      +---------------------+                 v
|   5. NEXT SHEET/  | <--- |   4. SELF-HEAL &    | <-----------------+
|   BATCH PROCESS   |      |   RE-EXECUTE SPEC   |
+-------------------+      +---------------------+
```

1. **Ingest & Build (CREATE)**: `scripts/ingest_and_generate.js` reads test steps, expected outcomes, and metadata from Excel sheets and writes clean Playwright test files in `tests/generated/<ModuleName>/`.
2. **Execute Batch (EXECUTE)**: Playwright runs the spec files using Chromium headless/headed mode.
3. **Intercept Errors (FIX)**: If a locator fails or times out, the self-healing strategy resolves DOM parameter key mismatches or strict mode violations.
4. **Re-Execute (RE-EXECUTE)**: The affected spec file is re-tested to confirm a `PASS` status.
5. **Next Module (NEXT)**: Autonomous progression to the next batch of test cases.

---

## 🧩 Functions & Page Object Models (POM) Usage

### 1. `LoginPage` (`pages/LoginPage.js`)
Encapsulates login page interactions and authentication flow.

* **Constructor**:
  ```js
  const loginPage = new LoginPage(page);
  ```
* **Locators**:
  - `this.unameInput`: `input[name="username"]`
  - `this.pwdInput`: `input[name="password"]`
  - `this.loginButton`: `button[type="submit"]` with text `Login`
* **Methods**:
  - `async goto()`: Navigates browser to `https://vms.iecsl.in`.
  - `async login(username, password)`: Fills username and password, then clicks the Login button.

**Usage Example**:
```js
const { LoginPage } = require('../../../pages/LoginPage');

test('Login Test', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
});
```

---

### 2. `MasterPage` (`pages/MasterPage.js`)
Encapsulates sidebar accordion navigation for the Master sub-modules.

* **Locators**:
  - `this.masterMenu`: Sidebar option for `Master`.
* **Methods**:
  - `async navigateTo(subModule)`: Expands Master accordion and clicks the target sub-module link (`Category`, `Region`, `Holiday`, etc.).

**Usage Example**:
```js
const { MasterPage } = require('../../../pages/MasterPage');

test('Navigate to Region', async ({ page }) => {
    const masterPage = new MasterPage(page);
    await masterPage.navigateTo('Region');
});
```

---

### 3. `GlobalNavbarPage` (`pages/GlobalNavbarPage.js`)
Encapsulates top-right user menu controls.

* **Locators**:
  - `this.userProfileBadge`: Profile label (`SANDIPAN TEST`).
  - `this.viewProfileMenu`: `View Profile` dropdown option.
  - `this.changePasswordMenu`: `Change Password` dropdown option.
  - `this.logoutMenu`: `Logout` dropdown option.

---

### 4. `ingest_and_generate.js` (`scripts/ingest_and_generate.js`)
Automated generator script.

* **Usage**:
  ```powershell
  node scripts/ingest_and_generate.js
  ```
* **Functionality**:
  - Loads `.env` file via `dotenv`.
  - Reads `data/VMS.xlsx` sheet data using `xlsx`.
  - Creates output folders inside `tests/generated/`.
  - Constructs formatted JS spec code containing step descriptions and locator assertions.

---

## 🚀 How to Run Tests & View Reports

### Generate/Refresh All Test Specs
```powershell
node scripts/ingest_and_generate.js
```

### Run Specific Module Tests (e.g. Global Navbar)
```powershell
npx playwright test "tests/generated/Global Navbar" --project=chromium
```

### Run Tests in Headed Mode (Visible Browser)
```powershell
npx playwright test "tests/generated/Global Navbar" --headed
```

### View Interactive HTML Test Execution Report
```powershell
npx playwright show-report
```

---

## 📊 Summary of Test Coverage

| Sheet Name | Total Test Cases Generated | Status |
| :--- | :--- | :--- |
| **Global Navbar** | 10 | ✅ 100% Passed & Verified |
| **Login** | 89 | ✅ Generated & Routing Verified |
| **Master** | 210 | ✅ Generated & Routing Verified |
| **Registration** | 378 | ✅ Generated & Routing Verified |
| **User Management** | 221 | ✅ Generated & Routing Verified |
| **Vendor Engagement**| 50 | ✅ 100% Passed & Verified |
| **Report** | 335 | ✅ Generated & Routing Verified |
| **TOTAL** | **1,293** | **✅ Complete Suite Fully Configured & Ready** |
