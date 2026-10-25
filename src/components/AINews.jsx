import React, { useEffect, useMemo, useState } from 'react';
import { Search, X, ArrowLeft, Home, Newspaper, ExternalLink, Clock } from 'lucide-react';
import { AI_NEWS_SHEET_CSV_URL, APPROVED_STATUS } from '../data/aiNewsConfig';

// Minimal CSV parser (handles quoted cells, escaped quotes and newlines inside cells)
function parseCSV(text) {
  const rows = [];
  let row = [];
  let cell = '';
  let inQuotes = false;
  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (inQuotes) {
      if (c === '"' && text[i + 1] === '"') { cell += '"'; i++; }
      else if (c === '"') inQuotes = false;
      else cell += c;
    } else if (c === '"') inQuotes = true;
    else if (c === ',') { row.push(cell); cell = ''; }
    else if (c === '\n' || c === '\r') {
      if (c === '\r' && text[i + 1] === '\n') i++;
      row.push(cell); cell = '';
      if (row.some((x) => x.trim() !== '')) rows.push(row);
      row = [];
    } else cell += c;
  }
  row.push(cell);
  if (row.some((x) => x.trim() !== '')) rows.push(row);
  return rows;
}

// Accepts: 2D rows (CSV or JSON array-of-arrays) or an array of objects keyed by column name
function toArticles(rows) {
  if (!Array.isArray(rows) || rows.length === 0) return [];
  let records;
  if (Array.isArray(rows[0])) {
    const head = rows[0].map((h) => String(h).trim().toLowerCase());
    records = rows.slice(1).map((r) => Object.fromEntries(head.map((h, i) => [h, r[i]])));
  } else {
    records = rows.map((o) => Object.fromEntries(Object.entries(o || {}).map(([k, v]) => [String(k).trim().toLowerCase(), v])));
  }
  const approved = APPROVED_STATUS.map((x) => x.toLowerCase());
  return records.map((r) => {
    const get = (name) => String(r[name] ?? '').trim();
    return {
      id: get('id') || get('title'),
      status: get('status').toLowerCase(),
      date: get('date').slice(0, 10),
      title: get('title'),
      category: get('category') || 'AI News',
      summary: get('summary'),
      body: get('body'),
      sources: get('sources'),
      tags: get('tags').split(',').map((t) => t.trim()).filter(Boolean),
    };
  }).filter((a) => a.title && approved.includes(a.status));
}

function parseResponse(text) {
  const t = text.trim();
  if (t.startsWith('[') || t.startsWith('{')) {
    const j = JSON.parse(t);
    const rows = Array.isArray(j) ? j : (j.articles || j.data || j.rows || j.values || []);
    return toArticles(rows);
  }
  return toArticles(parseCSV(text));
}

