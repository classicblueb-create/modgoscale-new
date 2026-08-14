import React, { useEffect, useMemo, useRef, useState } from 'react';
import { ArrowLeft, BookOpen, Check, Copy, Layers3, Search, Sparkles, Tag, X } from 'lucide-react';
import promptLibraryHtml from '../data/freePromptTemplate.html?raw';

const CATEGORY_RULES = [
  { name: 'AI Video', words: ['video', 'วีดีโอ', 'วิดีโอ', 'motion', 'vlog', 'veo', 'kling'] },
  { name: 'AI Visual', words: ['ภาพ', 'visual', 'image', 'carousel', 'influencer', 'graphic', 'infographic'] },
  { name: 'Vibe Coding', words: ['vibe', 'coding', 'เว็บไซต์', 'website', 'deploy', 'ui', 'ux', 'react'] },
  { name: 'AI Agent & Skills', words: ['agent', 'skill', 'assistant', 'automation', 'calendar', 'workflow'] },
  { name: 'Prompt & GEM', words: ['prompt', 'gem', 'gpt', 'chatgpt', 'claude', 'gemini', 'codex'] },
];

const TAG_RULES = [
  ['ChatGPT', ['chatgpt', 'gpt']],
  ['Claude', ['claude']],
  ['Gemini', ['gemini']],
  ['Codex', ['codex']],
  ['AI Agent', ['agent', 'assistant']],
  ['Custom Skills', ['skill']],
  ['Vibe Coding', ['vibe', 'coding', 'เว็บไซต์', 'website', 'deploy', 'react']],
  ['AI Video', ['video', 'วีดีโอ', 'วิดีโอ', 'motion', 'vlog']],
  ['AI Visual', ['ภาพ', 'image', 'visual', 'carousel', 'infographic']],
  ['Automation', ['automation', 'workflow', 'อัตโนมัติ']],
  ['Strategy', ['strategy', 'วางแผน', 'แนวคิด', 'วิเคราะห์']],
];

function cleanTitle(value) {
  const cleaned = value
    .replace(/[\u{1F300}-\u{1FAFF}\u{2600}-\u{27BF}]/gu, '')
    .replace(/\s+/g, ' ')
    .trim();
  return cleaned.length > 92 ? `${cleaned.slice(0, 89).trim()}…` : cleaned;
}

function getCategory(text) {
  const normalized = text.toLowerCase();
  return CATEGORY_RULES.find(({ words }) => words.some((word) => normalized.includes(word)))?.name || 'AI Productivity';
}

function getTags(text, category) {
  const normalized = text.toLowerCase();
  const matches = TAG_RULES.filter(([, words]) => words.some((word) => normalized.includes(word))).map(([name]) => name);
  return [...new Set([category, ...matches])].slice(0, 4);
}

function buildTopicLibrary(rawHtml) {
  if (typeof DOMParser === 'undefined') return [];

  return rawHtml
    .split(/(?=<div data-custom-style="Page Title">)/)
    .filter((section) => section.startsWith('<div data-custom-style="Page Title">'))
    .map((section, index) => {
      const documentNode = new DOMParser().parseFromString(`<main>${section}</main>`, 'text/html');
      const root = documentNode.querySelector('main');
      const pageTitle = root?.querySelector('[data-custom-style="Page Title"]');
      const titleNode = pageTitle?.querySelector('p, strong') || pageTitle;
      const title = cleanTitle(titleNode?.textContent || `Topic ${index + 1}`);

      root?.querySelectorAll('[data-custom-style="Source URL"], script, style').forEach((node) => node.remove());
      titleNode?.remove();
      if (pageTitle && !pageTitle.textContent.trim()) pageTitle.remove();
      else pageTitle?.removeAttribute('data-custom-style');

      const text = root?.textContent.replace(/\s+/g, ' ').trim() || '';
      const summary = text.length > 165 ? `${text.slice(0, 162).trim()}…` : text;
      const category = getCategory(`${title} ${text.slice(0, 1500)}`);
      const promptCount = root?.querySelectorAll('pre, [data-custom-style="Code Block"]').length || 0;

      return {
        id: `topic-${index + 1}`,
        title,
        summary: summary || 'เปิดดูขั้นตอน แนวคิด และ Prompt ที่นำไปใช้งานต่อได้ทันที',
        category,
        tags: getTags(`${title} ${text.slice(0, 2000)}`, category),
        promptCount,
        html: root?.innerHTML || '',
        copyText: `${title}\n\n${text}`,
      };
    })
    .filter((topic) => topic.title && topic.title.toLowerCase() !== 'free prompt template');
}

