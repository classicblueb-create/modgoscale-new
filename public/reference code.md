<!DOCTYPE html>
<html lang="th" class="scroll-smooth">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>modgoscale | Architecting AI Systems</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://fonts.googleapis.com/css2?family=Prompt:wght@300;400;500;600&family=Syne:wght@400;600;800&display=swap" rel="stylesheet">
    <style>
        /* Typography */
        :root {
            --font-display: 'Syne', sans-serif;
            --font-body: 'Prompt', sans-serif;
            --bg-eggshell: #F9F8F4;
            --text-main: #111111;
            --text-muted: #666666;
            --border-color: #E6E4DD;
        }
        body {
            font-family: var(--font-body);
            background-color: var(--bg-eggshell);
            color: var(--text-main);
            overflow-x: hidden;
            cursor: none; /* Hide default cursor */
        }
        h1, h2, h3, .font-display {
            font-family: var(--font-display);
        }

        /* Custom Cursor - Dark mode for Light theme */
        .cursor-dot {
            width: 8px;
            height: 8px;
            background-color: var(--text-main);
            border-radius: 50%;
            position: fixed;
            top: 0;
            left: 0;
            pointer-events: none;
            z-index: 9999;
            transform: translate(-50%, -50%);
            transition: width 0.3s, height 0.3s, background-color 0.3s;
        }
        .cursor-outline {
            width: 40px;
            height: 40px;
            border: 1px solid rgba(17, 17, 17, 0.4);
            border-radius: 50%;
            position: fixed;
            top: 0;
            left: 0;
            pointer-events: none;
            z-index: 9998;
            transform: translate(-50%, -50%);
            transition: width 0.2s, height 0.2s, transform 0.1s ease-out;
        }
        body:hover .cursor-dot, body:hover .cursor-outline { opacity: 1; }
        
        .hover-target:hover ~ .cursor-outline,
        a:hover ~ .cursor-outline,
        button:hover ~ .cursor-outline {
            width: 60px;
            height: 60px;
            border-color: var(--text-main);
            background-color: rgba(17, 17, 17, 0.03);
        }

        /* Scroll Animations (Reveal) */
        .reveal {
            opacity: 0;
            transform: translateY(40px);
            transition: all 1.2s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .reveal.active {
            opacity: 1;
            transform: translateY(0);
        }
        .reveal-delay-1 { transition-delay: 0.2s; }
        .reveal-delay-2 { transition-delay: 0.4s; }

        /* Parallax Image Container */
        .parallax-container {
            overflow: hidden;
            position: relative;
        }
        .parallax-img {
            height: 120%;
            width: 100%;
            object-fit: cover;
            position: absolute;
            top: -10%;
            left: 0;
            transition: transform 0.1s ease-out;
        }

        /* Image Hover Zoom */
        .hover-zoom {
            overflow: hidden;
        }
        .hover-zoom img {
            transition: transform 1.5s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .hover-zoom:hover img {
            transform: scale(1.05);
        }

        /* Minimal Scrollbar for Light Theme */
        ::-webkit-scrollbar {
            width: 6px;
        }
        ::-webkit-scrollbar-track {
            background: var(--bg-eggshell);
        }
        ::-webkit-scrollbar-thumb {
            background: #D1D1D1;
        }
        ::-webkit-scrollbar-thumb:hover {
            background: #A3A3A3;
        }

        /* Text Stroke Effect (Dark) */
        .text-stroke {
            color: transparent;
            -webkit-text-stroke: 1px rgba(17, 17, 17, 0.2);
            transition: all 0.5s ease;
        }
        .text-stroke:hover {
            color: var(--text-main);
            -webkit-text-stroke: 0px;
        }
        
        /* Nav Backdrop */
        .nav-blur {
            background-color: rgba(249, 248, 244, 0.85);
            backdrop-filter: blur(12px);
            border-bottom: 1px solid rgba(230, 228, 221, 0);
            transition: all 0.3s ease;
        }
        .nav-blur.scrolled {
            border-bottom: 1px solid rgba(230, 228, 221, 1);
        }
    </style>
</head>
<body class="antialiased selection:bg-[#111111] selection:text-[#F9F8F4]">

    <!-- Custom Cursor Elements -->
    <div class="cursor-dot hidden md:block" id="cursor-dot"></div>
    <div class="cursor-outline hidden md:block" id="cursor-outline"></div>

    <!-- Navigation -->
    <nav id="navbar" class="fixed w-full z-50 top-0 py-6 px-8 md:px-16 flex justify-between items-center nav-blur">
        <div class="text-xl font-display font-bold tracking-widest uppercase hover-target">
            modgoscale<span class="text-[#888]">.</span>
        </div>
        <div class="hidden md:flex space-x-12 text-sm tracking-widest uppercase font-medium">
            <a href="#about" class="text-[#666] hover:text-[#111] transition-colors duration-300">Concept</a>
            <a href="#services" class="text-[#666] hover:text-[#111] transition-colors duration-300">Expertise</a>
            <a href="#contact" class="text-[#666] hover:text-[#111] transition-colors duration-300">Initiate</a>
        </div>
        <button class="md:hidden text-[#111] hover-target focus:outline-none">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
        </button>
    </nav>

    <!-- Hero Section -->
    <header class="relative min-h-screen flex flex-col justify-center px-8 md:px-16 overflow-hidden pt-20">
        <!-- Abstract Subtle Lines Background -->
        <div class="absolute inset-0 z-0 opacity-[0.03] pointer-events-none">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#111" stroke-width="1"/>
                    </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
        </div>

        <div class="relative z-10 max-w-7xl mx-auto w-full">
            <p class="text-sm md:text-base tracking-[0.3em] uppercase mb-6 text-[#666] reveal font-medium">The Architecture of Intelligence</p>
            <h1 class="text-6xl md:text-8xl lg:text-[10rem] font-display font-bold leading-[0.9] tracking-tight reveal reveal-delay-1 text-[#111]">
                ENGINEERING <br />
                <span class="text-[#888] italic font-light">THE</span> FUTURE
            </h1>
            
            <div class="mt-16 flex flex-col md:flex-row md:items-end justify-between w-full reveal reveal-delay-2">
                <p class="max-w-lg text-[#555] text-lg md:text-xl font-light leading-relaxed">
                    บริการสอนและรังสรรค์ระบบ AI ระดับองค์กร ออกแบบโครงสร้างอย่างประณีต ดุจสถาปนิกออกแบบตึกระฟ้าที่มีรากฐานมั่นคง
                </p>
                <a href="#about" class="mt-10 md:mt-0 inline-flex items-center space-x-4 border-b border-[#ccc] pb-2 hover:border-[#111] transition-colors duration-300 hover-target uppercase tracking-widest text-sm font-medium text-[#111]">
                    <span>Discover More</span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <line x1="12" y1="5" x2="12" y2="19"></line>
                        <polyline points="19 12 12 19 5 12"></polyline>
                    </svg>
                </a>
            </div>
        </div>
    </header>

    <!-- Statement / About Section -->
    <section id="about" class="py-32 md:py-48 px-8 md:px-16 bg-white">
        <div class="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20 items-center">
            <div class="w-full lg:w-1/2 parallax-container h-[65vh] hover-zoom shadow-2xl shadow-gray-200/50">
                <!-- Bright minimalist architecture image -->
                <img src="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=1000" alt="Minimalist Building Structure" class="parallax-img opacity-90" data-speed="0.15">
            </div>
            <div class="w-full lg:w-1/2 space-y-10">
                <h2 class="text-4xl md:text-6xl font-display font-bold reveal text-[#111] leading-tight">Solid Foundations.<br/><span class="text-[#888]">Infinite Scale.</span></h2>
                <div class="w-16 h-[2px] bg-[#111] reveal"></div>
                <div class="space-y-6">
                    <p class="text-[#555] text-lg leading-loose reveal font-light">
                        ที่ <span class="text-[#111] font-medium">modgoscale</span> เราไม่ได้เพียงแค่เขียนโค้ด แต่เราออกแบบ "สถาปัตยกรรม" ของระบบ AI 
                        เราเชื่อมั่นว่าระบบอัจฉริยะที่ยั่งยืน ต้องเริ่มต้นจากรากฐานข้อมูลที่แข็งแกร่ง โครงสร้างที่ขยายตัวได้ 
                    </p>
                    <p class="text-[#555] text-lg leading-loose reveal reveal-delay-1 font-light">
                        เปรียบเสมือนการสร้างสถาปัตยกรรมระดับ Masterpiece เราผสมผสานศาสตร์แห่งวิศวกรรมข้อมูล เข้ากับศิลปะแห่งการประยุกต์ใช้ในธุรกิจ เพื่อผลลัพธ์ที่จับต้องได้จริง
                    </p>
                </div>
            </div>
        </div>
    </section>

    <!-- Services Section -->
    <section id="services" class="py-32 px-8 md:px-16" style="background-color: var(--bg-eggshell);">
        <div class="max-w-7xl mx-auto">
            <div class="flex justify-between items-end mb-24 reveal">
                <h2 class="text-5xl md:text-7xl font-display font-bold text-[#111]">EXPERTISE<span class="text-[#888]">.</span></h2>
                <p class="hidden md:block text-[#666] tracking-widest uppercase text-sm font-medium">Our Disciplines</p>
            </div>

            <div class="space-y-0 border-t border-[#E6E4DD]">
                <!-- Service 1 -->
                <div class="group relative py-12 md:py-16 border-b border-[#E6E4DD] hover:border-[#111] transition-colors duration-500 flex flex-col md:flex-row justify-between items-start md:items-center cursor-pointer hover-target reveal">
                    <div class="flex items-center space-x-8 md:space-x-16 z-10">
                        <span class="text-[#999] font-display text-2xl md:text-4xl font-light">01</span>
                        <div>
                            <h3 class="text-3xl md:text-5xl font-display font-semibold text-[#111] group-hover:translate-x-4 transition-transform duration-500">AI Education</h3>
                            <p class="mt-4 text-[#666] text-sm md:text-base font-light group-hover:translate-x-4 transition-transform duration-500 delay-75 max-w-xl">บริการฝึกอบรมและถ่ายทอดองค์ความรู้ด้าน AI ให้กับบุคลากรในองค์กร ตั้งแต่ระดับพื้นฐานจนถึงการประยุกต์ใช้ขั้นสูง</p>
                        </div>
                    </div>
                    <div class="mt-8 md:mt-0 md:opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10">
                        <span class="text-sm tracking-widest uppercase border border-[#111] text-[#111] rounded-full px-8 py-3 group-hover:bg-[#111] group-hover:text-white transition-colors">Explore</span>
                    </div>
                    <!-- Hover Image Reveal (Light Theme) -->
                    <div class="absolute top-1/2 left-3/4 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[220px] opacity-0 group-hover:opacity-100 pointer-events-none transition-all duration-700 ease-out z-0 scale-95 group-hover:scale-100 hidden md:block shadow-xl">
                        <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800" alt="Education Workspace" class="w-full h-full object-cover">
                    </div>
                </div>

                <!-- Service 2 -->
                <div class="group relative py-12 md:py-16 border-b border-[#E6E4DD] hover:border-[#111] transition-colors duration-500 flex flex-col md:flex-row justify-between items-start md:items-center cursor-pointer hover-target reveal">
                    <div class="flex items-center space-x-8 md:space-x-16 z-10">
                        <span class="text-[#999] font-display text-2xl md:text-4xl font-light">02</span>
                        <div>
                            <h3 class="text-3xl md:text-5xl font-display font-semibold text-[#111] group-hover:translate-x-4 transition-transform duration-500">System Integration</h3>
                            <p class="mt-4 text-[#666] text-sm md:text-base font-light group-hover:translate-x-4 transition-transform duration-500 delay-75 max-w-xl">ออกแบบและติดตั้งสถาปัตยกรรม AI ที่เชื่อมต่อกับระบบธุรกิจและฐานข้อมูลเดิมได้อย่างไร้รอยต่อ</p>
                        </div>
                    </div>
                    <div class="mt-8 md:mt-0 md:opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10">
                        <span class="text-sm tracking-widest uppercase border border-[#111] text-[#111] rounded-full px-8 py-3 group-hover:bg-[#111] group-hover:text-white transition-colors">Explore</span>
                    </div>
                    <!-- Hover Image Reveal -->
                    <div class="absolute top-1/2 left-3/4 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[220px] opacity-0 group-hover:opacity-100 pointer-events-none transition-all duration-700 ease-out z-0 scale-95 group-hover:scale-100 hidden md:block shadow-xl">
                        <img src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=800" alt="Integration" class="w-full h-full object-cover">
                    </div>
                </div>

                <!-- Service 3 -->
                <div class="group relative py-12 md:py-16 border-b border-[#E6E4DD] hover:border-[#111] transition-colors duration-500 flex flex-col md:flex-row justify-between items-start md:items-center cursor-pointer hover-target reveal">
                    <div class="flex items-center space-x-8 md:space-x-16 z-10">
                        <span class="text-[#999] font-display text-2xl md:text-4xl font-light">03</span>
                        <div>
                            <h3 class="text-3xl md:text-5xl font-display font-semibold text-[#111] group-hover:translate-x-4 transition-transform duration-500">Scalable Infrastructure</h3>
                            <p class="mt-4 text-[#666] text-sm md:text-base font-light group-hover:translate-x-4 transition-transform duration-500 delay-75 max-w-xl">วางโครงสร้างพื้นฐานด้าน Data และประเมินโมเดล เพื่อรองรับการขยายสเกลการทำงานในอนาคต</p>
                        </div>
                    </div>
                    <div class="mt-8 md:mt-0 md:opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10">
                        <span class="text-sm tracking-widest uppercase border border-[#111] text-[#111] rounded-full px-8 py-3 group-hover:bg-[#111] group-hover:text-white transition-colors">Explore</span>
                    </div>
                    <!-- Hover Image Reveal -->
                    <div class="absolute top-1/2 left-3/4 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[220px] opacity-0 group-hover:opacity-100 pointer-events-none transition-all duration-700 ease-out z-0 scale-95 group-hover:scale-100 hidden md:block shadow-xl">
                        <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800" alt="Infrastructure" class="w-full h-full object-cover">
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Parallax Divider (Light Theme) -->
    <section class="h-[60vh] parallax-container bg-white">
        <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=2000" alt="Architecture Abstract" class="parallax-img opacity-20" data-speed="0.3">
        <div class="absolute inset-0 bg-[#F9F8F4]/30 flex items-center justify-center"></div>
        <div class="absolute inset-0 flex items-center justify-center pointer-events-none">
            <h2 class="text-5xl md:text-8xl font-display font-bold text-center uppercase tracking-widest text-stroke reveal">Design the Unseen</h2>
        </div>
    </section>

    <!-- Contact / Footer -->
    <footer id="contact" class="pt-32 pb-12 px-8 md:px-16 bg-white relative overflow-hidden">
        <div class="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end border-b border-[#E6E4DD] pb-24 reveal">
            <div class="mb-12 md:mb-0">
                <p class="text-[#666] uppercase tracking-[0.2em] text-sm mb-6 font-medium">Ready to build?</p>
                <h2 class="text-6xl md:text-8xl font-display font-bold leading-none text-[#111]">LET'S<br/>SCALE.</h2>
            </div>
            
            <div class="flex flex-col space-y-4 text-left md:text-right">
                <a href="mailto:hello@modgoscale.com" class="text-2xl md:text-3xl font-light text-[#111] hover:text-[#666] transition-colors hover-target border-b border-transparent hover:border-[#111] inline-block pb-1">hello@modgoscale.com</a>
                <p class="text-[#666] font-light text-lg">Bangkok, Thailand</p>
                <div class="pt-6 flex justify-start md:justify-end space-x-8">
                    <a href="#" class="text-[#111] font-medium hover:text-[#666] uppercase tracking-wider text-sm hover-target transition-colors">LinkedIn</a>
                    <a href="#" class="text-[#111] font-medium hover:text-[#666] uppercase tracking-wider text-sm hover-target transition-colors">GitHub</a>
                </div>
            </div>
        </div>

        <!-- Massive Logo Footer -->
        <div class="mt-16 text-center reveal">
            <h1 class="text-[14vw] font-display font-bold leading-none text-[#F0EFEA] select-none tracking-tight">modgoscale.</h1>
        </div>

        <div class="mt-8 flex flex-col md:flex-row justify-between items-center text-xs text-[#888] tracking-widest uppercase font-medium">
            <p>&copy; 2026 Modgoscale. All rights reserved.</p>
            <p class="mt-4 md:mt-0">Architected in Bangkok</p>
        </div>
    </footer>

    <!-- Scripts for Animations -->
    <script>
        // Navbar Scroll Effect
        const navbar = document.getElementById('navbar');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });

        // Custom Cursor Logic
        const cursorDot = document.getElementById('cursor-dot');
        const cursorOutline = document.getElementById('cursor-outline');

        window.addEventListener('mousemove', (e) => {
            const posX = e.clientX;
            const posY = e.clientY;

            cursorDot.style.transform = `translate(${posX}px, ${posY}px)`;
            
            cursorOutline.animate({
                transform: `translate(${posX}px, ${posY}px)`
            }, { duration: 400, fill: "forwards" });
        });

        // Intersection Observer for Scroll Reveals
        const revealOptions = {
            threshold: 0.1,
            rootMargin: "0px 0px -50px 0px"
        };

        const revealObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    observer.unobserve(entry.target);
                }
            });
        }, revealOptions);

        document.querySelectorAll('.reveal').forEach(el => {
            revealObserver.observe(el);
        });

        // Simple Parallax Effect
        const parallaxImages = document.querySelectorAll('.parallax-img');
        
        window.addEventListener('scroll', () => {
            let scrollY = window.pageYOffset;
            
            parallaxImages.forEach(img => {
                let speed = img.getAttribute('data-speed');
                const rect = img.parentElement.getBoundingClientRect();
                const absoluteTop = scrollY + rect.top;
                
                if(rect.top < window.innerHeight && rect.bottom > 0) {
                    let yPos = (scrollY - absoluteTop) * speed;
                    img.style.transform = `translateY(${yPos}px)`;
                }
            });
        });
    </script>
</body>
</html>