// body format: blank line = new paragraph, "## " = subheading, "- " = bullet
function renderBody(body) {
  return body.split(/\n{2,}/).map((block, i) => {
    const lines = block.split('\n').map((l) => l.trim()).filter(Boolean);
    if (lines.length === 0) return null;
    if (lines[0].startsWith('## ')) {
      return (
        <h5 key={i} className="font-display font-bold text-lg text-[#111] pt-2">{lines[0].replace(/^##\s+/, '')}</h5>
      );
    }
    if (lines.every((l) => l.startsWith('- '))) {
      return (
        <ul key={i} className="list-disc pl-5 space-y-1.5 text-sm font-light text-[#444] leading-relaxed">
          {lines.map((l, j) => <li key={j}>{l.replace(/^-\s+/, '')}</li>)}
        </ul>
      );
    }
    return <p key={i} className="text-sm font-light text-[#444] leading-relaxed">{lines.join(' ')}</p>;
  });
}

// sources format: one per line, "name | https://..." or just a URL (https only)
function parseSources(text) {
  return text.split('\n').map((l) => l.trim()).filter(Boolean).map((l) => {
    const [a, b] = l.includes('|') ? l.split('|').map((x) => x.trim()) : [l, l];
    const url = /^https?:\/\//i.test(b) ? b : (/^https?:\/\//i.test(a) ? a : null);
    return url ? { name: a === url ? new URL(url).hostname : a, url } : null;
  }).filter(Boolean);
}

export default function AINews({ lineLink, en, onBackToHome }) {
  const [articles, setArticles] = useState([]);
  const [state, setState] = useState('loading'); // loading | ready | error | unconfigured
  const [query, setQuery] = useState('');
  const [active, setActive] = useState(null);

  useEffect(() => {
    if (!AI_NEWS_SHEET_CSV_URL) { setState('unconfigured'); return; }
    let cancelled = false;
    fetch(AI_NEWS_SHEET_CSV_URL)
      .then((r) => { if (!r.ok) throw new Error(r.status); return r.text(); })
      .then((t) => {
        if (cancelled) return;
        const list = parseResponse(t).sort((a, b) => (b.date || '').localeCompare(a.date || ''));
        setArticles(list);
        setState('ready');
      })
      .catch((e) => { console.warn('AI News load failed', e); if (!cancelled) setState('error'); });
    return () => { cancelled = true; };
  }, []);

  const filtered = useMemo(() => {
    const q = query.toLowerCase();
    return articles.filter((a) =>
      !q || a.title.toLowerCase().includes(q) || a.summary.toLowerCase().includes(q) || a.tags.some((t) => t.toLowerCase().includes(q)));
  }, [articles, query]);

  return (
    <div className="min-h-screen bg-[#F9F8F4] text-[#111] pt-28 pb-32 px-6 md:px-12 lg:px-16">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="flex justify-between items-center border-b border-[#E6E4DD] pb-6">
          <button onClick={onBackToHome} className="group flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-[#666] hover:text-[#FF6A2A] transition-colors bg-white px-5 py-2.5 rounded-full border border-[#E6E4DD] shadow-sm hover:border-[#FF6A2A]">
            <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
            <span>กลับสู่หน้าหลัก (Back to Home)</span>
          </button>
          <span className="hidden sm:inline text-xs uppercase tracking-[0.2em] font-semibold text-[#FF6A2A] bg-[#FFF1E6] px-4 py-2 rounded-full border border-[#FFE3D2]">
            MODGOSCALE — AI NEWS
          </span>
        </div>

        <div className="space-y-4 max-w-4xl">
          <span className="text-xs uppercase tracking-[0.3em] font-bold text-[#FF6A2A] block">WEEKLY AI UPDATE</span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-tight">
            AI NEWS<span className="text-[#FF6A2A]">.</span>
          </h1>
          <p className="text-lg md:text-2xl font-kanit font-light text-[#555] leading-relaxed">
            สรุปข่าว AI ที่น่าสนใจ อ่านง่าย พร้อมแหล่งอ้างอิง คัดและตรวจโดยทีม Modty.ai ก่อนเผยแพร่ทุกชิ้น
          </p>
        </div>

        {state === 'ready' && articles.length > 0 && (
          <div className="relative w-full md:w-96">
            <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#888]" />
            <input
              type="text"
              placeholder="ค้นหาข่าว / หัวข้อ..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full bg-white border border-[#E6E4DD] rounded-full pl-11 pr-4 py-3 text-xs focus:outline-none focus:border-[#FF6A2A] transition-colors placeholder:text-[#999]"
            />
          </div>
        )}

        {state === 'loading' && <p className="text-sm text-[#888]">กำลังโหลดข่าว...</p>}
        {(state === 'unconfigured' || state === 'error' || (state === 'ready' && articles.length === 0)) && (
          <div className="bg-white border border-dashed border-[#E6E4DD] rounded-3xl p-10 text-center space-y-3">
            <Newspaper className="mx-auto text-[#FF6A2A]" size={32} />
            <p className="font-display font-bold text-lg">
              ข่าวชุดแรกกำลังจะมาเร็วๆ นี้
            </p>
            <p className="text-sm font-light text-[#666]">ติดตามอัปเดตข่าว AI ได้ที่ LINE ของเรา</p>
          </div>
        )}

        {state === 'ready' && filtered.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((a) => (
              <div key={a.id} onClick={() => setActive(a)} className="bg-white border border-[#E6E4DD] rounded-3xl p-8 flex flex-col justify-between hover:border-[#FF6A2A] hover:-translate-y-1.5 transition-all shadow-sm group cursor-pointer">
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <span className="bg-[#FFF1E6] text-[#FF6A2A] border border-[#FFE3D2] px-3 py-1 text-[10px] uppercase font-bold tracking-wider rounded-full">{a.category}</span>
                    <span className="text-[11px] text-[#888] font-light flex items-center gap-1"><Clock size={12} className="text-[#FF6A2A]" /> {a.date}</span>
                  </div>
                  <h3 className="text-xl font-display font-bold group-hover:text-[#FF6A2A] transition-colors mb-2 leading-snug">{a.title}</h3>
                  <p className="text-xs font-light text-[#666] line-clamp-4 leading-relaxed mb-6">{a.summary}</p>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {a.tags.slice(0, 3).map((t) => (
                    <span key={t} className="text-[10px] px-2.5 py-1 rounded-md border bg-[#F9F8F4] text-[#666] border-[#E6E4DD] font-medium">#{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="pt-12 border-t border-[#E6E4DD] flex flex-col md:flex-row justify-between items-center gap-6">
          <button onClick={onBackToHome} className="flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-[#111] hover:text-[#FF6A2A] transition-colors bg-white px-8 py-4 rounded-full border border-[#E6E4DD] shadow-sm hover:border-[#FF6A2A]">
            <Home size={16} className="text-[#FF6A2A]" />
            <span>กลับสู่หน้าหลัก MODGOSCALE</span>
          </button>
          <p className="text-xs text-[#888] font-light">© MODGOSCALE — Powered by Modty.ai Personal Brand</p>
        </div>

        {active && (
          <div className="fixed inset-0 z-[120] bg-black/70 backdrop-blur-md flex justify-center items-center p-4 md:p-8 overflow-y-auto" onClick={() => setActive(null)}>
            <div className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto border border-[#E6E4DD] shadow-2xl relative" onClick={(e) => e.stopPropagation()}>
              <div className="sticky top-0 bg-white/95 backdrop-blur-md px-6 md:px-10 py-5 border-b border-[#E6E4DD] flex justify-between items-center z-20">
                <span className="bg-[#FFF1E6] text-[#FF6A2A] border border-[#FFE3D2] px-3 py-1 text-[10px] uppercase font-bold tracking-wider rounded-full">{active.category}</span>
                <button onClick={() => setActive(null)} className="p-2 text-[#666] hover:text-[#111] hover:bg-[#F9F8F4] rounded-full transition-colors" aria-label="close"><X size={20} /></button>
              </div>
              <div className="p-6 md:p-10 space-y-6">
                <div className="space-y-3 border-b border-[#E6E4DD] pb-6">
                  <p className="text-xs text-[#888] font-light">{active.date}</p>
                  <h2 className="text-2xl md:text-4xl font-display font-bold">{active.title}</h2>
                  <p className="text-base font-kanit font-light text-[#555]">{active.summary}</p>
                </div>
                <div className="space-y-4">{renderBody(active.body)}</div>
                {parseSources(active.sources).length > 0 && (
                  <div className="space-y-2 border-t border-[#E6E4DD] pt-6">
                    <h4 className="font-display font-bold text-base">แหล่งอ้างอิง</h4>
                    <ul className="space-y-1.5">
                      {parseSources(active.sources).map((s) => (
                        <li key={s.url}>
                          <a href={s.url} target="_blank" rel="noreferrer noopener nofollow" className="inline-flex items-center gap-1.5 text-xs text-[#FF6A2A] hover:underline break-all">
                            <ExternalLink size={12} /> {s.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                <div className="bg-[#111] text-white rounded-3xl p-8 space-y-4">
                  <p className="font-display font-bold text-xl">อยากได้เทคนิค AI ที่เอาไปใช้ได้จริงทุกสัปดาห์?</p>
                  <p className="text-xs font-light text-[#aaa] leading-relaxed">Modty AI Insider Club เดือนละ 99 บาท อัปเดตทุกสัปดาห์ ปรึกษาได้เดือนละครั้ง</p>
                  <a href={lineLink} target="_blank" rel="noreferrer" className="inline-block bg-[#FF6A2A] text-white px-8 py-3 rounded-full text-xs uppercase tracking-widest font-semibold hover:bg-[#e0591f] transition-all">ปรึกษาผ่าน LINE</a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