async function copyText(text) {
  if (navigator.clipboard?.writeText) {
    await navigator.clipboard.writeText(text);
    return;
  }
  const textarea = document.createElement('textarea');
  textarea.value = text;
  textarea.style.position = 'fixed';
  textarea.style.opacity = '0';
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand('copy');
  textarea.remove();
}

export default function FreeResources({ onBackToHome }) {
  const modalBodyRef = useRef(null);
  const topics = useMemo(() => buildTopicLibrary(promptLibraryHtml), []);
  const categories = useMemo(() => ['ทั้งหมด', ...new Set(topics.map((topic) => topic.category))], [topics]);
  const totalPrompts = useMemo(() => topics.reduce((sum, topic) => sum + topic.promptCount, 0), [topics]);

  const [activeCategory, setActiveCategory] = useState('ทั้งหมด');
  const [query, setQuery] = useState('');
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [copiedTopic, setCopiedTopic] = useState(false);

  const visibleTopics = useMemo(() => {
    const keyword = query.trim().toLowerCase();
    return topics.filter((topic) => {
      const inCategory = activeCategory === 'ทั้งหมด' || topic.category === activeCategory;
      const searchable = `${topic.title} ${topic.summary} ${topic.tags.join(' ')}`.toLowerCase();
      return inCategory && (!keyword || searchable.includes(keyword));
    });
  }, [activeCategory, query, topics]);

  useEffect(() => {
    if (!selectedTopic) return undefined;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const closeOnEscape = (event) => event.key === 'Escape' && setSelectedTopic(null);
    window.addEventListener('keydown', closeOnEscape);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', closeOnEscape);
    };
  }, [selectedTopic]);

  useEffect(() => {
    const container = modalBodyRef.current;
    if (!container || !selectedTopic) return undefined;

    container.querySelectorAll('a').forEach((link) => {
      link.target = '_blank';
      link.rel = 'noreferrer noopener';
    });

    const promptTextByButton = new WeakMap();
    container.querySelectorAll('pre, [data-custom-style="Code Block"]').forEach((block, index) => {
      block.classList.add('resource-prompt-block');
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'prompt-copy-button';
      button.setAttribute('aria-label', `คัดลอก Prompt ชุดที่ ${index + 1}`);
      button.innerHTML = '<span>คัดลอก Prompt</span>';
      promptTextByButton.set(button, block.innerText.trim());
      block.appendChild(button);
    });

    const handlePromptCopy = async (event) => {
      const button = event.target.closest('.prompt-copy-button');
      if (!button) return;
      await copyText(promptTextByButton.get(button) || '');
      button.classList.add('is-copied');
      button.innerHTML = '<span>คัดลอกแล้ว</span>';
      window.setTimeout(() => {
        button.classList.remove('is-copied');
        button.innerHTML = '<span>คัดลอก Prompt</span>';
      }, 1800);
    };

    container.addEventListener('click', handlePromptCopy);
    return () => container.removeEventListener('click', handlePromptCopy);
  }, [selectedTopic]);

  const handleCopyTopic = async () => {
    await copyText(selectedTopic.copyText);
    setCopiedTopic(true);
    window.setTimeout(() => setCopiedTopic(false), 1800);
  };

  return (
    <div className="min-h-screen bg-[#F9F8F4] text-[#111]">
      <header className="sticky top-0 z-40 border-b border-black/10 bg-[#F9F8F4]/95 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
          <button onClick={onBackToHome} className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] transition-colors hover:text-[#FF5A1F]">
            <ArrowLeft size={17} /> กลับหน้าหลัก
          </button>
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em]">
            <Sparkles size={16} className="text-[#FF5A1F]" /> MODTY FREE RESOURCES
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-5 pb-20 pt-12 sm:px-8 sm:pt-16">
        <section className="grid gap-8 border-b border-black/10 pb-12 lg:grid-cols-[minmax(0,1fr)_360px] lg:items-end">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#FF5A1F]/25 bg-[#FFF0E9] px-4 py-2 text-[11px] font-bold uppercase tracking-[0.16em] text-[#D9430D]">
              <BookOpen size={14} /> Practical AI Knowledge Library
            </div>
            <h1 className="max-w-4xl font-display text-4xl font-bold leading-[1.12] sm:text-5xl lg:text-6xl">
              เลือกเรื่องที่สนใจ<br />แล้วนำไปใช้ได้ทันที<span className="text-[#FF5A1F]">.</span>
            </h1>
            <p className="mt-5 max-w-2xl text-sm font-light leading-7 text-[#666] sm:text-base">
              รวม Prompt เทคนิค และขั้นตอนใช้งาน AI แยกเป็นหัวข้อชัดเจน กดเปิดอ่านรายละเอียดและคัดลอกไปลองได้เลย
            </p>
          </div>

          <div className="grid grid-cols-2 overflow-hidden rounded-[28px] border border-black/10 bg-white shadow-sm">
            <div className="border-r border-black/10 p-6">
              <Layers3 size={20} className="mb-5 text-[#FF5A1F]" />
              <strong className="block font-display text-4xl">{topics.length}</strong>
              <span className="mt-1 block text-xs text-[#777]">หัวข้อพร้อมอ่าน</span>
            </div>
            <div className="p-6">
              <Copy size={20} className="mb-5 text-[#FF5A1F]" />
              <strong className="block font-display text-4xl">{totalPrompts}</strong>
              <span className="mt-1 block text-xs text-[#777]">Prompt พร้อมคัดลอก</span>
            </div>
          </div>
        </section>

        <section className="py-9">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <label className="relative block w-full lg:max-w-md">
              <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#777]" />
              <input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="ค้นหา Prompt, เครื่องมือ หรือหัวข้อ..."
                className="w-full rounded-2xl border border-black/10 bg-white py-3.5 pl-12 pr-4 text-sm outline-none transition focus:border-[#FF5A1F] focus:ring-4 focus:ring-[#FF5A1F]/10"
              />
            </label>
            <p className="text-xs text-[#777]">พบ {visibleTopics.length} หัวข้อ</p>
          </div>

          <div className="resource-category-scroll mt-5 flex gap-2 overflow-x-auto pb-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`whitespace-nowrap rounded-full border px-4 py-2 text-xs font-semibold transition ${
                  activeCategory === category
                    ? 'border-[#111] bg-[#111] text-white'
                    : 'border-black/10 bg-white text-[#555] hover:border-[#FF5A1F] hover:text-[#D9430D]'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </section>

        {visibleTopics.length ? (
          <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {visibleTopics.map((topic, index) => (
              <article
                key={topic.id}
                role="button"
                tabIndex={0}
                onClick={() => setSelectedTopic(topic)}
                onKeyDown={(event) => {
                  if (event.key === 'Enter' || event.key === ' ') {
                    event.preventDefault();
                    setSelectedTopic(topic);
                  }
                }}
                className="group flex min-h-[300px] cursor-pointer flex-col rounded-[28px] border border-black/10 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#FF5A1F]/60 hover:shadow-xl hover:shadow-black/5 focus:outline-none focus:ring-4 focus:ring-[#FF5A1F]/15"
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="font-display text-xs font-bold text-[#AAA]">{String(index + 1).padStart(2, '0')}</span>
                  <span className="rounded-full bg-[#FFF0E9] px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-[#D9430D]">{topic.category}</span>
                </div>
                <h2 className="mt-8 font-display text-xl font-bold leading-snug transition-colors group-hover:text-[#E74912]">{topic.title}</h2>
                <p className="mt-3 line-clamp-3 text-sm font-light leading-6 text-[#777]">{topic.summary}</p>
                <div className="mt-auto pt-6">
                  <div className="flex flex-wrap gap-1.5">
                    {topic.tags.slice(0, 3).map((tag) => (
                      <span key={tag} className="inline-flex items-center gap-1 rounded-lg border border-black/10 px-2 py-1 text-[10px] text-[#666]">
                        <Tag size={10} /> {tag}
                      </span>
                    ))}
                  </div>
                  <div className="mt-5 flex items-center justify-between border-t border-black/10 pt-4 text-xs font-semibold">
                    <span>{topic.promptCount ? `${topic.promptCount} Prompt` : 'Guide & Ideas'}</span>
                    <span className="text-[#E74912]">ดูรายละเอียด →</span>
                  </div>
                </div>
              </article>
            ))}
          </section>
        ) : (
          <div className="rounded-[28px] border border-dashed border-black/15 bg-white px-6 py-20 text-center">
            <Search className="mx-auto text-[#AAA]" />
            <h2 className="mt-4 font-display text-xl font-bold">ยังไม่พบหัวข้อที่ค้นหา</h2>
            <button onClick={() => { setQuery(''); setActiveCategory('ทั้งหมด'); }} className="mt-3 text-sm font-semibold text-[#E74912]">ล้างการค้นหา</button>
          </div>
        )}
      </main>

      {selectedTopic && (
        <div className="fixed inset-0 z-[100] flex items-end justify-center bg-black/60 p-0 backdrop-blur-sm sm:items-center sm:p-5" onMouseDown={() => setSelectedTopic(null)}>
          <section
            role="dialog"
            aria-modal="true"
            aria-labelledby="resource-modal-title"
            className="flex max-h-[94vh] w-full max-w-4xl flex-col overflow-hidden rounded-t-[30px] bg-white shadow-2xl sm:max-h-[90vh] sm:rounded-[32px]"
            onMouseDown={(event) => event.stopPropagation()}
          >
            <header className="border-b border-black/10 bg-[#FFFDF9] px-5 py-5 sm:px-8">
              <div className="flex items-start justify-between gap-5">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#E74912]">{selectedTopic.category}</span>
                  <h2 id="resource-modal-title" className="mt-2 max-w-3xl font-display text-2xl font-bold leading-snug sm:text-3xl">{selectedTopic.title}</h2>
                </div>
                <button onClick={() => setSelectedTopic(null)} className="shrink-0 rounded-full border border-black/10 bg-white p-2.5 transition hover:border-[#FF5A1F] hover:text-[#E74912]" aria-label="ปิดรายละเอียด">
                  <X size={20} />
                </button>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {selectedTopic.tags.map((tag) => <span key={tag} className="rounded-full bg-[#F3F1EB] px-3 py-1 text-[10px] text-[#666]">#{tag}</span>)}
              </div>
            </header>

            <div className="overflow-y-auto px-5 py-7 sm:px-8 sm:py-9">
              <p className="mb-7 rounded-2xl bg-[#FFF0E9] px-5 py-4 text-sm font-light leading-6 text-[#5E3A2D]">{selectedTopic.summary}</p>
              <article ref={modalBodyRef} className="resource-topic-body" dangerouslySetInnerHTML={{ __html: selectedTopic.html }} />
            </div>

            <footer className="border-t border-black/10 bg-white px-5 py-4 sm:px-8">
              <button onClick={handleCopyTopic} className="flex w-full items-center justify-center gap-2 rounded-2xl bg-[#111] px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-[#FF5A1F]">
                {copiedTopic ? <Check size={17} /> : <Copy size={17} />}
                {copiedTopic ? 'คัดลอกหัวข้อนี้แล้ว' : 'คัดลอกเนื้อหาหัวข้อนี้ทั้งหมด'}
              </button>
            </footer>
          </section>
        </div>
      )}
    </div>
  );
}
