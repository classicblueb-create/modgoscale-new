import React, { useState } from 'react';
import { FREE_RESOURCES } from '../data/freeResources';
import { Search, Copy, Check, ExternalLink, X, BookOpen, Sparkles, ArrowRight, ShieldCheck, ArrowLeft, Home, Download, ChevronDown } from 'lucide-react';

export default function FreeResources({ lineLink, en, onBackToHome }) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeResource, setActiveResource] = useState(null);
  const [copiedId, setCopiedId] = useState(null);
  const [activeTag, setActiveTag] = useState(null);

  const categories = ['All', 'Vibe Coding', 'Prompt Engineering', 'Automation', 'AI Visual'];

  const filteredResources = FREE_RESOURCES.filter((item) => {
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesTag = !activeTag || item.tags.some((t) => t.toLowerCase() === activeTag.toLowerCase());
    return matchesCategory && matchesSearch && matchesTag;
  });

  const handleTagClick = (e, tag) => {
    e.stopPropagation();
    setActiveTag((prev) => (prev === tag ? null : tag));
  };

  const handleCopy = (text, id) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2500);
  };

  return (
    <div className="min-h-screen bg-[#F9F8F4] text-[#111] pt-28 pb-32 px-6 md:px-12 lg:px-16 animate-in fade-in duration-300">
      <div className="max-w-7xl mx-auto space-y-12">

        {/* Back to Home Breadcrumb */}
        <div className="flex justify-between items-center border-b border-[#E6E4DD] pb-6">
          <button
            onClick={onBackToHome}
            className="group flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-[#666] hover:text-[#FF6A2A] transition-colors bg-white px-5 py-2.5 rounded-full border border-[#E6E4DD] shadow-sm hover:border-[#FF6A2A]"
          >
            <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
            <span>กลับสู่หน้าหลัก (Back to Home)</span>
          </button>

          <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#FF6A2A] bg-[#FFF1E6] px-4 py-2 rounded-full border border-[#FFE3D2]">
            MODGOSCALE SUBPAGE — FREE RESOURCES
          </span>
        </div>

        {/* Subpage Header */}
        <div className="space-y-4 max-w-4xl">
          <span className="text-xs uppercase tracking-[0.3em] font-bold text-[#FF6A2A] block">
            EXCLUSIVE AI WORKFLOW &amp; PROMPT LIBRARY
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold text-[#111] leading-tight">
            FREE RESOURCES<span className="text-[#FF6A2A]">.</span>
          </h1>
          <p className="text-lg md:text-2xl font-kanit font-light text-[#555] leading-relaxed">
            รวม Prompt Template, AI Playbook และ Workflow พร้อมใช้งานจาก Modty.ai อ่านและคัดลอกคำสั่งไปใช้ได้ทันที
          </p>
        </div>

        {/* Search & Category Filter Controls */}
        <div className="flex flex-col md:flex-row justify-between items-stretch md:items-center gap-4 bg-white p-4 rounded-3xl border border-[#E6E4DD] shadow-sm">
          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 overflow-x-auto pb-2 md:pb-0">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all whitespace-nowrap ${selectedCategory === cat
                    ? 'bg-[#111] text-white shadow-md'
                    : 'bg-[#F9F8F4] text-[#666] hover:bg-[#FFE3D2]/50 hover:text-[#FF6A2A]'
                  }`}
              >
                {cat === 'All' ? 'ทั้งหมด (All)' : cat}
              </button>
            ))}
          </div>

          {/* Search Input Bar + Active Tag Indicator */}
          <div className="flex items-center gap-2 w-full md:w-auto flex-shrink-0">
            {activeTag && (
              <button
                onClick={() => setActiveTag(null)}
                className="flex items-center gap-1.5 bg-[#FF6A2A] text-white px-3 py-2.5 rounded-full text-[10px] font-bold uppercase tracking-wider whitespace-nowrap shadow-sm hover:bg-[#e0591f] transition-colors"
              >
                #{activeTag} <X size={11} />
              </button>
            )}
            <div className="relative w-full md:w-72">
              <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#888]" />
              <input
                type="text"
                placeholder="ค้นหา Prompt / หัวข้อ..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-[#F9F8F4] border border-[#E6E4DD] rounded-full pl-11 pr-4 py-3 text-xs text-[#111] focus:outline-none focus:border-[#FF6A2A] transition-colors placeholder:text-[#999]"
              />
            </div>
          </div>
        </div>

        {/* Resources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                {/* Tags — คลิกเพื่อ Filter */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {item.tags.slice(0, 3).map((tag) => (
                    <button
                      key={tag}
                      onClick={(e) => handleTagClick(e, tag)}
                      className={`text-[10px] px-2.5 py-1 rounded-md border transition-all font-medium ${
                        activeTag === tag
                          ? 'bg-[#FF6A2A] text-white border-[#FF6A2A] shadow-sm'
                          : 'bg-[#F9F8F4] text-[#666] border-[#E6E4DD] hover:bg-[#FFE3D2] hover:text-[#FF6A2A] hover:border-[#FF6A2A]'
                      }`}
                    >
                      #{tag}
                    </button>
                  ))}
                </div>

                {/* Demo Button (แสดงเฉพาะ resource ที่มี Demo) */}
                {item.demoLink && (
                  <a
                    href={item.demoLink}
                    target="_blank"
                    rel="noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="w-full mb-2.5 flex items-center justify-center gap-2 bg-[#EFF6FF] text-[#2563eb] border border-[#93c5fd] py-3 rounded-full text-xs uppercase tracking-widest font-semibold hover:bg-[#2563eb] hover:text-white hover:border-[#2563eb] transition-all"
                  >
                    <ExternalLink size={13} /> {item.demoLabel || 'ลอง Demo'}
                  </a>
                )}

                {/* Download Button (แสดงเฉพาะ resource ที่มีไฟล์แนบ) */}
                {item.downloadFile && (
                  <a
                    href={item.downloadFile}
                    download
                    onClick={(e) => e.stopPropagation()}
                    className="w-full mb-2.5 flex items-center justify-center gap-2 bg-[#F0FFF4] text-[#16a34a] border border-[#86efac] py-3 rounded-full text-xs uppercase tracking-widest font-semibold hover:bg-[#16a34a] hover:text-white hover:border-[#16a34a] transition-all"
                  >
                    <Download size={13} /> {item.downloadLabel || 'โหลดไฟล์'}
                  </a>
                )}

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

        {/* Bottom Navigation Back to Home */}
        <div className="pt-12 border-t border-[#E6E4DD] flex flex-col md:flex-row justify-between items-center gap-6">
          <button
            onClick={onBackToHome}
            className="flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-[#111] hover:text-[#FF6A2A] transition-colors bg-white px-8 py-4 rounded-full border border-[#E6E4DD] shadow-sm hover:border-[#FF6A2A]"
          >
            <Home size={16} className="text-[#FF6A2A]" />
            <span>กลับสู่หน้าหลัก MODGOSCALE (Back to Main Landing Page)</span>
          </button>

          <p className="text-xs text-[#888] font-light">
            © MODGOSCALE — Powered by Modty.ai Personal Brand
          </p>
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
                  <span className="text-xs text-[#888] font-light hidden sm:inline-block">Modty.ai Research Library Subpage</span>
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

                {/* SKILL DIRECTORY — แสดงเฉพาะ resource ที่มี skillCategories */}
                {activeResource.skillCategories && (
                  <div className="space-y-4">
                    <h4 className="font-display font-bold text-lg text-[#111] flex items-center gap-2">
                      ⚙️ Skills Directory — {activeResource.skillCategories.reduce((a, c) => a + c.skills.length, 0)} Skills ใน {activeResource.skillCategories.length} หมวด
                    </h4>
                    <div className="space-y-3">
                      {activeResource.skillCategories.map((cat, ci) => (
                        <details key={ci} className="group border border-[#E6E4DD] rounded-2xl overflow-hidden">
                          <summary className="flex items-center justify-between px-5 py-4 cursor-pointer bg-[#F9F8F4] hover:bg-[#F0EFE9] transition-colors list-none">
                            <span className="font-semibold text-sm text-[#111]">
                              {cat.icon} {cat.name}
                              <span className="ml-2 text-xs text-[#888] font-normal">({cat.skills.length} skills)</span>
                            </span>
                            <ChevronDown size={16} className="text-[#888] group-open:rotate-180 transition-transform" />
                          </summary>
                          <div className="divide-y divide-[#F0EFE9]">
                            {cat.skills.map((sk, si) => (
                              <div key={si} className="px-5 py-3 bg-white flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                                <div>
                                  <p className="text-sm font-semibold text-[#111]">{sk.name}</p>
                                  <p className="text-xs text-[#666] font-light">{sk.desc}</p>
                                </div>
                                <a
                                  href={`https://${sk.link.replace(/^https?:\/\//, '')}`}
                                  target="_blank"
                                  rel="noreferrer"
                                  className="flex-shrink-0 text-[10px] text-[#FF6A2A] border border-[#FF6A2A]/30 hover:bg-[#FF6A2A] hover:text-white px-3 py-1 rounded-full transition-all"
                                >
                                  GitHub →
                                </a>
                              </div>
                            ))}
                          </div>
                        </details>
                      ))}
                    </div>
                  </div>
                )}

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

                {/* Demo Block — แสดงเฉพาะ resource ที่มี Demo Link */}
                {activeResource.demoLink && (
                  <div className="border-2 border-dashed border-[#93c5fd] bg-[#EFF6FF] rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-[#2563eb]/10 flex items-center justify-center flex-shrink-0">
                        <ExternalLink size={18} className="text-[#2563eb]" />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-[#2563eb]">ลองเล่นได้เลยทีนี่!</p>
                        <p className="text-xs text-[#555] font-light">{activeResource.demoLink}</p>
                      </div>
                    </div>
                    <a
                      href={activeResource.demoLink}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-shrink-0 flex items-center gap-2 bg-[#2563eb] text-white px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-widest hover:bg-[#1d4ed8] transition-all shadow-md shadow-blue-500/20"
                    >
                      <ExternalLink size={13} /> {activeResource.demoLabel || 'เปิด Demo'}
                    </a>
                  </div>
                )}

                {/* Download Block — แสดงเฉพาะ resource ที่มีไฟล์แนบ */}
                {activeResource.downloadFile && (
                  <div className="border-2 border-dashed border-[#86efac] bg-[#F0FFF4] rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-[#16a34a]/10 flex items-center justify-center flex-shrink-0">
                        <Download size={18} className="text-[#16a34a]" />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-[#16a34a]">ไฟล์พร้อมโหลด</p>
                        <p className="text-xs text-[#555] font-light">{activeResource.downloadLabel || 'คลิกเพื่อดาวน์โหลดไฟล์ที่แนบมากับ Resource นี้'}</p>
                      </div>
                    </div>
                    <a
                      href={activeResource.downloadFile}
                      download
                      className="flex-shrink-0 flex items-center gap-2 bg-[#16a34a] text-white px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-widest hover:bg-[#15803d] transition-all shadow-md shadow-green-500/20"
                    >
                      <Download size={13} /> ดาวน์โหลดเลย
                    </a>
                  </div>
                )}

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
    </div>
  );
}
