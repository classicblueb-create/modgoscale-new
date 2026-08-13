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
        <div className="hidden md:flex space-x-12 text-sm tracking-widest uppercase font-medium">
          <button onClick={() => scrollToSection('about')} className="text-[#666] hover:text-[#FF6A2A] transition-colors duration-300">Concept</button>
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
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-24 reveal">
            <div>
              <span className="text-xs uppercase tracking-[0.3em] font-semibold text-[#FF6A2A] block mb-2">OUR SERVICES &amp; SOLUTIONS</span>
              <h2 className="text-4xl sm:text-5xl md:text-7xl font-display font-bold text-[#111]">EXPERTISE<span className="text-[#FF6A2A]">.</span></h2>
            </div>
            <p className="hidden md:block text-[#666] tracking-widest uppercase text-sm font-medium">Our Disciplines</p>
          </div>

          <div className="space-y-0 border-t border-[#E6E4DD]">

            {/* Discipline 01: Education (Featured Product) */}
            <div className="group relative py-12 md:py-16 border-b border-[#E6E4DD] hover:border-[#111] transition-colors duration-500 cursor-pointer hover-target reveal">
              <div className="flex flex-col md:flex-row justify-between items-start">
                <div className="flex items-start space-x-6 md:space-x-12 z-10 w-full lg:w-4/5">
                  <span className="text-[#FF6A2A] font-display text-2xl md:text-4xl font-bold">01</span>
                  <div className="w-full">
                    <h3 className="text-3xl md:text-5xl font-display font-semibold text-[#111] lg:group-hover:translate-x-3 transition-transform duration-500">Education</h3>
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

            {/* Discipline 02: Short Courses & Workshops */}
            <div className="group relative py-12 md:py-16 border-b border-[#E6E4DD] hover:border-[#111] transition-colors duration-500 cursor-pointer hover-target reveal">
              <div className="flex flex-col md:flex-row justify-between items-start">
                <div className="flex items-start space-x-6 md:space-x-12 z-10 w-full lg:w-4/5">
                  <span className="text-[#FF6A2A] font-display text-2xl md:text-4xl font-bold">02</span>
                  <div className="w-full">
                    <h3 className="text-3xl md:text-5xl font-display font-semibold text-[#111] lg:group-hover:translate-x-3 transition-transform duration-500">Short Courses &amp; Workshops</h3>
                    <p className="mt-4 text-[#666] text-sm md:text-base font-light lg:group-hover:translate-x-3 transition-transform duration-500 delay-75 mb-8">
                      {en
                        ? 'Focused short courses and workshops for targeted skill-ups — solve a specific problem or master a new AI tool fast.'
                        : 'คอร์สระยะสั้นและ Workshop เฉพาะทาง สำหรับผู้ที่ต้องการแก้ปัญหาเฉพาะจุด หรืออัปสกิลเครื่องมือ AI ใหม่ๆ อย่างรวดเร็ว'}
                    </p>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 w-full mt-8 reveal">
                      {/* Workshop 1 */}
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

                      {/* Workshop 2 */}
                      <div className="p-6 md:p-8 bg-[#111] text-white border border-[#333] rounded-[20px] flex flex-col justify-between hover:border-[#FF6A2A] hover:-translate-y-1 transition-all shadow-md">
                        <div>
                          <div className="text-xs uppercase tracking-widest text-[#FF6A2A] mb-2 font-bold">CONTENT CREATOR</div>
                          <h4 className="font-display font-bold text-2xl mb-2 text-white">AI Video &amp; Content</h4>
                          <p className="text-sm font-medium text-[#ccc] mb-4">{en ? 'Pro-level review videos powered by AI' : 'ปั้นคลิปรีวิวระดับโปร ด้วย AI'}</p>
                          <div className="text-xs font-light text-[#ccc] mb-6 bg-white/5 p-3.5 border-l-2 border-[#FF6A2A] rounded-r-lg leading-relaxed">
                            <strong className="font-medium text-white">{en ? 'For:' : 'เหมาะสำหรับ:'}</strong> {en ? 'Content creators, reviewers & affiliates who want high-quality output.' : 'Content Creator, นักรีวิว, สาย Affiliate ที่ต้องการงานคุณภาพสูง'}
                          </div>
                          <ul className="space-y-3 mb-8">
                            <li className="flex items-start gap-2.5 text-sm font-light text-[#ccc]">
                              <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#FF6A2A] flex-shrink-0"></div>
                              <span><strong className="font-medium text-white">Next-Gen Tools:</strong> {en ? 'Sora, Grok, Flow and more' : 'สอนใช้ Sora, Grok, Flow'}</span>
                            </li>
                            <li className="flex items-start gap-2.5 text-sm font-light text-[#ccc]">
                              <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#FF6A2A] flex-shrink-0"></div>
                              <span><strong className="font-medium text-white">Affiliate Workflow:</strong> {en ? 'Make review videos that actually convert' : 'ทำคลิปรีวิวให้ขายได้จริง'}</span>
                            </li>
                            <li className="flex items-start gap-2.5 text-sm font-light text-[#ccc]">
                              <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#FF6A2A] flex-shrink-0"></div>
                              <span><strong className="font-medium text-white">Consistency:</strong> {en ? 'Prompt planning for ongoing content' : 'วางแผน Prompt ให้งานต่อเนื่อง'}</span>
                            </li>
                          </ul>
                        </div>
                        <div>
                          <p className="text-xs text-[#888] line-through mb-1">{en ? 'Regular 8,900 THB' : 'ราคาปกติ 8,900 บาท'}</p>
                          <div className="font-bold text-3xl text-[#FF6A2A] mb-2">2,990 <span className="text-base text-white font-normal">THB</span></div>
                          <p className="text-[10px] tracking-widest text-[#888] uppercase mb-6">Private / Online</p>
                          <a href={lineLink} className="inline-block bg-[#FF6A2A] text-white rounded-full text-center w-full py-3 uppercase tracking-widest text-sm font-medium hover:bg-[#e0591f] transition-colors">{en ? 'Enquire Now' : 'สอบถามรายละเอียด'}</a>
                        </div>
                      </div>

                      {/* Workshop 3 */}
                      <div className="p-6 md:p-8 bg-white border border-[#E6E4DD] rounded-[20px] flex flex-col justify-between hover:border-[#FF6A2A] hover:-translate-y-1 transition-all shadow-sm">
                        <div>
                          <div className="text-xs uppercase tracking-widest text-[#FF6A2A] mb-2 font-bold">POPULAR FOR WORK</div>
                          <h4 className="font-display font-bold text-2xl mb-2 text-[#111]">Google Automation</h4>
                          <p className="text-sm font-medium text-[#333] mb-4">{en ? 'Build simple web tools with Gemini + Apps Script' : 'สร้างเว็บง่ายๆ ด้วย Gemini + Apps Script'}</p>
                          <div className="text-xs font-light text-[#666] mb-6 bg-[#F9F8F4] p-3.5 border-l-2 border-[#FF6A2A] rounded-r-lg leading-relaxed">
                            <strong className="font-medium text-[#111]">{en ? 'For:' : 'เหมาะสำหรับ:'}</strong> {en ? 'HR, Finance, Procurement & SMEs who live in Google Sheets.' : 'HR, บัญชี, จัดซื้อ, SME ที่ใช้ Google Sheet เป็นหลัก'}
                          </div>
                          <ul className="space-y-3 mb-8">
                            <li className="flex items-start gap-2.5 text-sm font-light text-[#555]">
                              <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#FF6A2A] flex-shrink-0"></div>
                              <span><strong className="font-medium text-[#111]">Gemini Coding:</strong> {en ? 'AI writes your code for you' : 'ให้ AI ช่วยเขียน Code'}</span>
                            </li>
                            <li className="flex items-start gap-2.5 text-sm font-light text-[#555]">
                              <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#FF6A2A] flex-shrink-0"></div>
                              <span><strong className="font-medium text-[#111]">Automation:</strong> {en ? 'LINE alerts, auto-email & more' : 'แจ้งเตือน LINE, ส่งเมล Auto'}</span>
                            </li>
                            <li className="flex items-start gap-2.5 text-sm font-light text-[#555]">
                              <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#FF6A2A] flex-shrink-0"></div>
                              <span><strong className="font-medium text-[#111]">Free Web App:</strong> {en ? 'Deploy with no hosting cost' : 'สร้างเว็บใช้ฟรี ไม่ต้องเช่า Host'}</span>
                            </li>
                          </ul>
                        </div>
                        <div>
                          <p className="text-xs text-[#888] line-through mb-1">{en ? 'Regular 8,900 THB' : 'ราคาปกติ 8,900 บาท'}</p>
                          <div className="font-bold text-3xl text-[#111] mb-2">2,990 <span className="text-base font-normal">THB</span></div>
                          <p className="text-[10px] tracking-widest text-[#888] uppercase mb-6">Private / Online</p>
                          <a href={lineLink} className="inline-block border border-[#111] rounded-full text-center w-full py-3 uppercase tracking-widest text-sm font-medium hover:bg-[#111] hover:text-white transition-colors">{en ? 'Book a Session' : 'จองเวลาเรียน'}</a>
                        </div>
                      </div>

                      {/* Workshop 4 */}
                      <div className="p-6 md:p-8 bg-[#111] text-white border border-[#333] rounded-[20px] flex flex-col justify-between hover:border-[#FF6A2A] hover:-translate-y-1 transition-all shadow-md lg:col-span-3">
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">
                          <div className="lg:col-span-2">
                            <div className="text-xs uppercase tracking-widest text-[#FF6A2A] mb-2 font-bold">PASSIVE INCOME</div>
                            <h4 className="font-display font-bold text-2xl md:text-3xl mb-2 text-white">E-Commerce Digital Product Store</h4>
                            <p className="text-sm font-medium text-[#ccc] mb-4">{en ? 'Automated digital product store setup' : 'ระบบร้านค้าสินค้าดิจิตอลอัตโนมัติ'}</p>
                            <p className="text-xs font-light text-[#aaa] leading-relaxed mb-6">
                              {en ? 'Build a passive income shortcut selling digital products (e-books, courses, templates) with automated payment and instant delivery.' : 'สร้างทางลัดสู่รายได้ Passive Income ด้วยระบบขาย Digital Product (E-book, คอร์ส, Template) ที่จัดการง่ายและส่งของทันที'}
                            </p>
                            <div className="flex flex-wrap gap-4 text-xs font-light text-[#ccc]">
                              <span className="flex items-center gap-2"><CheckCircle size={14} className="text-[#FF6A2A]" /> {en ? 'Instant product delivery' : 'ส่งสินค้าอัตโนมัติทันที'}</span>
                              <span className="flex items-center gap-2"><CheckCircle size={14} className="text-[#FF6A2A]" /> {en ? 'Conversion-focused UI' : 'ออกแบบเน้นยอดขาย'}</span>
                              <span className="flex items-center gap-2"><CheckCircle size={14} className="text-[#FF6A2A]" /> {en ? 'Sales Dashboard' : 'สรุปยอดขายดูง่าย'}</span>
                            </div>
                          </div>
                          <div className="bg-white/5 p-6 rounded-2xl border border-white/10 flex flex-col justify-between">
                            <p className="text-xs text-[#888] line-through mb-1">{en ? 'Regular 5,900 THB' : 'ราคาปกติ 5,900 บาท'}</p>
                            <div className="font-bold text-3xl text-[#FF6A2A] mb-2">2,990 <span className="text-base text-white font-normal">THB</span></div>
                            <p className="text-[10px] tracking-widest text-[#888] uppercase mb-4">Private / Online</p>
                            <a href={lineLink} className="inline-block bg-[#FF6A2A] text-white rounded-full text-center w-full py-3 uppercase tracking-widest text-sm font-medium hover:bg-[#e0591f] transition-colors">{en ? 'Book a Session' : 'จองเวลาเรียน'}</a>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Discipline 03: Consultation */}
            <div className="group relative py-12 md:py-16 border-b border-[#E6E4DD] hover:border-[#111] transition-colors duration-500 cursor-pointer hover-target reveal">
              <div className="flex flex-col md:flex-row justify-between items-start">
                <div className="flex items-start space-x-6 md:space-x-12 z-10 w-full lg:w-4/5">
                  <span className="text-[#FF6A2A] font-display text-2xl md:text-4xl font-bold">03</span>
                  <div className="w-full">
                    <h3 className="text-3xl md:text-5xl font-display font-semibold text-[#111] lg:group-hover:translate-x-3 transition-transform duration-500">Consultation</h3>
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

            {/* Discipline 04: Development */}
            <div className="group relative py-12 md:py-16 border-b border-[#E6E4DD] hover:border-[#111] transition-colors duration-500 cursor-pointer hover-target reveal">
              <div className="flex flex-col md:flex-row justify-between items-start">
                <div className="flex items-start space-x-6 md:space-x-12 z-10 w-full lg:w-4/5">
                  <span className="text-[#FF6A2A] font-display text-2xl md:text-4xl font-bold">04</span>
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

            {/* Discipline 05: AI Automation Case Study (Smart Property OS Visual System) */}
            <div className="group relative py-12 md:py-16 border-b border-[#E6E4DD] hover:border-[#111] transition-colors duration-500 cursor-pointer hover-target reveal">
              <div className="flex flex-col md:flex-row justify-between items-start">
                <div className="flex items-start space-x-6 md:space-x-12 z-10 w-full md:w-4/5">
                  <span className="text-[#FF6A2A] font-display text-2xl md:text-4xl font-bold">05</span>
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
