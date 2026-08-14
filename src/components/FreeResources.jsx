import React, { useEffect, useRef, useState } from 'react';
import {
  ArrowLeft,
  BookOpen,
  Check,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Copy,
  Download,
  FileText,
  Home,
  Menu,
  Search,
  X,
} from 'lucide-react';
import fullTemplateHtml from '../data/freePromptTemplate.html?raw';

const SOURCE_STATS = [
  { value: '34,063', label: 'คำจากต้นฉบับ' },
  { value: '65', label: 'Prompt Block พร้อมคัดลอก' },
  { value: 'ครบ 100%', label: 'ไม่ตัดเนื้อหา' },
];

export default function FreeResources({ onBackToHome }) {
  const articleRef = useRef(null);
  const readerRef = useRef(null);
  const searchMatchesRef = useRef([]);
  const activeMatchRef = useRef(-1);

  const [toc, setToc] = useState([]);
  const [tocOpen, setTocOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchedQuery, setSearchedQuery] = useState('');
  const [matchState, setMatchState] = useState({ current: 0, total: 0 });
  const [copiedAll, setCopiedAll] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const article = articleRef.current;
    if (!article) return undefined;

    const headings = Array.from(article.querySelectorAll('[data-custom-style="Page Title"], h1, h2, h3'));
    const generatedToc = headings.map((heading, index) => {
      const id = heading.id || `free-prompt-section-${index + 1}`;
      heading.id = id;
      const isPageTitle = heading.dataset.customStyle === 'Page Title';
      if (isPageTitle) {
        heading.setAttribute('role', 'heading');
        heading.setAttribute('aria-level', '1');
      }
      return {
        id,
        title: heading.textContent.trim(),
        level: isPageTitle ? 1 : Number(heading.tagName.substring(1)),
      };
    });
    setToc(generatedToc);

    article.querySelectorAll('a').forEach((link) => {
      link.target = '_blank';
      link.rel = 'noreferrer noopener';
    });

    article.querySelectorAll('table').forEach((table) => {
      if (table.parentElement?.classList.contains('resource-table-scroll')) return;
      const wrapper = document.createElement('div');
      wrapper.className = 'resource-table-scroll';
      table.parentNode.insertBefore(wrapper, table);
      wrapper.appendChild(table);
    });

    const promptTextByButton = new WeakMap();
    article.querySelectorAll('pre, [data-custom-style="Code Block"]').forEach((block, index) => {
      block.classList.add('resource-prompt-block');
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'prompt-copy-button';
      button.dataset.promptIndex = String(index);
      button.setAttribute('aria-label', `คัดลอก Prompt ชุดที่ ${index + 1}`);
      button.textContent = 'คัดลอก';
      promptTextByButton.set(button, block.innerText);
      block.appendChild(button);
    });

    const handlePromptCopy = async (event) => {
      const button = event.target.closest('.prompt-copy-button');
      if (!button) return;
      const text = promptTextByButton.get(button) || '';
      await navigator.clipboard.writeText(text);
      button.textContent = 'คัดลอกแล้ว';
      button.classList.add('is-copied');
      window.setTimeout(() => {
        button.textContent = 'คัดลอก';
        button.classList.remove('is-copied');
      }, 2200);
    };

    article.addEventListener('click', handlePromptCopy);
    return () => article.removeEventListener('click', handlePromptCopy);
  }, []);

  useEffect(() => {
    const handleScroll = () => setShowBackToTop(window.scrollY > 900);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const clearSearchHighlights = () => {
    searchMatchesRef.current.forEach((element) => {
      element.classList.remove('resource-search-hit', 'resource-search-hit-active');
    });
  };

  const activateMatch = (index) => {
    const matches = searchMatchesRef.current;
    if (!matches.length) return;
    const normalizedIndex = (index + matches.length) % matches.length;
    matches.forEach((element) => element.classList.remove('resource-search-hit-active'));
    const active = matches[normalizedIndex];
    active.classList.add('resource-search-hit-active');
    active.scrollIntoView({ behavior: 'smooth', block: 'center' });
    activeMatchRef.current = normalizedIndex;
    setMatchState({ current: normalizedIndex + 1, total: matches.length });
  };

  const submitSearch = (event) => {
    event?.preventDefault();
    const query = searchQuery.trim().toLocaleLowerCase('th-TH');
    if (!query) {
      clearSearchHighlights();
      searchMatchesRef.current = [];
      activeMatchRef.current = -1;
      setSearchedQuery('');
      setMatchState({ current: 0, total: 0 });
      return;
    }

    if (query === searchedQuery.toLocaleLowerCase('th-TH') && searchMatchesRef.current.length) {
      activateMatch(activeMatchRef.current + 1);
      return;
    }

    clearSearchHighlights();
    const candidates = Array.from(
      articleRef.current.querySelectorAll('h1, h2, h3, p, li, blockquote, td, th')
    );
    const matches = candidates.filter((element) =>
      element.textContent.toLocaleLowerCase('th-TH').includes(query)
    );
    matches.forEach((element) => element.classList.add('resource-search-hit'));
    searchMatchesRef.current = matches;
    activeMatchRef.current = -1;
    setSearchedQuery(searchQuery.trim());
    setMatchState({ current: matches.length ? 1 : 0, total: matches.length });
    if (matches.length) activateMatch(0);
  };

  const navigateMatch = (direction) => {
    if (!searchMatchesRef.current.length) return;
    activateMatch(activeMatchRef.current + direction);
  };

  const copyAllContent = async () => {
    const clone = articleRef.current.cloneNode(true);
    clone.querySelectorAll('.prompt-copy-button').forEach((button) => button.remove());
    await navigator.clipboard.writeText(clone.innerText);
    setCopiedAll(true);
    window.setTimeout(() => setCopiedAll(false), 2500);
  };

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setTocOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#F9F8F4] text-[#111] pt-24 pb-28 px-4 sm:px-6 md:px-10 lg:px-14 animate-in fade-in duration-300">
      <div className="max-w-[1480px] mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#E6E4DD] pb-5">
          <button
            onClick={onBackToHome}
            className="group inline-flex w-fit items-center gap-2 text-xs uppercase tracking-widest font-semibold text-[#666] hover:text-[#FF6A2A] transition-colors bg-white px-5 py-2.5 rounded-full border border-[#E6E4DD] shadow-sm hover:border-[#FF6A2A]"
          >
            <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
            กลับสู่หน้าหลัก
          </button>
          <span className="w-fit text-[10px] sm:text-xs uppercase tracking-[0.2em] font-semibold text-[#FF6A2A] bg-[#FFF1E6] px-4 py-2 rounded-full border border-[#FFE3D2]">
            ORIGINAL COMPLETE EDITION
          </span>
        </div>

        <header className="grid lg:grid-cols-[1fr_420px] gap-10 lg:gap-16 items-end py-12 lg:py-16">
          <div className="max-w-4xl space-y-6">
            <span className="text-xs uppercase tracking-[0.3em] font-bold text-[#FF6A2A] block">
              MODTY.AI FREE KNOWLEDGE LIBRARY
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold text-[#111] leading-[1.05]">
              FREE PROMPT<br />TEMPLATE<span className="text-[#FF6A2A]">.</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl font-kanit font-light text-[#555] leading-relaxed max-w-3xl">
              รวมเนื้อหาจากต้นฉบับและ Subpage ทั้งหมดไว้ในหน้าเดียว อ่าน ค้นหา และคัดลอก Prompt ไปใช้ได้ทันที โดยคงข้อความครบตามเอกสารต้นฉบับ
            </p>
            <div className="flex flex-col sm:flex-row gap-3 pt-1">
              <button
                onClick={() => readerRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
                className="inline-flex items-center justify-center gap-2 bg-[#111] text-white px-7 py-3.5 rounded-full text-xs uppercase tracking-widest font-semibold hover:bg-[#FF6A2A] transition-colors"
              >
                <BookOpen size={16} /> เริ่มอ่านฉบับเต็ม
              </button>
              <a
                href="/Free-Prompt-Template-All-Subpages.docx"
                download
                className="inline-flex items-center justify-center gap-2 bg-white text-[#111] px-7 py-3.5 rounded-full text-xs uppercase tracking-widest font-semibold border border-[#E6E4DD] hover:border-[#FF6A2A] hover:text-[#FF6A2A] transition-colors"
              >
                <Download size={16} /> ดาวน์โหลด Word ต้นฉบับ
              </a>
            </div>
          </div>

          <div className="bg-white border border-[#E6E4DD] rounded-[28px] p-6 sm:p-8 shadow-sm">
            <div className="flex items-center gap-3 pb-5 mb-5 border-b border-[#E6E4DD]">
              <div className="w-11 h-11 rounded-2xl bg-[#FFF1E6] text-[#FF6A2A] flex items-center justify-center">
                <FileText size={21} />
              </div>
              <div>
                <p className="font-display font-bold text-base">Complete Source Archive</p>
                <p className="text-xs text-[#777] mt-0.5">Free Prompt Template — All Subpages</p>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-3">
              {SOURCE_STATS.map((stat) => (
                <div key={stat.label} className="bg-[#F9F8F4] rounded-2xl p-3 sm:p-4 text-center border border-[#EEECE5]">
                  <strong className="block text-base sm:text-xl font-display text-[#111]">{stat.value}</strong>
                  <span className="block text-[10px] sm:text-[11px] text-[#777] leading-snug mt-1">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </header>

        <section ref={readerRef} className="scroll-mt-24 border-t border-[#E6E4DD] pt-8">
          <div className="sticky top-3 z-40 bg-white/95 backdrop-blur-xl border border-[#E6E4DD] shadow-lg shadow-black/5 rounded-3xl p-3 sm:p-4 mb-8">
            <div className="flex flex-col lg:flex-row lg:items-center gap-3">
              <div className="flex gap-2">
                <button
                  onClick={() => setTocOpen(true)}
                  className="lg:hidden inline-flex items-center justify-center gap-2 px-4 py-3 rounded-2xl bg-[#111] text-white text-xs font-semibold"
                >
                  <Menu size={16} /> สารบัญ
                </button>
                <button
                  onClick={copyAllContent}
                  className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-2xl bg-[#F9F8F4] border border-[#E6E4DD] text-xs font-semibold hover:border-[#FF6A2A] hover:text-[#FF6A2A] transition-colors whitespace-nowrap"
                >
                  {copiedAll ? <Check size={16} /> : <Copy size={16} />}
                  {copiedAll ? 'คัดลอกแล้ว' : 'คัดลอกทั้งหมด'}
                </button>
              </div>

              <form onSubmit={submitSearch} className="relative flex-1 flex items-center gap-2">
                <Search size={17} className="absolute left-4 text-[#888] pointer-events-none" />
                <input
                  value={searchQuery}
                  onChange={(event) => setSearchQuery(event.target.value)}
                  placeholder="ค้นหา Prompt, เครื่องมือ หรือหัวข้อในเอกสาร..."
                  className="w-full bg-[#F9F8F4] border border-[#E6E4DD] rounded-2xl pl-11 pr-28 sm:pr-32 py-3 text-sm focus:outline-none focus:border-[#FF6A2A]"
                />
                <button
                  type="submit"
                  className="absolute right-1.5 bg-[#FF6A2A] text-white px-4 sm:px-5 py-2 rounded-xl text-xs font-semibold hover:bg-[#E95B20] transition-colors"
                >
                  ค้นหา
                </button>
              </form>

              {searchedQuery && (
                <div className="flex items-center justify-between lg:justify-end gap-2 text-xs text-[#666] px-1">
                  <span className="min-w-[72px] text-center">{matchState.current} / {matchState.total}</span>
                  <button
                    onClick={() => navigateMatch(-1)}
                    disabled={!matchState.total}
                    className="p-2 rounded-xl bg-[#F9F8F4] border border-[#E6E4DD] disabled:opacity-40"
                    aria-label="ผลการค้นหาก่อนหน้า"
                  >
                    <ChevronLeft size={15} />
                  </button>
                  <button
                    onClick={() => navigateMatch(1)}
                    disabled={!matchState.total}
                    className="p-2 rounded-xl bg-[#F9F8F4] border border-[#E6E4DD] disabled:opacity-40"
                    aria-label="ผลการค้นหาถัดไป"
                  >
                    <ChevronRight size={15} />
                  </button>
                </div>
              )}
            </div>
          </div>

          <div className="grid lg:grid-cols-[280px_minmax(0,1fr)] xl:grid-cols-[320px_minmax(0,1fr)] gap-8 items-start">
            <aside className="hidden lg:block sticky top-28 max-h-[calc(100vh-8rem)] overflow-y-auto bg-white rounded-3xl border border-[#E6E4DD] p-5 shadow-sm resource-toc-scroll">
              <div className="flex items-center gap-2 pb-4 mb-3 border-b border-[#E6E4DD]">
                <BookOpen size={16} className="text-[#FF6A2A]" />
                <h2 className="text-xs uppercase tracking-widest font-bold">สารบัญฉบับเต็ม</h2>
              </div>
              <nav className="space-y-1">
                {toc.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`block w-full text-left rounded-xl py-2 px-3 text-[11px] leading-relaxed text-[#666] hover:bg-[#FFF1E6] hover:text-[#FF6A2A] transition-colors ${
                      item.level === 1 ? 'font-bold text-[#111]' : item.level === 2 ? 'pl-5 font-medium' : 'pl-7'
                    }`}
                  >
                    {item.title}
                  </button>
                ))}
              </nav>
            </aside>

            <main className="min-w-0 bg-white rounded-[28px] sm:rounded-[36px] border border-[#E6E4DD] shadow-sm overflow-hidden">
              <div className="px-5 sm:px-8 md:px-12 lg:px-14 py-6 border-b border-[#E6E4DD] bg-[#FFFDF9] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.25em] font-bold text-[#FF6A2A]">SOURCE DOCUMENT</p>
                  <h2 className="text-lg sm:text-xl font-display font-bold mt-1">Free Prompt Template — Complete Collection</h2>
                </div>
                <span className="text-[11px] text-[#777]">เรียงตามลำดับต้นฉบับ</span>
              </div>
              <article
                ref={articleRef}
                className="resource-document px-5 sm:px-8 md:px-12 lg:px-14 py-8 sm:py-12"
                dangerouslySetInnerHTML={{ __html: fullTemplateHtml }}
              />
            </main>
          </div>
        </section>

        <footer className="mt-14 pt-8 border-t border-[#E6E4DD] flex flex-col sm:flex-row justify-between items-center gap-5">
          <button
            onClick={onBackToHome}
            className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold bg-white px-7 py-3.5 rounded-full border border-[#E6E4DD] hover:border-[#FF6A2A] hover:text-[#FF6A2A] transition-colors"
          >
            <Home size={15} /> กลับสู่หน้าหลัก MODGOSCALE
          </button>
          <p className="text-xs text-[#888]">© MODGOSCALE — Powered by Modty.ai</p>
        </footer>
      </div>

      {tocOpen && (
        <div className="fixed inset-0 z-[150] bg-black/55 backdrop-blur-sm lg:hidden" onClick={() => setTocOpen(false)}>
          <aside
            className="absolute inset-y-0 left-0 w-[88%] max-w-sm bg-white p-5 overflow-y-auto shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="sticky top-0 bg-white flex items-center justify-between pb-4 mb-3 border-b border-[#E6E4DD] z-10">
              <div className="flex items-center gap-2">
                <BookOpen size={17} className="text-[#FF6A2A]" />
                <strong className="text-sm">สารบัญฉบับเต็ม</strong>
              </div>
              <button onClick={() => setTocOpen(false)} className="p-2 rounded-full bg-[#F9F8F4]" aria-label="ปิดสารบัญ">
                <X size={18} />
              </button>
            </div>
            <nav className="space-y-1 pb-10">
              {toc.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left rounded-xl py-2.5 px-3 text-xs leading-relaxed text-[#666] hover:bg-[#FFF1E6] hover:text-[#FF6A2A] ${
                    item.level === 1 ? 'font-bold text-[#111]' : item.level === 2 ? 'pl-5 font-medium' : 'pl-7'
                  }`}
                >
                  {item.title}
                </button>
              ))}
            </nav>
          </aside>
        </div>
      )}

      {showBackToTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-5 right-5 z-50 w-12 h-12 rounded-full bg-[#111] text-white shadow-xl flex items-center justify-center hover:bg-[#FF6A2A] transition-colors"
          aria-label="กลับขึ้นด้านบน"
        >
          <ChevronDown size={19} className="rotate-180" />
        </button>
      )}
    </div>
  );
}
