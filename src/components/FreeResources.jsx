import React, { useState } from 'react';
import { FREE_RESOURCES } from '../data/freeResources';
import { Search, Copy, Check, ExternalLink, X, BookOpen, Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';

export default function FreeResources({ lineLink, en }) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeResource, setActiveResource] = useState(null);
  const [copiedId, setCopiedId] = useState(null);

  const categories = ['All', 'Vibe Coding', 'Prompt Engineering', 'Automation', 'AI Visual'];

  const filteredResources = FREE_RESOURCES.filter((item) => {
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const handleCopy = (text, id) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2500);
  };

  return (
    <section id="resources" className="py-28 md:py-36 px-6 md:px-12 lg:px-16 bg-[#F9F8F4] border-t border-[#E6E4DD]">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 reveal">
          <div className="space-y-3 max-w-3xl">
            <span className="text-xs uppercase tracking-[0.3em] font-semibold text-[#FF6A2A] block">07 — FREE AI RESOURCES</span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-[#111] leading-tight">
              Modty AI Research Library<span className="text-[#FF6A2A]">.</span>
            </h2>
            <p className="text-lg md:text-xl font-kanit font-light text-[#555]">
              รวม Prompt Template, AI Playbook และ Workflow ฉบับภาษาไทยพร้อมใช้งาน ถอดสูตรตรงจากประสบการณ์จริงของ Modty.ai
            </p>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs font-semibold text-[#FF6A2A] uppercase tracking-widest bg-[#FFF1E6] px-4 py-2 rounded-full border border-[#FFE3D2]">
              ✓ NO ORIGINAL LINKS — 100% EXCLUSIVE CONTENT
            </span>
          </div>
        </div>

        {/* Search & Category Filter Controls */}
        <div className="flex flex-col md:flex-row justify-between items-stretch md:items-center gap-4 bg-white p-4 rounded-3xl border border-[#E6E4DD] shadow-sm reveal">
          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 overflow-x-auto pb-2 md:pb-0">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all whitespace-nowrap ${
                  selectedCategory === cat
                    ? 'bg-[#111] text-white shadow-md'
                    : 'bg-[#F9F8F4] text-[#666] hover:bg-[#FFE3D2]/50 hover:text-[#FF6A2A]'
                }`}
              >
                {cat === 'All' ? 'ทั้งหมด (All)' : cat}
              </button>
            ))}
          </div>

          {/* Search Input Bar */}
          <div className="relative w-full md:w-72 flex-shrink-0">
            <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#888]" />
            <input
              type="text"
              placeholder="ค้นหา Prompt / หัวข้อ..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#F9F8F4] border border-[#E6E4DD] rounded-full pl-11 pr-4 py-2.5 text-xs text-[#111] focus:outline-none focus:border-[#FF6A2A] transition-colors placeholder:text-[#999]"
            />
          </div>
        </div>

        {/* Resources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 reveal">
          {filteredResources.map((item) => (
            <div
              key={item.id}
              className="bg-white border border-[#E6E4DD] rounded-3xl p-8 flex flex-col justify-between hover:border-[#FF6A2A] hover:-translate-y-1.5 transition-all shadow-sm group cursor-pointer"
              onClick={() => setActiveResource(item)}
            >
              <div>
                <div className="flex justify-between items-start mb-4">
                  <span className="bg-[#FFF1E6] text-[#FF6A2A] border border-[#FFE3D2] px-3 py-1 text-[10px] uppercase font-bold tracking-wider rounded-full">
                    {item.categoryBadge}
                  </span>
                  <span className="text-[11px] text-[#888] font-light flex items-center gap-1">
                    <BookOpen size={12} className="text-[#FF6A2A]" /> {item.readTime}
                  </span>
                </div>

                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="text-xl font-display font-bold text-[#111] group-hover:text-[#FF6A2A] transition-colors mb-2 leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs font-light text-[#666] line-clamp-3 leading-relaxed mb-6">
                  {item.summary}
                </p>
              </div>

              <div>
                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {item.tags.slice(0, 3).map((tag) => (
                    <span key={tag} className="text-[10px] bg-[#F9F8F4] text-[#666] px-2.5 py-1 rounded-md border border-[#E6E4DD]">
                      #{tag}
                    </span>
                  ))}
                </div>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveResource(item);
                  }}
                  className="w-full bg-[#111] text-white py-3 rounded-full text-xs uppercase tracking-widest font-semibold group-hover:bg-[#FF6A2A] transition-colors flex items-center justify-center gap-2"
                >
                  อ่านเทคนิค &amp; คัดลอก Prompt <ArrowRight size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Modal / Reader View */}
        {activeResource && (
          <div className="fixed inset-0 z-[120] bg-black/70 backdrop-blur-md flex justify-center items-center p-4 md:p-8 overflow-y-auto">
            <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-[#E6E4DD] shadow-2xl relative animate-in fade-in zoom-in-95 duration-200">
              
              {/* Sticky Modal Header */}
              <div className="sticky top-0 bg-white/95 backdrop-blur-md px-6 md:px-10 py-5 border-b border-[#E6E4DD] flex justify-between items-center z-20">
                <div className="flex items-center gap-3">
                  <span className="bg-[#FFF1E6] text-[#FF6A2A] border border-[#FFE3D2] px-3 py-1 text-[10px] uppercase font-bold tracking-wider rounded-full">
                    {activeResource.categoryBadge}
                  </span>
                  <span className="text-xs text-[#888] font-light hidden sm:inline-block">Modty.ai Research Library</span>
                </div>
                <button
                  onClick={() => setActiveResource(null)}
                  className="p-2 text-[#666] hover:text-[#111] hover:bg-[#F9F8F4] rounded-full transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Modal Body */}
              <div className="p-6 md:p-10 space-y-8">
                
                {/* Title & Subtitle */}
                <div className="space-y-3 border-b border-[#E6E4DD] pb-6">
                  <div className="text-4xl">{activeResource.icon}</div>
                  <h2 className="text-2xl md:text-4xl font-display font-bold text-[#111]">
                    {activeResource.title}
                  </h2>
                  <p className="text-base md:text-lg font-kanit font-light text-[#555]">
                    {activeResource.subtitle}
                  </p>
                </div>

                {/* Introduction */}
                <div className="space-y-4">
                  <h4 className="font-display font-bold text-lg text-[#111] flex items-center gap-2">
                    <Sparkles size={18} className="text-[#FF6A2A]" /> ภาพรวม &amp; แนวคิด (Insight)
                  </h4>
                  <p className="text-sm font-light text-[#444] leading-relaxed bg-[#F9F8F4] p-5 rounded-2xl border border-[#E6E4DD]">
                    {activeResource.content.intro}
                  </p>
                </div>

                {/* Workflow Steps */}
                <div className="space-y-4">
                  <h4 className="font-display font-bold text-lg text-[#111]">ขั้นตอนการทำงาน (Workflow Breakdown)</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {activeResource.content.workflowSteps.map((s, idx) => (
                      <div key={idx} className="p-4 bg-white border border-[#E6E4DD] rounded-2xl">
                        <div className="text-xs uppercase tracking-widest text-[#FF6A2A] font-bold mb-1">{s.step}</div>
                        <p className="text-xs text-[#555] font-light leading-relaxed">{s.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* PROMPT COPY BLOCK (1-Click Copy) */}
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <h4 className="font-display font-bold text-lg text-[#111] flex items-center gap-2">
                      📋 Prompt Template (พร้อมใช้ได้ทันที)
                    </h4>
                    <button
                      onClick={() => handleCopy(activeResource.content.promptCopyText, activeResource.id)}
                      className="bg-[#FF6A2A] text-white px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider hover:bg-[#e0591f] transition-all shadow-md flex items-center gap-2"
                    >
                      {copiedId === activeResource.id ? (
                        <>
                          <Check size={14} /> คัดลอกแล้ว!
                        </>
                      ) : (
                        <>
                          <Copy size={14} /> คัดลอก Prompt
                        </>
                      )}
                    </button>
                  </div>

                  <div className="relative group">
                    <pre className="bg-[#111] text-[#E0E0E0] p-6 rounded-2xl text-xs md:text-sm font-mono whitespace-pre-wrap overflow-x-auto border border-[#333] leading-relaxed selection:bg-[#FF6A2A] selection:text-white">
                      {activeResource.content.promptCopyText}
                    </pre>
                  </div>
                </div>

                {/* Key Takeaways */}
                <div className="space-y-3">
                  <h4 className="font-display font-bold text-base text-[#111]">ผลลัพธ์ที่คุณจะได้ (Key Takeaways):</h4>
                  <div className="space-y-2">
                    {activeResource.content.takeaways.map((t, idx) => (
                      <div key={idx} className="flex items-center gap-3 text-xs text-[#444] font-light">
                        <ShieldCheck size={16} className="text-[#FF6A2A] flex-shrink-0" />
                        <span>{t}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* MANDATORY HIGH-CONVERTING CTA BOX */}
                <div className="bg-[#111] text-white rounded-3xl p-8 md:p-10 border border-[#333] shadow-xl space-y-6 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-48 h-48 bg-[#FF6A2A]/10 rounded-full blur-3xl pointer-events-none"></div>

                  <div className="space-y-2 relative z-10">
                    <span className="text-xs uppercase tracking-[0.3em] font-bold text-[#FF6A2A]">TAKE YOUR AI SKILLS TO THE NEXT LEVEL</span>
                    <h3 className="text-2xl md:text-3xl font-display font-bold text-white leading-tight">
                      {activeResource.cta.title}
                    </h3>
                    <p className="text-xs md:text-sm font-light text-[#aaa] leading-relaxed max-w-2xl">
                      {activeResource.cta.description}
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 pt-2 relative z-10">
                    <a
                      href={lineLink}
                      target="_blank"
                      rel="noreferrer"
                      className="bg-[#FF6A2A] text-white px-8 py-4 rounded-full text-center text-xs uppercase tracking-widest font-semibold hover:bg-[#e0591f] transition-all shadow-lg shadow-[#FF6A2A]/25"
                    >
                      {activeResource.cta.primaryBtnText}
                    </a>
                    <a
                      href={lineLink}
                      target="_blank"
                      rel="noreferrer"
                      className="border border-white/40 text-white hover:bg-white hover:text-[#111] px-8 py-4 rounded-full text-center text-xs uppercase tracking-widest font-semibold transition-all"
                    >
                      {activeResource.cta.secondaryBtnText}
                    </a>
                  </div>
                </div>

              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
