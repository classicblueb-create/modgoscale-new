// AI NEWS CONFIG
// Articles are written into a Google Sheet; only rows whose `status` is an
// approved value are shown on the site. Paste the sheet's
// "File > Share > Publish to web > CSV" link below.
export const AI_NEWS_SHEET_CSV_URL = "";

// Sheet columns (header row, exact names):
// id | status | date | title | category | summary | body | sources | tags | note
export const APPROVED_STATUS = ["อนุมัติ", "approved", "publish", "published"];
