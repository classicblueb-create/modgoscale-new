import React, { useState, useEffect, useRef } from 'react';
import {
  Code, Database, Zap, Users, MessageCircle, CheckCircle, ArrowRight, Menu, X,
  Layout, Server, Bot, Clapperboard, Sparkles, Sheet, Clock, Video, BookOpen, User, Palette, Monitor, Globe
} from 'lucide-react';

const AnimatedCounter = ({ end, duration = 2, suffix = "", prefix = "" }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasStarted) {
          setHasStarted(true);
          let startTimestamp = null;
          const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
            const easeOutQuart = 1 - Math.pow(1 - progress, 4);
            setCount(Math.floor(easeOutQuart * end));
            if (progress < 1) {
              window.requestAnimationFrame(step);
            }
          };
          window.requestAnimationFrame(step);
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end, duration, hasStarted]);

  return <span ref={ref}>{prefix}{new Intl.NumberFormat('en-US').format(count)}{suffix}</span>;
};

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [lang, setLang] = useState('th');
  const en = lang === 'en';

  const cursorDotRef = useRef(null);
  const cursorOutlineRef = useRef(null);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const lineLink = "https://lin.ee/wWV3LYO";

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  useEffect(() => {
    // Scroll events for navbar and reveal animations
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Parallax effect
      const parallaxImages = document.querySelectorAll('.parallax-img');
      const scrollY = window.scrollY;
      parallaxImages.forEach(img => {
        const speed = parseFloat(img.getAttribute('data-speed')) || 0.15;
        const parent = img.parentElement;
        if (parent) {
          const rect = parent.getBoundingClientRect();
          const absoluteTop = scrollY + rect.top;
          if (rect.top < window.innerHeight && rect.bottom > 0) {
            const yPos = (scrollY - absoluteTop) * speed;
            img.style.transform = `translateY(${yPos}px)`;
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);

    // Cursor movement
    const handleMouseMove = (e) => {
      if (cursorDotRef.current && cursorOutlineRef.current) {
        const posX = e.clientX;
        const posY = e.clientY;
        cursorDotRef.current.style.transform = `translate(${posX}px, ${posY}px)`;
        cursorOutlineRef.current.animate(
          { transform: `translate(${posX}px, ${posY}px)` },
          { duration: 400, fill: "forwards" }
        );
      }
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Intersection Observer for reveals
    const revealOptions = { threshold: 0.1, rootMargin: "0px 0px -50px 0px" };
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target);
        }
      });
    }, revealOptions);

    document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="antialiased selection:bg-[#111111] selection:text-[#F9F8F4] overflow-x-hidden w-full relative">
      {/* Custom Cursor Elements */}
      <div className="cursor-dot hidden md:block" ref={cursorDotRef}></div>
      <div className="cursor-outline hidden md:block" ref={cursorOutlineRef}></div>

      {/* Navigation */}
      <nav className={`fixed w-full z-50 top-0 py-6 px-6 md:px-12 lg:px-16 flex justify-between items-center nav-blur ${isScrolled ? 'scrolled' : ''}`}>
        <div className="text-xl font-display font-bold tracking-widest uppercase hover-target cursor-pointer flex items-center" onClick={() => window.scrollTo(0, 0)}>
          modgoscale<span className="text-[#FF6A2A]">.</span>
        </div>
        <div className="hidden md:flex space-x-10 text-sm tracking-widest uppercase font-medium">
          <button onClick={() => scrollToSection('about')} className="text-[#666] hover:text-[#FF6A2A] transition-colors duration-300">Concept</button>
          <button onClick={() => scrollToSection('speaker')} className="text-[#666] hover:text-[#FF6A2A] transition-colors duration-300">Speaker</button>
          <button onClick={() => scrollToSection('services')} className="text-[#666] hover:text-[#FF6A2A] transition-colors duration-300">Expertise</button>
          <button onClick={() => scrollToSection('portfolio')} className="text-[#666] hover:text-[#FF6A2A] transition-colors duration-300">Portfolio</button>
          <button onClick={() => scrollToSection('contact')} className="text-[#666] hover:text-[#FF6A2A] transition-colors duration-300">Initiate</button>
        </div>
        <div className="flex items-center gap-4">
          <button
            onClick={() => setLang(l => l === 'th' ? 'en' : 'th')}
            className="flex items-center gap-1.5 text-xs tracking-widest uppercase font-medium text-[#666] hover:text-[#111] transition-colors border border-[#E6E4DD] hover:border-[#FF6A2A] rounded-full px-3 py-1.5 bg-white/50"
          >
            <Globe size={12} className="text-[#FF6A2A]" />
            {lang === 'th' ? 'TH' : 'EN'}
          </button>
          <button className="md:hidden text-[#111] hover-target focus:outline-none" onClick={toggleMenu}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#F9F8F4]/98 backdrop-blur-xl pt-24 px-6 pb-8 flex flex-col space-y-6 md:hidden">
          <button onClick={() => scrollToSection('about')} className="text-2xl font-display font-bold text-left uppercase text-[#111] hover:text-[#FF6A2A]">Concept</button>
          <button onClick={() => scrollToSection('speaker')} className="text-2xl font-display font-bold text-left uppercase text-[#111] hover:text-[#FF6A2A]">Speaker</button>
          <button onClick={() => scrollToSection('services')} className="text-2xl font-display font-bold text-left uppercase text-[#111] hover:text-[#FF6A2A]">Expertise</button>
          <button onClick={() => scrollToSection('portfolio')} className="text-2xl font-display font-bold text-left uppercase text-[#111] hover:text-[#FF6A2A]">Portfolio</button>
          <button onClick={() => scrollToSection('contact')} className="text-2xl font-display font-bold text-left uppercase text-[#111] hover:text-[#FF6A2A]">Initiate</button>
          <a href={lineLink} className="mt-8 bg-[#FF6A2A] text-white rounded-full text-center w-full py-4 uppercase tracking-widest text-base font-medium hover:bg-[#e0591f] transition-colors shadow-lg shadow-[#FF6A2A]/20">Contact via LINE</a>
        </div>
      )}

      {/* Hero Section */}
      <header className="relative min-h-[92vh] flex flex-col justify-center px-6 md:px-12 lg:px-16 overflow-hidden pt-24 pb-16 bg-[#F9F8F4]">
        <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#111" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <div className="inline-flex items-center gap-2 mb-6 reveal">
            <span className="w-2 h-2 rounded-full bg-[#FF6A2A]"></span>
            <p className="text-xs md:text-sm tracking-[0.3em] uppercase text-[#666] font-medium">The Architecture of Intelligence</p>
          </div>

          <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[8.5rem] font-display font-bold leading-[0.92] tracking-tight reveal reveal-delay-1 text-[#111]">
            SCALE YOUR <br />
            BUSINESS WITH <span className="text-[#FF6A2A]">AI</span>
          </h1>

          <div className="mt-14 flex flex-col md:flex-row md:items-end justify-between w-full reveal reveal-delay-2 gap-8">
            <p className="max-w-2xl text-[#555] text-lg md:text-xl font-light leading-relaxed">
              {en
                ? 'ModGoScale helps you streamline operations, build automation systems, and develop digital products — whether you want to learn, consult, or have us build it for you.'
                : 'ModGoScale ช่วยคุณลดขั้นตอนการทำงาน สร้างระบบอัตโนมัติ และพัฒนา Digital Product ไม่ว่าคุณจะอยากเรียนรู้เพื่อทำเอง ปรึกษาเชิงกลยุทธ์ หรือให้เราลงมือทำให้'}
            </p>
            <a href="#about" className="inline-flex items-center gap-3 bg-[#111] text-white px-8 py-4 rounded-full hover:bg-[#FF6A2A] transition-colors duration-300 uppercase tracking-widest text-sm font-medium hover-target shadow-md">
              <span>Discover More</span>
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </header>

      {/* Founder / Modty Profile Section */}
      <section id="about" className="py-28 md:py-40 px-6 md:px-12 lg:px-16 bg-white border-t border-[#E6E4DD]">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
          <div className="w-full lg:w-1/2 parallax-container h-[60vh] md:h-[68vh] hover-zoom shadow-xl shadow-gray-200/40 rounded-3xl overflow-hidden relative border border-[#E6E4DD]">
            <div className="absolute top-6 left-6 z-20 bg-[#111] text-white px-4 py-1.5 rounded-full text-xs tracking-widest uppercase font-medium flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#FF6A2A]"></span>
              BUILT BY MODTY
            </div>
            <img src="/my_photo.jpg" alt="Modty Founder Profile" className="parallax-img opacity-95 object-center object-cover" data-speed="0.15" />
          </div>

          <div className="w-full lg:w-1/2 space-y-8">
            <div className="space-y-3">
              <span className="text-xs uppercase tracking-[0.3em] font-semibold text-[#FF6A2A]">01 — THE FOUNDER STORY</span>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold reveal text-[#111] leading-[1.1]">
                Solopreneur to<br />
                <span className="text-[#FF6A2A]">Professional Partner.</span>
              </h2>
            </div>

            <div className="w-20 h-[3px] bg-[#FF6A2A] reveal"></div>

            <div className="space-y-6">
              <p className="text-[#555] text-lg leading-relaxed reveal font-light">
                {en
                  ? <span>Hi! <span className="text-[#111] font-medium border-b-2 border-[#FF6A2A]/40 pb-0.5">ModGoScale</span> grew from the <strong>Modty.ai</strong> channel. We bridge personal agility with serious corporate-grade AI execution.</span>
                  : <span>สวัสดีค่ะ! <span className="text-[#111] font-medium border-b-2 border-[#FF6A2A]/40 pb-0.5">ModGoScale</span> คือจุดเริ่มต้นจากช่อง <strong>Modty.ai</strong> เราเข้าใจคนทำธุรกิจยุคใหม่ที่ต้องการความคล่องตัวและทรงพลัง</span>}
              </p>
              <p className="text-[#555] text-lg leading-relaxed reveal reveal-delay-1 font-light">
                {en
                  ? <span>Our mission is to help you scale operations using <strong>AI Vibe Coding</strong>, <strong className="text-[#FF6A2A]">Business Automation</strong>, and <strong className="text-[#FF6A2A]">AI Systems</strong> — delivering simple, cost-effective, and enterprise-grade solutions.</span>
                  : <span>เป้าหมายของเราคือการช่วยให้คุณสร้าง <strong className="text-[#FF6A2A]">AI System</strong> และระบบอัตโนมัติด้วย <strong>AI Vibe Coding</strong> (No-Code หรือ Low-Code) เพื่อขับเคลื่อน <strong className="text-[#FF6A2A]">Automation</strong> ที่วัดผลทางธุรกิจได้จริง</span>}
              </p>
              <div className="flex flex-wrap gap-3 pt-2 reveal reveal-delay-2">
                <div className="bg-[#FFF1E6] text-[#FF6A2A] border border-[#FFE3D2] px-4 py-2 text-xs uppercase tracking-widest font-semibold rounded-full">AI Image & Graphics</div>
                <div className="bg-[#FFF1E6] text-[#FF6A2A] border border-[#FFE3D2] px-4 py-2 text-xs uppercase tracking-widest font-semibold rounded-full">AI Video Generation</div>
                <div className="bg-[#FFF1E6] text-[#FF6A2A] border border-[#FFE3D2] px-4 py-2 text-xs uppercase tracking-widest font-semibold rounded-full">Custom AI Web Dev</div>
                <div className="bg-[#FFF1E6] text-[#FF6A2A] border border-[#FFE3D2] px-4 py-2 text-xs uppercase tracking-widest font-semibold rounded-full">n8n Automation</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Speaker & Corporate Trainer Section */}
      <section id="speaker" className="py-28 md:py-36 px-6 md:px-12 lg:px-16 bg-[#F9F8F4] border-t border-[#E6E4DD]">
        <div className="max-w-7xl mx-auto space-y-20">
          
          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 reveal">
            <div className="space-y-3 max-w-3xl">
              <span className="text-xs uppercase tracking-[0.3em] font-semibold text-[#FF6A2A] block">02 — SPEAKER &amp; TRAINER</span>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-[#111] leading-tight">
                AI Knowledge That<br />
                <span className="text-[#FF6A2A]">Turns Into Action.</span>
              </h2>
              <p className="text-xl md:text-2xl font-kanit font-medium text-[#333] pt-2">
                เปลี่ยนเรื่อง AI ที่ดูซับซ้อน ให้กลายเป็นสิ่งที่ทุกคนเข้าใจและนำไปใช้ได้จริง
              </p>
            </div>
            
            <div className="flex flex-wrap items-center gap-3">
              <a href={lineLink} target="_blank" rel="noreferrer" className="bg-[#FF6A2A] text-white px-8 py-4 rounded-full hover:bg-[#e0591f] transition-all text-sm font-semibold uppercase tracking-widest shadow-lg shadow-[#FF6A2A]/20">
                เชิญ Modty เป็นวิทยากร
              </a>
              <a href={lineLink} target="_blank" rel="noreferrer" className="border border-[#111] text-[#111] hover:bg-[#111] hover:text-white px-8 py-4 rounded-full transition-all text-sm font-medium uppercase tracking-widest">
                ออกแบบ Workshop สำหรับทีม
              </a>
            </div>
          </div>

          {/* Core Methodology Banner */}
          <div className="bg-white border border-[#E6E4DD] rounded-3xl p-8 md:p-12 reveal shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center divide-y md:divide-y-0 md:divide-x divide-[#E6E4DD]">
              <div className="py-4 md:py-0 px-2">
                <span className="text-xs uppercase tracking-widest text-[#FF6A2A] font-bold block mb-1">STEP 01</span>
                <h4 className="font-display font-bold text-2xl text-[#111]">Understand</h4>
                <p className="text-xs text-[#666] mt-1">เข้าใจแก่นและหลักการ AI</p>
              </div>
              <div className="py-4 md:py-0 px-2">
                <span className="text-xs uppercase tracking-widest text-[#FF6A2A] font-bold block mb-1">STEP 02</span>
                <h4 className="font-display font-bold text-2xl text-[#111]">Practice</h4>
                <p className="text-xs text-[#666] mt-1">ทดลองใช้เครื่องมือจริง</p>
              </div>
              <div className="py-4 md:py-0 px-2">
                <span className="text-xs uppercase tracking-widest text-[#FF6A2A] font-bold block mb-1">STEP 03</span>
                <h4 className="font-display font-bold text-2xl text-[#111]">Build</h4>
                <p className="text-xs text-[#666] mt-1">สร้างระบบ &amp; Workflow</p>
              </div>
              <div className="py-4 md:py-0 px-2">
                <span className="text-xs uppercase tracking-widest text-[#FF6A2A] font-bold block mb-1">STEP 04</span>
                <h4 className="font-display font-bold text-2xl text-[#111]">Apply</h4>
                <p className="text-xs text-[#666] mt-1">นำกลับไปใช้กับงานจริง</p>
              </div>
            </div>
            <div className="mt-8 pt-6 border-t border-[#E6E4DD] text-center">
              <p className="text-sm font-light text-[#555] max-w-3xl mx-auto leading-relaxed">
                Modty รับบรรยายและออกแบบ Workshop ด้าน AI, Business AI, Content Creation, Automation และ Vibe Coding สำหรับองค์กร ทีมงาน Community และ Event โดยเนื้อหาสามารถปรับให้เหมาะกับระดับผู้เรียน อุตสาหกรรม และโจทย์การทำงานจริงของแต่ละทีมได้ — <strong className="text-[#111] font-medium">ผู้เรียนไม่ได้เพียงรู้ว่า AI ทำอะไรได้ แต่ได้ทดลองสร้าง Workflow หรือผลงานที่สามารถนำกลับไปใช้กับงานจริงได้ทันที</strong>
              </p>
            </div>
          </div>

          {/* Featured Event: Girl in ICT by DCT */}
          <div className="space-y-8 reveal">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 border-b border-[#E6E4DD] pb-6">
              <div>
                <span className="bg-[#FFF1E6] text-[#FF6A2A] border border-[#FFE3D2] px-3.5 py-1 text-[11px] uppercase tracking-wider font-bold rounded-full inline-block mb-3">FEATURED SPEAKING EXPERIENCE</span>
                <h3 className="text-3xl md:text-4xl font-display font-bold text-[#111]">Girl in ICT by DCT — สภาดิจิทัลเพื่อเศรษฐกิจและสังคมแห่งประเทศไทย</h3>
              </div>
              <p className="text-xs tracking-widest text-[#888] uppercase font-medium">Official Keynote &amp; Workshop Speaker</p>
            </div>

            <p className="text-[#555] font-light leading-relaxed text-base max-w-4xl">
              หนึ่งในประสบการณ์ด้านการเป็นวิทยากรของ Modty กับกิจกรรม <strong>Girl in ICT by DCT</strong> งานที่ส่งเสริมการเรียนรู้และโอกาสด้านเทคโนโลยีและดิจิทัล โดย Modty ได้ร่วมถ่ายทอดมุมมองและประสบการณ์เกี่ยวกับการนำ AI มาใช้ในการทำงาน การสร้างผลงาน และการต่อยอดทักษะให้เกิดผลลัพธ์จริง เนื้อหาการบรรยายเน้นทำให้เรื่อง AI ที่ดูซับซ้อนกลายเป็นเรื่องที่เข้าใจง่าย พร้อมแสดงให้เห็นว่าผู้เรียนสามารถเริ่มต้นใช้ AI เพื่อเพิ่ม Productivity สร้าง Content สร้าง Digital Product หรือพัฒนาต่อยอดไปสู่ทักษะใหม่ได้อย่างไร
            </p>

            {/* Editorial Speaker Image Gallery */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 pt-4">
              {/* Hero Image (Large Left/Top) */}
              <div className="lg:col-span-7 group relative rounded-3xl overflow-hidden border border-[#E6E4DD] shadow-md bg-white">
                <img
                  src="/speaker-girlinict-1.jpg"
                  alt="Girl in ICT by DCT — AI Speaker Modty"
                  className="w-full h-[380px] md:h-[480px] object-cover object-center group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                />
                <div className="absolute bottom-4 left-4 right-4 bg-black/60 backdrop-blur-md text-white p-4 rounded-2xl border border-white/10">
                  <div className="font-display font-bold text-base">Girl in ICT by DCT</div>
                  <div className="text-xs text-[#FF6A2A] font-semibold uppercase tracking-wider">AI Speaker &amp; Educator</div>
                </div>
              </div>

              {/* Supporting Images (Right Grid) */}
              <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
                <div className="group relative rounded-2xl overflow-hidden border border-[#E6E4DD] shadow-sm bg-white h-[150px] md:h-[148px]">
                  <img
                    src="/speaker-girlinict-2.jpg"
                    alt="Modty presenting AI Consultant slide"
                    className="w-full h-full object-cover object-top group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                  />
                  <div className="absolute bottom-2 left-3 bg-black/60 backdrop-blur-sm text-white px-2.5 py-1 rounded-lg text-[10px] uppercase tracking-wider">
                    จาก Business สู่ AI Consultant
                  </div>
                </div>
                <div className="group relative rounded-2xl overflow-hidden border border-[#E6E4DD] shadow-sm bg-white h-[150px] md:h-[148px]">
                  <img
                    src="/speaker-girlinict-3.jpg"
                    alt="Receiving DCT honor award"
                    className="w-full h-full object-cover object-center group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                  />
                  <div className="absolute bottom-2 left-3 bg-black/60 backdrop-blur-sm text-white px-2.5 py-1 rounded-lg text-[10px] uppercase tracking-wider">
                    Token of Appreciation — DCT
                  </div>
                </div>
                <div className="group relative rounded-2xl overflow-hidden border border-[#E6E4DD] shadow-sm bg-white h-[150px] md:h-[148px] sm:col-span-2 lg:col-span-1">
                  <img
                    src="/speaker-girlinict-4.jpg"
                    alt="Group photo with DCT executives"
                    className="w-full h-full object-cover object-center group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                  />
                  <div className="absolute bottom-2 left-3 bg-black/60 backdrop-blur-sm text-white px-2.5 py-1 rounded-lg text-[10px] uppercase tracking-wider">
                    Official Group Photo with Digital Council Executives
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Speaking & Workshop Topics Grid */}
          <div className="space-y-10 reveal pt-6">
            <div className="flex justify-between items-end border-b border-[#E6E4DD] pb-6">
              <div>
                <span className="text-xs uppercase tracking-[0.3em] font-semibold text-[#FF6A2A] block mb-1">TAILORED CURRICULUMS</span>
                <h3 className="text-3xl md:text-4xl font-display font-bold text-[#111]">Speaking &amp; Workshop Topics</h3>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Topic 1 */}
              <div className="p-8 bg-white border border-[#E6E4DD] rounded-3xl hover:border-[#FF6A2A] transition-all shadow-sm flex flex-col justify-between">
                <div>
                  <span className="text-xs uppercase tracking-widest text-[#FF6A2A] font-bold block mb-2">TOPIC 01</span>
                  <h4 className="font-display font-bold text-xl text-[#111] mb-3">AI for Business &amp; Productivity</h4>
                  <p className="text-xs text-[#666] font-light leading-relaxed">
                    วิธีเปลี่ยน AI จากเครื่องมือถามตอบให้กลายเป็นผู้ช่วยสำหรับการทำงาน วิเคราะห์ข้อมูล ลดงานซ้ำ และเพิ่ม Productivity ให้ทีม
                  </p>
                </div>
              </div>

              {/* Topic 2 */}
              <div className="p-8 bg-white border border-[#E6E4DD] rounded-3xl hover:border-[#FF6A2A] transition-all shadow-sm flex flex-col justify-between">
                <div>
                  <span className="text-xs uppercase tracking-widest text-[#FF6A2A] font-bold block mb-2">TOPIC 02</span>
                  <h4 className="font-display font-bold text-xl text-[#111] mb-3">ChatGPT Work &amp; AI Operating System</h4>
                  <p className="text-xs text-[#666] font-light leading-relaxed">
                    ออกแบบระบบการทำงานบน ChatGPT ตั้งแต่ Knowledge, Project, Workflow, Scheduled Task ไปจนถึงการสร้าง AI Team
                  </p>
                </div>
              </div>

              {/* Topic 3 */}
              <div className="p-8 bg-white border border-[#E6E4DD] rounded-3xl hover:border-[#FF6A2A] transition-all shadow-sm flex flex-col justify-between">
                <div>
                  <span className="text-xs uppercase tracking-widest text-[#FF6A2A] font-bold block mb-2">TOPIC 03</span>
                  <h4 className="font-display font-bold text-xl text-[#111] mb-3">AI Content &amp; Marketing System</h4>
                  <p className="text-xs text-[#666] font-light leading-relaxed">
                    สร้างระบบคิดและผลิต Content ตั้งแต่ Research, Hook, Script, Visual, Carousel ไปจนถึง Video
                  </p>
                </div>
              </div>

              {/* Topic 4 */}
              <div className="p-8 bg-white border border-[#E6E4DD] rounded-3xl hover:border-[#FF6A2A] transition-all shadow-sm flex flex-col justify-between">
                <div>
                  <span className="text-xs uppercase tracking-widest text-[#FF6A2A] font-bold block mb-2">TOPIC 04</span>
                  <h4 className="font-display font-bold text-xl text-[#111] mb-3">AI Visual &amp; Video Creation</h4>
                  <p className="text-xs text-[#666] font-light leading-relaxed">
                    สร้างภาพ วิดีโอสินค้า AI Presenter, UGC และ Visual Content สำหรับ Marketing และ Social Media
                  </p>
                </div>
              </div>

              {/* Topic 5 */}
              <div className="p-8 bg-white border border-[#E6E4DD] rounded-3xl hover:border-[#FF6A2A] transition-all shadow-sm flex flex-col justify-between">
                <div>
                  <span className="text-xs uppercase tracking-widest text-[#FF6A2A] font-bold block mb-2">TOPIC 05</span>
                  <h4 className="font-display font-bold text-xl text-[#111] mb-3">Vibe Coding &amp; AI Tool Building</h4>
                  <p className="text-xs text-[#666] font-light leading-relaxed">
                    เปลี่ยนไอเดียให้กลายเป็น Website, Web App, Dashboard หรือ AI Tool โดยไม่จำเป็นต้องเริ่มจากการเป็น Developer
                  </p>
                </div>
              </div>

              {/* Topic 6 */}
              <div className="p-8 bg-white border border-[#E6E4DD] rounded-3xl hover:border-[#FF6A2A] transition-all shadow-sm flex flex-col justify-between">
                <div>
                  <span className="text-xs uppercase tracking-widest text-[#FF6A2A] font-bold block mb-2">TOPIC 06</span>
                  <h4 className="font-display font-bold text-xl text-[#111] mb-3">AI Automation &amp; AI Agent</h4>
                  <p className="text-xs text-[#666] font-light leading-relaxed">
                    ออกแบบ Workflow และ AI Agent เพื่อช่วยลดงาน Manual เชื่อมข้อมูล และสร้างระบบหลังบ้านสำหรับธุรกิจ
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Editorial Business Results / Metrics Section */}
      <section className="py-24 px-6 md:px-12 lg:px-16 bg-[#111] text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center divide-y md:divide-y-0 md:divide-x divide-[#222]">
            <div className="py-8 md:py-6 reveal">
              <div className="text-xs uppercase tracking-widest mb-4 text-[#888] font-medium">{en ? 'Revenue Impact' : 'ยอดขายที่ช่วยเพิ่มขึ้น'}</div>
              <div className="text-5xl md:text-7xl font-display font-bold text-[#FF6A2A] mb-3 tracking-tight">
                <AnimatedCounter prefix="฿" end={150000} duration={2.5} suffix="+" />
              </div>
              <p className="text-base font-light text-[#aaa]">{en ? 'Per month from automation systems' : 'ต่อเดือนจากระบบ Automation'}</p>
            </div>
            <div className="py-8 md:py-6 reveal reveal-delay-1">
              <div className="text-xs uppercase tracking-widest mb-4 text-[#888] font-medium">{en ? 'Hours Saved' : 'ประหยัดเวลาการทำงาน'}</div>
              <div className="text-5xl md:text-7xl font-display font-bold text-[#FF6A2A] mb-3 tracking-tight">
                <AnimatedCounter end={1200} duration={2.5} suffix=" hrs" />
              </div>
              <p className="text-base font-light text-[#aaa]">{en ? 'Reduced repetitive manual work annually' : 'ลดงาน Manual ซ้ำซ้อนตลอดปี'}</p>
            </div>
            <div className="py-8 md:py-6 reveal reveal-delay-2">
              <div className="text-xs uppercase tracking-widest mb-4 text-[#888] font-medium">{en ? 'Businesses Scaled' : 'ธุรกิจที่เติบโตไปกับเรา'}</div>
              <div className="text-5xl md:text-7xl font-display font-bold text-[#FF6A2A] mb-3 tracking-tight">
                <AnimatedCounter end={45} duration={2.5} suffix="+" />
              </div>
              <p className="text-base font-light text-[#aaa]">{en ? 'Entrepreneurs trust us' : 'ความไว้วางใจจากผู้ประกอบการ'}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 px-6 md:px-12 lg:px-16 bg-[#F9F8F4]">
        <div className="max-w-7xl mx-auto space-y-24">
          
          <div className="flex justify-between items-end reveal">
            <div>
              <span className="text-xs uppercase tracking-[0.3em] font-semibold text-[#FF6A2A] block mb-2">OUR SERVICES &amp; SOLUTIONS</span>
              <h2 className="text-4xl sm:text-5xl md:text-7xl font-display font-bold text-[#111]">EXPERTISE<span className="text-[#FF6A2A]">.</span></h2>
            </div>
            <p className="hidden md:block text-[#666] tracking-widest uppercase text-sm font-medium">Service Ecosystem</p>
          </div>

          {/* User Journey 4-Level Service Framework */}
          <div className="bg-white border border-[#E6E4DD] rounded-3xl p-8 md:p-10 reveal shadow-sm">
            <div className="text-center mb-8">
              <span className="text-xs uppercase tracking-[0.3em] font-bold text-[#FF6A2A] block mb-1">HOW WE HELP YOU SCALE</span>
              <h3 className="text-2xl md:text-3xl font-display font-bold text-[#111]">4 Level Engagement Framework</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-5 bg-[#F9F8F4] border border-[#E6E4DD] rounded-2xl hover:border-[#FF6A2A] transition-colors">
                <div className="text-xs uppercase tracking-widest text-[#FF6A2A] font-bold mb-1">LEVEL 01</div>
                <h4 className="font-display font-bold text-xl text-[#111] mb-2">LEARN</h4>
                <p className="text-xs text-[#666] font-light leading-relaxed">เรียนรู้และสร้างระบบด้วยตัวเอง ผ่านคอร์สออนไลน์ระดับพรีเมียม</p>
              </div>
              <div className="p-5 bg-[#F9F8F4] border border-[#E6E4DD] rounded-2xl hover:border-[#FF6A2A] transition-colors">
                <div className="text-xs uppercase tracking-widest text-[#FF6A2A] font-bold mb-1">LEVEL 02</div>
                <h4 className="font-display font-bold text-xl text-[#111] mb-2">CUSTOMIZE</h4>
                <p className="text-xs text-[#666] font-light leading-relaxed">ออกแบบ Workshop เฉพาะตามโจทย์ของตัวเองหรือทีมงาน</p>
              </div>
              <div className="p-5 bg-[#F9F8F4] border border-[#E6E4DD] rounded-2xl hover:border-[#FF6A2A] transition-colors">
                <div className="text-xs uppercase tracking-widest text-[#FF6A2A] font-bold mb-1">LEVEL 03</div>
                <h4 className="font-display font-bold text-xl text-[#111] mb-2">CONSULT</h4>
                <p className="text-xs text-[#666] font-light leading-relaxed">ปรึกษา Modty เชิงกลยุทธ์ เพื่อวาง Architecture &amp; System</p>
              </div>
              <div className="p-5 bg-[#111] text-white border border-[#222] rounded-2xl hover:border-[#FF6A2A] transition-colors">
                <div className="text-xs uppercase tracking-widest text-[#FF6A2A] font-bold mb-1">LEVEL 04</div>
                <h4 className="font-display font-bold text-xl text-white mb-2">BUILD</h4>
                <p className="text-xs text-[#aaa] font-light leading-relaxed">ให้ MODGOSCALE ลงมือพัฒนาระบบอัตโนมัติสำเร็จรูปให้ธุรกิจคุณ</p>
              </div>
            </div>
          </div>

          <div className="space-y-0 border-t border-[#E6E4DD]">

            {/* Discipline 01: Education */}
            <div className="group relative py-12 md:py-16 border-b border-[#E6E4DD] hover:border-[#111] transition-colors duration-500 cursor-pointer hover-target reveal">
              <div className="flex flex-col md:flex-row justify-between items-start">
                <div className="flex items-start space-x-6 md:space-x-12 z-10 w-full lg:w-4/5">
                  <span className="text-[#FF6A2A] font-display text-2xl md:text-4xl font-bold">01</span>
                  <div className="w-full">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-3xl md:text-5xl font-display font-semibold text-[#111] lg:group-hover:translate-x-3 transition-transform duration-500">Education</h3>
                      <span className="text-xs uppercase tracking-widest text-[#888] font-medium hidden sm:inline-block">• คอร์สหลักและ Learning Program</span>
                    </div>
                    <p className="mt-4 text-[#666] text-sm md:text-base font-light lg:group-hover:translate-x-3 transition-transform duration-500 delay-75 mb-8">
                      {en
                        ? 'Turn ideas into real web products with Vibe Coding Master Route — a premium course teaching you to build websites and apps with AI and the Google Ecosystem. No prior coding experience needed.'
                        : 'เปลี่ยนไอเดียให้เป็น Web จริง ด้วย Vibe Coding Master Route คอร์สเรียนระดับพรีเมียมที่จะสอนคุณสร้างเว็บไซต์และแอปพลิเคชันด้วย AI และ Google Ecosystem เต็มรูปแบบ โดยที่คุณไม่จำเป็นต้องมีพื้นฐานการเขียนโค้ดมาก่อน'}
                    </p>

                    <div className="mt-8 reveal">
                      <h4 className="font-kanit font-bold text-xl mb-4 text-[#111]">{en ? 'Why this course?' : 'ทำไมต้องคอร์สนี้?'}</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 w-full">
                        <div className="p-5 border border-[#E6E4DD] rounded-2xl hover:border-[#FF6A2A] transition-colors bg-white group/item shadow-sm">
                          <strong className="font-medium text-[#111] block mb-1.5 text-xs uppercase tracking-wider text-[#FF6A2A]">{en ? 'More than a landing page' : 'ไม่ใช่แค่สร้างเว็บหน้าเดียว'}</strong>
                          <p className="text-sm font-light text-[#555] leading-relaxed">{en ? 'Build real Web Apps with Login systems and full Databases.' : 'สอนสร้าง Web App มีระบบสมาชิก (Login) และฐานข้อมูล (Database)'}</p>
                        </div>
                        <div className="p-5 border border-[#E6E4DD] rounded-2xl hover:border-[#FF6A2A] transition-colors bg-white group/item shadow-sm">
                          <strong className="font-medium text-[#111] block mb-1.5 text-xs uppercase tracking-wider text-[#FF6A2A]">{en ? 'Think like a SaaS founder' : 'คิดแบบ SaaS'}</strong>
                          <p className="text-sm font-light text-[#555] leading-relaxed">{en ? 'Learn to build "services" that solve real problems and generate long-term revenue.' : 'สอนระบบคิดการสร้าง "บริการ" เพื่อแก้ปัญหาผู้ใช้และสร้างรายได้ระยะยาว'}</p>
                        </div>
                        <div className="p-5 border border-[#E6E4DD] rounded-2xl hover:border-[#FF6A2A] transition-colors bg-white group/item shadow-sm">
                          <strong className="font-medium text-[#111] block mb-1.5 text-xs uppercase tracking-wider text-[#FF6A2A]">{en ? 'AI does the heavy lifting' : 'ใช้ AI ทำงานเบื้องหลัง'}</strong>
                          <p className="text-sm font-light text-[#555] leading-relaxed">{en ? 'Cut coding time drastically — let AI write the correct structure for you.' : 'ลดเวลา Coding เองด้วยการใช้ AI ช่วยเขียนโครงสร้างที่ถูกต้อง'}</p>
                        </div>
                        <div className="p-5 border border-[#E6E4DD] rounded-2xl hover:border-[#FF6A2A] transition-colors bg-white group/item shadow-sm">
                          <strong className="font-medium text-[#111] block mb-1.5 text-xs uppercase tracking-wider text-[#FF6A2A]">{en ? 'E-Commerce built in' : 'สอนทำระบบ E-Commerce'}</strong>
                          <p className="text-sm font-light text-[#555] leading-relaxed">{en ? 'Sell digital products (e-books, courses) with automated payment systems.' : 'สำหรับสินค้าดิจิตอล (E-book, Course) พร้อมระบบชำระเงินออโต้'}</p>
                        </div>
                      </div>

                      <div className="w-full">
                        {/* Merged Featured Course Card */}
                        <div className="bg-[#FFF1E6] border-2 border-[#FF6A2A]/40 text-[#111] rounded-3xl relative flex flex-col lg:flex-row overflow-hidden shadow-xl shadow-[#FF6A2A]/5 hover:border-[#FF6A2A] transition-colors">
                          <div className="absolute top-5 right-5 z-10 bg-[#FF6A2A] text-white text-[11px] uppercase font-bold px-3.5 py-1.5 rounded-full tracking-wider shadow-md">HOT SELLING</div>

                          {/* Course Cover Image */}
                          <div className="w-full lg:w-2/5 flex-shrink-0 min-h-[240px] lg:min-h-0 overflow-hidden rounded-t-3xl lg:rounded-l-3xl lg:rounded-t-none">
                            <img src="/course-cover.png" alt="Vibe Coding Master Route" className="w-full h-full object-cover object-top" />
                          </div>

                          {/* Content */}
                          <div className="flex flex-col justify-between p-8 md:p-10 flex-1">
                            <div>
                              <div className="text-xs uppercase tracking-widest text-[#FF6A2A] mb-2 font-semibold">
                                {en ? 'Full Package | Online + Self-Paced Video' : 'แพ็กเกจครบชุด | ออนไลน์ + วิดีโอดูซ้ำได้ตลอด'}
                              </div>
                              <h4 className="font-display font-bold text-3xl mb-5 text-[#111]">Vibe Coding Master Route</h4>

                              <div className="space-y-3 mb-8">
                                <div className="flex items-start gap-3 text-sm font-light text-[#444]">
                                  <CheckCircle size={16} className="text-[#FF6A2A] mt-0.5 flex-shrink-0" />
                                  <span><strong className="text-[#111] font-medium">{en ? 'Complete Vibe Coding curriculum:' : 'เรียนครบทุกบท Vibe Coding:'}</strong> {en ? 'Workshop — build AI Web Apps for MVP' : 'Workshop สร้าง AI Web App สำหรับ MVP'}</span>
                                </div>
                                <div className="flex items-start gap-3 text-sm font-light text-[#444]">
                                  <CheckCircle size={16} className="text-[#FF6A2A] mt-0.5 flex-shrink-0" />
                                  <span><strong className="text-[#111] font-medium">Full Stack Skills:</strong> {en ? 'AI Coding, APIs, backend & cloud basics' : 'สอน AI Coding, API, หลังบ้าน และคลาวด์พื้นฐาน'}</span>
                                </div>
                                <div className="flex items-start gap-3 text-sm font-light text-[#444]">
                                  <CheckCircle size={16} className="text-[#FF6A2A] mt-0.5 flex-shrink-0" />
                                  <span><strong className="text-[#111] font-medium">{en ? 'Self-Paced Video:' : 'Self-Paced Video:'}</strong> {en ? 'Rewatch anytime + free updates all year' : 'ทบทวนได้ตลอดชีวิต พร้อมอัปเดตบทเรียนฟรีตลอดปี'}</span>
                                </div>
                                <div className="flex items-start gap-3 text-sm font-light text-[#444]">
                                  <CheckCircle size={16} className="text-[#FF6A2A] mt-0.5 flex-shrink-0" />
                                  <span><strong className="text-[#111] font-medium">{en ? 'Community support:' : 'ดูแลใกล้ชิด:'}</strong> {en ? 'Vibe Coding with Modty group for 60 days' : 'เข้ากลุ่ม Vibe Coding with Modty ดูแล 60 วัน'}</span>
                                </div>
                              </div>
                            </div>
                            <div>
                              <div className="flex items-end gap-3 mb-1">
                                <span className="font-bold text-4xl text-[#111]">2,990 <span className="text-xl font-normal">THB</span></span>
                                <span className="text-sm text-[#888] line-through mb-1">{en ? 'Regular 9,900 THB' : 'ราคาปกติ 9,900 บาท'}</span>
                              </div>
                              <p className="text-xs uppercase tracking-wider text-[#FF6A2A] font-bold mb-6">{en ? '** First 10 spots only' : '** สำหรับ 10 ท่านแรกเท่านั้น'}</p>
                              <a href={lineLink} className="inline-block bg-[#FF6A2A] text-white rounded-full text-center px-10 py-4 uppercase tracking-widest text-base font-semibold hover:bg-[#e0591f] transition-colors shadow-lg shadow-[#FF6A2A]/25">{en ? 'Enroll Now' : 'สมัครเรียนทันที'}</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Discipline 02: Custom Workshops & Short Courses */}
            <div className="group relative py-12 md:py-16 border-b border-[#E6E4DD] hover:border-[#111] transition-colors duration-500 cursor-pointer hover-target reveal">
              <div className="flex flex-col md:flex-row justify-between items-start">
                <div className="flex items-start space-x-6 md:space-x-12 z-10 w-full lg:w-4/5">
                  <span className="text-[#FF6A2A] font-display text-2xl md:text-4xl font-bold">02</span>
                  <div className="w-full space-y-12">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-3xl md:text-5xl font-display font-semibold text-[#111] lg:group-hover:translate-x-3 transition-transform duration-500">Custom Workshops &amp; Short Courses</h3>
                        <span className="text-xs uppercase tracking-widest text-[#888] font-medium hidden sm:inline-block">• Private / Team / Corporate</span>
                      </div>
                      <p className="mt-4 text-[#666] text-sm md:text-base font-light lg:group-hover:translate-x-3 transition-transform duration-500 delay-75 mb-6">
                        {en
                          ? 'Focused short courses and tailored workshops for targeted skill-ups — solve specific business problems or master new AI tools fast.'
                          : 'คอร์สระยะสั้นและ Workshop เฉพาะทาง สำหรับผู้ที่ต้องการแก้ปัญหาเฉพาะจุด ออกแบบตามโจทย์จริงของธุรกิจคุณได้อย่างตรงจุด'}
                      </p>
                    </div>

                    {/* CUSTOMIZED LEARNING MESSAGE BLOCK */}
                    <div className="bg-white border-2 border-[#FF6A2A]/30 rounded-3xl p-8 md:p-12 shadow-sm space-y-8">
                      <div className="space-y-3">
                        <span className="text-xs uppercase tracking-[0.3em] font-bold text-[#FF6A2A]">CUSTOMIZED LEARNING</span>
                        <h4 className="text-2xl md:text-4xl font-display font-bold text-[#111]">
                          ไม่จำเป็นต้องเรียนตามหลักสูตรสำเร็จรูป
                        </h4>
                        <p className="text-sm md:text-base font-light text-[#555] leading-relaxed">
                          ทุกคลาสของ Modty สามารถปรับเนื้อหาให้เหมาะกับ <strong className="text-[#111] font-medium">เป้าหมาย ระดับทักษะ และงานจริงของผู้เรียน</strong> ได้
                        </p>
                      </div>

                      {/* Bring Your Own Use Case List */}
                      <div>
                        <p className="text-xs uppercase tracking-widest text-[#888] font-bold mb-4">นำโจทย์จริงของคุณเข้ามาทำใน WORKSHOP:</p>
                        <div className="flex flex-wrap gap-2.5">
                          {['งานในบริษัท', 'Workflow ที่ทำอยู่', 'Content ที่ต้องผลิต', 'Website หรือ Web App ที่อยากสร้าง', 'Process ที่อยาก Automation', 'Digital Product ที่อยากพัฒนา', 'AI Tool ที่อยากสร้าง', 'Project ของทีม'].map((item) => (
                            <span key={item} className="bg-[#FFF1E6] text-[#FF6A2A] border border-[#FFE3D2] px-4 py-2 text-xs font-semibold rounded-full">
                              ✓ {item}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Adjustment Flow */}
                      <div className="bg-[#F9F8F4] p-5 rounded-2xl border border-[#E6E4DD] text-center">
                        <div className="text-xs uppercase tracking-widest text-[#888] font-bold mb-3">MODTY'S TAILORED WORKFLOW</div>
                        <div className="flex flex-wrap items-center justify-center gap-2 text-xs font-bold text-[#111]">
                          <span className="bg-white px-3 py-1.5 rounded-lg border border-[#E6E4DD]">Content</span>
                          <span className="text-[#FF6A2A]">&rarr;</span>
                          <span className="bg-white px-3 py-1.5 rounded-lg border border-[#E6E4DD]">Tool</span>
                          <span className="text-[#FF6A2A]">&rarr;</span>
                          <span className="bg-white px-3 py-1.5 rounded-lg border border-[#E6E4DD]">Exercise</span>
                          <span className="text-[#FF6A2A]">&rarr;</span>
                          <span className="bg-white px-3 py-1.5 rounded-lg border border-[#E6E4DD]">Project</span>
                          <span className="text-[#FF6A2A]">&rarr;</span>
                          <span className="bg-[#FF6A2A] text-white px-3.5 py-1.5 rounded-lg font-bold shadow-sm">Output</span>
                        </div>
                      </div>

                      {/* Highlight Banner */}
                      <div className="p-4 bg-[#FF6A2A] text-white text-center rounded-2xl font-kanit font-bold text-base shadow-md">
                        "เรียนจากงานจริง และจบด้วยสิ่งที่เอากลับไปใช้ต่อได้จริง"
                      </div>

                      {/* Learning Formats Grid */}
                      <div>
                        <h5 className="font-display font-bold text-lg text-[#111] mb-4">รูปแบบการเรียนที่เลือกได้ (Learning Formats)</h5>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                          <div className="p-5 bg-[#F9F8F4] border border-[#E6E4DD] rounded-2xl hover:border-[#FF6A2A] transition-colors">
                            <span className="text-xs uppercase tracking-widest text-[#FF6A2A] font-bold block mb-1">FORMAT 01</span>
                            <h6 className="font-bold text-base text-[#111] mb-1">Private 1:1</h6>
                            <p className="text-xs text-[#666] font-light">ปรับเนื้อหาตามเป้าหมายและ Project ของผู้เรียนโดยตรง</p>
                          </div>
                          <div className="p-5 bg-[#F9F8F4] border border-[#E6E4DD] rounded-2xl hover:border-[#FF6A2A] transition-colors">
                            <span className="text-xs uppercase tracking-widest text-[#FF6A2A] font-bold block mb-1">FORMAT 02</span>
                            <h6 className="font-bold text-base text-[#111] mb-1">Small Group</h6>
                            <p className="text-xs text-[#666] font-light">เหมาะกับทีมขนาดเล็กที่ต้องการเรียนจาก Use Case เดียวกัน</p>
                          </div>
                          <div className="p-5 bg-[#F9F8F4] border border-[#E6E4DD] rounded-2xl hover:border-[#FF6A2A] transition-colors">
                            <span className="text-xs uppercase tracking-widest text-[#FF6A2A] font-bold block mb-1">FORMAT 03</span>
                            <h6 className="font-bold text-base text-[#111] mb-1">Corporate Workshop</h6>
                            <p className="text-xs text-[#666] font-light">ออกแบบเนื้อหาตาม Process และปัญหาขององค์กร</p>
                          </div>
                          <div className="p-5 bg-[#F9F8F4] border border-[#E6E4DD] rounded-2xl hover:border-[#FF6A2A] transition-colors">
                            <span className="text-xs uppercase tracking-widest text-[#FF6A2A] font-bold block mb-1">FORMAT 04</span>
                            <h6 className="font-bold text-base text-[#111] mb-1">Project-Based</h6>
                            <p className="text-xs text-[#666] font-light">เลือก Project ที่อยากสร้าง แล้วใช้เวลา Workshop เพื่อสร้างไปด้วยกัน</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Short Courses Grid (Existing + 5 New Courses) */}
                    <div className="space-y-6">
                      <h4 className="font-display font-bold text-2xl text-[#111] border-b border-[#E6E4DD] pb-4">
                        Short Courses &amp; Workshop Catalog
                      </h4>

                      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 w-full">
                        {/* Course 1: ChatGPT Work + Codex (NEW) */}
                        <div className="p-6 md:p-8 bg-[#111] text-white border border-[#333] rounded-[20px] flex flex-col justify-between hover:border-[#FF6A2A] transition-all shadow-md">
                          <div>
                            <div className="text-xs uppercase tracking-widest text-[#FF6A2A] mb-2 font-bold">AI OPERATING SYSTEM</div>
                            <h4 className="font-display font-bold text-2xl mb-2 text-white">ChatGPT Work + Codex</h4>
                            <p className="text-xs font-light text-[#ccc] mb-4 leading-relaxed">
                              สร้าง AI Operating System — เปลี่ยน ChatGPT จากเครื่องมือถามตอบให้กลายเป็นพื้นที่ทำงานส่วนตัว ที่เข้าใจข้อมูล เชื่อมเครื่องมือ ทำงานตามเวลา และสร้างระบบได้จริง
                            </p>
                            <div className="text-xs text-[#aaa] bg-white/5 p-3.5 border-l-2 border-[#FF6A2A] rounded-r-lg mb-4">
                              <strong className="text-white font-medium">เหมาะสำหรับ:</strong> Business Owner, Creator, Marketing, Operations, Consultant, คนที่ใช้ ChatGPT ประจำ
                            </div>
                            <ul className="space-y-2 text-xs font-light text-[#ccc] mb-6">
                              <li>• ตั้งค่า Projects, Instructions &amp; Custom Skills</li>
                              <li>• เชื่อม Gmail, Drive, Calendar, Notion &amp; GitHub</li>
                              <li>• Scheduled Tasks &amp; Multi-Agent Workflows</li>
                              <li>• ใช้ Codex สร้างเว็บและเครื่องมือใช้งานจริง</li>
                            </ul>
                            <div className="p-3 bg-white/5 rounded-xl border border-white/10 text-[11px] text-[#FF6A2A] font-medium mb-6">
                              ✓ จบคลาสพร้อมโครง AI Operating System นำไปพัฒนาต่อกับงานได้ทันที
                            </div>
                          </div>
                          <div>
                            <div className="font-bold text-xl text-white mb-1">สอบถามรายละเอียด</div>
                            <p className="text-[10px] tracking-widest text-[#888] uppercase mb-4">ออกแบบคลาสตามโจทย์</p>
                            <a href={lineLink} target="_blank" rel="noreferrer" className="inline-block bg-[#FF6A2A] text-white rounded-full text-center w-full py-3 uppercase tracking-widest text-xs font-semibold hover:bg-[#e0591f] transition-colors shadow-md">สอบถามรายละเอียด</a>
                          </div>
                        </div>

                        {/* Course 2: AI Visual Content System (NEW) */}
                        <div className="p-6 md:p-8 bg-white border border-[#E6E4DD] rounded-[20px] flex flex-col justify-between hover:border-[#FF6A2A] transition-all shadow-sm">
                          <div>
                            <div className="text-xs uppercase tracking-widest text-[#FF6A2A] mb-2 font-bold">VISUAL &amp; CONTENT</div>
                            <h4 className="font-display font-bold text-2xl mb-2 text-[#111]">AI Visual Content System</h4>
                            <p className="text-xs font-light text-[#555] mb-4 leading-relaxed">
                              สร้างภาพ Carousel, Infographic และ Visual Content ให้มี Design Direction เดียวกัน พร้อมเปลี่ยน Prompt กระจัดกระจายให้เป็นระบบผลิต Content ที่นำกลับมาใช้ซ้ำได้
                            </p>
                            <div className="text-xs text-[#555] bg-[#F9F8F4] p-3.5 border-l-2 border-[#FF6A2A] rounded-r-lg mb-4">
                              <strong className="text-[#111] font-medium">เหมาะสำหรับ:</strong> Creator, Marketing, Brand Owner, Agency, E-commerce
                            </div>
                            <ul className="space-y-2 text-xs font-light text-[#555] mb-6">
                              <li>• วิเคราะห์ Style จากภาพ Reference &amp; Design System</li>
                              <li>• เขียน Structured Prompt ล็อกหน้า สินค้า สี ฟอนต์</li>
                              <li>• สร้าง Carousel ให้ทุกหน้าเป็นธีมเดียวกัน</li>
                              <li>• สร้าง AI Carousel Tool สำหรับผลิต Content</li>
                            </ul>
                            <div className="p-3 bg-[#FFF1E6] rounded-xl border border-[#FFE3D2] text-[11px] text-[#FF6A2A] font-medium mb-6">
                              ✓ จากการสร้างภาพทีละรูป &rarr; สู่ Visual Content System ที่ทำซ้ำและ Scale ได้
                            </div>
                          </div>
                          <div>
                            <div className="font-bold text-xl text-[#111] mb-1">สอบถามรายละเอียด</div>
                            <p className="text-[10px] tracking-widest text-[#888] uppercase mb-4">ออกแบบคลาสตามโจทย์</p>
                            <a href={lineLink} target="_blank" rel="noreferrer" className="inline-block border border-[#111] text-[#111] rounded-full text-center w-full py-3 uppercase tracking-widest text-xs font-semibold hover:bg-[#111] hover:text-white transition-colors">สอบถามรายละเอียด</a>
                          </div>
                        </div>

                        {/* Course 3: AI Video & Motion Content Workshop (NEW) */}
                        <div className="p-6 md:p-8 bg-white border border-[#E6E4DD] rounded-[20px] flex flex-col justify-between hover:border-[#FF6A2A] transition-all shadow-sm">
                          <div>
                            <div className="text-xs uppercase tracking-widest text-[#FF6A2A] mb-2 font-bold">AI VIDEO</div>
                            <h4 className="font-display font-bold text-2xl mb-2 text-[#111]">AI Video &amp; Motion Content</h4>
                            <p className="text-xs font-light text-[#555] mb-4 leading-relaxed">
                              สร้าง Workflow ผลิตวิดีโอด้วย AI ตั้งแต่ภาพ ฉาก AI Presenter, UGC, Motion Graphic ไปจนถึงการใช้ Code และ AI ช่วยตัดต่อ
                            </p>
                            <div className="text-xs text-[#555] bg-[#F9F8F4] p-3.5 border-l-2 border-[#FF6A2A] rounded-r-lg mb-4">
                              <strong className="text-[#111] font-medium">เหมาะสำหรับ:</strong> Creator, Video Editor, Marketing Team, Brand, Social Media Team
                            </div>
                            <ul className="space-y-2 text-xs font-light text-[#555] mb-6">
                              <li>• AI Talking Person, Voice Clone &amp; AI UGC</li>
                              <li>• Product Video, Google Flow &amp; HTML Motion</li>
                              <li>• แปลง PDF / Website / CSV เป็นวิดีโอออโต้</li>
                              <li>• สร้าง AI Video Editor ส่วนตัวสำหรับทีม</li>
                            </ul>
                            <div className="p-3 bg-[#FFF1E6] rounded-xl border border-[#FFE3D2] text-[11px] text-[#FF6A2A] font-medium mb-6">
                              ✓ สร้าง Video Workflow ที่ช่วยลดเวลาการผลิตและนำกลับมาใช้ซ้ำได้
                            </div>
                          </div>
                          <div>
                            <div className="font-bold text-xl text-[#111] mb-1">สอบถามรายละเอียด</div>
                            <p className="text-[10px] tracking-widest text-[#888] uppercase mb-4">ออกแบบคลาสตามโจทย์</p>
                            <a href={lineLink} target="_blank" rel="noreferrer" className="inline-block border border-[#111] text-[#111] rounded-full text-center w-full py-3 uppercase tracking-widest text-xs font-semibold hover:bg-[#111] hover:text-white transition-colors">สอบถามรายละเอียด</a>
                          </div>
                        </div>

                        {/* Course 4: AI Automation + AI Agent (NEW) */}
                        <div className="p-6 md:p-8 bg-[#111] text-white border border-[#333] rounded-[20px] flex flex-col justify-between hover:border-[#FF6A2A] transition-all shadow-md">
                          <div>
                            <div className="text-xs uppercase tracking-widest text-[#FF6A2A] mb-2 font-bold">AUTOMATION</div>
                            <h4 className="font-display font-bold text-2xl mb-2 text-white">AI Automation + AI Agent</h4>
                            <p className="text-xs font-light text-[#ccc] mb-4 leading-relaxed">
                              เรียนรู้การออกแบบระบบ Automation และ AI Agent จาก Business Process จริง เพื่อให้ AI รับข้อมูล วิเคราะห์ ใช้เครื่องมือ และส่งงานต่อได้
                            </p>
                            <div className="text-xs text-[#aaa] bg-white/5 p-3.5 border-l-2 border-[#FF6A2A] rounded-r-lg mb-4">
                              <strong className="text-white font-medium">เหมาะสำหรับ:</strong> Business Owner, Operations, Admin, Lead Management
                            </div>
                            <ul className="space-y-2 text-xs font-light text-[#ccc] mb-6">
                              <li>• n8n Fundamentals, Triggers &amp; Webhooks</li>
                              <li>• LINE OA, Gmail, Google Sheets &amp; Database Sync</li>
                              <li>• AI Agent Memory &amp; Tool Use Integration</li>
                              <li>• Customer Support Bot &amp; Auto Lead Follow-up</li>
                            </ul>
                            <div className="p-3 bg-white/5 rounded-xl border border-white/10 text-[11px] text-[#FF6A2A] font-medium mb-6">
                              ✓ เข้าใจตั้งแต่การหา Process ที่ควร Automate จนถึงออกแบบ Workflow จริง
                            </div>
                          </div>
                          <div>
                            <div className="font-bold text-xl text-white mb-1">สอบถามรายละเอียด</div>
                            <p className="text-[10px] tracking-widest text-[#888] uppercase mb-4">ออกแบบคลาสตามโจทย์</p>
                            <a href={lineLink} target="_blank" rel="noreferrer" className="inline-block bg-[#FF6A2A] text-white rounded-full text-center w-full py-3 uppercase tracking-widest text-xs font-semibold hover:bg-[#e0591f] transition-colors shadow-md">สอบถามรายละเอียด</a>
                          </div>
                        </div>

                        {/* Course 5: Build Your Own AI Content Tool (NEW) */}
                        <div className="p-6 md:p-8 bg-white border border-[#E6E4DD] rounded-[20px] flex flex-col justify-between hover:border-[#FF6A2A] transition-all shadow-sm">
                          <div>
                            <div className="text-xs uppercase tracking-widest text-[#FF6A2A] mb-2 font-bold">PROJECT-BASED</div>
                            <h4 className="font-display font-bold text-2xl mb-2 text-[#111]">สร้าง AI Content Tool ของตัวเอง</h4>
                            <p className="text-xs font-light text-[#555] mb-4 leading-relaxed">
                              Project-based Workshop ที่ผู้เรียนจะออกแบบและสร้าง AI Tool ที่สามารถนำกลับไปใช้งานต่อได้จริง เช่น AI Carousel / UGC / Script Generator
                            </p>
                            <div className="text-xs text-[#555] bg-[#F9F8F4] p-3.5 border-l-2 border-[#FF6A2A] rounded-r-lg mb-4">
                              <strong className="text-[#111] font-medium">เหมาะสำหรับ:</strong> Creator, Solopreneur, Agency, Brand Owner
                            </div>
                            <ul className="space-y-2 text-xs font-light text-[#555] mb-6">
                              <li>• ออกแบบ UX &amp; วาง Prompt System</li>
                              <li>• สร้าง Input Form &amp; Multi-output Generation</li>
                              <li>• เชื่อม Google Drive &amp; Duplicate ให้ใช้หลาย Brand</li>
                              <li>• วางแนวทางแพ็กเป็น Service หรือ Digital Product</li>
                            </ul>
                            <div className="p-3 bg-[#FFF1E6] rounded-xl border border-[#FFE3D2] text-[11px] text-[#FF6A2A] font-medium mb-6">
                              ✓ เรียนจบแล้วได้ AI Tool ของตัวเองพร้อมใช้งาน
                            </div>
                          </div>
                          <div>
                            <div className="font-bold text-xl text-[#111] mb-1">สอบถามรายละเอียด</div>
                            <p className="text-[10px] tracking-widest text-[#888] uppercase mb-4">ออกแบบคลาสตามโจทย์</p>
                            <a href={lineLink} target="_blank" rel="noreferrer" className="inline-block border border-[#111] text-[#111] rounded-full text-center w-full py-3 uppercase tracking-widest text-xs font-semibold hover:bg-[#111] hover:text-white transition-colors">สอบถามรายละเอียด</a>
                          </div>
                        </div>

                        {/* Existing Workshop 1: AI System Architect */}
                        <div className="p-6 md:p-8 bg-white border border-[#E6E4DD] rounded-[20px] flex flex-col justify-between hover:border-[#FF6A2A] hover:-translate-y-1 transition-all shadow-sm">
                          <div>
                            <div className="text-xs uppercase tracking-widest text-[#FF6A2A] mb-2 font-bold">AI PRODUCTIVITY</div>
                            <h4 className="font-display font-bold text-2xl mb-2 text-[#111]">AI System Architect</h4>
                            <p className="text-sm font-medium text-[#333] mb-4">{en ? 'Create personal assistant, reduce repetitive work' : 'สร้างผู้ช่วยส่วนตัว ลดงานซ้ำซาก'}</p>
                            <div className="text-xs font-light text-[#666] mb-6 bg-[#F9F8F4] p-3.5 border-l-2 border-[#FF6A2A] rounded-r-lg leading-relaxed">
                              <strong className="font-medium text-[#111]">{en ? 'For:' : 'เหมาะสำหรับ:'}</strong> {en ? 'People who frequently command AI, graphic designers, or Admins who want automated workflows.' : 'คนที่ต้องสั่งงาน AI บ่อยๆ, สายกราฟิก หรือ Admin ที่อยากมีระบบทำงานอัตโนมัติ'}
                            </div>
                            <ul className="space-y-3 mb-8">
                              <li className="flex items-start gap-2.5 text-sm font-light text-[#555]">
                                <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#FF6A2A] flex-shrink-0"></div>
                                <span><strong className="font-medium text-[#111]">Prompt Engineering:</strong> {en ? 'Command AI accurately' : 'สั่งงาน AI ให้แม่นยำ'}</span>
                              </li>
                              <li className="flex items-start gap-2.5 text-sm font-light text-[#555]">
                                <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#FF6A2A] flex-shrink-0"></div>
                                <span><strong className="font-medium text-[#111]">Custom Gems:</strong> {en ? 'Learn to create personal AI assistants' : 'สอนสร้าง AI ผู้ช่วยส่วนตัว'}</span>
                              </li>
                              <li className="flex items-start gap-2.5 text-sm font-light text-[#555]">
                                <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#FF6A2A] flex-shrink-0"></div>
                                <span><strong className="font-medium text-[#111]">Bonus:</strong> {en ? 'Free 5 style image generation formulas' : 'แถมสูตร Gen ภาพ 5 สไตล์'}</span>
                              </li>
                            </ul>
                          </div>
                          <div>
                            <p className="text-xs text-[#888] line-through mb-1">{en ? 'Regular 2,990 THB' : 'ราคาปกติ 2,990 บาท'}</p>
                            <div className="font-bold text-3xl text-[#111] mb-2">1,290 <span className="text-base font-normal">THB</span></div>
                            <p className="text-[10px] tracking-widest text-[#888] uppercase mb-6">{en ? 'Private 1 hr session' : 'Private 1 ชม.'}</p>
                            <a href={lineLink} className="inline-block border border-[#111] rounded-full text-center w-full py-3 uppercase tracking-widest text-sm font-medium hover:bg-[#111] hover:text-white transition-colors">{en ? 'Book a Session' : 'จองเวลาเรียน'}</a>
                          </div>
                        </div>

                      </div>
                    </div>

                    {/* MINI WORKSHOPS / CUSTOM TOPICS LIBRARY (TAG LIST) */}
                    <div className="bg-white border border-[#E6E4DD] rounded-3xl p-8 md:p-10 shadow-sm space-y-6">
                      <div>
                        <span className="text-xs uppercase tracking-[0.3em] font-bold text-[#FF6A2A]">MORE TOPICS AVAILABLE</span>
                        <h4 className="font-display font-bold text-2xl text-[#111] mt-1">Custom Workshop Library</h4>
                        <p className="text-xs text-[#666] mt-1 font-light">หัวข้อการเรียนรู้ย่อยที่สามารถเลือกนำมาประกอบเป็น Private / Team Workshop ของคุณได้</p>
                      </div>

                      <div className="flex flex-wrap gap-2.5">
                        {[
                          'Google Sheets Dashboard ด้วย AI + Apps Script',
                          'Claude Skills สำหรับงานและธุรกิจ',
                          'Prompt Engineering + Gemini Gems',
                          'Reverse Engineer Website / Visual / Workflow',
                          'Digital Product & Automated Selling System',
                          'AI Tools สำหรับผู้เริ่มต้น',
                          'Build with Gemini ตั้งแต่ Idea ถึง Deploy'
                        ].map((topic) => (
                          <span key={topic} className="bg-[#F9F8F4] border border-[#E6E4DD] text-[#333] px-4 py-2 text-xs rounded-xl hover:border-[#FF6A2A] transition-colors">
                            ⚡ {topic}
                          </span>
                        ))}
                      </div>

                      <div className="pt-4 border-t border-[#E6E4DD] flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                        <div>
                          <h5 className="font-bold text-sm text-[#111]">ไม่พบหัวข้อที่ต้องการ?</h5>
                          <p className="text-xs text-[#666] font-light">สามารถแจ้งโจทย์หรือ Workflow ที่อยากพัฒนาได้ และออกแบบ Private / Team Workshop ให้ตรงกับ Use Case ของคุณได้</p>
                        </div>
                        <a href={lineLink} target="_blank" rel="noreferrer" className="bg-[#FF6A2A] text-white px-6 py-3 rounded-full text-xs uppercase tracking-widest font-semibold hover:bg-[#e0591f] transition-colors whitespace-nowrap">
                          ขอออกแบบหลักสูตรเฉพาะ
                        </a>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>

            {/* Discipline 03: Speaker & Trainer Summary */}
            <div className="group relative py-12 md:py-16 border-b border-[#E6E4DD] hover:border-[#111] transition-colors duration-500 cursor-pointer hover-target reveal">
              <div className="flex flex-col md:flex-row justify-between items-start">
                <div className="flex items-start space-x-6 md:space-x-12 z-10 w-full lg:w-4/5">
                  <span className="text-[#FF6A2A] font-display text-2xl md:text-4xl font-bold">03</span>
                  <div className="w-full">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-3xl md:text-5xl font-display font-semibold text-[#111] lg:group-hover:translate-x-3 transition-transform duration-500">Speaker &amp; Trainer</h3>
                      <span className="text-xs uppercase tracking-widest text-[#888] font-medium hidden sm:inline-block">• Event / Organization / Community</span>
                    </div>
                    <p className="mt-4 text-[#666] text-sm md:text-base font-light lg:group-hover:translate-x-3 transition-transform duration-500 delay-75 mb-6">
                      รับบรรยาย Keynote, Executive Briefing และวิทยากรจัด Workshop ด้าน AI, Business Automation และ Vibe Coding สำหรับสถาบัน องค์กร และอีเวนต์เทคโนโลยี
                    </p>
                    <a href="#speaker" className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-[#FF6A2A] hover:underline">
                      ดูภาพบรรยากาศงานบรรยาย &amp; หัวข้อทั้งหมด &rarr;
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Discipline 04: Consultation */}
            <div className="group relative py-12 md:py-16 border-b border-[#E6E4DD] hover:border-[#111] transition-colors duration-500 cursor-pointer hover-target reveal">
              <div className="flex flex-col md:flex-row justify-between items-start">
                <div className="flex items-start space-x-6 md:space-x-12 z-10 w-full lg:w-4/5">
                  <span className="text-[#FF6A2A] font-display text-2xl md:text-4xl font-bold">04</span>
                  <div className="w-full">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-3xl md:text-5xl font-display font-semibold text-[#111] lg:group-hover:translate-x-3 transition-transform duration-500">Consultation</h3>
                      <span className="text-xs uppercase tracking-widest text-[#888] font-medium hidden sm:inline-block">• AI Strategy &amp; Business Automation</span>
                    </div>
                    <div className="mt-4 text-sm md:text-base mb-8">
                      <p className="text-[#111] font-medium mb-1 text-lg">AI &amp; Business Automation Consultant</p>
                      <p className="text-[#666] font-light">{en ? 'Unlock your team and business potential with expert advice. Reduce repetitive work and focus more on strategic growth.' : 'ปลดล็อกศักยภาพทีมงานและธุรกิจของคุณ ด้วยคำแนะนำจากผู้เชี่ยวชาญ ลดงานซ้ำซ้อน เพิ่มเวลาโฟกัสในสิ่งที่คุณต้องการจริงๆ'}</p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8 w-full reveal">
                      {/* Left: Target Audience List */}
                      <div>
                        <h4 className="font-kanit font-bold text-lg mb-6 text-[#111]">{en ? 'Who is this service for?' : 'บริการนี้เหมาะกับใคร?'}</h4>
                        <div className="space-y-4">
                          <div className="group/target flex flex-col pl-4 border-l-[3px] border-[#E6E4DD] hover:border-[#FF6A2A] transition-all duration-300 py-1">
                            <span className="font-bold text-[#111] text-sm group-hover/target:translate-x-1 transition-transform">{en ? 'Business Owners' : 'เจ้าของธุรกิจ'}</span>
                            <span className="text-sm font-light text-[#666] mt-1 group-hover/target:translate-x-1 transition-transform delay-75">{en ? 'Use AI to reduce costs and maximize efficiency' : 'นำ AI มาลดต้นทุนและเพิ่มประสิทธิภาพขั้นสุด'}</span>
                          </div>
                          <div className="group/target flex flex-col pl-4 border-l-[3px] border-[#E6E4DD] hover:border-[#FF6A2A] transition-all duration-300 py-1">
                            <span className="font-bold text-[#111] text-sm group-hover/target:translate-x-1 transition-transform">{en ? 'Operations Teams' : 'ทีมงาน Operations'}</span>
                            <span className="text-sm font-light text-[#666] mt-1 group-hover/target:translate-x-1 transition-transform delay-75">{en ? 'Set up automated workflow systems, reduce manual work' : 'วางระบบ Workflow อัตโนมัติ ลดงาน Manual'}</span>
                          </div>
                          <div className="group/target flex flex-col pl-4 border-l-[3px] border-[#E6E4DD] hover:border-[#FF6A2A] transition-all duration-300 py-1">
                            <span className="font-bold text-[#111] text-sm group-hover/target:translate-x-1 transition-transform">{en ? 'Modern Leaders' : 'ผู้นำยุคใหม่'}</span>
                            <span className="text-sm font-light text-[#666] mt-1 group-hover/target:translate-x-1 transition-transform delay-75">{en ? 'Choose tech stacks suitable for future scaling' : 'เลือก Tech Stack ที่เหมาะกับการ Scale ในอนาคต'}</span>
                          </div>
                        </div>
                      </div>

                      {/* Right: Premium Dark Contrast Card */}
                      <div className="p-8 bg-[#111] rounded-3xl text-white border border-[#333] flex flex-col justify-between hover:border-[#FF6A2A] transition-all shadow-xl">
                        <div>
                          <div className="text-xs uppercase tracking-widest text-[#FF6A2A] mb-2 font-bold">PRIVATE CONSULTING</div>
                          <h4 className="font-kanit font-bold text-2xl mb-6 text-white">{en ? 'Service Details' : 'รายละเอียดค่าบริการ'}</h4>

                          <div className="space-y-3 mb-8">
                            <div className="flex justify-between items-center text-sm border-b border-[#222] pb-2.5">
                              <span className="font-light text-[#aaa]">{en ? 'Consultation Format' : 'รูปแบบการปรึกษา'}</span>
                              <span className="font-medium text-white">Online Meeting</span>
                            </div>
                            <div className="flex justify-between items-center text-sm border-b border-[#222] pb-2.5">
                              <span className="font-light text-[#aaa]">{en ? 'Post-Consultation Support' : 'การดูแลหลังปรึกษา'}</span>
                              <span className="font-medium text-white">{en ? '7 days follow-up' : 'ดูแลต่อ 7 วัน'}</span>
                            </div>
                            <div className="flex justify-between items-center text-sm border-b border-[#222] pb-2.5">
                              <span className="font-light text-[#aaa]">{en ? 'System Review' : 'รีวิวระบบเดิม'}</span>
                              <span className="font-medium text-[#FF6A2A]">{en ? 'Included in package' : 'รวมในแพ็กเกจ'}</span>
                            </div>
                          </div>
                        </div>
                        <div>
                          <p className="font-bold text-4xl text-white mb-6">2,000 <span className="text-base text-[#888] font-normal tracking-widest">THB/H</span></p>
                          <a href={lineLink} className="inline-block bg-[#FF6A2A] text-white rounded-full text-center w-full py-4 uppercase tracking-widest text-sm font-semibold hover:bg-[#e0591f] transition-colors shadow-md">{en ? 'Book Consultation' : 'จองคิวปรึกษา'}</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Discipline 05: Development */}
            <div className="group relative py-12 md:py-16 border-b border-[#E6E4DD] hover:border-[#111] transition-colors duration-500 cursor-pointer hover-target reveal">
              <div className="flex flex-col md:flex-row justify-between items-start">
                <div className="flex items-start space-x-6 md:space-x-12 z-10 w-full lg:w-4/5">
                  <span className="text-[#FF6A2A] font-display text-2xl md:text-4xl font-bold">05</span>
                  <div className="w-full">
                    <h3 className="text-3xl md:text-5xl font-display font-semibold text-[#111] lg:group-hover:translate-x-3 transition-transform duration-500">Development</h3>
                    <div className="mt-4 text-sm md:text-base mb-8">
                      <p className="text-[#111] font-medium mb-1 text-lg">{en ? 'Custom websites and systems ready to use' : 'รับทำเว็บไซต์และระบบ พร้อมใช้ทันที'}</p>
                      <p className="text-[#666] font-light">{en ? 'Developed with cutting-edge technology, fast, beautiful, and ready for business expansion.' : 'พัฒนาด้วยเทคโนโลยีล่าสุด รวดเร็ว สวยงาม และรองรับการขยายธุรกิจในอนาคต'}</p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full mt-8 reveal">
                      {/* Digital Product Store */}
                      <div className="p-8 bg-white rounded-3xl border border-[#E6E4DD] flex flex-col justify-between hover:border-[#FF6A2A] transition-all shadow-sm">
                        <div>
                          <div className="text-xs uppercase tracking-widest text-[#FF6A2A] mb-2 font-bold">SOLUTION 01</div>
                          <h4 className="font-display font-bold text-2xl mb-2 text-[#111]">Digital Product Store</h4>

                          {/* Outcome Card */}
                          <div className="my-4 p-4 bg-[#FFF1E6] rounded-2xl border border-[#FFE3D2] text-xs">
                            <div className="text-[#888] font-medium mb-1">FROM: <span className="line-through text-[#666]">ขายผ่านแชท / ส่งไฟล์เองทีละคน</span></div>
                            <div className="text-[#FF6A2A] font-bold">TO: ระบบชำระเงิน + ส่ง Digital Product อัตโนมัติ 24/7</div>
                          </div>

                          <ul className="space-y-3 mb-8">
                            <li className="flex items-start gap-2.5 text-sm font-light text-[#555]">
                              <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#FF6A2A] flex-shrink-0"></div>
                              <span><strong className="font-medium text-[#111]">{en ? 'Automated Payment:' : 'ระบบชำระเงินอัตโนมัติ:'}</strong> {en ? 'Instant product delivery' : 'พร้อมส่งสินค้าทันที'}</span>
                            </li>
                            <li className="flex items-start gap-2.5 text-sm font-light text-[#555]">
                              <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#FF6A2A] flex-shrink-0"></div>
                              <span><strong className="font-medium text-[#111]">{en ? 'Conversion Design:' : 'ดีไซน์เน้นยอดขาย:'}</strong> {en ? 'Built to convert' : 'เพิ่มโอกาสการซื้อ'}</span>
                            </li>
                          </ul>
                        </div>
                        <div className="pt-4 border-t border-[#E6E4DD] mt-auto">
                          <p className="text-[10px] tracking-widest text-[#888] uppercase mb-1">STARTING FROM</p>
                          <div className="font-bold text-3xl text-[#111] mb-6">3,000 <span className="text-base font-normal">THB</span></div>
                          <a href={lineLink} className="inline-block border border-[#111] rounded-full text-center w-full py-3.5 uppercase tracking-widest text-sm font-medium hover:bg-[#111] hover:text-white transition-colors">{en ? 'Interested in Website' : 'สนใจทำเว็บไซต์'}</a>
                        </div>
                      </div>

                      {/* Custom Solution */}
                      <div className="p-8 bg-[#111] rounded-3xl text-white border border-[#333] flex flex-col justify-between hover:border-[#FF6A2A] transition-all shadow-md">
                        <div>
                          <div className="text-xs uppercase tracking-widest text-[#FF6A2A] mb-2 font-bold">SOLUTION 02</div>
                          <h4 className="font-display font-bold text-2xl mb-2 text-white">Custom Web Development</h4>

                          <div className="my-4 p-4 bg-white/5 rounded-2xl border border-white/10 text-xs">
                            <div className="text-[#aaa] font-medium mb-1">DESIGNED SPECIFICALLY FOR YOUR BUSINESS</div>
                            <div className="text-white font-semibold">Vibe Coding &amp; Custom Architecture</div>
                          </div>

                          <ul className="space-y-3 mb-8">
                            <li className="flex items-start gap-2.5 text-sm font-light text-[#ccc]">
                              <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#FF6A2A] flex-shrink-0"></div>
                              <span><strong className="font-medium text-white">{en ? 'UI/UX Design:' : 'ออกแบบ UI/UX:'}</strong> {en ? '100% custom design' : 'สั่งทำใหม่ 100%'}</span>
                            </li>
                            <li className="flex items-start gap-2.5 text-sm font-light text-[#ccc]">
                              <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#FF6A2A] flex-shrink-0"></div>
                              <span><strong className="font-medium text-white">{en ? 'High-Quality Code:' : 'โค้ดคุณภาพสูง:'}</strong> {en ? 'Easy to customize' : 'ขยายระบบได้อิสระ'}</span>
                            </li>
                          </ul>
                        </div>
                        <div className="pt-4 border-t border-[#333] mt-auto">
                          <p className="text-[10px] tracking-widest text-[#888] uppercase mb-1">STARTING FROM</p>
                          <div className="font-bold text-3xl text-[#FF6A2A] mb-6">3,000 <span className="text-base text-white font-normal">THB+</span></div>
                          <a href={lineLink} className="inline-block border border-white rounded-full text-center w-full py-3.5 uppercase tracking-widest text-sm font-medium hover:bg-white hover:text-[#111] transition-colors">{en ? 'Inquire Details' : 'สอบถามรายละเอียด'}</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Discipline 06: AI Automation Case Study (Smart Property OS Visual System) */}
            <div className="group relative py-12 md:py-16 border-b border-[#E6E4DD] hover:border-[#111] transition-colors duration-500 cursor-pointer hover-target reveal">
              <div className="flex flex-col md:flex-row justify-between items-start">
                <div className="flex items-start space-x-6 md:space-x-12 z-10 w-full md:w-4/5">
                  <span className="text-[#FF6A2A] font-display text-2xl md:text-4xl font-bold">06</span>
                  <div className="w-full">
                    <h3 className="text-3xl md:text-5xl font-display font-semibold text-[#111] lg:group-hover:translate-x-3 transition-transform duration-500">AI Automation Case Study</h3>
                    <p className="mt-4 text-[#111] text-sm md:text-base font-medium lg:group-hover:translate-x-3 transition-transform duration-500 delay-75 mb-8">{en ? 'Build AI Automation systems for your business' : 'สร้างระบบ AI Automation ให้ธุรกิจของคุณ'}</p>

                    <div className="bg-white p-8 md:p-12 border rounded-3xl border-[#E6E4DD] shadow-lg mt-4 reveal">
                      <div className="flex flex-col md:flex-row items-start md:items-center justify-between border-b border-[#E6E4DD] pb-6 mb-8 gap-4">
                        <div>
                          <span className="text-xs uppercase tracking-widest text-[#FF6A2A] font-bold block mb-1">FEATURED ARCHITECTURE CASE STUDY</span>
                          <h4 className="font-display font-bold text-3xl text-[#111]">Smart Property OS</h4>
                        </div>
                        <span className="text-xs tracking-widest uppercase text-[#FF6A2A] bg-[#FFF1E6] px-4 py-2 rounded-full border border-[#FFE3D2] font-semibold">{en ? 'Real Estate Tech' : 'อสังหาริมทรัพย์'}</span>
                      </div>

                      <p className="text-[#555] font-light mb-8 text-base md:text-lg leading-relaxed">
                        {en
                          ? 'Full AI-powered property management system — customers type "House in Chonburi 2–5M" and the LINE Bot instantly surfaces matching properties with photos, codes, prices, and contact buttons.'
                          : 'ระบบจัดการทรัพย์อสังหาริมทรัพย์ครบวงจรด้วย AI ลูกค้าพิมพ์แค่ "บ้านเดี่ยว ชลบุรี 2-5 ล้าน" ระบบ LINE Bot ค้นหาและแสดงผลทรัพย์ที่ตรงเงื่อนไขพร้อมรูปและราคาทันที'}
                      </p>

                      {/* Visual System Architecture Chain Flow */}
                      <div className="mb-10 bg-[#F9F8F4] p-6 md:p-8 rounded-2xl border border-[#E6E4DD]">
                        <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#666] block mb-4 text-center">SYSTEM ARCHITECTURE FLOW</span>
                        <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4 text-xs md:text-sm font-semibold">
                          <div className="bg-white text-[#111] px-4 py-2.5 rounded-xl border border-[#E6E4DD] shadow-sm flex items-center gap-2">
                            <Database size={15} className="text-[#FF6A2A]" /> Property Database
                          </div>
                          <span className="text-[#FF6A2A] font-bold">→</span>
                          <div className="bg-white text-[#111] px-4 py-2.5 rounded-xl border border-[#E6E4DD] shadow-sm flex items-center gap-2">
                            <Sparkles size={15} className="text-[#FF6A2A]" /> AI Search (NLP)
                          </div>
                          <span className="text-[#FF6A2A] font-bold">→</span>
                          <div className="bg-white text-[#111] px-4 py-2.5 rounded-xl border border-[#E6E4DD] shadow-sm flex items-center gap-2">
                            <Bot size={15} className="text-[#FF6A2A]" /> LINE Bot
                          </div>
                          <span className="text-[#FF6A2A] font-bold">→</span>
                          <div className="bg-white text-[#111] px-4 py-2.5 rounded-xl border border-[#E6E4DD] shadow-sm flex items-center gap-2">
                            <Users size={15} className="text-[#FF6A2A]" /> CRM Pipeline
                          </div>
                          <span className="text-[#FF6A2A] font-bold">→</span>
                          <div className="bg-white text-[#111] px-4 py-2.5 rounded-xl border border-[#E6E4DD] shadow-sm flex items-center gap-2">
                            <Zap size={15} className="text-[#FF6A2A]" /> Auto-Marketing
                          </div>
                        </div>
                      </div>

                      {/* Screenshots */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                        <div className="rounded-2xl overflow-hidden border border-[#E6E4DD]">
                          <img src="/property-workflow.png" alt="n8n Automation Workflow" className="w-full h-48 object-cover object-top" />
                          <p className="text-[10px] uppercase tracking-widest text-[#888] text-center py-2.5 bg-[#F9F8F4]">{en ? 'n8n Automation Workflow' : 'n8n Workflow อัตโนมัติ'}</p>
                        </div>
                        <div className="rounded-2xl overflow-hidden border border-[#E6E4DD]">
                          <img src="/property-line-chat.png" alt="LINE Property Search Bot" className="w-full h-48 object-cover object-top" />
                          <p className="text-[10px] uppercase tracking-widest text-[#888] text-center py-2.5 bg-[#F9F8F4]">{en ? 'LINE Property Search Bot' : 'LINE Bot ค้นหาทรัพย์'}</p>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                        <div className="p-4 bg-[#F9F8F4] rounded-2xl border border-[#E6E4DD]">
                          <div className="flex items-center gap-3 mb-2">
                            <Database size={18} className="text-[#FF6A2A]" />
                            <h5 className="font-bold text-[#111] text-sm">{en ? 'NPA Property Database' : 'ฐานข้อมูลทรัพย์ NPA'}</h5>
                          </div>
                          <p className="text-xs text-[#666] font-light leading-relaxed">
                            {en ? 'Smart repository for NPA property listings synced in real-time.' : 'คลังข้อมูลทรัพย์รอการขาย (NPA) ครบถ้วน ซิงก์กับ LINE Bot และระบบโพสต์เรียลไทม์'}
                          </p>
                        </div>

                        <div className="p-4 bg-[#F9F8F4] rounded-2xl border border-[#E6E4DD]">
                          <div className="flex items-center gap-3 mb-2">
                            <Bot size={18} className="text-[#FF6A2A]" />
                            <h5 className="font-bold text-[#111] text-sm">LINE Search Bot</h5>
                          </div>
                          <p className="text-xs text-[#666] font-light leading-relaxed">
                            {en ? 'AI parses natural language queries and sends property cards.' : 'ลูกค้าพิมพ์ภาษาธรรมชาติ AI วิเคราะห์ความต้องการ ส่งการ์ดทรัพย์พร้อมรูปและราคาทันที'}
                          </p>
                        </div>

                        <div className="p-4 bg-[#F9F8F4] rounded-2xl border border-[#E6E4DD]">
                          <div className="flex items-center gap-3 mb-2">
                            <Users size={18} className="text-[#FF6A2A]" />
                            <h5 className="font-bold text-[#111] text-sm">CRM Pipeline</h5>
                          </div>
                          <p className="text-xs text-[#666] font-light leading-relaxed">
                            {en ? 'Auto-tracks customer journey from inquiry to close.' : 'ติดตามสถานะลูกค้าอัตโนมัติ: สอบถาม → นัดดูทรัพย์ → เจรจา → ปิดดีล'}
                          </p>
                        </div>

                        <div className="p-4 bg-[#F9F8F4] rounded-2xl border border-[#E6E4DD]">
                          <div className="flex items-center gap-3 mb-2">
                            <Sparkles size={18} className="text-[#FF6A2A]" />
                            <h5 className="font-bold text-[#111] text-sm">{en ? 'AI Auto-Marketing' : 'AI โพสต์อัตโนมัติ'}</h5>
                          </div>
                          <p className="text-xs text-[#666] font-light leading-relaxed">
                            {en ? 'n8n pulls images, adds watermarks, generates captions & posts to FB.' : 'n8n ดึงรูป ใส่ watermark สร้างแคปชั่น AI แล้วโพสต์ลง Facebook Groups ทันที'}
                          </p>
                        </div>
                      </div>

                      <div className="mt-10 border-t border-[#E6E4DD] pt-8">
                        <a href={lineLink} className="inline-block bg-[#FF6A2A] text-white rounded-full text-center w-full md:w-auto px-10 py-4 tracking-widest text-sm font-semibold hover:bg-[#e0591f] transition-colors shadow-lg shadow-[#FF6A2A]/20">
                          {en ? 'Consult & Build Your System' : 'ติดต่อปรึกษาและวางระบบกับเรา'}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-32 px-6 md:px-12 lg:px-16 bg-white border-t border-[#E6E4DD]">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-24 reveal">
            <div>
              <span className="text-xs uppercase tracking-[0.3em] font-semibold text-[#FF6A2A] block mb-2">PROVEN DELIVERABLES</span>
              <h2 className="text-4xl sm:text-5xl md:text-7xl font-display font-bold text-[#111]">PORTFOLIO<span className="text-[#FF6A2A]">.</span></h2>
            </div>
            <p className="hidden md:block text-[#666] tracking-widest uppercase text-sm font-medium">Selected Work</p>
          </div>

          {/* Category 1: AI Automation */}
          <div className="mb-24">
            <div className="flex items-center gap-4 mb-12 reveal">
              <span className="text-sm font-bold tracking-[0.2em] uppercase text-[#FF6A2A]">01</span>
              <h3 className="text-xl md:text-2xl font-display font-bold text-[#111]">AI Automation</h3>
              <div className="flex-1 h-[1px] bg-[#E6E4DD]"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Smart Property OS */}
              <div className="bg-[#111] text-white rounded-3xl reveal flex flex-col gap-0 overflow-hidden border border-[#222] shadow-lg">
                <div className="grid grid-cols-2 gap-0">
                  <img src="/property-workflow.png" alt="n8n Workflow" className="w-full h-44 object-cover object-top opacity-90" />
                  <img src="/property-line-chat.png" alt="LINE Property Bot" className="w-full h-44 object-cover object-top opacity-90" />
                </div>
                <div className="p-8 flex flex-col gap-4">
                  <div className="flex justify-between items-start">
                    <span className="text-xs tracking-widest uppercase text-[#888]">{en ? 'Real Estate Tech' : 'อสังหาริมทรัพย์'}</span>
                    <span className="bg-[#111] text-white border border-white/20 text-[10px] uppercase font-bold px-3 py-1 rounded-full tracking-wider">LAUNCHED</span>
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-2xl mb-2 text-white">Smart Property OS</h4>
                    <p className="text-[#aaa] font-light text-sm leading-relaxed">
                      {en
                        ? 'Full AI-powered property management system — from use-case definition to deployment of an automated NLP (ChatGPT) and LINE OA pipeline with n8n-driven Facebook auto-posting.'
                        : 'ระบบจัดการทรัพย์อสังหาริมทรัพย์ด้วย AI ครบวงจร ตั้งแต่ออกแบบ Use Case จนถึง Deploy ระบบ LINE Bot (NLP) และ n8n Auto-Post Facebook'}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-[10px] uppercase tracking-widest border border-[#333] text-[#FF6A2A] px-3 py-1 rounded-full">ChatGPT / NLP</span>
                    <span className="text-[10px] uppercase tracking-widest border border-[#333] text-[#aaa] px-3 py-1 rounded-full">LINE OA</span>
                    <span className="text-[10px] uppercase tracking-widest border border-[#333] text-[#aaa] px-3 py-1 rounded-full">n8n</span>
                  </div>
                </div>
              </div>

              {/* Pool Villa Rental Automation */}
              <div className="p-8 bg-[#F9F8F4] border border-[#E6E4DD] rounded-3xl reveal reveal-delay-1 flex flex-col gap-6 hover:border-[#FF6A2A] transition-colors shadow-sm">
                <div className="flex justify-between items-start">
                  <span className="text-xs tracking-widest uppercase text-[#888]">Hospitality</span>
                  <span className="bg-[#FFE3D2] text-[#FF6A2A] text-[10px] uppercase font-bold px-3 py-1 rounded-full tracking-wider border border-[#FF6A2A]/30">IN PROGRESS</span>
                </div>
                <div>
                  <h4 className="font-display font-bold text-2xl mb-2 text-[#111]">Pool Villa Rental Automation</h4>
                  <p className="text-[#666] font-light text-sm leading-relaxed">
                    Scoping Phase 2 expansion: automating booking flows, guest communication, and property ops for a Pool Villa portfolio. Building end-to-end automation pipeline for seamless guest experience and operational efficiency.
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 mt-auto">
                  <span className="text-[10px] uppercase tracking-widest border border-[#E6E4DD] text-[#FF6A2A] px-3 py-1 rounded-full bg-white">n8n</span>
                  <span className="text-[10px] uppercase tracking-widest border border-[#E6E4DD] text-[#888] px-3 py-1 rounded-full bg-white">Zaapi</span>
                  <span className="text-[10px] uppercase tracking-widest border border-[#E6E4DD] text-[#888] px-3 py-1 rounded-full bg-white">LINE OA</span>
                </div>
              </div>
            </div>
          </div>

          {/* Category 2: WebApp & Website */}
          <div className="mb-24">
            <div className="flex items-center gap-4 mb-12 reveal">
              <span className="text-sm font-bold tracking-[0.2em] uppercase text-[#FF6A2A]">02</span>
              <h3 className="text-xl md:text-2xl font-display font-bold text-[#111]">WebApp &amp; Website</h3>
              <div className="flex-1 h-[1px] bg-[#E6E4DD]"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Retirement Planning Web App */}
              <div className="bg-white border border-[#E6E4DD] rounded-3xl reveal flex flex-col overflow-hidden hover:border-[#FF6A2A] transition-all shadow-sm">
                <div className="hover-zoom overflow-hidden">
                  <img src="/retirement-app.png" alt="Retirement Planning Web App" className="w-full h-48 object-cover object-top opacity-95" />
                </div>
                <div className="p-6 flex flex-col gap-4 flex-1">
                  <div className="flex-1">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-xs tracking-widest uppercase text-[#888]">Bestie Investing</span>
                      <span className="bg-[#111] text-white text-[9px] uppercase font-bold px-2.5 py-0.5 rounded-full">LAUNCHED</span>
                    </div>
                    <h4 className="font-display font-bold text-xl mb-2 text-[#111]">Retirement Planning Web App</h4>
                    <p className="text-[#666] font-light text-xs leading-relaxed">
                      {en
                        ? 'Consumer-facing retirement calculator — complex financial planning logic turned into an interactive tool for Thai retail investors.'
                        : 'เว็บแอปวางแผนเกษียณสำหรับนักลงทุนรายย่อย แปลง Logic ทางการเงินที่ซับซ้อนให้เป็นเครื่องมือที่ใช้งานง่าย'}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-[10px] uppercase tracking-widest border border-[#E6E4DD] text-[#888] px-2 py-0.5 rounded-full">React / Vite</span>
                    <span className="text-[10px] uppercase tracking-widest border border-[#E6E4DD] text-[#888] px-2 py-0.5 rounded-full">Tailwind</span>
                  </div>
                  <a href="https://retirement-planner-pied.vercel.app/" target="_blank" rel="noreferrer" className="text-xs uppercase tracking-widest border-b border-[#111] pb-1 font-medium hover:border-[#FF6A2A] hover:text-[#FF6A2A] transition-colors inline-flex items-center gap-2 w-fit">
                    {en ? 'View Live' : 'เข้าใช้งาน'} <ArrowRight size={12} />
                  </a>
                </div>
              </div>

              {/* Bestie Bot US */}
              <div className="bg-[#111] text-white rounded-3xl reveal reveal-delay-1 flex flex-col overflow-hidden border border-[#222] shadow-md">
                <div className="grid grid-cols-2 gap-0">
                  <img src="/bestie-bot-features.png" alt="Bestie Bot Features" className="w-full h-44 object-cover object-top opacity-95" />
                  <img src="/bestie-bot.png" alt="Bestie Bot Analysis" className="w-full h-44 object-cover object-top opacity-95" />
                </div>
                <div className="p-6 flex flex-col gap-4 flex-1">
                  <div className="flex-1">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-xs tracking-widest uppercase text-[#888]">Bestie Investing</span>
                      <span className="bg-white/10 text-white text-[9px] uppercase font-bold px-2.5 py-0.5 rounded-full">LAUNCHED</span>
                    </div>
                    <h4 className="font-display font-bold text-xl mb-2 text-white">Bestie Bot US</h4>
                    <p className="text-[#aaa] font-light text-xs leading-relaxed">
                      {en
                        ? 'LINE chatbot with 11 AI-powered features — real-time US stocks, crypto, gold, ETF portfolio & market pulse for retail investors.'
                        : 'LINE Bot 11 ฟีเจอร์ AI — หุ้น US, คริปโต, ทองคำโลก, ETF, Market Pulse และราคาทองไทย แบบ real-time'}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-1">
                    <span className="text-[10px] uppercase tracking-widest border border-[#333] text-[#FF6A2A] px-2 py-0.5 rounded-full">LINE Bot</span>
                    <span className="text-[10px] uppercase tracking-widest border border-[#333] text-[#aaa] px-2 py-0.5 rounded-full">FinTech</span>
                  </div>
                  <a href="https://line.me/R/ti/p/@801uhbht" target="_blank" rel="noreferrer" className="text-xs uppercase tracking-widest border-b border-white/40 hover:border-[#FF6A2A] hover:text-[#FF6A2A] pb-1 font-medium inline-flex items-center gap-2 w-fit transition-colors">
                    {en ? 'Try on LINE' : 'ลองใช้งาน LINE Bot'} <ArrowRight size={12} />
                  </a>
                </div>
              </div>

              {/* RetroLens AI */}
              <div className="rounded-3xl reveal reveal-delay-2 overflow-hidden border border-[#E6E4DD] hover:border-[#FF6A2A] transition-all flex flex-col bg-white shadow-sm">
                <div className="hover-zoom overflow-hidden">
                  <img src="/retrolens.png" alt="RetroLens App" className="w-full h-48 object-cover opacity-90" />
                </div>
                <div className="p-6 flex flex-col gap-4 flex-1">
                  <div className="flex-1">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-xs tracking-widest uppercase text-[#888]">Experimental</span>
                      <span className="bg-[#FFF1E6] text-[#FF6A2A] border border-[#FFE3D2] text-[9px] uppercase font-bold px-2.5 py-0.5 rounded-full">OPEN SOURCE</span>
                    </div>
                    <h4 className="font-display font-bold text-xl mb-2 text-[#111]">RetroLens AI</h4>
                    <p className="text-[#666] font-light text-xs leading-relaxed">{en ? 'Web app that transforms photos into film-camera styles using AI' : 'เว็บแอปเปลี่ยนภาพถ่ายเป็นสไตล์กล้องฟิล์มด้วย AI'}</p>
                  </div>
                  <a href="https://retrolens-ai-app.web.app" target="_blank" rel="noreferrer" className="text-xs uppercase tracking-widest border-b border-[#111] pb-1 font-medium hover:border-[#FF6A2A] hover:text-[#FF6A2A] transition-colors inline-flex items-center gap-2 w-fit">
                    {en ? 'View Live' : 'ดูโปรเจกต์'} <ArrowRight size={12} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Category 3: Brand Collaborations */}
          <div>
            <div className="flex items-center gap-4 mb-12 reveal">
              <span className="text-sm font-bold tracking-[0.2em] uppercase text-[#FF6A2A]">03</span>
              <h3 className="text-xl md:text-2xl font-display font-bold text-[#111]">Brand Collaborations</h3>
              <div className="flex-1 h-[1px] bg-[#E6E4DD]"></div>
            </div>

            <div className="p-10 md:p-14 bg-[#F9F8F4] border border-[#E6E4DD] rounded-3xl reveal hover:border-[#FF6A2A] transition-colors shadow-sm">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4 border-b border-[#E6E4DD] pb-6">
                <div>
                  <span className="text-xs uppercase tracking-widest text-[#FF6A2A] font-bold block mb-1">TRUSTED BY TECH &amp; BUSINESS BRANDS</span>
                  <p className="text-[#666] text-xs uppercase tracking-widest">{en ? 'Sponsored Content • Technology & Finance' : 'Sponsored Content • เทคโนโลยีและการเงิน'}</p>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {['Futureskill', 'Peak Account', 'Aerogram', 'Khui AI'].map((brand) => (
                  <div key={brand} className="flex flex-col gap-2 p-4 bg-white rounded-2xl border border-[#E6E4DD] hover:border-[#FF6A2A] transition-colors">
                    <div className="h-[2px] w-8 bg-[#FF6A2A]"></div>
                    <span className="font-display font-bold text-lg md:text-xl text-[#111]">{brand}</span>
                  </div>
                ))}
              </div>
              <p className="mt-8 text-[#666] font-light text-sm leading-relaxed max-w-3xl">
                {en
                  ? 'Produced brand collaboration content for leading Thai tech and finance platforms — scripted, filmed, and delivered sponsored segments authentically aligned to each brand\'s guidelines and audience.'
                  : 'ผลิตคอนเทนต์ Brand Collaboration ให้กับแพลตฟอร์มเทคโนโลยีและการเงินชั้นนำของไทย วางสคริปต์ ถ่ายทำ และส่งมอบ Sponsored Segment ที่สอดคล้องกับแนวทางของแบรนด์'}
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Decorative Signature Motion Typography Marquee */}
      <section className="relative h-[45vh] min-h-[320px] flex items-center justify-center overflow-hidden bg-[#111] text-white">
        <div className="absolute inset-0 z-0">
          <img
            src="/bg-automation.jpg"
            alt="Automation Background"
            className="w-full h-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        <div className="relative z-10 w-full overflow-hidden whitespace-nowrap opacity-20 hover:opacity-40 transition-opacity">
          <div className="flex animate-marquee-slow">
            <h2 className="text-[9vw] font-display font-bold tracking-widest uppercase pr-16 text-transparent" style={{ WebkitTextStroke: '1px #FF6A2A' }}>
              AUTOMATE YOUR BUSINESS • MODGOSCALE •
            </h2>
            <h2 className="text-[9vw] font-display font-bold tracking-widest uppercase pr-16 text-transparent" style={{ WebkitTextStroke: '1px #FF6A2A' }}>
              AUTOMATE YOUR BUSINESS • MODGOSCALE •
            </h2>
          </div>
        </div>

        <div className="absolute z-20 text-center pointer-events-none px-4">
          <p className="text-xs uppercase tracking-[0.3em] text-[#FF6A2A] font-bold mb-2">SYSTEMATIC SCALING</p>
          <h3 className="text-3xl md:text-5xl font-display font-bold text-white tracking-tight">AUTOMATE YOUR BUSINESS</h3>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-28 px-6 md:px-12 lg:px-16 bg-[#F9F8F4] border-t border-[#E6E4DD] relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 reveal">
            <span className="text-xs uppercase tracking-[0.3em] text-[#FF6A2A] font-bold block mb-2">CLIENT FEEDBACK</span>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-[#111]">VOICES OF SUCCESS</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* T1 */}
            <div className="bg-white p-8 md:p-10 border rounded-3xl border-[#E6E4DD] hover:border-[#FF6A2A] transition-all reveal relative shadow-sm">
              <span className="absolute top-6 right-8 text-6xl font-serif text-[#FF6A2A]/15 font-bold select-none">“</span>
              <div className="w-16 h-16 rounded-full overflow-hidden mb-6 border-2 border-[#FFE3D2]">
                <img src="/nisa.png" alt="คุณนิสา" className="w-full h-full object-cover" />
              </div>
              <p className="text-[#555] font-light leading-relaxed text-sm mb-8 relative z-10">"งานบัญชีที่เคยทำหลักชั่วโมง ตอนนี้กริ๊กเดียวเสร็จด้วย App Script ใช้เวลาไปบริหารภาพรวมธุรกิจได้เยอะมากเลยค่ะ"</p>
              <h4 className="font-kanit font-bold text-base text-[#111]">คุณนิสา</h4>
              <p className="text-xs text-[#FF6A2A] tracking-widest uppercase font-medium">Accounting</p>
            </div>
            {/* T2 */}
            <div className="bg-white p-8 md:p-10 border rounded-3xl border-[#E6E4DD] hover:border-[#FF6A2A] transition-all reveal reveal-delay-1 relative shadow-sm">
              <span className="absolute top-6 right-8 text-6xl font-serif text-[#FF6A2A]/15 font-bold select-none">“</span>
              <div className="w-16 h-16 rounded-full overflow-hidden mb-6 border-2 border-[#FFE3D2]">
                <img src="/gib.png" alt="คุณกิ๊บ" className="w-full h-full object-cover" />
              </div>
              <p className="text-[#555] font-light leading-relaxed text-sm mb-8 relative z-10">"พอร์ตอสังหาสวยขึ้นเยอะมาก ระบบ AI Vibe Coding ช่วยให้การทำคอนเทนต์เป็นเรื่องง่ายและลูกค้าทักไวขึ้นชัดเจน"</p>
              <h4 className="font-kanit font-bold text-base text-[#111]">คุณกิ๊บ</h4>
              <p className="text-xs text-[#FF6A2A] tracking-widest uppercase font-medium">Real Estate</p>
            </div>
            {/* T3 */}
            <div className="bg-white p-8 md:p-10 border rounded-3xl border-[#E6E4DD] hover:border-[#FF6A2A] transition-all reveal reveal-delay-2 relative shadow-sm">
              <span className="absolute top-6 right-8 text-6xl font-serif text-[#FF6A2A]/15 font-bold select-none">“</span>
              <div className="w-16 h-16 rounded-full overflow-hidden mb-6 border-2 border-[#FFE3D2]">
                <img src="/pat.png" alt="คุณพัต" className="w-full h-full object-cover" />
              </div>
              <p className="text-[#555] font-light leading-relaxed text-sm mb-8 relative z-10">"ระบบ Automate ตอบโจทย์การ Scale ธุรกิจมากๆ ช่วยลดงานจุกจิก และคุมคุณภาพได้ดีโดยไม่ต้องจ้างพนักงานเพิ่มเยอะ"</p>
              <h4 className="font-kanit font-bold text-base text-[#111]">คุณพัต</h4>
              <p className="text-xs text-[#FF6A2A] tracking-widest uppercase font-medium">Business Owner</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section (Strong Visual Moment - #111111 Dark Theme with Signature Orange) */}
      <section id="contact" className="py-28 px-6 md:px-12 lg:px-16 bg-[#111111] text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end border-b border-[#222] pb-20 reveal gap-10">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] font-bold text-[#FF6A2A] block mb-4">START YOUR AI AUTOMATION JOURNEY</span>
            <p className="text-[#aaa] uppercase tracking-[0.2em] text-sm mb-3 font-medium">Ready to build?</p>
            <h2 className="text-6xl sm:text-7xl md:text-8xl lg:text-[7.5rem] font-display font-bold leading-none text-white tracking-tight">
              LET'S<br />
              <span className="text-[#FF6A2A]">SCALE.</span>
            </h2>
          </div>

          <div className="flex flex-col space-y-6 text-left md:text-right w-full md:w-auto">
            <a href={lineLink} target="_blank" rel="noreferrer" className="bg-[#FF6A2A] text-white text-lg font-semibold px-10 py-5 rounded-full hover:bg-[#e0591f] transition-all shadow-xl shadow-[#FF6A2A]/25 inline-flex items-center gap-3 justify-center">
              <span>Contact via LINE</span>
              <ArrowRight size={20} />
            </a>
            <p className="text-[#aaa] font-light text-base">Bangkok, Thailand</p>
            <div className="pt-2 flex justify-start md:justify-end space-x-6">
              <a href="mailto:modty.project@yahoo.com" className="text-white font-medium hover:text-[#FF6A2A] uppercase tracking-wider text-xs transition-colors">EMAIL</a>
              <span className="text-[#aaa] font-medium uppercase tracking-wider text-xs">LINE ID: @237dhtqp</span>
            </div>
          </div>
        </div>

        {/* Massive Marquee Logo */}
        <div className="mt-12 overflow-hidden reveal relative opacity-10">
          <div className="flex whitespace-nowrap animate-marquee">
            <h1 className="text-[14vw] font-display font-bold leading-none text-white select-none tracking-tight pr-12">modgoscale.</h1>
            <h1 className="text-[14vw] font-display font-bold leading-none text-white select-none tracking-tight pr-12">modgoscale.</h1>
            <h1 className="text-[14vw] font-display font-bold leading-none text-white select-none tracking-tight pr-12">modgoscale.</h1>
          </div>
        </div>

        <div className="mt-8 flex flex-col md:flex-row justify-between items-center text-xs text-[#888] tracking-widest uppercase font-medium">
          <p>&copy; {new Date().getFullYear()} MODGOSCALE. All rights reserved.</p>
          <p className="mt-4 md:mt-0 text-[#FF6A2A]">ARCHITECTED IN BANGKOK</p>
        </div>
      </section>

      {/* Floating LINE CTA Button */}
      <a href={lineLink} target="_blank" rel="noreferrer" className="fixed bottom-8 right-8 z-[100] bg-[#FF6A2A] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform duration-300 hover-target border border-white/20 shadow-[#FF6A2A]/30">
        <MessageCircle size={24} />
      </a>
    </div>
  );
};

export default App;
