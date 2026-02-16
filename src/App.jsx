import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import {
  Code,
  Database,
  Zap,
  Users,
  MessageCircle,
  CheckCircle,
  ArrowRight,
  Menu,
  X,
  Cpu,
  Layout,
  TrendingUp,
  Server,
  BookOpen,
  Monitor,
  Rocket,
  Palette,
  Video,
  Target,
  User,
  Bot,
  Clapperboard,
  Sparkles,
  Sheet,
  Mail,
  Clock
} from 'lucide-react';

// Reusable scroll-triggered section wrapper
const Section = ({ children, className, id, delay = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.section
      ref={ref}
      id={id}
      className={className}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </motion.section>
  );
};

// Reusable staggered container
const StaggerContainer = ({ children, className, staggerDelay = 0.12 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: staggerDelay } }
      }}
    >
      {children}
    </motion.div>
  );
};

// Reusable stagger child
const StaggerItem = ({ children, className, ...props }) => (
  <motion.div
    className={className}
    variants={{
      hidden: { opacity: 0, y: 40, scale: 0.95 },
      visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
    }}
    {...props}
  >
    {children}
  </motion.div>
);

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Link LINE ใหม่
  const lineLink = "https://lin.ee/wWV3LYO";

  // Smooth scroll function
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 selection:bg-purple-500 selection:text-white" style={{ fontFamily: '"Kanit", sans-serif' }}>

      {/* Import Google Font Kanit */}
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Kanit:wght@300;400;500;600;700&display=swap');
          body { font-family: 'Kanit', sans-serif; }
        `}
      </style>

      {/* Navigation */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="fixed w-full z-50 transition-all duration-300 bg-white/70 backdrop-blur-xl border-b border-white/20 shadow-[0_8px_32px_0_rgba(31,38,135,0.07)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            {/* Logo MGS Minimal */}
            <div className="flex items-center gap-3 cursor-pointer group" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <div className="bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 p-0.5 rounded-lg flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                <div className="bg-white/10 backdrop-blur-sm px-2 py-1 rounded-[6px]">
                  <span className="font-bold text-white text-sm tracking-widest">MGS</span>
                </div>
              </div>
              <span className="text-xl font-extrabold tracking-tight bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent group-hover:opacity-80 transition-opacity">
                ModGoScale
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8 items-center">
              <button onClick={() => scrollToSection('about')} className="text-slate-600 hover:text-indigo-600 transition-colors font-medium relative group">
                เกี่ยวกับเรา
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-600 to-purple-600 transition-all duration-300 group-hover:w-full"></span>
              </button>
              <button onClick={() => scrollToSection('course')} className="text-slate-600 hover:text-indigo-600 transition-colors font-medium relative group">
                คอร์สเรียน
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-600 to-purple-600 transition-all duration-300 group-hover:w-full"></span>
              </button>
              <button onClick={() => scrollToSection('consult')} className="text-slate-600 hover:text-indigo-600 transition-colors font-medium relative group">
                ที่ปรึกษา
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-600 to-purple-600 transition-all duration-300 group-hover:w-full"></span>
              </button>
              <button onClick={() => scrollToSection('development')} className="text-slate-600 hover:text-indigo-600 transition-colors font-medium relative group">
                รับทำเว็บไซต์
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-600 to-purple-600 transition-all duration-300 group-hover:w-full"></span>
              </button>
              <button onClick={() => scrollToSection('portfolio')} className="text-slate-600 hover:text-indigo-600 transition-colors font-medium relative group">
                ผลงาน
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-600 to-purple-600 transition-all duration-300 group-hover:w-full"></span>
              </button>
              <a
                href={lineLink}
                target="_blank"
                rel="noreferrer"
                className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 hover:shadow-indigo-200/50 hover:shadow-2xl hover:-translate-y-0.5 text-white px-6 py-2.5 rounded-full font-bold transition-all duration-300 flex items-center gap-2"
              >
                <div className="bg-white/20 p-1 rounded-full">
                  <MessageCircle size={16} />
                </div>
                เริ่มเรียนเลย!
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button onClick={toggleMenu} className="text-slate-600 hover:text-purple-600">
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="md:hidden bg-white border-b border-slate-200 overflow-hidden"
            >
              <div className="px-4 pt-2 pb-6 space-y-2">
                {[{ label: 'เกี่ยวกับเรา', id: 'about' }, { label: 'คอร์สเรียน', id: 'course' }, { label: 'ที่ปรึกษา', id: 'consult' }, { label: 'รับทำเว็บไซต์', id: 'development' }, { label: 'ผลงาน', id: 'portfolio' }].map((item, i) => (
                  <motion.button
                    key={item.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * i, duration: 0.3 }}
                    onClick={() => scrollToSection(item.id)}
                    className="block w-full text-left px-3 py-3 text-slate-600 hover:bg-purple-50 hover:text-purple-700 rounded-md font-medium"
                  >
                    {item.label}
                  </motion.button>
                ))}
                <motion.a
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.25, duration: 0.3 }}
                  href={lineLink}
                  target="_blank"
                  rel="noreferrer"
                  className="block w-full text-center mt-4 bg-gradient-to-r from-purple-600 to-pink-500 text-white px-3 py-3 rounded-md font-medium shadow-md"
                >
                  ติดต่อ LINE: AI VibeCoding
                </motion.a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Hero Section */}
      <section className="pt-40 pb-24 px-4 relative overflow-hidden bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-indigo-50 via-white to-white">
        {/* Animated Background Blobs */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-indigo-200/30 rounded-full blur-[120px] -z-10 animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-[800px] h-[500px] bg-pink-200/20 rounded-full blur-[120px] -z-10 animate-blob"></div>
        <div className="absolute top-1/4 -left-20 w-[600px] h-[400px] bg-purple-200/20 rounded-full blur-[100px] -z-10 animate-blob animation-delay-2000"></div>

        <div className="max-w-6xl mx-auto text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50/50 backdrop-blur-md border border-indigo-100 shadow-sm mb-10 transition-transform hover:scale-105"
          >
            <Rocket size={16} className="text-indigo-600 animate-bounce" />
            <span className="text-sm text-indigo-900 font-semibold tracking-wide">YOUR PARTNER IN TECH & BUSINESS GROWTH</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight mb-8 leading-[1.1] text-slate-900"
          >
            เปลี่ยนธุรกิจธรรมดาให้ <span className="bg-gradient-to-r from-indigo-600 via-purple-600 via-pink-500 to-orange-500 bg-clip-text text-transparent drop-shadow-2xl">Scale ได้ด้วย AI</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="text-xl md:text-2xl text-slate-600 mb-12 max-w-4xl mx-auto leading-relaxed font-light"
          >
            <strong>ModGoScale</strong> ช่วยคุณลดขั้นตอนการทำงาน สร้างระบบอัตโนมัติ และพัฒนา Digital Product <br className="hidden md:block" />
            ไม่ว่าคุณจะอยาก <span className="text-indigo-600 font-semibold">เรียนรู้เพื่อทำเอง</span>,
            <span className="text-purple-600 font-semibold"> ปรึกษาเชิงกลยุทธ์</span> หรือ
            <span className="text-pink-600 font-semibold"> ให้เราลงมือทำให้</span>
          </motion.p>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mt-12" staggerDelay={0.15}>
            <StaggerItem>
              <motion.button whileHover={{ y: -8, scale: 1.02 }} whileTap={{ scale: 0.98 }} transition={{ type: "spring", stiffness: 300, damping: 20 }} onClick={() => scrollToSection('course')} className="group p-8 bg-white/60 backdrop-blur-md border border-indigo-100 hover:border-indigo-400 rounded-[2rem] transition-all duration-500 shadow-sm hover:shadow-2xl hover:shadow-indigo-100/50 text-left w-full">
                <div className="bg-indigo-100 w-16 h-16 rounded-2xl flex items-center justify-center text-indigo-600 mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all">
                  <BookOpen size={32} />
                </div>
                <h3 className="font-bold text-2xl text-slate-900 mb-2">Education</h3>
                <p className="text-slate-500 leading-relaxed font-light">สอนสร้าง Web & SaaS ด้วย AI แบบจับมือทำจนเป็น</p>
              </motion.button>
            </StaggerItem>

            <StaggerItem>
              <motion.button whileHover={{ y: -8, scale: 1.02 }} whileTap={{ scale: 0.98 }} transition={{ type: "spring", stiffness: 300, damping: 20 }} onClick={() => scrollToSection('consult')} className="group p-8 bg-white/60 backdrop-blur-md border border-purple-100 hover:border-purple-400 rounded-[2rem] transition-all duration-500 shadow-sm hover:shadow-2xl hover:shadow-purple-100/50 text-left w-full">
                <div className="bg-purple-100 w-16 h-16 rounded-2xl flex items-center justify-center text-purple-600 mb-6 group-hover:scale-110 group-hover:-rotate-6 transition-all">
                  <Users size={32} />
                </div>
                <h3 className="font-bold text-2xl text-slate-900 mb-2">Consultation</h3>
                <p className="text-slate-500 leading-relaxed font-light">ที่ปรึกษา AI & Business Automation ครบวงจร</p>
              </motion.button>
            </StaggerItem>

            <StaggerItem>
              <motion.button whileHover={{ y: -8, scale: 1.02 }} whileTap={{ scale: 0.98 }} transition={{ type: "spring", stiffness: 300, damping: 20 }} onClick={() => scrollToSection('development')} className="group p-8 bg-white/60 backdrop-blur-md border border-pink-100 hover:border-pink-400 rounded-[2rem] transition-all duration-500 shadow-sm hover:shadow-2xl hover:shadow-pink-100/50 text-left w-full">
                <div className="bg-pink-100 w-16 h-16 rounded-2xl flex items-center justify-center text-pink-600 mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all">
                  <Monitor size={32} />
                </div>
                <h3 className="font-bold text-2xl text-slate-900 mb-2">Development</h3>
                <p className="text-slate-500 leading-relaxed font-light">บริการรับทำเว็บไซต์และระบบที่ขยายธุรกิจได้จริง</p>
              </motion.button>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* About Us Section */}
      <Section id="about" className="py-32 bg-slate-50/30 scroll-mt-20 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-indigo-100/30 rounded-full blur-[100px] -z-10 -translate-x-1/2 -translate-y-1/2"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-24 items-center">

            {/* Left Content: Text */}
            <div className="lg:w-1/2">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-100/50 backdrop-blur-sm text-indigo-700 text-sm font-bold mb-8 border border-indigo-200/50">
                <User size={16} /> WHO WE ARE
              </div>
              <h2 className="text-4xl md:text-6xl font-black mb-8 text-slate-900 leading-tight">
                จากประสบการณ์ Solopreneur <br /> สู่ <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 bg-clip-text text-transparent">ผู้ช่วยมืออาชีพของคุณ</span>
              </h2>
              <p className="text-slate-600 mb-8 text-xl font-light leading-relaxed">
                สวัสดีค่ะ! <strong>ModGoScale</strong> คือจุดเริ่มต้นจากช่อง <strong>Modty.ai</strong> เราคือทีมที่เข้าใจหัวอกคนทำธุรกิจยุคใหม่ที่ต้องการความคล่องตัวและทรงพลัง
              </p>
              <div className="space-y-6 text-slate-600 mb-10 text-lg font-light leading-relaxed">
                <p>
                  เป้าหมายของเราคือการช่วยให้คุณ <strong>สร้างระบบและเว็บไซต์ด้วย AI Vibe Coding</strong> ที่ไม่ต้องเขียนโค้ดเอง (No-Code) แต่ได้คุณภาพระดับโปรฯ
                </p>
                <p>
                  เราเลือกใช้เครื่องมือที่ <strong>"ง่าย ประหยัด และคุ้มค่าที่สุด"</strong> พร้อมให้คำปรึกษา AI รอบด้าน ทั้งการสร้างภาพ กราฟิก วิดีโอ หรือการวางระบบอัตโนมัติครบวงจร
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-3 bg-white/60 backdrop-blur-md px-6 py-3 rounded-2xl border border-indigo-100 shadow-sm text-sm text-slate-700 font-medium hover:scale-105 transition-all">
                  <Palette size={18} className="text-indigo-600" /> AI Image & Graphics
                </div>
                <div className="flex items-center gap-3 bg-white/60 backdrop-blur-md px-6 py-3 rounded-2xl border border-purple-100 shadow-sm text-sm text-slate-700 font-medium hover:scale-105 transition-all">
                  <Video size={18} className="text-purple-600" /> AI Video Generation
                </div>
                <div className="flex items-center gap-3 bg-white/60 backdrop-blur-md px-6 py-3 rounded-2xl border border-pink-100 shadow-sm text-sm text-slate-700 font-medium hover:scale-105 transition-all">
                  <Code size={18} className="text-pink-600" /> Custom AI Web Dev
                </div>
              </div>
            </div>

            {/* Right Content: Profile Image & Features */}
            <div className="lg:w-1/2 w-full flex flex-col items-center">
              {/* Profile Image Wrapper */}
              <div className="relative mb-12 group cursor-pointer">
                {/* Glowing Background */}
                <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full blur-2xl opacity-20 group-hover:opacity-40 transition duration-700 animate-pulse"></div>

                {/* Image */}
                <div className="relative p-2 bg-gradient-to-tr from-indigo-100 to-pink-100 rounded-full">
                  <img
                    src="image.jpeg"
                    alt="Modty Profile"
                    className="relative w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-8 border-white shadow-2xl z-10 transition-transform duration-700 group-hover:scale-[1.02]"
                  />
                </div>

                {/* Floating Badge */}
                <div className="absolute -bottom-4 -right-4 z-20 bg-white border border-indigo-100 text-indigo-700 px-6 py-3 rounded-2xl text-sm font-black shadow-[0_10px_25px_rgba(0,0,0,0.1)] flex items-center gap-2 animate-bounce animation-delay-1000">
                  <div className="bg-indigo-600 p-1 rounded-full"><CheckCircle size={14} className="text-white" /></div>
                  Modty.ai Founder
                </div>
              </div>

              {/* Features Box */}
              <div className="relative w-full max-w-lg">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-200 to-pink-200 blur-[80px] opacity-20 rounded-[3rem] -z-10"></div>
                <div className="bg-white/80 backdrop-blur-2xl border border-white rounded-[3rem] p-10 shadow-2xl">
                  <h3 className="text-2xl font-black text-slate-900 mb-10 text-center tracking-tight">เพื่อนคู่คิดสำหรับธุรกิจยุคใหม่</h3>
                  <div className="space-y-10">
                    <div className="flex gap-6 group/item">
                      <div className="w-14 h-14 rounded-2xl bg-indigo-50 flex items-center justify-center text-indigo-600 shrink-0 group-hover/item:bg-indigo-600 group-hover/item:text-white transition-all duration-300 shadow-sm">
                        <Users size={28} />
                      </div>
                      <div>
                        <h4 className="font-bold text-xl text-slate-900 mb-2">Solopreneur Mindset</h4>
                        <p className="text-slate-500 leading-relaxed font-light">เข้าใจคนทำงานคนเดียว เข้าถึงง่าย และเน้นความเป็นไปได้จริงที่สุด</p>
                      </div>
                    </div>
                    <div className="flex gap-6 group/item">
                      <div className="w-14 h-14 rounded-2xl bg-purple-50 flex items-center justify-center text-purple-600 shrink-0 group-hover/item:bg-purple-600 group-hover/item:text-white transition-all duration-300 shadow-sm">
                        <Zap size={28} />
                      </div>
                      <div>
                        <h4 className="font-bold text-xl text-slate-900 mb-2">AI Mastery</h4>
                        <p className="text-slate-500 leading-relaxed font-light">เชี่ยวชาญเครื่องมือ AI หลากหลาย พร้อมแนะนำสิ่งที่เหมาะกับคุณ</p>
                      </div>
                    </div>
                    <div className="flex gap-6 group/item">
                      <div className="w-14 h-14 rounded-2xl bg-pink-50 flex items-center justify-center text-pink-600 shrink-0 group-hover/item:bg-pink-600 group-hover/item:text-white transition-all duration-300 shadow-sm">
                        <Layout size={28} />
                      </div>
                      <div>
                        <h4 className="font-bold text-xl text-slate-900 mb-2">Scalable Solutions</h4>
                        <p className="text-slate-500 leading-relaxed font-light">รับทำเว็บไซต์ที่ยืดหยุ่น ปรองรับการเติบโตของธุรกิจในอนาคต</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </Section>

      {/* 1. Education Section */}
      <Section id="course" className="py-24 bg-white scroll-mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 text-purple-700 text-sm font-semibold mb-8">
            SERVICE 1: EDUCATION
          </div>

          {/* Main Course Highlight */}
          <div className="flex flex-col lg:flex-row gap-20 items-center mb-32">
            <div className="lg:w-1/2">
              <h2 className="text-4xl md:text-6xl font-black mb-8 text-slate-900 leading-tight">
                เปลี่ยนไอเดียให้เป็น Web จริง<br />
                ด้วย <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 bg-clip-text text-transparent">Vibe Coding Master Route</span>
              </h2>
              <p className="text-slate-600 mb-10 text-xl font-light leading-relaxed">
                คอร์สเรียนระดับพรีเมียมที่จะสอนคุณสร้างเว็บไซต์และแอปพลิเคชันด้วย <span className="font-semibold text-slate-900">AI และ Google Ecosystem</span> เต็มรูปแบบ โดยที่คุณไม่จำเป็นต้องมีพื้นฐานการเขียนโค้ดมาก่อน
              </p>

              <div className="bg-gradient-to-br from-slate-50 to-indigo-50/30 p-8 rounded-[2rem] border border-indigo-100/50 mb-8 shadow-inner">
                <h3 className="font-bold text-2xl mb-6 flex items-center gap-3 text-slate-800">
                  <div className="bg-yellow-400 p-1.5 rounded-lg shadow-yellow-100 shadow-lg">
                    <Zap className="text-white fill-current" size={20} />
                  </div>
                  ทำไมต้องคอร์สนี้?
                </h3>
                <ul className="space-y-5">
                  <li className="flex gap-4 text-slate-700 group">
                    <div className="bg-indigo-100 p-1 rounded-full h-fit group-hover:scale-110 transition-transform">
                      <CheckCircle size={20} className="text-indigo-600 shrink-0" />
                    </div>
                    <span className="font-light text-lg"><strong>ไม่ใช่แค่สร้างเว็บหน้าเดียว:</strong> สอนสร้าง Web App มีระบบสมาชิก (Login) และฐานข้อมูล (Database)</span>
                  </li>
                  <li className="flex gap-4 text-slate-700 group">
                    <div className="bg-indigo-100 p-1 rounded-full h-fit group-hover:scale-110 transition-transform">
                      <CheckCircle size={20} className="text-indigo-600 shrink-0" />
                    </div>
                    <span className="font-light text-lg"><strong>คิดแบบ SaaS:</strong> สอนระบบคิดการสร้าง "บริการ" เพื่อแก้ปัญหาผู้ใช้และสร้างรายได้ระยะยาว</span>
                  </li>
                  <li className="flex gap-4 text-slate-700 group">
                    <div className="bg-indigo-100 p-1 rounded-full h-fit group-hover:scale-110 transition-transform">
                      <CheckCircle size={20} className="text-indigo-600 shrink-0" />
                    </div>
                    <span className="font-light text-lg"><strong>ใช้ AI ทำงานเบื้องหลัง:</strong> ลดเวลา Coding เองด้วยการใช้ AI ช่วยเขียนโครงสร้างที่ถูกต้อง</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Pricing Cards Column */}
            <div className="lg:w-1/2 w-full flex flex-col gap-6">

              {/* Active Pricing Card - Vibe Coding */}
              <div className="bg-white border border-purple-200 rounded-3xl p-8 relative shadow-2xl shadow-purple-100">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-purple-600 to-pink-500 text-white px-6 py-2 rounded-full font-bold text-sm shadow-lg">
                  HOT SELLING
                </div>

                <div className="text-center mb-8 mt-4">
                  <h3 className="text-2xl font-bold text-slate-800 mb-2">แพ็กเกจเรียนส่วนตัวออนไลน์</h3>
                  <div className="flex justify-center items-end gap-2 mb-2">
                    <span className="text-5xl font-extrabold text-slate-900">4,900</span>
                    <span className="text-xl font-bold text-purple-600 mb-2">THB</span>
                  </div>
                  <p className="text-slate-400 text-sm line-through font-light">ราคาปกติ 9,900 บาท</p>
                  <p className="text-rose-500 text-sm font-medium mt-1">** สำหรับ 10 ท่านแรกเท่านั้น</p>
                </div>

                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3 p-3 bg-purple-50 rounded-lg border border-purple-100">
                    <BookOpen size={20} className="text-purple-600 shrink-0 mt-0.5" />
                    <div className="text-sm text-slate-600 font-light">
                      <strong className="font-semibold text-slate-900">เรียนครบทุกบท Vibe Coding:</strong> Workshop สร้าง AI Web App สำหรับ MVP
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 bg-purple-50 rounded-lg border border-purple-100">
                    <Code size={20} className="text-purple-600 shrink-0 mt-0.5" />
                    <div className="text-sm text-slate-600 font-light">
                      <strong className="font-semibold text-slate-900">Full Stack Skills:</strong> สอน AI Coding, API, หลังบ้าน และคลาวด์พื้นฐาน
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 bg-purple-50 rounded-lg border border-purple-100">
                    <Users size={20} className="text-purple-600 shrink-0 mt-0.5" />
                    <div className="text-sm text-slate-600 font-light">
                      <strong className="font-semibold text-slate-900">ดูแลใกล้ชิด:</strong> เข้ากลุ่ม Vibe Coding with Modty ดูแล 60 วัน
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 bg-purple-50 rounded-lg border border-purple-100">
                    <Database size={20} className="text-purple-600 shrink-0 mt-0.5" />
                    <div className="text-sm text-slate-600 font-light">
                      <strong className="font-semibold text-slate-900">Assets พร้อมใช้:</strong> ได้ prompt และโครงสร้างที่เอาไปใช้ต่อได้จริง
                    </div>
                  </div>
                </div>

                <a
                  href={lineLink}
                  target="_blank"
                  rel="noreferrer"
                  className="block w-full text-center bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white font-bold py-4 rounded-xl transition duration-300 shadow-lg shadow-purple-200"
                >
                  สมัครเรียนทันที
                </a>
              </div>

              {/* Coming Soon Card */}
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 relative overflow-hidden group">
                <div className="absolute top-0 right-0 bg-slate-200 text-slate-500 text-xs font-bold px-3 py-1 rounded-bl-xl">
                  COMING SOON
                </div>
                <div className="flex flex-col sm:flex-row items-center gap-4">
                  <div className="bg-white p-4 rounded-xl text-purple-400 border border-purple-100 shadow-sm shrink-0">
                    <Video size={28} />
                  </div>
                  <div className="text-center sm:text-left flex-grow">
                    <h4 className="font-bold text-slate-800 text-lg">เรียนด้วยตัวเองผ่านวิดีโอ (Self-Paced)</h4>
                    <p className="text-slate-500 text-sm mb-1">Vibe Coding Master Route</p>
                    <div className="flex items-center justify-center sm:justify-start gap-2">
                      <span className="text-2xl font-bold text-slate-400">3,990 THB</span>
                      <span className="text-xs bg-purple-100 text-purple-600 px-2 py-0.5 rounded-full font-medium border border-purple-200 flex items-center gap-1">
                        <Clock size={10} /> เร็วๆ นี้
                      </span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* New Short Courses Section */}
          <div className="border-t border-slate-200 pt-16">
            <h3 className="text-2xl md:text-3xl font-bold text-center mb-12 text-slate-900">คอร์สระยะสั้น & Workshop <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">เฉพาะทาง</span></h3>

            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" staggerDelay={0.15}>
              {/* Course 1: AI System Architect */}
              <StaggerItem><motion.div whileHover={{ y: -6 }} transition={{ type: "spring", stiffness: 300, damping: 20 }} className="bg-white border border-slate-200 rounded-2xl p-8 hover:border-purple-300 transition duration-300 flex flex-col relative group shadow-sm hover:shadow-xl hover:shadow-purple-50">
                <div className="absolute top-0 right-0 p-4 opacity-50 group-hover:opacity-100 transition">
                  <Bot size={40} className="text-purple-200" />
                </div>

                <div className="mb-6">
                  <div className="inline-block bg-purple-100 text-purple-700 text-xs font-bold px-2 py-1 rounded mb-3">AI PRODUCTIVITY</div>
                  <h4 className="text-2xl font-bold text-slate-800 mb-2">AI System Architect</h4>
                  <p className="text-slate-500 font-light">สร้างผู้ช่วยส่วนตัว ลดงานซ้ำซาก</p>
                </div>

                <div className="space-y-4 mb-8 flex-grow">
                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                    <p className="text-sm text-slate-600 font-light mb-2"><span className="text-purple-600 font-semibold">เหมาะสำหรับ:</span> คนที่ต้องสั่งงาน AI บ่อยๆ, สายกราฟิก หรือ Admin ที่อยากมีระบบทำงานอัตโนมัติ</p>
                  </div>
                  <ul className="space-y-2 text-sm text-slate-600 font-light">
                    <li className="flex gap-2">
                      <CheckCircle size={16} className="text-purple-500 shrink-0" />
                      <span><strong>Prompt Engineering:</strong> สั่งงาน AI ให้แม่นยำ</span>
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle size={16} className="text-purple-500 shrink-0" />
                      <span><strong>Custom Gems:</strong> สอนสร้าง AI ผู้ช่วยส่วนตัว</span>
                    </li>
                    <li className="flex gap-2">
                      <Sparkles size={16} className="text-yellow-500 shrink-0" />
                      <span><strong>Bonus:</strong> แถมสูตร Gen ภาพ 5 สไตล์</span>
                    </li>
                  </ul>
                </div>

                <div className="border-t border-slate-100 pt-6">
                  <div className="flex justify-between items-end mb-4">
                    <div>
                      <p className="text-xs text-slate-400 line-through">ราคาปกติ 4,900 บาท</p>
                      <p className="text-2xl font-bold text-slate-900">1,290 THB</p>
                    </div>
                    <span className="text-xs text-slate-500 bg-slate-100 px-2 py-1 rounded border border-slate-200">Private 1 ชม.</span>
                  </div>
                  <a href={lineLink} target="_blank" rel="noreferrer" className="block w-full text-center bg-white border border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white font-medium py-3 rounded-lg transition">
                    จองเวลาเรียน
                  </a>
                </div>
              </motion.div></StaggerItem>

              {/* Course 2: AI Video & Content Mastery */}
              <StaggerItem><motion.div whileHover={{ y: -6 }} transition={{ type: "spring", stiffness: 300, damping: 20 }} className="bg-white border border-slate-200 rounded-2xl p-8 hover:border-pink-300 transition duration-300 flex flex-col relative group shadow-sm hover:shadow-xl hover:shadow-pink-50">
                <div className="absolute top-0 right-0 p-4 opacity-50 group-hover:opacity-100 transition">
                  <Clapperboard size={40} className="text-pink-200" />
                </div>

                <div className="mb-6">
                  <div className="inline-block bg-pink-100 text-pink-700 text-xs font-bold px-2 py-1 rounded mb-3">CONTENT CREATOR</div>
                  <h4 className="text-2xl font-bold text-slate-800 mb-2">AI Video & Content</h4>
                  <p className="text-slate-500 font-light">ปั้นคลิปรีวิวระดับโปร ด้วย AI</p>
                </div>

                <div className="space-y-4 mb-8 flex-grow">
                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                    <p className="text-sm text-slate-600 font-light mb-2"><span className="text-pink-600 font-semibold">เหมาะสำหรับ:</span> Content Creator, นักรีวิว, สาย Affiliate ที่ต้องการงานคุณภาพสูง</p>
                  </div>
                  <ul className="space-y-2 text-sm text-slate-600 font-light">
                    <li className="flex gap-2">
                      <CheckCircle size={16} className="text-pink-500 shrink-0" />
                      <span><strong>Next-Gen Tools:</strong> สอนใช้ Sora, Grok, Flow</span>
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle size={16} className="text-pink-500 shrink-0" />
                      <span><strong>Affiliate Workflow:</strong> ทำคลิปรีวิวให้ขายได้จริง</span>
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle size={16} className="text-pink-500 shrink-0" />
                      <span><strong>Consistency:</strong> วางแผน Prompt ให้งานต่อเนื่อง</span>
                    </li>
                  </ul>
                </div>

                <div className="border-t border-slate-100 pt-6">
                  <div className="flex justify-between items-end mb-4">
                    <div>
                      <p className="text-xs text-slate-400 line-through">ราคาปกติ 8,900 บาท</p>
                      <p className="text-2xl font-bold text-slate-900">4,900 THB</p>
                    </div>
                    <span className="text-xs text-slate-500 bg-slate-100 px-2 py-1 rounded border border-slate-200">Private / Online</span>
                  </div>
                  <a href={lineLink} target="_blank" rel="noreferrer" className="block w-full text-center bg-white border border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-white font-medium py-3 rounded-lg transition">
                    สอบถามรายละเอียด
                  </a>
                </div>
              </motion.div></StaggerItem>

              {/* Course 3: Google Automation & Simple Web */}
              <StaggerItem><motion.div whileHover={{ y: -6 }} transition={{ type: "spring", stiffness: 300, damping: 20 }} className="bg-white border border-slate-200 rounded-2xl p-8 hover:border-green-300 transition duration-300 flex flex-col relative group shadow-sm hover:shadow-xl hover:shadow-green-50">
                <div className="absolute top-0 right-0 p-4 opacity-50 group-hover:opacity-100 transition">
                  <Sheet size={40} className="text-green-200" />
                </div>

                <div className="mb-6">
                  <div className="inline-block bg-green-100 text-green-700 text-xs font-bold px-2 py-1 rounded mb-3">POPULAR FOR WORK</div>
                  <h4 className="text-2xl font-bold text-slate-800 mb-2">Google Automation</h4>
                  <p className="text-slate-500 font-light">สร้างเว็บง่ายๆ ด้วย Gemini + Apps Script</p>
                </div>

                <div className="space-y-4 mb-8 flex-grow">
                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                    <p className="text-sm text-slate-600 font-light mb-2"><span className="text-green-600 font-semibold">เหมาะสำหรับ:</span> HR, บัญชี, จัดซื้อ, SME ที่ใช้ Google Sheet เป็นหลัก</p>
                  </div>
                  <ul className="space-y-2 text-sm text-slate-600 font-light">
                    <li className="flex gap-2">
                      <CheckCircle size={16} className="text-green-500 shrink-0" />
                      <span><strong>Gemini Coding:</strong> ให้ AI ช่วยเขียน Code</span>
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle size={16} className="text-green-500 shrink-0" />
                      <span><strong>Automation:</strong> แจ้งเตือน LINE, ส่งเมล Auto</span>
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle size={16} className="text-green-500 shrink-0" />
                      <span><strong>Simple Web App:</strong> สร้างเว็บใช้ฟรี ไม่ต้องเช่า Host</span>
                    </li>
                  </ul>
                </div>

                <div className="border-t border-slate-100 pt-6">
                  <div className="flex justify-between items-end mb-4">
                    <div>
                      <p className="text-xs text-slate-400 line-through">ราคาปกติ 8,900 บาท</p>
                      <p className="text-2xl font-bold text-slate-900">4,900 THB</p>
                    </div>
                    <span className="text-xs text-slate-500 bg-slate-100 px-2 py-1 rounded border border-slate-200">Private / Online</span>
                  </div>
                  <a href={lineLink} target="_blank" rel="noreferrer" className="block w-full text-center bg-white border border-green-500 text-green-600 hover:bg-green-500 hover:text-white font-medium py-3 rounded-lg transition">
                    จองเวลาเรียน
                  </a>
                </div>
              </motion.div></StaggerItem>

            </StaggerContainer>
          </div>
        </div>
      </Section>

      {/* 2. Consultation Section */}
      <Section id="consult" className="py-32 px-4 scroll-mt-16 bg-slate-50/50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-pink-100/20 rounded-full blur-[120px] -z-10 translate-x-1/2 -translate-y-1/2"></div>

        <div className="max-w-7xl mx-auto">
          <div className="mb-16 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-100/50 backdrop-blur-sm text-pink-700 text-sm font-bold mb-6 border border-pink-200/50 tracking-wider">
              SERVICE 2: CONSULTATION
            </div>
            <h2 className="text-4xl md:text-6xl font-black mb-8 text-slate-900">AI & Business <span className="text-pink-600">Automation</span> Consultant</h2>
            <p className="text-slate-600 text-xl max-w-3xl font-light leading-relaxed">
              ปลดล็อกศักยภาพทีมงานและธุรกิจของคุณ ด้วยคำแนะนำจากผู้เชี่ยวชาญ <br className="hidden md:block" />
              ลดงานซ้ำซ้อน เพิ่มเวลาโฟกัสในสิ่งที่คุณต้องการจริงๆ
            </p>
          </div>

          <div className="bg-white/70 backdrop-blur-xl border border-white rounded-[3rem] p-8 md:p-16 flex flex-col lg:flex-row gap-16 transition-all duration-500 shadow-[0_20px_50px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_50px_rgba(236,72,153,0.1)]">
            <div className="lg:w-3/5 space-y-10 group">
              <div>
                <h3 className="text-3xl font-bold text-slate-900 mb-8 relative inline-block">
                  บริการนี้เหมาะกับใคร?
                  <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-pink-500 rounded-full"></span>
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="flex gap-5 group/item">
                    <div className="bg-pink-100 p-4 rounded-2xl text-pink-600 h-fit group-hover/item:scale-110 group-hover/item:rotate-3 transition-all">
                      <TrendingUp size={28} />
                    </div>
                    <div>
                      <h4 className="font-bold text-xl text-slate-900 mb-2">เจ้าของธุรกิจ</h4>
                      <p className="text-slate-500 leading-relaxed font-light">นำ AI มาลดต้นทุนและเพิ่มประสิทธิภาพขั้นสุด</p>
                    </div>
                  </div>
                  <div className="flex gap-5 group/item">
                    <div className="bg-purple-100 p-4 rounded-2xl text-purple-600 h-fit group-hover/item:scale-110 group-hover/item:-rotate-3 transition-all">
                      <Layout size={28} />
                    </div>
                    <div>
                      <h4 className="font-bold text-xl text-slate-900 mb-2">ทีมงาน Operations</h4>
                      <p className="text-slate-500 leading-relaxed font-light">วางระบบ Workflow อัตโนมัติ ลดงาน Manual</p>
                    </div>
                  </div>
                  <div className="flex gap-5 group/item">
                    <div className="bg-indigo-100 p-4 rounded-2xl text-indigo-600 h-fit group-hover/item:scale-110 group-hover/item:rotate-3 transition-all">
                      <Server size={28} />
                    </div>
                    <div>
                      <h4 className="font-bold text-xl text-slate-900 mb-2">ผู้นำยุคใหม่</h4>
                      <p className="text-slate-500 leading-relaxed font-light">เลือก Tech Stack ที่เหมาะกับการ Scale ในอนาคต</p>
                    </div>
                  </div>
                  <div className="flex gap-5 group/item">
                    <div className="bg-orange-100 p-4 rounded-2xl text-orange-600 h-fit group-hover/item:scale-110 group-hover/item:-rotate-3 transition-all">
                      <Zap size={28} />
                    </div>
                    <div>
                      <h4 className="font-bold text-xl text-slate-900 mb-2">AI Enthusiast</h4>
                      <p className="text-slate-500 leading-relaxed font-light">ต้องการเจาะลึกการใช้ AI ในระดับระดับธุรกิจ</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:w-2/5 bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-[2.5rem] p-10 flex flex-col justify-between shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-pink-500/20 rounded-full blur-3xl -z-0 translate-x-12 -translate-y-12"></div>

              <div className="relative z-10">
                <h4 className="text-2xl font-bold mb-8 text-center text-pink-400">รายละเอียดค่าบริการ</h4>

                <div className="space-y-6 mb-10">
                  <div className="flex justify-between items-center border-b border-white/10 pb-4">
                    <span className="text-slate-400 font-light">รูปแบบการปรึกษา</span>
                    <span className="font-medium">Online Meeting</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-white/10 pb-4">
                    <span className="text-slate-400 font-light">การดูแลหลังปรึกษา</span>
                    <span className="text-emerald-400 font-bold">ดูแลต่อ 7 วัน</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-white/10 pb-4">
                    <span className="text-slate-400 font-light">รีวิวระบบเดิม</span>
                    <span className="font-medium">รวมในแพ็กเกจ</span>
                  </div>
                </div>
              </div>

              <div className="relative z-10 bg-white/10 backdrop-blur-md rounded-3xl p-8 text-center border border-white/5 group-hover:bg-white/20 transition-all">
                <p className="text-slate-400 text-sm mb-2 font-medium tracking-widest">PRIVATE SESSION</p>
                <div className="text-5xl font-black text-white mb-6">2,000 <span className="text-xl text-pink-500 font-bold">THB/H</span></div>
                <a
                  href={lineLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-3 w-full bg-gradient-to-r from-pink-500 to-rose-500 hover:scale-105 hover:shadow-pink-500/50 hover:shadow-xl text-white px-8 py-4 rounded-2xl font-black transition-all duration-300"
                >
                  <MessageCircle size={24} />
                  จองคิวปรึกษา
                </a>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* 3. Web Development Services */}
      <Section id="development" className="py-32 bg-white scroll-mt-16 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-rose-100 text-rose-600 text-sm font-bold mb-6 border border-rose-200 tracking-wider">
              SERVICE 3: DEVELOPMENT
            </div>
            <h2 className="text-4xl md:text-6xl font-black mb-6 text-slate-900 leading-tight">รับทำเว็บไซต์และระบบ <span className="text-rose-600">พร้อมใช้ทันที</span></h2>
            <p className="text-slate-600 text-xl font-light max-w-3xl mx-auto leading-relaxed">พัฒนาด้วยเทคโนโลยีล่าสุด รวดเร็ว สวยงาม และรองรับการขยายธุรกิจในอนาคต</p>
          </div>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-12" staggerDelay={0.2}>

            {/* Service A */}
            <StaggerItem><motion.div whileHover={{ y: -8 }} transition={{ type: "spring", stiffness: 250, damping: 20 }} className="bg-slate-50/50 border border-slate-200 rounded-[2.5rem] p-10 hover:border-rose-400 transition-all duration-500 flex flex-col relative overflow-hidden group shadow-sm hover:shadow-2xl hover:shadow-rose-100/50">
              <div className="absolute top-0 right-0 w-48 h-48 bg-rose-200/20 rounded-full blur-3xl -z-10 group-hover:bg-rose-300/30 transition-all duration-700"></div>

              <div className="mb-8">
                <div className="bg-rose-100 text-rose-600 text-xs font-black px-3 py-1 rounded-full w-fit mb-4">E-COMMERCE</div>
                <h3 className="text-3xl font-bold text-slate-900 mb-2">Digital Product Store</h3>
                <p className="text-rose-500 font-bold text-lg">ระบบร้านค้าสินค้าดิจิตอลอัตโนมัติ</p>
              </div>

              <div className="space-y-6 mb-10 flex-grow">
                <p className="text-slate-600 text-lg leading-relaxed font-light">
                  สร้างทางลัดสู่รายได้ Passive Income ด้วยระบบขาย Digital Product (E-book, คอร์ส, Template) ที่จัดการง่ายที่สุด
                </p>
                <div className="bg-white/50 backdrop-blur-sm p-6 rounded-2xl space-y-4 border border-rose-100/50 shadow-inner">
                  <div className="flex items-center gap-3 text-slate-700">
                    <div className="bg-rose-500 p-1 rounded-full"><CheckCircle size={14} className="text-white" /></div>
                    <span className="font-light">ระบบชำระเงินอัตโนมัติ พร้อมส่งสินค้าทันที</span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-700">
                    <div className="bg-rose-500 p-1 rounded-full"><CheckCircle size={14} className="text-white" /></div>
                    <span className="font-light">ดีไซน์ Conversion-Focused เพิ่มยอดขาย</span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-700">
                    <div className="bg-rose-500 p-1 rounded-full"><CheckCircle size={14} className="text-white" /></div>
                    <span className="font-light">หน้า Dashboard สรุปยอดขายดูง่าย</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between border-t border-slate-200 pt-8 mt-auto">
                <div>
                  <p className="text-xs text-slate-400 font-bold tracking-widest mb-1 uppercase">STARTING FROM</p>
                  <p className="text-4xl font-black text-slate-900">3,000 <span className="text-lg text-rose-500">THB</span></p>
                </div>
                <a href={lineLink} target="_blank" rel="noreferrer" className="px-8 py-4 rounded-2xl bg-rose-600 text-white font-bold hover:bg-rose-700 hover:scale-105 hover:shadow-xl hover:shadow-rose-200 transition-all duration-300">
                  สนใจทำเว็บไซต์
                </a>
              </div>
            </motion.div></StaggerItem>

            {/* Service B */}
            <StaggerItem><motion.div whileHover={{ y: -8 }} transition={{ type: "spring", stiffness: 250, damping: 20 }} className="bg-slate-50/50 border border-slate-200 rounded-[2.5rem] p-10 hover:border-emerald-400 transition-all duration-500 flex flex-col relative overflow-hidden group shadow-sm hover:shadow-2xl hover:shadow-emerald-100/50">
              <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-200/20 rounded-full blur-3xl -z-10 group-hover:bg-emerald-300/30 transition-all duration-700"></div>

              <div className="mb-8">
                <div className="bg-emerald-100 text-emerald-600 text-xs font-black px-3 py-1 rounded-full w-fit mb-4">CUSTOM SOLUTION</div>
                <h3 className="text-3xl font-bold text-slate-900 mb-2">Custom Web Development</h3>
                <p className="text-emerald-600 font-bold text-lg">ระบบเว็บไซต์ตามสั่ง (Vibe Coding Style)</p>
              </div>

              <div className="space-y-6 mb-10 flex-grow">
                <p className="text-slate-600 text-lg leading-relaxed font-light">
                  เว็บไซต์ที่ถูกออกแบบมาเพื่อธุรกิจคุณโดยเฉพาะ ตั้งแต่ระบบจัดการภายใน ไปจนถึง Landing Page ระดับไฮเอนด์
                </p>
                <div className="bg-white/50 backdrop-blur-sm p-6 rounded-2xl space-y-4 border border-emerald-100/50 shadow-inner">
                  <div className="flex items-center gap-3 text-slate-700">
                    <div className="bg-emerald-500 p-1 rounded-full"><CheckCircle size={14} className="text-white" /></div>
                    <span className="font-light">ออกแบบ UI/UX สั่งทำใหม่ 100%</span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-700">
                    <div className="bg-emerald-500 p-1 rounded-full"><CheckCircle size={14} className="text-white" /></div>
                    <span className="font-light">โค้ดคุณภาพสูง ปรับแต่งและขยายได้อิสระ</span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-700">
                    <div className="bg-emerald-500 p-1 rounded-full"><CheckCircle size={14} className="text-white" /></div>
                    <span className="font-light">ดูแลใกล้ชิดตั้งแต่เริ่มจนขึ้นระบบจริง</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between border-t border-slate-200 pt-8 mt-auto">
                <div>
                  <p className="text-xs text-slate-400 font-bold tracking-widest mb-1 uppercase">INVESTMENT</p>
                  <p className="text-4xl font-black text-slate-900">3,000 <span className="text-lg text-emerald-500">THB+</span></p>
                </div>
                <a href={lineLink} target="_blank" rel="noreferrer" className="px-8 py-4 rounded-2xl bg-emerald-600 text-white font-bold hover:bg-emerald-700 hover:scale-105 hover:shadow-xl hover:shadow-emerald-200 transition-all duration-300">
                  สอบถามรายละเอียด
                </a>
              </div>
            </motion.div></StaggerItem>

          </StaggerContainer>
        </div>
      </Section>

      {/* Portfolio Section */}
      <Section id="portfolio" className="py-32 bg-white scroll-mt-16 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-100 text-indigo-700 text-sm font-bold mb-6 border border-indigo-200 tracking-wider">
              PORTFOLIO
            </div>
            <h2 className="text-4xl md:text-6xl font-black mb-6 text-slate-900 leading-tight">ผลงาน <span className="text-indigo-600">ตัวอย่าง</span></h2>
            <p className="text-slate-600 text-xl font-light max-w-3xl mx-auto leading-relaxed">ตัวอย่างเว็บแอปพลิเคชันที่พัฒนาด้วย AI และเทคโนโลยีสมัยใหม่</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project 1: RetroLens */}
            <motion.div
              whileHover={{ y: -10 }}
              className="group bg-slate-50 border border-slate-200 rounded-[2.5rem] overflow-hidden hover:border-indigo-400 transition-all duration-500 shadow-sm hover:shadow-2xl hover:shadow-indigo-100/50"
            >
              <div className="aspect-video relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10 opacity-60 group-hover:opacity-40 transition-opacity"></div>
                <img
                  src="https://retrolens-ai-app.web.app/og-image.png"
                  alt="RetroLens AI App"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop'; }}
                />
                <div className="absolute bottom-6 left-6 z-20">
                  <span className="px-3 py-1 bg-indigo-600 text-white text-xs font-bold rounded-full mb-3 inline-block">AI App VibeCoding</span>
                  <h3 className="text-2xl font-bold text-white">RetroLens AI</h3>
                </div>
              </div>
              <div className="p-8">
                <p className="text-slate-600 font-light mb-8 leading-relaxed">
                  เว็บแอปพลิเคชันสำหรับเปลี่ยนภาพถ่ายให้เป็นสไตล์กล้องฟิล์มย้อนยุคด้วยพลังของ AI พัฒนาด้วย React และ Cloud Integration เต็มรูปแบบ
                </p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {['React', 'Vite', 'AI Model', 'Firebase'].map(tag => (
                    <span key={tag} className="px-3 py-1 bg-white border border-slate-200 text-slate-500 text-xs rounded-full">#{tag}</span>
                  ))}
                </div>
                <a
                  href="https://retrolens-ai-app.web.app"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-indigo-600 font-bold hover:gap-4 transition-all"
                >
                  เข้าชมผลงาน <ArrowRight size={18} />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </Section>
      <Section className="py-32 bg-slate-50 relative overflow-hidden">
        <div className="absolute top-1/2 left-0 w-72 h-72 bg-indigo-200/20 rounded-full blur-3xl -z-10 animate-blob"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-200/20 rounded-full blur-3xl -z-10 animate-blob animation-delay-2000"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-100 text-indigo-700 text-sm font-bold mb-6 border border-indigo-200 tracking-wider">
              TESTIMONIALS
            </div>
            <h2 className="text-4xl md:text-6xl font-black mb-6 text-slate-900 leading-tight">เสียงตอบรับจาก <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">ผู้เรียนตัวจริง</span></h2>
            <p className="text-slate-600 text-xl font-light max-w-3xl mx-auto leading-relaxed">เปลี่ยนความกังวลให้เป็นผลลัพธ์ ด้วยระบบ AI และ Automation ที่ใช้งานได้จริง</p>
          </div>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8" staggerDelay={0.18}>

            {/* Testimonial 1 */}
            <StaggerItem><motion.div whileHover={{ y: -8, scale: 1.02 }} transition={{ type: "spring", stiffness: 300, damping: 20 }} className="bg-white/70 backdrop-blur-xl border border-white p-8 rounded-[2.5rem] shadow-xl hover:shadow-2xl transition-all duration-500 relative group flex flex-col">
              <div className="absolute -top-5 left-8 bg-gradient-to-br from-indigo-600 to-purple-600 p-3 rounded-2xl text-white shadow-lg group-hover:scale-110 transition-transform z-10">
                <MessageCircle size={24} />
              </div>
              <div className="mb-6 overflow-hidden rounded-2xl h-64 border border-slate-100 shadow-inner relative">
                <img src="/nisa.png" alt="คุณนิสา" className="w-full h-full object-cover object-top hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h4 className="font-bold text-lg">คุณนิสา</h4>
                  <p className="text-xs text-indigo-200 font-light">ทำงานบัญชี</p>
                </div>
              </div>
              <p className="text-slate-600 text-lg leading-relaxed font-light mb-auto">
                "ตอนแรกกังวลว่างานบัญชีที่ปวดหัวจะใช้ AI ช่วยได้จริงไหม แต่พอได้เรียนแล้ว ชีวิตเปลี่ยนมากค่ะ งานซ้ำๆ ที่เคยทำหลักชั่วโมง ตอนนี้ใช้ระบบ <strong>app script</strong> ช่วยทำงานแทนในไม่กี่นาที มีเวลาไปดูภาพรวมธุรกิจมากขึ้นเยอะเลยค่ะ"
              </p>
            </motion.div></StaggerItem>

            {/* Testimonial 2 */}
            <StaggerItem><motion.div whileHover={{ y: -8, scale: 1.02 }} transition={{ type: "spring", stiffness: 300, damping: 20 }} className="bg-white/70 backdrop-blur-xl border border-white p-8 rounded-[2.5rem] shadow-xl hover:shadow-2xl transition-all duration-500 relative group flex flex-col">
              <div className="absolute -top-5 left-8 bg-gradient-to-br from-purple-600 to-pink-500 p-3 rounded-2xl text-white shadow-lg group-hover:scale-110 transition-transform z-10">
                <MessageCircle size={24} />
              </div>
              <div className="mb-6 overflow-hidden rounded-2xl h-64 border border-slate-100 shadow-inner relative">
                <img src="/gib.png" alt="คุณกิ๊บ" className="w-full h-full object-cover object-top hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h4 className="font-bold text-lg">คุณกิ๊บ</h4>
                  <p className="text-xs text-purple-200 font-light">นายหน้าอสังหา</p>
                </div>
              </div>
              <p className="text-slate-600 text-lg leading-relaxed font-light mb-auto">
                "การทำคอนเทนต์ขายบ้านเหนื่อยมากค่ะ แต่พอได้ลองใช้ <strong>AI Vibe Coding</strong> ตามที่คุณมดสอน การสร้าง Listing และพอร์ตโครงการสวยๆ กลายเป็นเรื่องง่ายและเร็วขึ้นมาก ลูกค้าทักเยอะขึ้นเพราะภาพลักษณ์ดูโปรฯ ขึ้นชัดเจนค่ะ"
              </p>
            </motion.div></StaggerItem>

            {/* Testimonial 3 */}
            <StaggerItem><motion.div whileHover={{ y: -8, scale: 1.02 }} transition={{ type: "spring", stiffness: 300, damping: 20 }} className="bg-white/70 backdrop-blur-xl border border-white p-8 rounded-[2.5rem] shadow-xl hover:shadow-2xl transition-all duration-500 relative group flex flex-col">
              <div className="absolute -top-5 left-8 bg-gradient-to-br from-pink-500 to-orange-500 p-3 rounded-2xl text-white shadow-lg group-hover:scale-110 transition-transform z-10">
                <MessageCircle size={24} />
              </div>
              <div className="mb-6 overflow-hidden rounded-2xl h-64 border border-slate-100 shadow-inner relative">
                <img src="/pat.png" alt="คุณพัต" className="w-full h-full object-cover object-top hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h4 className="font-bold text-lg">คุณพัต</h4>
                  <p className="text-xs text-pink-200 font-light">เจ้าของธุรกิจ</p>
                </div>
              </div>
              <p className="text-slate-600 text-lg leading-relaxed font-light mb-auto">
                "ในฐานะเจ้าของธุรกิจ การขยายคือเรื่องยากที่สุด แต่การวางระบบ AI ที่นี่ช่วยให้ผมลดงานจุกจิก และคุมมาตรฐานงานได้โดยไม่ต้องเพิ่มคนเยอะ ระบบหลังบ้านที่เรียนมาคุ้มค่ากับการลงทุนจริงๆ ครับ"
              </p>
            </motion.div></StaggerItem>

          </StaggerContainer>
        </div>
      </Section>

      {/* CTA Bottom Section */}
      <Section className="py-32 bg-gradient-to-b from-white via-indigo-50/50 to-purple-50 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-200/20 rounded-full blur-[120px] -z-10"></div>
        <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-5xl md:text-7xl font-black mb-8 text-slate-900 leading-tight">
            พร้อมที่จะ Scale <br className="hidden md:block" />
            ธุรกิจของคุณหรือยังคะ?
          </h2>
          <p className="text-slate-600 mb-12 text-2xl font-light leading-relaxed max-w-3xl mx-auto">
            ModGoScale คือ Partner ที่พร้อมผลักดันคุณไปข้างหน้า <br className="hidden md:block" />
            ทักหาเราวันนี้ เพื่อเริ่มโปรเจกต์ของคุณทันทีค่ะ
          </p>
          <motion.a
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
            href={lineLink}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-4 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 hover:shadow-2xl hover:shadow-indigo-500/50 text-white px-12 py-6 rounded-full font-black text-2xl transition-all duration-300"
          >
            <div className="bg-white/20 p-2 rounded-full">
              <MessageCircle size={28} />
            </div>
            แอดไลน์ปรึกษาฟรี
          </motion.a>
          <p className="mt-8 text-slate-400 font-medium">LINE ID: @237dhtqp</p>
        </div>
      </Section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-20 relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500"></div>
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-center md:text-left">
          <div className="lg:col-span-2">
            <span className="text-3xl font-black tracking-tighter bg-gradient-to-r from-indigo-400 to-pink-400 bg-clip-text text-transparent">
              ModGoScale
            </span>
            <p className="text-slate-400 mt-6 text-lg font-light leading-relaxed max-w-sm">
              ช่วยธุรกิจเติบโตด้วย AI และเทคโนโลยีเว็บสมัยใหม่ พาร์ทเนอร์ของคุณในการเปลี่ยนผ่านสู่ดิจิทัล
            </p>
          </div>
          <div>
            <h4 className="font-bold text-xl mb-6">Explore</h4>
            <ul className="space-y-4 text-slate-400 font-light">
              <li><button onClick={() => scrollToSection('about')} className="hover:text-indigo-400 transition-colors">เกี่ยวกับเรา</button></li>
              <li><button onClick={() => scrollToSection('course')} className="hover:text-indigo-400 transition-colors">คอร์สเรียน</button></li>
              <li><button onClick={() => scrollToSection('consult')} className="hover:text-indigo-400 transition-colors">ที่ปรึกษา</button></li>
              <li><button onClick={() => scrollToSection('development')} className="hover:text-indigo-400 transition-colors">รับทำเว็บไซต์</button></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-xl mb-6">Contact</h4>
            <ul className="space-y-4 text-slate-400 font-light">
              <li className="flex items-center justify-center md:justify-start gap-2">
                <Mail size={16} /> <a href="mailto:modty.project@yahoo.com" className="hover:text-indigo-400 transition-colors">modty.project@yahoo.com</a>
              </li>
              <li className="flex items-center justify-center md:justify-start gap-2">
                <MessageCircle size={16} /> <a href={lineLink} target="_blank" rel="noreferrer" className="hover:text-indigo-400 transition-colors">LINE: @237dhtqp</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 mt-20 pt-8 border-t border-white/10 text-center text-slate-500 text-sm font-light">
          © {new Date().getFullYear()} ModGoScale. All rights reserved. Made with ❤️ by Modty.ai
        </div>
      </footer>

    </div>
  );
};

export default App;
