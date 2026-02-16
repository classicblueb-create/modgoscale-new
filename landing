import React, { useState } from 'react';
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

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Link LINE ใหม่
  const lineLink = "https://line.me/R/ti/p/@237dhtqp?oat_content=url&ts=12080435";

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
      <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            {/* Logo MGS Minimal */}
            <div className="flex items-center gap-3 cursor-pointer" onClick={() => window.scrollTo(0, 0)}>
              <div className="bg-gradient-to-br from-purple-600 to-pink-500 px-2 py-1 rounded-md flex items-center justify-center shadow-md">
                <span className="font-bold text-white text-sm tracking-widest">MGS</span>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-purple-700 to-pink-600 bg-clip-text text-transparent">
                ModGoScale
              </span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8 items-center">
              <button onClick={() => scrollToSection('about')} className="text-slate-600 hover:text-purple-600 transition font-medium">เกี่ยวกับเรา</button>
              <button onClick={() => scrollToSection('course')} className="text-slate-600 hover:text-purple-600 transition font-medium">คอร์สเรียน</button>
              <button onClick={() => scrollToSection('consult')} className="text-slate-600 hover:text-purple-600 transition font-medium">ที่ปรึกษา</button>
              <button onClick={() => scrollToSection('development')} className="text-slate-600 hover:text-purple-600 transition font-medium">รับทำเว็บไซต์</button>
              <a 
                href={lineLink}
                target="_blank" 
                rel="noreferrer"
                className="bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white px-5 py-2.5 rounded-full font-medium transition shadow-lg shadow-purple-200 flex items-center gap-2"
              >
                <MessageCircle size={18} />
                LINE: AI VibeCoding
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
        {isMenuOpen && (
          <div className="md:hidden bg-white border-b border-slate-200">
            <div className="px-4 pt-2 pb-6 space-y-2">
              <button onClick={() => scrollToSection('about')} className="block w-full text-left px-3 py-3 text-slate-600 hover:bg-purple-50 hover:text-purple-700 rounded-md font-medium">เกี่ยวกับเรา</button>
              <button onClick={() => scrollToSection('course')} className="block w-full text-left px-3 py-3 text-slate-600 hover:bg-purple-50 hover:text-purple-700 rounded-md font-medium">คอร์สเรียน</button>
              <button onClick={() => scrollToSection('consult')} className="block w-full text-left px-3 py-3 text-slate-600 hover:bg-purple-50 hover:text-purple-700 rounded-md font-medium">ที่ปรึกษา</button>
              <button onClick={() => scrollToSection('development')} className="block w-full text-left px-3 py-3 text-slate-600 hover:bg-purple-50 hover:text-purple-700 rounded-md font-medium">รับทำเว็บไซต์</button>
              <a 
                href={lineLink}
                target="_blank" 
                rel="noreferrer"
                className="block w-full text-center mt-4 bg-gradient-to-r from-purple-600 to-pink-500 text-white px-3 py-3 rounded-md font-medium shadow-md"
              >
                ติดต่อ LINE: AI VibeCoding
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 relative overflow-hidden bg-white">
        {/* Background Blobs */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-purple-200/40 rounded-full blur-[100px] -z-10"></div>
        <div className="absolute bottom-0 right-0 w-[600px] h-[400px] bg-pink-200/30 rounded-full blur-[100px] -z-10"></div>
        
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-purple-200 shadow-sm mb-8">
            <Rocket size={16} className="text-purple-600" />
            <span className="text-sm text-slate-600 font-medium">Your Partner in Tech & Business Growth</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-tight text-slate-900">
            ยกระดับธุรกิจคุณด้วย <br className="hidden md:block"/>
            <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-rose-500 bg-clip-text text-transparent drop-shadow-sm">
              ระบบ AI ที่ขยายให้คุณโตได้ไวกว่าเดิม
            </span>
          </h1>
          
          <p className="text-xl text-slate-600 mb-10 max-w-3xl mx-auto leading-relaxed font-light">
            <strong>ModGoScale</strong> ช่วยคุณลดขั้นตอนการทำงาน สร้างระบบอัตโนมัติ และพัฒนา Digital Product 
            ไม่ว่าคุณจะอยาก <span className="text-purple-600 font-medium">เรียนรู้เพื่อทำเอง</span>, 
            <span className="text-pink-600 font-medium"> ปรึกษาเชิงกลยุทธ์</span> หรือ 
            <span className="text-rose-500 font-medium"> ให้เราลงมือทำให้</span>
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto mt-8">
             <button onClick={() => scrollToSection('course')} className="group p-6 bg-white border border-slate-200 hover:border-purple-400 rounded-2xl transition shadow-lg hover:shadow-purple-100 text-left">
                <div className="bg-purple-100 w-12 h-12 rounded-xl flex items-center justify-center text-purple-600 mb-4 group-hover:scale-110 transition">
                  <BookOpen size={24} />
                </div>
                <h3 className="font-bold text-lg text-slate-800 mb-1">Education</h3>
                <p className="text-sm text-slate-500">สอนสร้าง Web & SaaS ด้วย AI แบบจับมือทำ</p>
             </button>
             
             <button onClick={() => scrollToSection('consult')} className="group p-6 bg-white border border-slate-200 hover:border-pink-400 rounded-2xl transition shadow-lg hover:shadow-pink-100 text-left">
                <div className="bg-pink-100 w-12 h-12 rounded-xl flex items-center justify-center text-pink-600 mb-4 group-hover:scale-110 transition">
                  <Users size={24} />
                </div>
                <h3 className="font-bold text-lg text-slate-800 mb-1">Consultation</h3>
                <p className="text-sm text-slate-500">ที่ปรึกษา AI & Business Automation</p>
             </button>

             <button onClick={() => scrollToSection('development')} className="group p-6 bg-white border border-slate-200 hover:border-rose-400 rounded-2xl transition shadow-lg hover:shadow-rose-100 text-left">
                <div className="bg-rose-100 w-12 h-12 rounded-xl flex items-center justify-center text-rose-500 mb-4 group-hover:scale-110 transition">
                  <Monitor size={24} />
                </div>
                <h3 className="font-bold text-lg text-slate-800 mb-1">Development</h3>
                <p className="text-sm text-slate-500">บริการรับทำเว็บไซต์และระบบพร้อมใช้</p>
             </button>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-20 bg-slate-50 scroll-mt-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            
            {/* Left Content: Text */}
            <div className="md:w-1/2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 text-purple-700 text-sm font-medium mb-4">
                <User size={16} /> WHO WE ARE
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900 leading-snug">
                จากประสบการณ์ Solopreneur <br/> สู่ <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">ผู้ช่วยของคุณ</span>
              </h2>
              <p className="text-slate-600 mb-6 text-lg font-light leading-relaxed">
                สวัสดีค่ะ! <strong>ModGoScale</strong> คือแบรนด์ของช่อง <strong>Modty.ai</strong> เราคือ Solopreneur ที่เข้าใจหัวอกคนทำธุรกิจคนเดียวและอยากเห็นทุกคนสร้างธุรกิจได้ด้วยตัวเอง
              </p>
              <p className="text-slate-600 mb-6 font-light leading-relaxed">
                เป้าหมายของเราคือช่วยให้คุณ <strong>สร้างระบบและเว็บไซต์ด้วย AI Vibe Coding</strong> แบบไม่ต้องเขียนโค้ดเอง (No-Code) เน้นสอนให้เข้าใจ <strong>คอนเซปต์ (Concept)</strong> และ <strong>โครงสร้าง (Structure)</strong> เพื่อให้คุณนำไปต่อยอดได้จริงกับทุกธุรกิจ
              </p>
              <p className="text-slate-600 mb-8 font-light leading-relaxed">
                เราเน้นการเลือกใช้เครื่องมือที่ <strong>"ง่าย ประหยัด และคุ้มค่า"</strong> พร้อมให้คำปรึกษาเรื่อง AI รอบด้าน ไม่ว่าจะเป็นงานสร้างภาพ กราฟิก วิดีโอ หรือถ้าคุณไม่มีเวลา เราก็มีบริการรับทำให้นะคะ
              </p>
              
              <div className="flex flex-wrap gap-4">
                 <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-purple-200 shadow-sm text-sm text-slate-600">
                    <Palette size={16} className="text-purple-600"/> AI Image & Graphics
                 </div>
                 <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-pink-200 shadow-sm text-sm text-slate-600">
                    <Video size={16} className="text-pink-600"/> AI Video Generation
                 </div>
                 <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-rose-200 shadow-sm text-sm text-slate-600">
                    <Code size={16} className="text-rose-500"/> Custom AI Web Dev
                 </div>
              </div>
            </div>
            
            {/* Right Content: Profile Image & Features */}
            <div className="md:w-1/2 w-full flex flex-col items-center">
              {/* Profile Image Wrapper */}
              <div className="relative mb-8 group cursor-pointer">
                {/* Glowing Background */}
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur opacity-40 group-hover:opacity-60 transition duration-500"></div>
                
                {/* Image */}
                <img 
                  src="image.png" 
                  alt="Modty Profile" 
                  className="relative w-56 h-56 rounded-full object-cover border-4 border-white shadow-xl z-10"
                />
                
                {/* Floating Badge */}
                <div className="absolute bottom-2 right-2 z-20 bg-white border border-purple-200 text-purple-600 px-4 py-1.5 rounded-full text-xs font-bold shadow-lg flex items-center gap-1">
                  <CheckCircle size={14} /> Modty.ai Founder
                </div>
              </div>

              {/* Features Box */}
              <div className="relative w-full">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-200 to-pink-200 blur-2xl opacity-30 rounded-3xl -z-10"></div>
                <div className="bg-white border border-slate-100 rounded-3xl p-8 shadow-xl">
                    <h3 className="text-xl font-bold text-slate-800 mb-6 text-center">เพื่อนคู่คิดสำหรับธุรกิจของคุณ</h3>
                    <div className="space-y-6">
                        <div className="flex gap-4">
                            <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 shrink-0">
                                <Users size={20}/>
                            </div>
                            <div>
                                <h4 className="font-semibold text-slate-900">Solopreneur Mindset</h4>
                                <p className="text-sm text-slate-500 mt-1">เข้าใจคนทำงานคนเดียว เข้าถึงง่าย คุยง่าย ไม่ยุ่งยากค่ะ</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="w-10 h-10 rounded-full bg-pink-100 flex items-center justify-center text-pink-600 shrink-0">
                                <Zap size={20}/>
                            </div>
                            <div>
                                <h4 className="font-semibold text-slate-900">AI Mastery</h4>
                                <p className="text-sm text-slate-500 mt-1">เชี่ยวชาญเครื่องมือ AI หลากหลาย พร้อมแนะนำสิ่งที่เหมาะกับคุณที่สุด</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="w-10 h-10 rounded-full bg-rose-100 flex items-center justify-center text-rose-500 shrink-0">
                                <Layout size={20}/>
                            </div>
                            <div>
                                <h4 className="font-semibold text-slate-900">Flexible Service</h4>
                                <p className="text-sm text-slate-500 mt-1">รับทำเว็บไซต์ที่ยืดหยุ่น ปรับแต่งได้ตามใจลูกค้า ใส่ใจเหมือนทำใช้เอง</p>
                            </div>
                        </div>
                    </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 1. Education Section */}
      <section id="course" className="py-24 bg-white scroll-mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 text-purple-700 text-sm font-semibold mb-8">
              SERVICE 1: EDUCATION
          </div>
          
          {/* Main Course Highlight */}
          <div className="flex flex-col lg:flex-row gap-16 items-center mb-24">
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-slate-900">เปลี่ยนไอเดียให้เป็น Web จริง<br/>ด้วย <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">Vibe Coding Master Route</span></h2>
              <p className="text-slate-600 mb-6 text-lg font-light">
                คอร์สเรียนที่จะสอนคุณสร้างเว็บไซต์และแอปพลิเคชันด้วย AI และ Google Ecosystem เต็มรูปแบบ โดยไม่ต้องเริ่มจากศูนย์
              </p>
              
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 mb-8 shadow-sm">
                <h3 className="font-bold text-xl mb-3 flex items-center gap-2 text-slate-800">
                  <Zap className="text-yellow-500" size={20}/> ทำไมต้องคอร์สนี้?
                </h3>
                <ul className="space-y-3">
                  <li className="flex gap-3 text-slate-600">
                    <CheckCircle size={20} className="text-purple-600 shrink-0 mt-0.5" />
                    <span className="font-light"><strong>ไม่ใช่แค่สร้างเว็บหน้าเดียว:</strong> สอนสร้าง Web App มีระบบสมาชิก (Login) และฐานข้อมูล (Database)</span>
                  </li>
                  <li className="flex gap-3 text-slate-600">
                    <CheckCircle size={20} className="text-purple-600 shrink-0 mt-0.5" />
                    <span className="font-light"><strong>คิดแบบ SaaS:</strong> สอนระบบคิดการสร้าง "บริการ" เพื่อแก้ปัญหาผู้ใช้และสร้างรายได้ระยะยาว</span>
                  </li>
                  <li className="flex gap-3 text-slate-600">
                    <CheckCircle size={20} className="text-purple-600 shrink-0 mt-0.5" />
                    <span className="font-light"><strong>ใช้ AI ทำงานเบื้องหลัง:</strong> ลดเวลา Coding เองด้วยการใช้ AI ช่วยเขียนโครงสร้าง</span>
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
                    <span className="text-5xl font-extrabold text-slate-900">5,900</span>
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
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Course 1: AI System Architect */}
              <div className="bg-white border border-slate-200 rounded-2xl p-8 hover:border-purple-300 transition duration-300 flex flex-col relative group shadow-sm hover:shadow-xl hover:shadow-purple-50">
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
                        <CheckCircle size={16} className="text-purple-500 shrink-0"/>
                        <span><strong>Prompt Engineering:</strong> สั่งงาน AI ให้แม่นยำ</span>
                      </li>
                      <li className="flex gap-2">
                        <CheckCircle size={16} className="text-purple-500 shrink-0"/>
                        <span><strong>Custom Gems:</strong> สอนสร้าง AI ผู้ช่วยส่วนตัว</span>
                      </li>
                      <li className="flex gap-2">
                        <Sparkles size={16} className="text-yellow-500 shrink-0"/>
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
              </div>

              {/* Course 2: AI Video & Content Mastery */}
              <div className="bg-white border border-slate-200 rounded-2xl p-8 hover:border-pink-300 transition duration-300 flex flex-col relative group shadow-sm hover:shadow-xl hover:shadow-pink-50">
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
                        <CheckCircle size={16} className="text-pink-500 shrink-0"/>
                        <span><strong>Next-Gen Tools:</strong> สอนใช้ Sora, Grok, Flow</span>
                      </li>
                      <li className="flex gap-2">
                        <CheckCircle size={16} className="text-pink-500 shrink-0"/>
                        <span><strong>Affiliate Workflow:</strong> ทำคลิปรีวิวให้ขายได้จริง</span>
                      </li>
                      <li className="flex gap-2">
                        <CheckCircle size={16} className="text-pink-500 shrink-0"/>
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
              </div>

              {/* Course 3: Google Automation & Simple Web */}
              <div className="bg-white border border-slate-200 rounded-2xl p-8 hover:border-green-300 transition duration-300 flex flex-col relative group shadow-sm hover:shadow-xl hover:shadow-green-50">
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
                        <CheckCircle size={16} className="text-green-500 shrink-0"/>
                        <span><strong>Gemini Coding:</strong> ให้ AI ช่วยเขียน Code</span>
                      </li>
                      <li className="flex gap-2">
                        <CheckCircle size={16} className="text-green-500 shrink-0"/>
                        <span><strong>Automation:</strong> แจ้งเตือน LINE, ส่งเมล Auto</span>
                      </li>
                      <li className="flex gap-2">
                        <CheckCircle size={16} className="text-green-500 shrink-0"/>
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
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* 2. Consultation Section */}
      <section id="consult" className="py-24 px-4 scroll-mt-16 bg-slate-50 relative">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-100 text-pink-700 text-sm font-semibold mb-4 border border-pink-200">
              SERVICE 2: CONSULTATION
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-slate-900">AI & Business Automation Consultant</h2>
            <p className="text-slate-600 text-lg max-w-2xl font-light">
              ปลดล็อกศักยภาพทีมงานและธุรกิจของคุณ ด้วยคำแนะนำจากผู้เชี่ยวชาญ ลดงานซ้ำซ้อน เพิ่มเวลาโฟกัสสิ่งที่สำคัญ
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row gap-12 hover:border-pink-300 transition duration-500 shadow-sm hover:shadow-lg">
            <div className="md:w-1/2 space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-slate-800 mb-4">บริการนี้เหมาะกับใคร?</h3>
                <ul className="space-y-4">
                  <li className="flex gap-4">
                    <div className="bg-pink-100 p-2 rounded-lg text-pink-600 h-fit"><TrendingUp size={20}/></div>
                    <div>
                      <h4 className="font-bold text-slate-900">เจ้าของธุรกิจ</h4>
                      <p className="text-slate-500 text-sm font-light">ที่ต้องการนำ AI มาลดต้นทุนและขั้นตอนการทำงาน</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <div className="bg-pink-100 p-2 rounded-lg text-pink-600 h-fit"><Layout size={20}/></div>
                    <div>
                      <h4 className="font-bold text-slate-900">ทีมงาน Operations</h4>
                      <p className="text-slate-500 text-sm font-light">ที่ต้องการวางระบบ Workflow อัตโนมัติ (Automation)</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <div className="bg-pink-100 p-2 rounded-lg text-pink-600 h-fit"><Server size={20}/></div>
                    <div>
                      <h4 className="font-bold text-slate-900">ผู้ที่ต้องการเลือก Tools</h4>
                      <p className="text-slate-500 text-sm font-light">ต้องการคำแนะนำการเลือก Tech Stack ที่เหมาะสมกับธุรกิจที่สุด</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="md:w-1/2 bg-slate-50 rounded-2xl p-8 border border-slate-200 flex flex-col justify-center">
              <h4 className="text-xl font-bold text-slate-800 mb-6 text-center">รายละเอียดค่าบริการ</h4>
              
              <div className="space-y-6">
                <div className="flex justify-between items-center border-b border-slate-200 pb-4">
                  <span className="text-slate-500 font-light">รูปแบบการปรึกษา</span>
                  <span className="text-slate-900 font-medium">Online Meeting (Zoom/Google Meet)</span>
                </div>
                 <div className="flex justify-between items-center border-b border-slate-200 pb-4">
                  <span className="text-slate-500 font-light">การดูแลหลังปรึกษา</span>
                  <span className="text-green-600 font-medium">ดูแลต่อ 7 วัน</span>
                </div>
                 <div className="flex justify-between items-center border-b border-slate-200 pb-4">
                  <span className="text-slate-500 font-light">ที่ปรึกษาระยะยาว</span>
                  <span className="text-slate-900 font-medium">ประจำโปรเจกต์ (สอบถามราคา)</span>
                </div>
                
                <div className="bg-white border border-pink-100 rounded-xl p-6 text-center mt-6 shadow-sm">
                  <p className="text-slate-500 text-sm mb-1 font-light">ราคาเริ่มต้นเพียง</p>
                  <div className="text-4xl font-bold text-pink-600 mb-4">2,000 THB <span className="text-lg text-slate-400 font-normal">/ชั่วโมง</span></div>
                  <a 
                    href={lineLink} 
                    target="_blank" 
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 w-full bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-lg font-medium transition shadow-md shadow-pink-200"
                  >
                    จองคิวปรึกษา
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Web Development Services */}
      <section id="development" className="py-24 bg-white border-t border-slate-100 scroll-mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-100 text-rose-600 text-sm font-semibold mb-4 border border-rose-200">
              SERVICE 3: DEVELOPMENT
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-slate-900">รับทำเว็บไซต์และระบบ <span className="text-rose-500">พร้อมใช้ทันที</span></h2>
            <p className="text-slate-600 text-lg font-light">เหมาะสำหรับเจ้าของธุรกิจที่ต้องการความรวดเร็ว สวยงาม และรองรับการขยายตัว</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Service A */}
            <div className="bg-white border border-slate-200 rounded-2xl p-8 hover:border-rose-300 transition duration-300 flex flex-col relative overflow-hidden group shadow-sm hover:shadow-xl hover:shadow-rose-50">
              <div className="absolute top-0 right-0 w-32 h-32 bg-rose-100 rounded-full blur-3xl -z-10 group-hover:bg-rose-200 transition"></div>
              
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-slate-800 mb-2">Service A: Digital Product Store</h3>
                <p className="text-rose-500 font-medium">ระบบร้านค้าสินค้าดิจิตอล</p>
              </div>

              <div className="space-y-4 mb-8 flex-grow">
                <p className="text-slate-600 leading-relaxed font-light">
                  สร้างเว็บไซต์สำหรับขายสินค้า Digital (E-book, คอร์สเรียน, Template, Preset) เชื่อมต่อระบบชำระเงิน และระบบส่งสินค้าอัตโนมัติ
                </p>
                <div className="bg-slate-50 p-4 rounded-xl space-y-2 border border-slate-100">
                    <div className="flex items-center gap-2 text-sm text-slate-600 font-light">
                        <CheckCircle size={16} className="text-rose-500"/> ระบบหลังบ้านจัดการง่าย
                    </div>
                    <div className="flex items-center gap-2 text-sm text-slate-600 font-light">
                        <CheckCircle size={16} className="text-rose-500"/> ดีไซน์ทันสมัย (Modern UI)
                    </div>
                    <div className="flex items-center gap-2 text-sm text-slate-600 font-light">
                        <CheckCircle size={16} className="text-rose-500"/> รองรับการขยายตัว (Scalable)
                    </div>
                </div>
              </div>

              <div className="flex items-center justify-between border-t border-slate-100 pt-6">
                <div>
                    <p className="text-sm text-slate-500 font-light">ราคาเริ่มต้น</p>
                    <p className="text-2xl font-bold text-slate-900">3,000 THB</p>
                </div>
                <a href={lineLink} target="_blank" rel="noreferrer" className="px-6 py-2 rounded-lg border border-rose-500 text-rose-500 hover:bg-rose-500 hover:text-white transition">
                    สนใจทำเว็บนี้
                </a>
              </div>
            </div>

            {/* Service B */}
            <div className="bg-white border border-slate-200 rounded-2xl p-8 hover:border-emerald-400 transition duration-300 flex flex-col relative overflow-hidden group shadow-sm hover:shadow-xl hover:shadow-emerald-50">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-100 rounded-full blur-3xl -z-10 group-hover:bg-emerald-200 transition"></div>
              
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-slate-800 mb-2">Service B: Custom Web Development</h3>
                <p className="text-emerald-500 font-medium">ระบบเว็บไซต์ตามสั่ง (Vibe Coding Style)</p>
              </div>

              <div className="space-y-4 mb-8 flex-grow">
                <p className="text-slate-600 leading-relaxed font-light">
                  รับทำเว็บไซต์ตามความต้องการเฉพาะทาง ไม่ว่าจะเป็นระบบจัดการหอพัก, ระบบดีลเลอร์รถยนต์, หรือ Landing Page สำหรับธุรกิจเฉพาะทาง
                </p>
                <div className="bg-slate-50 p-4 rounded-xl space-y-2 border border-slate-100">
                    <div className="flex items-center gap-2 text-sm text-slate-600 font-light">
                        <CheckCircle size={16} className="text-emerald-500"/> ออกแบบตามโจทย์ธุรกิจ
                    </div>
                    <div className="flex items-center gap-2 text-sm text-slate-600 font-light">
                        <CheckCircle size={16} className="text-emerald-500"/> โค้ดคุณภาพสูง สะอาด
                    </div>
                    <div className="flex items-center gap-2 text-sm text-slate-600 font-light">
                        <CheckCircle size={16} className="text-emerald-500"/> ปรึกษาฟีเจอร์ที่ทำได้จริง
                    </div>
                </div>
              </div>

              <div className="flex items-center justify-between border-t border-slate-100 pt-6">
                <div>
                    <p className="text-sm text-slate-500 font-light">ราคาแพคเกจ</p>
                    <p className="text-2xl font-bold text-slate-900">3,000 THB <span className="text-sm font-normal text-slate-500">เริ่มต้น</span></p>
                </div>
                <a href={lineLink} target="_blank" rel="noreferrer" className="px-6 py-2 rounded-lg border border-emerald-500 text-emerald-500 hover:bg-emerald-500 hover:text-white transition">
                    สอบถามรายละเอียด
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA Bottom Section */}
      <section className="py-20 bg-gradient-to-b from-slate-50 to-purple-50 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900">พร้อมที่จะ Scale ธุรกิจของคุณหรือยังคะ?</h2>
          <p className="text-slate-600 mb-10 text-lg font-light">
            ModGoScale คือ Partner ที่ครบวงจรที่สุดสำหรับคุณ <br/>
            ทักหาเราวันนี้ เพื่อเริ่มโปรเจกต์ของคุณทันทีค่ะ
          </p>
          <a 
            href={lineLink} 
            target="_blank" 
            rel="noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white px-8 py-4 rounded-full font-bold text-xl transition transform hover:scale-105 shadow-lg shadow-purple-200"
          >
            <MessageCircle size={24} />
            แอดไลน์ปรึกษาฟรี: AI VibeCoding
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-50 border-t border-slate-200 py-10">
        <div className="max-w-7xl mx-auto px-4 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
              ModGoScale
            </span>
            <p className="text-slate-500 mt-2 text-sm font-light">
              Helping businesses grow with AI & Modern Web Technology.
            </p>
          </div>
          <div className="text-slate-500 text-sm font-light">
            © {new Date().getFullYear()} ModGoScale. All rights reserved.
          </div>
        </div>
      </footer>

    </div>
  );
};

export default App;
