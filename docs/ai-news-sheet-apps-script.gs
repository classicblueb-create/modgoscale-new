/**
 * AI News approval sheet — Apps Script
 *
 * What it does:
 *  - Every few hours it pulls the newest article drafts that the weekly
 *    "AI News" scheduled task pushes to the `ai-news-drafts` branch of
 *    the GitHub repo, and appends NEW ones to this sheet with status "รอตรวจ".
 *  - You review / edit the text in the sheet, then set status to "อนุมัติ".
 *    The website shows ONLY rows whose status is "อนุมัติ" (see
 *    src/data/aiNewsConfig.js). Set "ไม่ผ่าน" for rows you reject.
 *
 * Setup (once):
 *  1. Open the sheet > Extensions > Apps Script, paste this file, save.
 *  2. Run `setup` once (approve the permission prompt). It creates the
 *     header row, the status dropdown and a 6-hour trigger.
 *  3. File > Share > Publish to web > pick this sheet tab + "CSV" > Publish,
 *     and copy the link into AI_NEWS_SHEET_CSV_URL in src/data/aiNewsConfig.js.
 */
const DRAFTS_URL =
  'https://raw.githubusercontent.com/classicblueb-create/modgoscale-new/ai-news-drafts/ai-news-drafts.json';
const SHEET_NAME = 'news';
const HEADERS = ['id', 'status', 'date', 'title', 'category', 'summary', 'body', 'sources', 'tags', 'note', 'image', 'image_credit'];
const STATUS_VALUES = ['รอตรวจ', 'อนุมัติ', 'ไม่ผ่าน'];

function getSheet_() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  return ss.getSheetByName(SHEET_NAME) || ss.insertSheet(SHEET_NAME);
}

function setup() {
  const sh = getSheet_();
  sh.getRange(1, 1, 1, HEADERS.length).setValues([HEADERS]).setFontWeight('bold');
  sh.setFrozenRows(1);
  sh.getRange('A:L').setNumberFormat('@'); // plain text: never interpret cells as formulas
  const rule = SpreadsheetApp.newDataValidation().requireValueInList(STATUS_VALUES, true).build();
  sh.getRange(2, 2, 1000, 1).setDataValidation(rule);
  ScriptApp.getProjectTriggers().forEach((t) => {
    if (t.getHandlerFunction() === 'importDrafts') ScriptApp.deleteTrigger(t);
  });
  ScriptApp.newTrigger('importDrafts').timeBased().everyHours(6).create();
  importDrafts();
}

function importDrafts() {
  const sh = getSheet_();
  const res = UrlFetchApp.fetch(DRAFTS_URL + '?t=' + Date.now(), { muteHttpExceptions: true });
  if (res.getResponseCode() !== 200) {
    throw new Error('Cannot fetch drafts: HTTP ' + res.getResponseCode());
  }
  const drafts = JSON.parse(res.getContentText());
  const last = sh.getLastRow();
  const existing = last > 1 ? sh.getRange(2, 1, last - 1, 1).getValues().flat().map(String) : [];
  const rows = drafts
    .filter((d) => d && d.id && !existing.includes(String(d.id)))
    .map((d) => [
      String(d.id),
      'รอตรวจ',
      d.date || '',
      d.title || '',
      d.category || 'AI News',
      d.summary || '',
      d.body || '',
      (d.sources || []).map((s) => s.name + ' | ' + s.url).join('\n'),
      (d.tags || []).join(', '),
      '',
      d.image || '',
      d.imageCredit || '',
    ]);
  if (rows.length === 0) return;
  const start = Math.max(sh.getLastRow(), 1) + 1;
  const range = sh.getRange(start, 1, rows.length, HEADERS.length);
  range.setNumberFormat('@');
  range.setValues(rows);
  const rule = SpreadsheetApp.newDataValidation().requireValueInList(STATUS_VALUES, true).build();
  sh.getRange(start, 2, rows.length, 1).setDataValidation(rule);
}
