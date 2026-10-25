// AI NEWS CONFIG
// Articles are written into a Google Sheet; only rows whose `status` is an
// approved value are shown on the site. Paste the sheet's
// "File > Share > Publish to web > CSV" link, or an Apps Script web-app URL
// that returns CSV / JSON with the same columns.
export const AI_NEWS_SHEET_CSV_URL = "https://script.google.com/macros/s/AKfycbyTBUhJLOcs70we_2kdYOWd1JI6t_qpK-0_bxbqd2J6KX6b6o9EzhDHmMgOCm-iGl9J-w/exec";

// Sheet columns (header row, exact names):
// id | status | date | title | category | summary | body | sources | tags | note | image | image_credit
// image: https URL (licensed image) or an inline SVG data URI (original cover); image_credit: caption/credit text
export const APPROVED_STATUS = ["อนุมัติ", "approved", "publish", "published"];
