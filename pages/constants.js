/**
 * URL Map for all VMS application routes.
 * Extracted from url's.docx and verified against live DOM snapshots.
 */
const URL_MAP = {
    // Master sub-modules
    'Category':         'https://vms.iecsl.in/CategoryManager',
    'Religion':         'https://vms.iecsl.in/CategoryManager', // shares Category route
    'Region':           'https://vms.iecsl.in/RegionManager',
    'Holiday':          'https://vms.iecsl.in/HolidayManager',
    'Template':         'https://vms.iecsl.in/TemplateMaster',
    'Event':            'https://vms.iecsl.in/EventManager',
    'Private User':     'https://vms.iecsl.in/PrivateUser',

    // Registration sub-modules
    'Vendor Registration': 'https://vms.iecsl.in/Registration',
    'Vendor Invitation':   'https://vms.iecsl.in/Invitation',
    'Card Scan':           'https://vms.iecsl.in/Card_Scan',
    'Vendor Approval':     'https://vms.iecsl.in/Vendor_Status',

    // User Management sub-modules
    'Group Creation':  'https://vms.iecsl.in/UserGroup',
    'User Mapping':    'https://vms.iecsl.in/UserMapping',
    'Role Mapping':    'https://vms.iecsl.in/RoleMapping',

    // Report sub-modules
    'All Vendor':               'https://vms.iecsl.in/Vendor_CardView',
    'Business Card':            'https://vms.iecsl.in/Business_Card',
    'Vendor Approval Status':   'https://vms.iecsl.in/VendorApprovalStatus',
    'Business Card Report':     'https://vms.iecsl.in/Business_CardReport',

    // Vendor Engagement
    'Custom Mail':  'https://vms.iecsl.in/CustomMail',

    // Dashboard
    'Dashboard':    'https://vms.iecsl.in/Dashboard',
};

/**
 * UI Elements per page (from DOM snapshots).
 * page key -> { buttons[], headings[], inputs description }
 */
const PAGE_UI = {
    'CategoryManager':  { buttons: ['Back to Home', 'Add Category', 'Edit', 'Delete'], hasTable: true, hasSearch: true },
    'RegionManager':    { buttons: ['Back To Home', 'Add Region', 'Edit', 'Delete'], hasTable: true, hasSearch: true },
    'HolidayManager':   { buttons: ['Back To Home', 'Add Holiday', 'Edit', 'Delete'], hasTable: true, hasSearch: true },
    'TemplateMaster':   { buttons: ['Save', 'Reset', 'Edit', 'Delete'], heading: 'Template Master', hasSearch: true },
    'EventManager':     { buttons: ['Back To Home', 'Add Event', 'Edit', 'Delete'], hasTable: true, hasSearch: true },
    'PrivateUser':      { buttons: ['Go to Dashboard'], heading404: true },
    'Registration':     { buttons: ['Back to Home', '+ New Vendor'], heading: 'Vendor List', hasSearch: true },
    'Invitation':       { buttons: ['Back to Home', 'Add Invitation', 'Edit', 'Delete'], hasTable: true, hasSearch: true },
    'Card_Scan':        { buttons: ['Back to Home'], heading: 'Business Card Scan (Front & Back)', hasFileUpload: true },
    'Vendor_Status':    { buttons: [], heading: 'Vendor Approval View', hasSearch: true },
    'UserGroup':        { buttons: ['Back to Home', 'Add Group', 'Edit', 'Delete'], hasTable: true, hasSearch: true },
    'UserMapping':      { buttons: ['Back to Home', 'Add User Mapping', 'Edit', 'Delete'], hasTable: true, hasSearch: true },
    'RoleMapping':      { buttons: ['Back to Home', 'Save'], heading: 'Main Menu', hasSearch: true },
    'Vendor_CardView':  { buttons: ['Back to Home'], hasSearch: true },
    'Business_Card':    { buttons: ['Back to Home'], hasSearch: true },
    'VendorApprovalStatus': { buttons: ['View'], heading: 'Vendor Approval Status', hasSearch: true },
    'Business_CardReport':  { buttons: ['Back to Home', 'Search'], hasDateFilters: true },
    'CustomMail':       { buttons: ['Send Mail'], heading: 'Custom Mail', hasCheckboxes: true, hasSearch: true },
    'Dashboard':        { buttons: [], heading: 'Welcome back, SANDIPAN TEST' },
};

module.exports = { URL_MAP, PAGE_UI };
