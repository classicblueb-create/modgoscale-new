// FREE RESOURCES DATA — Modty.ai AI Research Library

export const FREE_RESOURCES = [
  {
    id: "vibe-flow-ui-prompt-template",
    title: "VibeFlow UI — Prompt Template สร้าง Web App UI สำเร็จรูปด้วย AI",
    subtitle: "เปลี่ยนภาษาคนให้กลายเป็น React Application พร้อมใช้งานจริงแบบ Production-Ready ในไม่กี่วินาที",
    category: "Vibe Coding",
    categoryBadge: "PROMPT TEMPLATE & SYSTEM",
    readTime: "5 นาที",
    date: "2025-08",
    tags: ["Vibe Coding", "React", "Prompt Template", "UI/UX", "Tailwind CSS"],
    summary: "ชุด Prompt และ Design System Foundation ที่ช่วยให้คุณสั่ง AI (Claude/ChatGPT/Gemini) สร้าง UI หน้าเว็บ Dashboard และ Web App มีมิติ ครบทั้ง Layout, Styling และ Responsive โดยไม่ต้องเขียนโค้ดเองตั้งแต่แรก",
    featured: true,
    content: {
      intro: "VibeFlow UI คือแนวคิดและชุด Prompt System ที่ช่วยเปลี่ยน 'ภาษาคน' ให้กลายเป็น React Application พร้อมใช้งานจริงแบบ Production-ready แทนที่จะต้องวาด Wireframe เอง จัด Layout เอง หรือเขียน Boilerplate โค้ดเอง คุณแค่สั่งงานด้วย Structured Prompt และเลือก Design Direction ที่เหมาะกับแบรนด์",
      workflowSteps: [
        { step: "01. Describe", desc: "พิมพ์สิ่งที่ต้องการเป็นภาษาปกติ (เช่น Pricing Page, Dashboard, Sign-up Flow, Landing Page)" },
        { step: "02. Style", desc: "เลือก Visual Style จาก 9 แนว หรือใช้ Design System Tokens ของตัวเอง" },
        { step: "03. Ship", desc: "ให้ AI เขียน React App + Tailwind CSS พร้อมนำไป Deploy ใช้งานจริงได้ทันที" }
      ],
      styles: [
        { name: "Neobrutalist", desc: "Heavy black borders, offset shadows, saturated colors (เหมาะกับ Portfolio, Creative Agency)" },
        { name: "Flat Design", desc: "ไม่มี Shadow/Gradient, สีทึบ, Layout ชัด (เหมาะกับ Dashboard, Business Application)" },
        { name: "Glassmorphism", desc: "backdrop-filter: blur(), transparent white layer, gradient (เหมาะกับ Media App, Premium SaaS)" },
        { name: "Minimalist", desc: "Whitespace เยอะ, สีใช้น้อย, typography บาง (เหมาะกับ Content-first, Premium Brand)" },
        { name: "Cyberpunk", desc: "Dark background, neon accent, glow effect (เหมาะกับ Tech Product, Gaming)" }
      ],
      promptCopyText: `คุณคือ Senior Frontend Architect และ UI Specialist
โปรดสร้าง React + Tailwind CSS Component สำหรับ [ระบุประเภท UI เช่น SaaS Dashboard / Landing Page]

[DESIGN DIRECTION]
- Design Style: [เลือกสไตล์ เช่น Minimalist / Glassmorphism / Neobrutalist]
- Primary Color: #FF6A2A (Signature Accent)
- Background Color: #F9F8F4 (Warm Eggshell) / #111111 (Dark Mode)
- Typography: Inter / Kanit / Satoshi

[LAYOUT REQUIREMENTS]
1. Header / Navigation: Logo, Navigation Links, Search Input, CTA Button
2. Main Section: Metric Cards (4 Grid), Data Visualization Chart, Recent Activity Table
3. Sidebar: Collapsible Navigation with Icons and Active Indicators
4. Responsiveness: Fully mobile-responsive (sm, md, lg, xl breakpoints)

[CODE QUALITY RULES]
- ใช้องค์ประกอบ JSX แท้ Clean Code ไม่มี External Library ลึกลับ
- มี Hover Effects และ Micro-animations ที่ให้ความรู้สึกเป็นระบบพรีเมียม
- ใส่ Comments กำกับแต่ละ Component ให้เข้าใจง่าย`,
      takeaways: [
        "ไม่ต้องเริ่มต้นจากหน้ากระดาษว่างเปล่าอีกต่อไป",
        "คุม Design Direction และแบรนด์ได้ 100% แม้ไม่ถนัด Design Tool",
        "ประหยัดเวลาพัฒนาหน้าเว็บจากเดิม 2-3 วัน เหลือเพียงไม่กี่นาที"
      ]
    },
    cta: {
      title: "อยากเรียนวิธีสร้าง Web App และ AI Tool ของตัวเองแบบเชิงลึก?",
      description: "คอร์ส Vibe Coding Master Route จะสอนคุณสร้างเว็บไซต์และแอปพลิเคชันที่มีระบบสมาชิก (Login) ฐานข้อมูล (Database) และระบบชำระเงินออโต้ ตั้งแต่เริ่มต้นจนถึง Deploy ใช้งานจริง โดยไม่จำเป็นต้องมีพื้นฐานเขียนโค้ด",
      primaryBtnText: "สมัครเรียน Vibe Coding Master Route (2,990.-)",
      secondaryBtnText: "ปรึกษา Modty เชิงกลยุทธ์ 1:1"
    }
  },
  {
    id: "reverse-engineering-prompt",
    title: "Reverse Engineering Prompt — แกะสูตรแนวคิดคนสำเร็จด้วย AI",
    subtitle: "เปลี่ยนผลงาน รูปแบบ หรือความสำเร็จของคนอื่น ให้กลายเป็น Framework และ Action Plan ที่คุณนำมาปรับใช้ได้ทันที",
    category: "Prompt Engineering",
    categoryBadge: "STRATEGY PLAYBOOK",
    readTime: "4 นาที",
    date: "2025-08",
    tags: ["Reverse Engineering", "Prompt Engineering", "Strategy", "Business"],
    summary: "วิธีวิเคราะห์โครงสร้างเบื้องหลังของ Content, สินค้า หรือ Business Model ที่ประสบความสำเร็จ แล้วใช้ AI ถอดรหัสย้อนกลับมาเป็นสเต็ปการทำงานของคุณเอง",
    featured: true,
    content: {
      intro: "Reverse Engineering คือหนึ่งในทักษะที่สำคัญที่สุดในยุค AI — การที่คุณไม่ต้องเริ่มจากศูนย์ แต่ใช้ AI ช่วยถอดรหัส (Deconstruct) ผลงานที่ประสบความสำเร็จในตลาด แล้วแปลงออกมาเป็น Framework, Prompt, และ Action Plan ที่เหมาะกับบริบทของคุณ",
      workflowSteps: [
        { step: "01. Input Analysis", desc: "นำข้อความ รูปภาพ หรือโครงสร้างผลงานต้นแบบที่คุณชื่นชอบป้อนให้ AI" },
        { step: "02. Deconstruct", desc: "สั่ง AI ให้ถอดรหัสองค์ประกอบหลัก (Hook, Narrative Arc, Visual Style, Value Proposition)" },
        { step: "03. Rebuild Blueprint", desc: "สร้างเป็น Template หรือ Workflow ใหม่ที่เป็นเอกลักษณ์ของคุณเอง" }
      ],
      promptCopyText: `คุณคือ Master Business Analyst และ Reverse Engineering Specialist

โปรดวิเคราะห์ผลงาน/เนื้อหาต้นแบบต่อไปนี้:
[แปะเนื้อหา / ข้อความ / คำอธิบายผลงานต้นแบบที่นี่]

โปรดถอดรหัสย้อนกลับ (Reverse Engineer) ตามโครงสร้าง 4 ส่วนดังนี้:

1. CORE STRUCTURE & PATTERN:
- โครงสร้างหลักตั้งแต่เริ่มต้น กลางเรื่อง จนถึงตอนจบคืออะไร?
- อะไรคือ Trigger หรือ Hook ที่ทำให้คนสนใจทันที?

2. PSYCHOLOGICAL DRIVERS:
- อารมณ์ ความรู้สึก หรือแรงจูงใจอะไรที่ผลงานนี้กระตุ้นผู้ดู/ผู้อ่าน?

3. REUSABLE FRAMEWORK:
- จงสรุปเป็นสูตร 3-5 ขั้นตอน (Step-by-step Framework) ที่คนอื่นสามารถนำไปปรับใช้กับเรื่องของตัวเองได้

4. CUSTOM ACTION PLAN FOR ME:
- บริบทธุรกิจของฉันคือ: [ระบุธุรกิจ/งานของคุณ]
- จงเขียนแนวทางการนำ Framework นี้มาสร้างเป็นผลงานใหม่ของฉัน 1 ตัวอย่างแบบละเอียด`,
      takeaways: [
        "ประหยัดเวลารองผิดลองถูกนับร้อยชั่วโมง",
        "เข้าใจเบื้องหลังความสำเร็จแทนการก๊อปปี้แบบตื้นเขิน",
        "สามารถต่อยอดเป็น Workflow ถาวรของตัวเองได้"
      ]
    },
    cta: {
      title: "อยากนำเทคนิค AI ไปปรับใช้กับ Workflow จริงในธุรกิจคุณ?",
      description: "Modty รับให้คำปรึกษาแบบ 1:1 และจัด Private / Corporate Workshop เพื่อออกแบบ AI Workflow และระบบอัตโนมัติที่แก้ไขปัญหาตรงจุดสำหรับทีมของคุณ",
      primaryBtnText: "จองคิวปรึกษา Modty 1:1",
      secondaryBtnText: "ออกแบบ Workshop สำหรับองค์กร"
    }
  },
  {
    id: "ai-calendar-assistant-guide",
    title: "วิธีทำ AI Calendar Assistant ด้วย ChatGPT Work & Custom Skills",
    subtitle: "จัดตารางงาน สรุปนัดหมาย และเตรียมวาระประชุมให้อัตโนมัติในทุกเช้า",
    category: "Automation",
    categoryBadge: "PRODUCTIVITY WORKFLOW",
    readTime: "6 นาที",
    date: "2025-08",
    tags: ["Automation", "ChatGPT Work", "Custom Skills", "Productivity"],
    summary: "สอนตั้งค่าผู้ช่วย AI ส่วนตัวสำหรับการบริหารเวลา จัดการนัดหมาย แจ้งเตือนงานสำคัญ และสรุป Briefing รายวันเพื่อเพิ่ม Productivity 3X",
    featured: false,
    content: {
      intro: "เปลี่ยน ChatGPT ให้กลายเป็น Executive Assistant ส่วนตัวที่ไม่เพียงแค่ตอบคำถาม แต่คอยตรวจสอบตารางงานใน Google Calendar สรุปนัดหมายสำคัญ เตรียมข้อมูลสำหรับเข้าประชุม และเตือนความจำสิ่งที่คุณต้องโฟกัสในแต่ละวัน",
      workflowSteps: [
        { step: "01. Connect Calendar", desc: "เชื่อมต่อ Calendar & Workspace ผ่าน Custom Skill หรือ Automation Connector" },
        { step: "02. Define Briefing Format", desc: "กำหนดรูปแบบสรุปยอดนัดหมาย ประธานในการประชุม และ Action Items ที่ต้องตาม" },
        { step: "03. Automation Trigger", desc: "ตั้งเวลาให้ผู้ช่วยส่ง Morning Briefing รายวันอัตโนมัติ" }
      ],
      promptCopyText: `คุณคือ Executive Assistant ประจำตัวของฉัน

ทุกเช้าเวลา 08:00 น. โปรดทำหน้าที่ Morning Briefing โดยวิเคราะห์ข้อมูลตารางงานและประชุมของฉันในวันนี้:

[DUTIES]
1. SUMMARY OF TODAY:
- สรุปภาพรวมนัดหมายและประชุมทั้งหมดเรียงตามลำดับเวลา
- ไฮไลท์การประชุมสำคัญที่ต้องเตรียมตัวเป็นพิเศษ (เช่น ลูกค้าสำคัญ / การตัดสินใจเชิงกลยุทธ์)

2. MEETING PREPARATION:
- สำหรับแต่ละการประชุม ให้สรุปเป้าหมายหลักของการประชุมนั้นๆ ใน 2 บรรทัด
- สิ่งที่ฉันควรเตรียมตัวพูดหรือเอกสารที่ต้องถือเข้าประชุม

3. TIME BUFFER & FOCUS BLOCK:
- คำนวณช่วงเวลาว่างที่เหลือในวันนี้ที่ฉันสามารถใช้โฟกัสทำงานสำคัญ (Focus Time)

โปรดเขียนรายงานด้วยภาษาไทยที่สุภาพ กระชับ และอ่านง่ายทางหน้าจอโทรศัพท์`,
      takeaways: [
        "เริ่มต้นวันทำงานด้วยความพร้อม ไม่พลาดนัดหมายสำคัญ",
        "ลดเวลาเตรียมตัวก่อนเข้าประชุมลงมากกว่า 50%",
        "วางแผน Focus Time อย่างมีประสิทธิภาพ"
      ]
    },
    cta: {
      title: "อยากสร้างระบบ AI Operating System สำหรับตัวคุณหรือทีมงาน?",
      description: "เข้าร่วมคอร์สเรียน ChatGPT Work + Codex หรือ Custom Workshop กับ Modty เพื่อสร้างระบบ AI Assistant ที่เชื่อมต่อกับ Google Sheets, LINE OA และ Database ของคุณ",
      primaryBtnText: "ดูรายละเอียดคอร์ส ChatGPT Work",
      secondaryBtnText: "สอบถามรายละเอียดการจัด Workshop"
    }
  },
  {
    id: "ai-carousel-visual-system",
    title: "เทคนิคสร้าง Carousel + 'สไตล์ภาพ' ของตัวเองด้วย ChatGPT & AI Visual",
    subtitle: "คุมภาพ Carousel ให้มีเอกลักษณ์ แบรนด์เดียวกันทุกหน้า พร้อม Prompt ล็อกองค์ประกอบ",
    category: "AI Visual",
    categoryBadge: "CONTENT SYSTEM",
    readTime: "5 นาที",
    date: "2025-08",
    tags: ["AI Visual", "Carousel", "ChatGPT", "Social Media", "Branding"],
    summary: "วิธีสร้างระบบผลิตภาพ Carousel บน Social Media ที่ล็อก Mood & Tone, โทนสี และตัวละคร ให้ตรงตาม Brand Identity โดยไม่ต้องพึ่งดีไซเนอร์ตลอดเวลา",
    featured: false,
    content: {
      intro: "ปัญหาใหญ่ของคนทำ Content ด้วย AI คือภาพแต่ละหน้าดูหลุดธีม สีไม่ตรง หรือสไตล์เปลี่ยนไปเรื่อยๆ บทความนี้สรุปสูตร Structured Prompt ที่ช่วยล็อกคุณสมบัติของภาพ (Visual Tokens) ให้ภาพ Carousel ของคุณมีเอกลักษณ์และเป็นแบรนด์เดียวกันตั้งแต่แผ่นแรกจนถึงแผ่นสุดท้าย",
      workflowSteps: [
        { step: "01. Define Brand Palette", desc: "ระบุ Primary Color, Background Accent และ Mood ของภาพ" },
        { step: "02. Structured Prompting", desc: "เขียน Prompt แยกส่วน Subject, Composition, Lighting และ Style Code" },
        { step: "03. Series Generation", desc: "ใช้ Seed หรือ Reference Anchor เพื่อให้ภาพทุกแผ่นใน Carousel ต่อเนื่องกัน" }
      ],
      promptCopyText: `[VISUAL SYSTEM DIRECTIVE]
Generate a 3D isometric graphic render for a social media carousel slide.

[BRAND DIRECTION]
- Primary Accent: Warm Vibrant Orange (#FF6A2A)
- Base Background: Soft Minimal Eggshell White (#F9F8F4)
- Style Aesthetic: Clean 3D Pastel Iconography, Smooth Matt Material, Soft Studio Lighting
- Mood: Professional, Modern, High-tech, Friendly

[SLIDE CONTENT - SLIDE 1]
- Subject: A glowing 3D floating rocket launching from a smartphone screen
- Composition: Centered layout with generous whitespace, subtle floating geometric elements
- Quality: 8k resolution, octane render style, clean edges, zero text on image

Maintain exact visual tokens for subsequent slide prompts.`,
      takeaways: [
        "คุมแบรนด์ คุมโทนภาพ ได้เป๊ะ 100%",
        "สร้างภาพ Carousel คุณภาพสูงสำหรับโพสต์โซเชียลมีเดียได้ต่อเนื่อง",
        "ลดเวลาออกแบบสื่อมวลชนลงมากกว่า 80%"
      ]
    },
    cta: {
      title: "อยากสร้างระบบผลิต Content และ Visual ด้วย AI สำหรับแบรนด์คุณ?",
      description: "สมัครเรียนคอร์ส AI Visual Content System หรือปรึกษา Modty เพื่อวางระบบการผลิตสื่อ คาแรคเตอร์ และภาพโฆษณาอัตโนมัติสำหรับธุรกิจ",
      primaryBtnText: "สอบถามคอร์ส AI Visual System",
      secondaryBtnText: "ปรึกษา Modty 1:1"
    }
  },
  {
    id: "free-platforms-for-deploying-web-apps",
    title: "12 แพลตฟอร์มสำหรับ Deploy เว็บไซต์และ Web App ฟรี (Free Tier 2025)",
    subtitle: "รวมลิงก์และช่องทางนำเว็บและแอปของคุณขึ้นออนไลน์โดยไม่ต้องเสียค่าเช่า Hosting",
    category: "Vibe Coding",
    categoryBadge: "CHET SHEET & GUIDE",
    readTime: "7 นาที",
    date: "2025-08",
    tags: ["Hosting", "Vibe Coding", "Deployment", "Vercel", "Netlify", "Cloudflare"],
    summary: "คู่มือเลือกใช้แพลตฟอร์ม Cloud & Hosting ฟรีสำหรับผู้ที่สร้างเว็บด้วย Vibe Coding, AI หรือ React/Next.js ให้คุณมี Live Website เป็นของตัวเองได้ในไม่กี่คลิก",
    featured: false,
    content: {
      intro: "หนึ่งในข้อดีของการสร้างเว็บยุคนี้คือ คุณไม่จำเป็นต้องจ่ายค่าเช่าโฮสติ้งเดือนละหลายร้อยอีกต่อไป แพลตฟอร์มระดับโลกมากมายมีแผน Free Tier ที่รองรับทั้ง Static Web, Web Application, ฐานข้อมูล และ Edge Server ได้อย่างสบายๆ",
      workflowSteps: [
        { step: "01. Vercel / Netlify", desc: "เหมาะมากสำหรับ React, Next.js, Vite — เชื่อม GitHub แล้ว Deploy อัตโนมัติทุกครั้งที่ Push โค้ด" },
        { step: "02. Cloudflare Pages", desc: "ฟรี Unlimited Bandwidth สำหรับ Static Sites พร้อม SSL Certificate ฟรีในตัว" },
        { step: "03. Render / Supabase", desc: "สำหรับ Backend API, Python, Node.js และ PostgreSQL Database ที่มี Free Tier" }
      ],
      promptCopyText: `// Deployment Command for Vercel CLI
npm install -g vercel
vercel login
vercel --prod

// Deploy directly with Vite build output
npm run build
// Upload /dist folder to Netlify Drag-and-Drop`,
      takeaways: [
        "มีเว็บไซต์ออนไลน์จริงได้ฟรี ไม่ต้องเสียค่าโฮสติ้งเริ่มต้น",
        "รองรับการเชื่อม Custom Domain (.com / .ai / .co)",
        "ระบบปลอดภัย มี SSL และ CDN ความเร็วสูงทั่วโลกในตัว"
      ]
    },
    cta: {
      title: "พร้อมเปลี่ยนไอเดียให้กลายเป็น Web App จริงที่เปิดรับรายได้แล้วหรือยัง?",
      description: "เรียนรู้วิธีสร้าง Web App มีระบบสมาชิก ฐานข้อมูล และระบบชำระเงิน พร้อมเทคนิค Deploy ขึ้นแพลตฟอร์มฟรีได้ในคอร์ส Vibe Coding Master Route",
      primaryBtnText: "ดูคอร์ส Vibe Coding Master Route (2,990.-)",
      secondaryBtnText: "ปรึกษา Modty 1:1"
    }
  },
  {
    id: "claude-html-video-mp4",
    title: "Claude สร้างวีดีโอ HTML + MP4 ผ่านเว็บไซต์",
    subtitle: "เปลี่ยนไอเดียให้กลายเป็น Animated Video โดยใช้ Claude สร้าง HTML แล้ว Render เป็น MP4 ผ่าน npx hyperframes",
    category: "AI Visual",
    categoryBadge: "VIDEO PRODUCTION",
    icon: "🎬",
    readTime: "5 นาที",
    date: "2025-08",
    tags: ["HTML Video", "MP4", "Hyperframes", "Claude", "AI Visual", "Motion Graphic"],
    downloadFile: "/html-video-production.skill",
    downloadLabel: "โหลด Skill File (.skill)",
    summary: "เทคนิคใช้ Claude เขียนโค้ด HTML Animation แล้ว Render ออกมาเป็นไฟล์ MP4 ผ่านคำสั่ง npx hyperframes render — ถ้าไม่มี Node.js Claude จะส่งมอบเป็นซอร์สโค้ด HTML ให้ใช้งานได้ทันที ไม่ต้องมีทักษะ Video Editing",
    featured: false,
    content: {
      intro: "ปัจจุบัน Claude สามารถเขียนโค้ด HTML ที่มี Animation และ Motion Graphic คุณภาพสูงได้ แล้วแปลงเป็นไฟล์ MP4 ด้วย npx hyperframes render ช่วยให้คุณสร้างวิดีโอ Explainer, Product Demo หรือ Social Media Clip ได้โดยไม่ต้องพึ่ง After Effects — ข้อควรรู้: หากต้องการเสียงพากย์/เพลง/รูปภาพ Claude จะถามหาไฟล์จากคุณก่อน หรือใช้ connector ที่ต่อไว้ (เช่น Higgsfield) ไม่ได้ generate อัตโนมัติทุกกรณี",
      workflowSteps: [
        { step: "01. Prompt Claude", desc: "บอก Claude ว่าต้องการวิดีโอแบบไหน เนื้อหาอะไร ระยะเวลาเท่าไหร่ และ Visual Style ที่ต้องการ" },
        { step: "02. รับ HTML Code", desc: "Claude สร้างโค้ด HTML + CSS + JS ที่มี Animation ครบ พร้อม Timeline, Keyframes และ Comment กำกับแต่ละ Scene" },
        { step: "03. Render เป็น MP4", desc: "ใช้คำสั่ง npx hyperframes render แปลง HTML → MP4 (ต้องมี Node.js) หรือใช้ HTML ได้เลยหากไม่มี" }
      ],
      promptCopyText: `คุณคือ HTML Video Production Specialist
โปรดสร้าง HTML Animation สำหรับวิดีโอดังนี้:

[VIDEO BRIEF]
- ประเภทวิดีโอ: [เช่น Product Demo / Explainer / Social Media Clip]
- ระยะเวลา: [เช่น 30 วินาที / 60 วินาที]
- ขนาด: [เช่น 1920x1080 / 1080x1920 (Vertical)]

[CONTENT & SCRIPT]
[ใส่เนื้อหาหรือ Script ที่ต้องการ]

[VISUAL STYLE]
- สีหลัก: [Primary Color เช่น #FF6A2A]
- สไตล์: [เช่น Minimal / Bold / Corporate / Cinematic]
- ฟอนต์: [เช่น Inter / Kanit / Satoshi]

[TECHNICAL REQUIREMENTS]
- ใช้ Pure HTML + CSS + JS เท่านั้น (ไม่มี External Library)
- ใส่ CSS Keyframe Animations ที่ Smooth และ Professional
- จัดโครงสร้าง Timeline ให้ชัดเจน พร้อม Comment กำกับแต่ละ Scene
- รองรับการ Render ผ่าน npx hyperframes render
- หากต้องการเสียงหรือรูปภาพ ให้แจ้งให้ฉันจัดเตรียมไฟล์ก่อน`,
      takeaways: [
        "สร้างวิดีโอ Professional ได้โดยไม่ต้องมีทักษะ Video Editing",
        "ประหยัดค่าจ้างทีม Creative ลงได้มากกว่า 70%",
        "ปรับแก้เนื้อหาได้ง่ายแค่แก้โค้ด HTML ไม่ต้อง Re-render ทั้งโปรเจกต์"
      ]
    },
    cta: {
      title: "อยากเรียนเทคนิค AI จัดเต็ม อัปเดตใหม่ทุกสัปดาห์?",
      description: "เข้าร่วม Modty AI Insider Club เรียนรู้เทคนิค AI ล่าสุด ปรึกษาได้เดือนละครั้ง อัปเดตทุกสัปดาห์ — เดือนละ 99 บาทเท่านั้น! หรือแอด LINE มาสอบถามก่อนได้เลย",
      primaryBtnText: "เข้าร่วม Insider Club (99.-/เดือน) →",
      secondaryBtnText: "ปรึกษา Modty ผ่าน LINE"
    }
  },
  {
    id: "chatgpt-opencut-video-editor",
    title: "ให้ ChatGPT/Codex ช่วยตัดต่อวิดีโอด้วย OpenCut — ตอนนี้ทำได้แค่ไหน?",
    subtitle: "สถานะ AI Integration ล่าสุด ส.ค. 2026 และ Prompt พร้อมใช้สำหรับ Video Editor Workflow",
    category: "AI Visual",
    categoryBadge: "AI VIDEO WORKFLOW",
    icon: "✂️",
    readTime: "7 นาที",
    date: "2026-08",
    tags: ["OpenCut", "Video Editing", "ChatGPT", "Codex", "AI Agent", "MCP", "Automation"],
    summary: "OpenCut คือ Open Source Video Editor (MIT) ทางเลือก CapCut ที่กำลัง Rewrite ให้ AI Agent ควบคุม Timeline ได้ — แต่ MCP/Editor API ยังอยู่ใน Roadmap วันนี้ใช้ ChatGPT วิเคราะห์ Transcript สร้าง Edit Decision List แล้วนำไปตัดเองได้ก่อนเลย",
    featured: false,
    content: {
      intro: "⚠️ สถานะ ณ ส.ค. 2026: OpenCut รุ่นใหม่กำลัง Rewrite — MCP Server, Editor API และ Headless Mode ยังถูกระบุว่า 'กำลังมา' ไม่ใช่ Feature ที่ใช้งานได้ Official วันนี้ แต่ Workflow 'AI Planning + Manual Editing' ใช้ได้ทันทีและต่อยอดเป็น Agentic Editing ได้ง่ายเมื่อ Feature พร้อม",
      workflowSteps: [
        { step: "01. ส่ง Transcript", desc: "ส่ง Transcript พร้อม Timecode ให้ ChatGPT วิเคราะห์ Hook, ช่วงตัด, Caption และจุดใส่ B-roll" },
        { step: "02. รับ Edit Plan", desc: "ChatGPT สร้าง Edit Decision List พร้อม Timecode IN/OUT ทุกช่วงที่ต้องการรักษา ตัด หรือเพิ่ม Effect" },
        { step: "03. ตัดใน OpenCut", desc: "นำ Edit Plan ไปตัดใน OpenCut เอง เมื่อ MCP/Editor API พร้อมค่อยอัปเกรดให้ Codex ควบคุมโดยตรง" }
      ],
      promptCopyText: `คุณเป็น AI Video Editor

ฉันจะให้ Transcript ของวิดีโอพร้อม Timecode
เป้าหมายคือทำวิดีโอสั้น [30/60/90] วินาที สำหรับ [TikTok/Reels/Shorts]

ช่วยสร้าง Edit Decision List โดย:
1. เลือก Hook ที่แรงที่สุดใน 3 วินาทีแรก
2. ตัดช่วงซ้ำ ช่วงเว้นนาน และประโยคที่ไม่จำเป็น
3. รักษาความหมายเดิมของผู้พูด
4. ระบุ Timecode IN/OUT ของแต่ละช่วงที่เลือก
5. แนะนำข้อความ Caption สำคัญ
6. ระบุจุดที่ควรใส่ B-roll / Zoom / Screenshot / Sound Effect
7. สรุปเป็นลำดับ Timeline ที่ฉันสามารถนำไปตัดต่อใน OpenCut ได้

ห้ามสร้างคำพูดใหม่ที่ไม่มีอยู่ใน Transcript

[วาง Transcript พร้อม Timecode ของคุณที่นี่]`,
      takeaways: [
        "ใช้ AI ลดเวลาวางโครงสร้าง Edit ได้ทันทีแม้ MCP ยังไม่พร้อม",
        "Workflow 2 Layer (AI Planning + Manual Edit) ต่อยอดเป็น Agentic Editing ได้ง่ายเมื่อ Feature พร้อม ไม่ต้องรื้อ Workflow ใหม่ทั้งหมด",
        "OpenCut เป็น Open Source MIT License — ไม่มีค่าใช้จ่ายสำหรับตัว Editor"
      ]
    },
    cta: {
      title: "อยากเรียนสร้าง AI Video Workflow ของตัวเองแบบจัดเต็ม?",
      description: "เข้าร่วม Modty AI Insider Club อัปเดตเทคนิค AI ล่าสุดทุกสัปดาห์ รวมถึง OpenCut, MCP, Codex และ AI Agent สำหรับ Video Workflow — เดือนละ 99 บาทเท่านั้น",
      primaryBtnText: "เข้าร่วม Insider Club (99.-/เดือน) →",
      secondaryBtnText: "ปรึกษา Modty ผ่าน LINE"
    }
  },
  {
    id: "carousel-visual-identity-system",
    title: "สร้าง Visual Identity ของตัวเองสำหรับ Carousel ด้วย ChatGPT",
    subtitle: "ไม่ต้องเก่งดีไซน์ แค่มี Reference + ChatGPT ก็มีสไตล์ภาพที่ชัดเจนและใช้ซ้ำได้ทุกงาน",
    category: "AI Visual",
    categoryBadge: "CONTENT SYSTEM",
    icon: "🎨",
    readTime: "8 นาที",
    date: "2026-08",
    tags: ["Carousel", "Visual Identity", "Style Guide", "ChatGPT", "AI Visual", "Canva", "Instagram", "Master Prompt"],
    summary: "ระบบสร้าง Visual Style ส่วนตัว 7 ขั้นตอน — ตั้งแต่การหา Reference, ให้ AI วิเคราะห์สิ่งที่เราชอบ, สร้าง Style Guide, จนถึง Master Prompt ที่ใช้ซ้ำได้ทุกครั้งสำหรับสร้าง Instagram Carousel คุณภาพสูง",
    featured: false,
    content: {
      intro: "หลายคนเปิด ChatGPT แล้วรีบพิมพ์ว่า 'สร้างภาพสวยๆ' แต่คนที่ได้งานดีส่วนใหญ่เริ่มจากการสะสม Reference ที่ตัวเองชอบก่อน เพราะ AI ไม่รู้ว่าคำว่า 'สวย' ของเราคืออะไร — บทความนี้สอนวิธีเปลี่ยน Reference ให้กลายเป็นระบบออกแบบส่วนตัวที่ใช้ซ้ำได้ทุกโปรเจกต์",
      workflowSteps: [
        { step: "01. รวบรวม Reference", desc: "หา 20-50 รูปจาก Pinterest/Instagram ที่เห็นแล้วรู้สึกว่า 'นี่แหละสไตล์ที่ชอบ' จนเริ่มเห็น Pattern ที่ชอบจริงๆ" },
        { step: "02. ให้ AI วิเคราะห์", desc: "อัปโหลดรูปทั้งหมดแล้วให้ ChatGPT แตกสิ่งที่เราชอบเป็น Color, Typography, Layout, Mood และ Composition" },
        { step: "03. สร้าง Master Prompt", desc: "ให้ ChatGPT สรุป Style Guide แล้วแปลงเป็น Master Prompt ที่คงสไตล์เดิมและเปลี่ยนแค่เนื้อหาในแต่ละงาน" }
      ],
      promptCopyText: `คุณคือ Creative Director, Senior Social Media Strategist และ AI Image Prompt Expert
หน้าที่ของคุณคือช่วยคิดกลยุทธ์คอนเทนต์ ออกแบบคอนเซ็ปต์ภาพ Carousel และสร้าง Prompt สำหรับ AI Image Generator

โดยสามารถปรับรายละเอียดตามข้อมูลแบรนด์ต่อไปนี้:
- ชื่อแบรนด์ / ประเภทธุรกิจ:
- สินค้าหรือบริการ:
- กลุ่มเป้าหมาย:
- จุดขาย / บุคลิกของแบรนด์:
- สีประจำแบรนด์:
- เป้าหมายของคอนเทนต์:

[DESIGN DIRECTION]
สไตล์: Premium Modern Brand — สะอาด เรียบหรู ทันสมัย มี Editorial Feel
แรงบันดาลใจ: Apple, Notion, Stripe, Linear, Airbnb
เน้น: Visual Hierarchy ชัดเจน อ่านง่ายบนมือถือ มีพื้นที่หายใจ

[RULES]
- สร้างเพียงหนึ่งภาพต่อหนึ่งครั้ง
- ห้ามสร้าง Collage, Moodboard, Grid Layout หรือหลาย Slide รวมในภาพเดียว
- ทุกภาพต้องพร้อมใช้งานจริงบน Instagram

[OUTPUT FORMAT — ตอบครั้งละ 5 ส่วน]
1. Campaign Strategy: Objective, Target Audience, Insight, Core Message, Emotional Angle
2. Creative Direction: Headline, Visual Concept, Composition, Color Direction
3. AI Image Prompt (EN) สำหรับ ChatGPT Image / Midjourney / Flux
4. Caption ภาษาไทย (เป็นธรรมชาติ น่าเชื่อถือ)
5. CTA ที่เหมาะกับเป้าหมายของแคมเปญ

เริ่มจาก Carousel Strategy ก่อน โดยใช้โครงสร้าง: Hook → Problem → Insight → Solution → Benefit → CTA
สร้างเพียง 1 Slide ต่อครั้ง รอคำสั่ง "ต่อ Slide ถัดไป" ก่อนสร้าง Slide ใหม่`,
      takeaways: [
        "มี Visual Identity ที่ชัดเจนโดยไม่ต้องเก่ง Graphic Design",
        "Master Prompt ที่สร้างขึ้นใช้ซ้ำได้ทุกงาน เปลี่ยนแค่หัวข้อ",
        "AI กลายเป็น Art Director ที่ช่วย Review และอัปเดต Style Guide อย่างต่อเนื่อง"
      ]
    },
    cta: {
      title: "อยากได้เทคนิคจัดเต็ม หลายแหล่ง ละเอียด และปรึกษาได้ 1 ครั้ง/เดือน?",
      description: "เทคนิคเหล่านี้และอีกมากมายมีรวมอยู่ใน Modty AI Insider Club — อัปเดตทุกสัปดาห์ ปรึกษาได้เดือนละครั้ง กดสมัครแล้วรอรับลิงก์ได้เลย เดือนละ 99 บาทเท่านั้น",
      primaryBtnText: "เข้าร่วม Insider Club (99.-/เดือน) →",
      secondaryBtnText: "ปรึกษา Modty ผ่าน LINE"
    }
  },
  {
    id: "claude-ai-influencer-system",
    title: "Claude สร้าง AI Influencer — ตั้งแต่ Persona จนถึงระบบโพสต์อัตโนมัติ",
    subtitle: "Pinterest → Claude → AI Content → Sales คู่มือภาพรวม 4 ขั้นตอน + 2 Prompt พร้อมใช้",
    category: "Automation",
    categoryBadge: "AI INFLUENCER",
    icon: "🤖",
    readTime: "8 นาที",
    date: "2026-08",
    tags: ["AI Influencer", "Persona", "Higgsfield", "Playwright", "MCP", "Automation", "Claude", "Remotion"],
    summary: "สร้าง AI Influencer ที่มีหน้าตา บุคลิก และคอนเทนต์สม่ำเสมอ ใช้ขายของ/สร้างแบรนด์ได้จริง ด้วย Workflow 4 ขั้นตอน: หา Reference → ให้ Claude สร้าง Persona → วิเคราะห์ไวรัล → เชื่อม Higgsfield + Playwright + Remotion MCP ให้ระบบทำงานแทนทั้งทีม",
    featured: false,
    content: {
      intro: "คู่มือนี้ให้แนวคิดและขั้นตอนหลักเพื่อให้เห็นภาพรวมทั้งระบบ จุดที่คนส่วนใหญ่พลาดคือการเขียน Prompt ให้ Claude ตอบกลับในรูปแบบที่ 'เอาไปใช้ต่อได้จริง' ไม่ใช่แค่คำบรรยายลอยๆ — ส่วนนี้คือสิ่งที่ทำให้ระบบรันได้จริงหรือพังตั้งแต่ต้น",
      workflowSteps: [
        { step: "01. หา Reference", desc: "หาจาก Pinterest ด้วย keyword ที่ตรง niche (เช่น fitness creator, healthy lifestyle) กำหนดหน้าตา เสื้อผ้า บุคลิก และโทนภาพก่อนเริ่มสร้างจริง" },
        { step: "02. สร้าง Persona", desc: "ให้ Claude วิเคราะห์ภาพ Reference แล้วสรุปเป็น Visual Identity Card ครบทั้ง: ชื่อ ทรงผม สไตล์ บุคลิก และ Lifestyle เพื่อให้ภาพทุกครั้งเหมือนตัวเดิม" },
        { step: "03–04. AI Content + MCP", desc: "วิเคราะห์คอนเทนต์ไวรัล แล้วเชื่อม Higgsfield (สร้างภาพ/วิดีโอ) + Playwright (โพสต์แทนเรา) + Remotion (ตัดต่อวิดีโอ) เข้ากับ Claude" }
      ],
      promptCopyText: `// PROMPT 1 — สร้าง Persona จากภาพ Reference
จากภาพ reference ที่แนบมา ช่วยสร้าง Persona ของ AI Influencer คนนี้ให้ครบ:
1. ข้อมูลตัวละคร: ชื่อ, อายุ, สัญชาติ, อาชีพ/นิช
2. Visual Identity: ทรงผม, สีตา, สีผิว, รูปร่าง, ส่วนสูงโดยประมาณ
3. สไตล์การแต่งตัว: แนวเสื้อผ้า, สีที่ชอบ, accessory
4. บุคลิก: โทนเสียง, ท่าทาง, สิ่งที่พูดบ่อย
5. Lifestyle: กิจวัตร, สถานที่ที่มักอยู่, สิ่งที่ชอบโพสต์

สรุปออกมาเป็น "Visual Identity Card" สั้นๆ ที่สามารถ copy ไปแปะหน้า Prompt
ทุกครั้งที่สั่งสร้างภาพ เพื่อให้หน้าตา/สไตล์เหมือนกันทุกภาพ

---

// PROMPT 2 — วิเคราะห์คอนเทนต์ไวรัล + ต่อยอดไอเดีย
ช่วยค้นหาคอนเทนต์ที่กำลังไวรัลในนิช [ใส่นิชของ Persona] ตอนนี้ 5-10 ตัวอย่าง
แล้ววิเคราะห์แต่ละตัวให้แยกเป็น:
- Hook (3 วินาทีแรกพูดอะไร)
- Format (พูดคนเดียว / POV / before-after / ฯลฯ)
- Topic หลัก
- Emotion ที่กระตุ้น
- CTA ที่ใช้

จากนั้นสร้างไอเดียคอนเทนต์ใหม่ 5 อัน ให้ Persona ของผม [แนบ Visual Identity Card]
โดยยึด pattern เดียวกันแต่เปลี่ยนเนื้อหาให้เข้ากับตัวละคร`,
      takeaways: [
        "สร้าง AI Influencer ที่มีหน้าตาสม่ำเสมอข้ามภาพ/วิดีโอด้วย Visual Identity Card",
        "เชื่อม Higgsfield + Playwright + Remotion MCP ให้ระบบผลิตและโพสต์คอนเทนต์อัตโนมัติ",
        "ใช้ขายของหรือสร้างแบรนด์ได้จริง — มีตัวอย่างลูกค้าร้านอาหารที่ทำแล้วสำเร็จ"
      ]
    },
    cta: {
      title: "อยากได้ระบบพร้อมใช้ + ไม่ต้องเซ็ตเอง?",
      description: "รับทำให้ครบเริ่มต้น 990 บาท: ตั้งระบบ Persona + Workflow ให้ตรง niche, คู่มือฉบับเต็มปรับให้เข้ากับธุรกิจคุณ, Call สอนสด 20 นาที + ปรึกษาต่อเนื่อง 15 วัน หรือสมัคร Insider Club เพื่อรับเทคนิคจัดเต็มทุกสัปดาห์ เดือนละ 99 บาท",
      primaryBtnText: "เข้าร่วม Insider Club (99.-/เดือน) →",
      secondaryBtnText: "จองระบบ 990.- ผ่าน LINE"
    }
  },
  {
    id: "notebooklm-claude-skills-factory",
    title: "เปลี่ยน NotebookLM เป็นโรงงานผลิต Claude Skills",
    subtitle: "วิเคราะห์ความรู้ทั้งหมดใน Notebook แล้วแตกออกเป็น Skill Library ที่พร้อมใช้กับ Claude ได้ทันที",
    category: "Automation",
    categoryBadge: "SKILL FACTORY",
    icon: "🏭",
    readTime: "6 นาที",
    date: "2026-08",
    tags: ["NotebookLM", "Claude Skills", "Skill Library", "AI Architect", "Automation", "Prompt Engineering"],
    summary: "ก่อนสร้าง Skill ควรให้ NotebookLM วิเคราะห์ก่อนว่าควรแตกออกเป็น Skill อะไรบ้าง — มี 3 Prompt ครบ: วิเคราะห์ Skill, ออกแบบ Architecture แบบ AI Architect, และสร้างไฟล์ skill.md จริง โดยใช้เฉพาะข้อมูลจาก Source ใน Notebook เท่านั้น",
    featured: false,
    content: {
      intro: "อย่าสร้าง Skill หลายเรื่องรวมกัน — แยกกันไปทีละเรื่อง ให้ NotebookLM เป็นคนแนะนำว่าความรู้ใน Notebook ควรแตกเป็น Skill กี่อัน อะไรบ้าง ก่อนเริ่มเขียน skill.md จริง เพราะ Skill ที่ดีต้องมี Input/Output และ Workflow ชัดเจน ไม่ใช่รวบทุกอย่างไว้ใน Skill เดียว",
      workflowSteps: [
        { step: "01. วิเคราะห์ Skill", desc: "ใช้ Prompt 1 ให้ NotebookLM ระบุ Skill ที่ควรมี พร้อม Purpose, Input, Output และ Separation Score (1-10)" },
        { step: "02. ออกแบบ Architecture", desc: "ใช้ Prompt 2 (AI Architect Mode) ให้ออกแบบ Folder Structure ของ Claude Skills Library ทั้งระบบจากความรู้ใน Notebook" },
        { step: "03. สร้าง skill.md", desc: "ใช้ Prompt 3 สร้างไฟล์ skill.md จริง โดยดึงเฉพาะ: Behavior, Prompt Structure, Rules, References และ Workflow จาก Source ใน Notebook" }
      ],
      promptCopyText: `// PROMPT 1 — วิเคราะห์ว่าควรสร้าง Skill อะไรบ้าง
Analyze all sources in this notebook.
Your task is NOT to create a skill.md file yet.

First, identify all distinct expertise, workflows, responsibilities, and repeatable tasks found in the sources.

For each potential skill:
* Give the skill a clear name
* Explain its purpose
* Describe the primary outcome it produces
* Estimate how valuable it would be as a standalone Claude Skill
* Explain why it should be separated from other skills

Then organize your findings into:
# Recommended Skills

For each skill provide:
## Skill Name
### Purpose
### Input
### Output
### Typical Workflow
### Required Knowledge Sources
### Separation Score (1-10)
How strongly should this be its own standalone skill instead of being merged with others?

Finally:
Rank all skills from highest priority to lowest priority.
Recommend which 3-10 skills should be created first.

Use only information found in the uploaded sources.
Do not invent skills that are not supported by the source material.

---

// PROMPT 2 — AI Architect Mode (ออกแบบ Skills Library ทั้งระบบ)
Analyze all sources in this notebook as if you were designing a Claude Skills Library.

Your goal is to determine:
* What skills should exist
* What skills should be separated
* What skills should be merged
* What skills are missing

Think in terms of reusable AI capabilities.

For every capability found in the sources:
* Skill Name
* Business Value
* Frequency of Use
* Complexity
* Reusability
* Recommended File Name (e.g. seo_skill.md, sales_email_skill.md)

At the end, propose the ideal folder structure for a Claude Skills Library built from this notebook.
Use only evidence from the uploaded sources.
Do not generate the actual skills yet. Only design the architecture.

---

// PROMPT 3 — สร้างไฟล์ skill.md จริง (ทีละ Skill)
Create a skill.md file using only information found in the uploaded sources.
Extract and organize:
- Behavior
- Prompt Structure
- Rules
- References
- Workflow

Do not invent information.
Do not infer missing details.
Use only verifiable facts from the provided sources.`,
      takeaways: [
        "NotebookLM วิเคราะห์ความรู้ทั้งหมดแล้วแนะนำ Skill Architecture ให้ก่อนลงมือสร้าง",
        "ได้ Claude Skills Library ที่มี Separation Score ชัดเจน ไม่รวบทุกอย่างไว้ใน Skill เดียว",
        "skill.md ที่สร้างออกมา 100% มาจาก Source จริง ไม่มีการ invent ข้อมูลขึ้นมาเอง"
      ]
    },
    cta: {
      title: "อยากได้เทคนิคจัดเต็ม หลายแหล่ง ละเอียด และปรึกษาได้ 1 ครั้ง/เดือน?",
      description: "เทคนิค NotebookLM + Claude Skills และอีกมากมายมีรวมอยู่ใน Modty AI Insider Club — อัปเดตทุกสัปดาห์ ปรึกษาได้เดือนละครั้ง กดสมัครแล้วรอรับลิงก์ได้เลย เดือนละ 99 บาทเท่านั้น",
      primaryBtnText: "เข้าร่วม Insider Club (99.-/เดือน) →",
      secondaryBtnText: "ปรึกษา Modty ผ่าน LINE"
    }
  },
  {
    id: "prototype-to-pro-web-app",
    title: "🔮 From Prototype to Pro: Web App Resource Vault",
    subtitle: "อัปเกรดจาก Single File Prototype สู่ Web App ระดับโปรที่พร้อม Scale — พร้อม 30 AI Builder Tools",
    category: "Vibe Coding",
    categoryBadge: "WEB APP STACK",
    icon: "🚀",
    readTime: "10 นาที",
    date: "2026-08",
    tags: ["Vibe Coding", "Web App", "Next.js", "Supabase", "Vercel", "Framer Motion", "Pro Stack", "AI Builder"],
    summary: "คู่มือย้ายโปรเจกต์เว็บจากไฟล์เดียวขึ้น Next.js + Supabase + Vercel ใน 3 ขั้นตอน พร้อม Tech Stack ที่แนะนำ, ไอเดีย Scale-Up แบบ AI Personalized, และรายชื่อ AI Web Builder ครบ 30 แพลตฟอร์ม",
    featured: false,
    content: {
      intro: "อย่าเพิ่งรีบเขียนโค้ด! ก่อนเริ่มอัปเกรด Web App ให้ใช้ AI เป็นคู่คิดวิเคราะห์ Logic และวาง Architecture ก่อน — Pro Tech Stack ที่แนะนำ: Framer Motion/GSAP (Animation), Vercel/Netlify (Hosting), Supabase/Firebase (Database & Auth) และ Google Antigravity (AI Co-Pilot เข้าใจภาพรวมโปรเจกต์ทั้งหมด)",
      workflowSteps: [
        { step: "01. Research & Mental Model", desc: "ใช้ AI วิเคราะห์ Logic ก่อนเขียนโค้ด ด้วยเทคนิค [บทบาท → เป้าหมาย → ขั้นตอน → ผลลัพธ์] เช่น ผู้ใช้กดสุ่มไพ่ → เห็น Animation → รู้สึกตื่นเต้น → เห็นคำทำนาย" },
        { step: "02. Migration & Setup", desc: "ย้ายโค้ดจากไฟล์เดียวขึ้น Next.js หรือ Vite + Tailwind CSS จากนั้นให้ Antigravity วางโครงสร้าง Folder ที่เป็นระเบียบตามมาตรฐาน" },
        { step: "03. Database + Deploy", desc: "นำข้อมูลทั้งหมดเก็บบน Supabase (ฟรีและทรงพลัง) เชื่อม API แล้วผูกกับ Vercel/Netlify เพื่อ Auto-deploy ทันทีที่ Push โค้ด" }
      ],
      promptCopyText: `// PROMPT — สำหรับเริ่มต้นโปรเจกต์ Web App แบบมืออาชีพ
อยากสร้างเว็บแอป [ชื่อโปรเจกต์ของคุณ] โดยอัปเกรดจากโค้ดไฟล์เดียว
ให้เป็นระบบที่มีสถาปัตยกรรมแบบมืออาชีพ
(ใช้ Next.js, Framer Motion, และ Supabase)

ในฐานะที่คุณเป็น AI System Architect ช่วยวางให้ครบ:

1. Workflow ขั้นตอนการทำงานทั้งระบบ (Frontend → API → Database)
2. Folder Structure ที่ถูกต้องตามมาตรฐาน Production
3. แนวทางออกแบบ UI ที่ดูพรีเมียมและลื่นไหล
4. Scale-Up Ideas สำหรับ Feature ถัดไป

[ใส่รายละเอียดโปรเจกต์ปัจจุบันของคุณ เช่น ไฟล์ที่มี, Feature ที่ต้องการ]

---

// BONUS — ไอเดีย Scale-Up (เพิ่มเติมให้ AI วิเคราะห์ต่อ)

"จากโปรเจกต์นี้ แนะนำ 3 Feature ที่จะทำให้ผู้ใช้แชร์ผลลัพธ์ลง
TikTok/Instagram Story ได้ง่าย และสร้าง Viral Loop ให้แอปเติบโตแบบ Organic"`,
      takeaways: [
        "อัปเกรด Web App จากไฟล์เดียวสู่ระบบ Production-grade ได้ใน 3 ขั้นตอน",
        "30 AI Builder Tools ครบทุกประเภท — จาก No-Code ถึง Full-Stack (Vercel, Replit, Framer, Bubble ฯลฯ)",
        "AI Personalized Reading + Cinematic Social Sharing = Viral Loop ที่ทำได้จริงด้วย Gemini API"
      ]
    },
    cta: {
      title: "มีคลาสสอนทำ Web App ด้วย AI แบบ Step-by-Step!",
      description: "เรียนรู้การเชื่อม API, พัฒนาใน VS Code + Antigravity — ราคาพิเศษ 2,990 บาท มีอีบุ๊ก + วิดีโอสอนทำเว็บ + สร้างวิดีโอด้วย AI ดูแลฟรีต่ออีก 60 วัน หรือเข้า Insider Club เดือนละ 99 บาทเพื่อรับเทคนิคใหม่ทุกสัปดาห์",
      primaryBtnText: "เข้าร่วม Insider Club (99.-/เดือน) →",
      secondaryBtnText: "ดูคอร์ส 2,990.- ที่ mastervibecode"
    }
  },
  {
    id: "tarot-mediapipe-webapp",
    title: "WebApp Tarot + MediaPipe — สร้างไพ่ทาโรต์ควบคุมด้วยมือจริง",
    subtitle: "ไฟล์ HTML ไฟล์เดียว + Gemini = เว็บดูดวงสุดล้ำที่ใช้กล้องจับมือแทนเมาส์ได้เลยทันที",
    category: "Vibe Coding",
    categoryBadge: "SINGLE FILE APP",
    icon: "🔮",
    readTime: "5 นาที",
    date: "2026-08",
    demoLink: "https://saimuu.netlify.app/",
    demoLabel: "ลองเล่น Demo →",
    tags: ["Tarot", "MediaPipe", "Hand Tracking", "Vibe Coding", "GSAP", "Single HTML", "Gemini"],
    summary: "วาง Prompt นี้ใน Gemini แล้วได้เว็บไพ่ทาโรต์ในไฟล์เดียว — ใช้ MediaPipe Hands จับมือจากกล้องจริง หยิบ-ลากไพ่ด้วยนิ้ว, Pinch เพื่อเลือก, ไพ่พลิกพร้อม Particle Effect สไตล์ Cyber Mystic สีม่วง-ดำ-ทองนีออน",
    featured: false,
    content: {
      intro: "⚠️ Prompt นี้สร้าง Prototype ที่ใช้งานได้ทันที แต่ยังไม่ได้รับรองด้านความปลอดภัยหรือรองรับผู้ใช้จำนวนมาก — หากต้องการให้ AI วิเคราะห์คำทำนายได้จริง ต้องเชื่อม API เพิ่มเติม (มีคอร์สสอน) ลองเล่น Demo ตัวจริงได้ที่ saimuu.netlify.app",
      workflowSteps: [
        { step: "01. Copy Prompt", desc: "คัดลอก Prompt ด้านล่างทั้งหมด แล้ววางใน Gemini (ไม่ต้องแก้อะไร ใช้ได้เลยทันที)" },
        { step: "02. Generate & Preview", desc: "Gemini จะสร้างโค้ด HTML ไฟล์เดียวครบทุก Feature — กด Preview หรือ Save เป็น .html แล้วเปิดในเบราว์เซอร์" },
        { step: "03. อนุญาตกล้อง + เล่น", desc: "เปิดเว็บ กดอนุญาตกล้อง แล้วใช้นิ้วชี้ Hover ไพ่ / Pinch (นิ้วหัวแม่มือ+ชี้) เพื่อหยิบและเลือกไพ่" }
      ],
      promptCopyText: `Create a cinematic AI tarot reading web app in a single HTML file.

Use MediaPipe Hands for real-time hand tracking from webcam.

Features:
- Floating 3D tarot cards on screen
- User can hover cards using index finger
- Pinch gesture (thumb + index finger) grabs a card
- Drag tarot cards across screen naturally
- Releasing fingers drops/selects card
- Selected card flies toward camera dramatically
- Tarot card flips with glowing magical animation
- Display mystical AI-generated fortune reading
- Dark witchcore / cyber mystic UI aesthetic
- Purple, black, gold neon colors
- Particle effects and magical trails
- Ambient animated background
- Smooth GSAP animations
- Responsive for mobile and desktop
- Include realistic sound effect hooks
- Everything inside one HTML file
- Make it mobile responsive`,
      takeaways: [
        "สร้างเว็บ Interactive ระดับ Cinematic ได้จาก Prompt เดียวในไฟล์ HTML ไฟล์เดียว",
        "MediaPipe Hands ทำงานในเบราว์เซอร์ล้วน ไม่ต้องลงโปรแกรมเพิ่ม",
        "ต่อยอดได้โดยเพิ่ม Gemini API เพื่อให้ AI วิเคราะห์คำทำนายแบบ Personalized จริง"
      ]
    },
    cta: {
      title: "อยากให้ AI วิเคราะห์คำทำนายได้จริง ต้องเชื่อม API!",
      description: "มีคอร์สสอนการเชื่อม API + พัฒนาต่อใน VS Code + Antigravity — 2,990 บาท มีอีบุ๊ก + วิดีโอสอนตลอดชีพ + ดูแลฟรีอีก 60 วัน หรือเข้า Insider Club เดือนละ 99 บาทเพื่อรับเทคนิคใหม่ทุกสัปดาห์",
      primaryBtnText: "เข้าร่วม Insider Club (99.-/เดือน) →",
      secondaryBtnText: "ดูคอร์ส 2,990.- ที่ mastervibecode"
    }
  },
  {
    id: "dashboard-redesign-ai",
    title: "เสก Dashboard เก่าให้เป็น UI สุดล้ำด้วย AI — ใน 5 ขั้นตอน",
    subtitle: "ใช้แค่ 2 รูป + 1 Prompt ใน Gemini Canvas หรือ Claude Design แปลง Dashboard น่าเบื่อให้กลายเป็น UI ระดับโปรทันที",
    category: "Vibe Coding",
    categoryBadge: "UI REDESIGN",
    icon: "🎨",
    readTime: "5 นาที",
    date: "2026-08",
    tags: ["Dashboard", "UI Redesign", "Gemini Canvas", "Claude Design", "Vibe Coding", "Design System", "Reference"],
    summary: "ไม่ต้องคิด Design System เองจากศูนย์! แค่ Screenshot Dashboard เดิม + หา Reference สไตล์ที่ชอบ + วาง 1 Prompt ใน Gemini Canvas หรือ Claude Design AI จะดึงข้อมูลจากรูปแรกมาสวมหน้าตารูปที่สองให้ทันที",
    featured: false,
    content: {
      intro: "AI สามารถ 'อ่าน' โครงสร้างข้อมูลจาก Dashboard เดิม แล้ว 'ลอก' Design System จาก Reference ที่เราให้ มาสร้างโค้ด React + Tailwind ใหม่ได้ทันที — ยิ่ง Reference ละเอียดและเห็น Layout ชัด AI ก็ยิ่งลอก Design System (ความโค้งของมุม, เงา, ขนาดฟอนต์) ได้เนียนยิ่งขึ้น",
      workflowSteps: [
        { step: "01. เตรียม 2 รูป", desc: "รูปที่ 1: Screenshot Dashboard เดิม (Excel/Power BI/ระบบเก่า) — รูปที่ 2: Reference สไตล์ที่ชอบจาก Dribbble, Pinterest หรือ Google Images (ค้น 'Modern Admin Panel UI')" },
        { step: "02. วาง Prompt + อัปโหลด", desc: "เปิด Gemini Canvas หรือ Claude Design อัปโหลดรูปทั้ง 2 ใบ แล้ววาง Prompt ด้านล่างแล้วกดส่ง" },
        { step: "03. Fine-tune แบบ Chat", desc: "สั่งแก้รายละเอียดแบบโต้ตอบ เช่น 'เปลี่ยนสีเป็น #1A73E8', 'เปลี่ยนกราฟแท่งเป็น Donut Chart', 'เพิ่มปุ่ม Export PDF'" }
      ],
      promptCopyText: `Re-build my dashboard in the 1st attached to be exactly the same design,
focus typography, visual, style, and design system of the dashboard in the 2nd attached.

Instructions:
- Extract all data, KPIs, and charts from Image 1 (my current dashboard)
- Apply the visual design system from Image 2 (the reference)
  including: color palette, typography, card styles, spacing, border radius, shadows
- Output clean React + Tailwind CSS code
- Make it responsive for desktop and mobile
- Keep all data accurate to the original dashboard

After generating, I will ask you to fine-tune specific elements.`,
      takeaways: [
        "แค่ 2 รูป + 1 Prompt = UI ใหม่ทั้งหน้าพร้อมโค้ด React + Tailwind CSS",
        "ไม่ต้องรู้ Design System เอง AI อ่านจาก Reference แล้วแปลเป็นโค้ดให้ทันที",
        "ปรับแต่งสี กราฟ และ Layout เพิ่มได้แบบ Chat โต้ตอบจนพอใจ"
      ]
    },
    cta: {
      title: "อยากเรียน Prompt Engineering / Reverse Engineering แบบ Vibe Coding จัดเต็ม?",
      description: "คอร์ส Vibe Coding Master Route — Ebook + วิดีโอดูออนไลน์ตลอดชีพ + ปรึกษา AI/Vibe Coding ได้ทุกเรื่อง ราคา 2,990 บาทจบ! หรือเข้า Insider Club เดือนละ 99 บาทเพื่อรับเทคนิคใหม่ทุกสัปดาห์",
      primaryBtnText: "เข้าร่วม Insider Club (99.-/เดือน) →",
      secondaryBtnText: "ดูคอร์ส 2,990.- ที่ mastervibecode"
    }
  },
  {
    id: "50-plus-claude-skills-directory",
    title: "รวม 50+ Claude Skills ที่ควรรู้จัก — จัดหมวดครบ 8 กลุ่ม",
    subtitle: "Meta Skills, Coding, Design, Business, Media, Docs, Multi-Agent — รวมลิงก์ GitHub พร้อมใช้ทุก Skill",
    category: "Claude Skills",
    categoryBadge: "SKILL DIRECTORY",
    icon: "⚙️",
    readTime: "10 นาที",
    date: "2026-08",
    tags: ["Claude Skills", "Skill Library", "GitHub", "Automation", "TDD", "UI Design", "Multi-Agent", "NotebookLM"],
    summary: "ไดเรกทอรี Skills สำหรับ Claude Code จัดกลุ่มครบ 8 หมวด: ⚙️ Meta, 📝 Planning, 💻 Code Dev, 🛠️ Tooling, 📚 Writing, 🎨 UI/Design, 💼 Business, 🎬 Media, 📑 Docs, 🌐 Multi-Agent — พร้อมลิงก์ GitHub ของแต่ละ Skill",
    featured: false,
    skillCategories: [
      {
        icon: "⚙️",
        name: "Meta Skills",
        skills: [
          { name: "Skill Creator", desc: "ทดสอบ Claude กับงานจริง จากนั้นร่างและปรับปรุง Skill ใหม่", link: "github.com/anthropics/skills/tree/main/skills/skill-creator" },
          { name: "Write a Skill", desc: "แนะนำ Claude ให้เขียน Skill ใหม่ด้วยโครงสร้างที่ถูกต้อง", link: "github.com/mattpocock/skills/tree/main/write-a-skill" },
          { name: "Find Skills", desc: "ค้นหาตลาดกลาง SkillsMP เพื่อหา Skill ที่ตรงกับ Use Case", link: "skillsmp.com" }
        ]
      },
      {
        icon: "📝",
        name: "Planning & Design",
        skills: [
          { name: "Grill Me", desc: "บังคับให้ Claude ตั้งคำถามเจาะลึกฟีเจอร์จนทุกการตัดสินใจชัดเจน", link: "github.com/mattpocock/skills/tree/main/grill-me" },
          { name: "Write a PRD", desc: "สร้าง PRD ผ่านการสัมภาษณ์ Interactive + สำรวจโค้ดเบส", link: "github.com/mattpocock/skills/tree/main/write-a-prd" },
          { name: "PRD to Plan", desc: "เปลี่ยน PRD ให้เป็นแผนพัฒนาแบบแบ่งเฟส", link: "github.com/mattpocock/skills/tree/main/prd-to-plan" },
          { name: "PRD to Issues", desc: "ย่อย PRD ให้เป็น GitHub Issues ที่หยิบไปทำได้", link: "github.com/mattpocock/skills/tree/main/prd-to-issues" },
          { name: "Design an Interface", desc: "สร้างดีไซน์ Interface 3-5 ตัวเลือกสำหรับ Module หนึ่งๆ", link: "github.com/mattpocock/skills/tree/main/design-an-interface" },
          { name: "Request Refactor Plan", desc: "สร้างแผน Refactor โค้ดละเอียดพร้อม Commits เล็กๆ", link: "github.com/mattpocock/skills/tree/main/request-refactor-plan" }
        ]
      },
      {
        icon: "💻",
        name: "Code Development",
        skills: [
          { name: "TDD", desc: "บังคับลูป Test-first, red-green-refactor อย่างเข้มงวด", link: "github.com/mattpocock/skills/tree/main/tdd" },
          { name: "Triage Issue", desc: "ตรวจสอบบั๊กหาสาเหตุจริง และสร้าง GitHub Issue พร้อมแผนแก้", link: "github.com/mattpocock/skills/tree/main/triage-issue" },
          { name: "QA", desc: "รัน QA เต็มรูปแบบสำหรับฟีเจอร์ พร้อมแยกย่อย Issue ก่อน PR", link: "github.com/mattpocock/skills/tree/main/qa" },
          { name: "Systematic Debugging", desc: "แก้บั๊กแบบ 4 เฟส ห้ามสุ่มเปลี่ยนโค้ดไปเรื่อย", link: "github.com/obra/superpowers/tree/main/skills/systematic-debugging" },
          { name: "Auto-Commit Messages", desc: "อ่าน Staged diff และสร้าง Commit message มาตรฐานอัตโนมัติ", link: "github.com/anthropics/skills/tree/main/skills/auto-commit" },
          { name: "Code Review", desc: "รีวิวอย่างเป็นระบบครอบคลุมความปลอดภัย ประสิทธิภาพ และ Architecture", link: "github.com/anthropics/skills" },
          { name: "Simplification Cascade", desc: "ค้นหา Logic ซับซ้อนและเขียนใหม่เป็นชิ้นเล็กๆ จัดการง่าย", link: "mcpmarket.com/tools/skills/simplification-cascades-1" },
          { name: "Context Optimization", desc: "ลดขนาด Context ประหยัด Token ขณะยังคงข้อมูลสำคัญ", link: "github.com/muratcankoylan/agent-skills-for-context-engineering" },
          { name: "React Best Practices", desc: "บังคับใช้ Best practices สไตล์ Vercel/Next.js", link: "github.com/vercel-labs/agent-skills/tree/main/skills/react-best-practices" }
        ]
      },
      {
        icon: "🛠️",
        name: "Tooling & Setup",
        skills: [
          { name: "Setup Pre-Commit", desc: "ติดตั้ง Husky pre-commit hooks พร้อม lint-staged, Prettier", link: "github.com/mattpocock/skills/tree/main/setup-pre-commit" },
          { name: "Git Guardrails", desc: "บล็อกคำสั่ง Git อันตราย เช่น push, reset --hard", link: "github.com/mattpocock/skills/tree/main/git-guardrails-claude-code" },
          { name: "Dependency Auditor", desc: "สแกนหาแพ็กเกจล้าสมัยหรือมีช่องโหว่", link: "github.com/ComposioHQ/awesome-claude-skills" }
        ]
      },
      {
        icon: "📚",
        name: "Writing & Knowledge",
        skills: [
          { name: "Edit Article", desc: "แก้ไขและปรับปรุงบทความ ปรับโครงสร้างเนื้อหา เพิ่มความชัดเจน", link: "github.com/mattpocock/skills/tree/main/edit-article" },
          { name: "API Documentation Generator", desc: "อ่าน Routes และสร้าง OpenAPI / Swagger docs อัตโนมัติ", link: "github.com/ComposioHQ/awesome-claude-skills" },
          { name: "Content Researcher", desc: "เรียนรู้สไตล์การเขียนของคุณ จากนั้นร่างบล็อกโพสต์ยาวพร้อมอ้างอิงจริง", link: "github.com/ComposioHQ/awesome-claude-skills/blob/master/content-research-writer/SKILL.md" },
          { name: "Obsidian Vault", desc: "จัดการโน้ตใน Obsidian แบบ Interactive จัดระเบียบ Wikilinks", link: "github.com/mattpocock/skills/tree/main/obsidian-vault" }
        ]
      },
      {
        icon: "🎨",
        name: "UI & Frontend Design",
        skills: [
          { name: "Frontend Design", desc: "แนะนำ Claude ให้สร้าง UI ที่ทันสมัย", link: "github.com/anthropics/skills/tree/main/skills/frontend-design" },
          { name: "Theme Factory", desc: "สร้าง Color palettes และธีมแบบสมบูรณ์จาก Prompt สั้นๆ", link: "github.com/anthropics/skills/tree/main/skills/theme-factory" },
          { name: "Canvas Design", desc: "เปลี่ยน Prompt ให้เป็นกราฟิก โปสเตอร์ และภาพปก", link: "github.com/anthropics/skills/tree/main/skills/canvas-design" },
          { name: "Web Artifacts Builder", desc: "สร้างเครื่องคิดเลขและเครื่องมือ Interactive", link: "github.com/anthropics/skills/tree/main/skills/web-artifacts-builder" },
          { name: "Algorithmic Art", desc: "สร้าง Generative Visual ด้วย p5.js", link: "github.com/anthropics/skills/tree/main/skills/algorithmic-art" },
          { name: "Brand Guidelines", desc: "บังคับใช้ระบบแบรนด์กับคอมโพเนนต์ใหม่ทั้งหมด", link: "github.com/anthropics/skills/tree/main/skills/brand-guidelines" }
        ]
      },
      {
        icon: "💼",
        name: "Business & Marketing",
        skills: [
          { name: "Stripe Integration", desc: "ตั้งค่าระบบจ่ายเงิน Webhooks อย่างปลอดภัย", link: "github.com/wshobson/agents/tree/main/plugins/payment-processing/skills/stripe-integration" },
          { name: "Lead Research Assistant", desc: "ค้นหาบริษัทเป้าหมายและผู้มีอำนาจตามรูปแบบ ICP", link: "github.com/ComposioHQ/awesome-claude-skills/blob/master/lead-research-assistant/SKILL.md" },
          { name: "Marketing Skills 20+", desc: "รวมกว่า 20 Skill สำหรับงาน CRO, Copywriting, Social Media", link: "github.com/coreyhaines31/marketingskills" },
          { name: "Claude SEO", desc: "ออดิต Technical SEO, Schema และปรับแต่ง On-page", link: "github.com/AgriciDaniel/claude-seo" }
        ]
      },
      {
        icon: "🎬",
        name: "Media Generation",
        skills: [
          { name: "Image Generator", desc: "เชื่อมต่อ API ภายนอกอย่าง Nano Banana Pro สำหรับเจนรูปภาพ", link: "github.com/feedtailor/ccskill-nanobanana" },
          { name: "Image Optimizer", desc: "ย่อและแปลงรูปภาพเป็น WebP", link: "mcpmarket.com/tools/skills/image-optimizer" },
          { name: "Remotion Best Practices", desc: "ใช้ Remotion สร้างวิดีโอและ Motion Graphics", link: "github.com/remotion-dev/remotion" }
        ]
      },
      {
        icon: "📑",
        name: "Documents & Productivity",
        skills: [
          { name: "PDF Processing", desc: "ดึงตาราง กรอกแบบฟอร์ม และรวมไฟล์ PDF", link: "github.com/anthropics/skills/tree/main/skills/pdf" },
          { name: "PPTX", desc: "สร้างและแก้ไขสไลด์ เลย์เอาต์ และโน้ตนำเสนอ", link: "github.com/anthropics/skills/tree/main/skills/pptx" },
          { name: "XLSX", desc: "เขียนสูตร Pivot tables จากคำสั่งภาษาอังกฤษ", link: "github.com/anthropics/skills/tree/main/skills/xlsx" },
          { name: "Doc Co-Authoring", desc: "เขียนเอกสารร่วมกันแบบ Real-time ระหว่างคุณกับ Claude", link: "github.com/anthropics/skills/tree/main/skills/doc-coauthoring" },
          { name: "NotebookLM Integration", desc: "ทำงานร่วมกับ NotebookLM ทำบทสรุปและ Flashcards", link: "github.com/PleasePrompto/notebooklm-skill" }
        ]
      },
      {
        icon: "🌐",
        name: "Multi-Agent & Web",
        skills: [
          { name: "Multi-Agent Consensus", desc: "ปล่อย Sub-agents มาแก้ปัญหาเดียวกันและรวมคำตอบ", link: "github.com/hungv47/meta-skills" },
          { name: "Model Debate", desc: "จับ Claude หลายอินสแตนซ์ดีเบตกันเพื่อ Stress-test ไอเดีย", link: "github.com/tommasinigiovanni/conclave" },
          { name: "Playwright CLI", desc: "ควบคุมเบราว์เซอร์ผ่าน Playwright เพื่อทดสอบ UI Regression", link: "github.com/microsoft/playwright" },
          { name: "Firecrawl Skill", desc: "ดึงข้อมูลจากเว็บที่โดนบล็อก Scraper", link: "github.com/mendableai/firecrawl" }
        ]
      }
    ],
    content: {
      intro: "Claude Skills คือไฟล์คำสั่งพิเศษที่ทำให้ Claude ทำงานเฉพาะทางได้ดีขึ้น — ตั้งแต่ TDD อย่างเข้มงวด, สร้าง PRD จาก Interview, วาด UI, จัดการ Git, จนถึง Multi-Agent ที่ดีเบตกันเพื่อหาคำตอบที่ดีที่สุด รวบรวมไว้ครบ 50+ Skills จาก GitHub และ Marketplace",
      workflowSteps: [
        { step: "🔍 หา Skill ที่ใช่", desc: "ดูตามหมวดด้านล่าง หรือค้นจาก SkillsMP.com ว่ามี Skill สำเร็จรูปสำหรับ Use Case ของคุณหรือเปล่าก่อนสร้างเอง" },
        { step: "📥 ติดตั้ง", desc: "Clone หรือ Download ไฟล์ SKILL.md จาก GitHub แล้ววางใน Project ของคุณตามโครงสร้าง skills/ ที่ Claude Code รู้จัก" },
        { step: "🧪 ทดสอบ + ปรับ", desc: "รัน Skill กับงานจริง แล้วใช้ 'Skill Creator' Skill ช่วยปรับปรุงผลลัพธ์จนได้ Skill ที่ทำงานเข้ากับ Workflow ของคุณจริงๆ" }
      ],
      promptCopyText: `// Meta-prompt สำหรับเลือก Skill ที่เหมาะกับงานของคุณ
I need help selecting the right Claude Skill for my use case.

My task: [อธิบายสิ่งที่คุณต้องการให้ Claude ทำ]
My stack: [เช่น Next.js, Python, Notion ฯลฯ]
My goal: [เช่น เขียนโค้ดเร็วขึ้น / จัดการ Docs / สร้าง UI]

Based on the available skills below, recommend:
1. The 3 most relevant skills for my task
2. Why each skill fits my use case
3. The order I should install them
4. Any skills I should combine together

Available skill categories:
- Meta Skills (Skill Creator, Find Skills)
- Planning (PRD, Grill Me, Design Interface)
- Code Dev (TDD, QA, Debugging, Code Review)
- Tooling (Git Guardrails, Pre-commit, Dep Auditor)
- Writing (Article Editor, API Docs, Content Research)
- UI/Design (Frontend, Canvas, Theme Factory)
- Business (SEO, Marketing, Stripe, Lead Research)
- Media (Image Gen, Remotion, Video)
- Documents (PDF, PPTX, XLSX, Co-Author)
- Multi-Agent (Consensus, Debate, Playwright, Firecrawl)`,
      takeaways: [
        "50+ Skills ครบทุก Workflow — จาก TDD เข้มงวดจนถึง Multi-Agent ดีเบตหาคำตอบ",
        "ติดตั้งได้เลยผ่าน GitHub — ส่วนใหญ่เป็นไฟล์ SKILL.md ไฟล์เดียว วางแล้วใช้ได้ทันที",
        "ไม่รู้จะเริ่ม Skill ไหน? ปรึกษาเราช่วยวิเคราะห์และสร้าง Skill ที่เหมาะกับงานคุณ เริ่มต้น 490 บาท"
      ]
    },
    cta: {
      title: "ปรึกษาการสร้าง Skill ที่เหมาะสมกับงานของคุณ",
      description: "มีประสบการณ์ Prompt Engineering + Reverse Engineering ช่วยวิเคราะห์ Workflow และสร้าง Skill ที่ทำงานร่วมกับระบบของคุณจริงๆ เริ่มต้น 490 บาท หรือเข้า Insider Club เดือนละ 99 บาทเพื่อรับเทคนิค Skill Engineering ใหม่ทุกสัปดาห์",
      primaryBtnText: "เข้าร่วม Insider Club (99.-/เดือน) →",
      secondaryBtnText: "ปรึกษาสร้าง Skill (490.-) ผ่าน LINE"
    }
  },
  {
    id: "before-ai-video-editing-checklist",
    title: "ก่อนให้ Claude ตัดวิดีโอ ต้องเตรียมอะไรบ้าง? เช็กลิสต์ 5 อย่างกันงานพัง",
    subtitle: "AI ตัดไม่เหมือนที่คิด ส่วนใหญ่ไม่ใช่เพราะ AI ไม่เก่ง แต่เพราะเรายังไม่ได้บอกว่า 'สวย' ของเราคืออะไร",
    category: "AI Visual",
    categoryBadge: "VIDEO WORKFLOW",
    icon: "✅",
    coverImage: "/resources/video-prep-checklist.svg",
    readTime: "8 นาที",
    date: "2026-10",
    tags: ["AI Video Editing", "Claude Code", "Style Guide", "Workflow", "Checklist", "Subtitle ภาษาไทย"],
    summary: "เช็กลิสต์ 5 อย่างที่ต้องเตรียมก่อนส่งงานให้ Claude / Claude Code ช่วยตัดต่อ ตั้งแต่ไฟล์ดิบ Reference สคริปต์ Style Guide ไปจนถึงสเปกไฟล์ส่งออก พร้อม Prompt 5 เฟส (วิเคราะห์ → วางแผน → ทำ → ตรวจ → ส่งออก) ที่คัดลอกไปใช้ได้เลย",
    featured: false,
    content: {
      intro: "ลองนึกดูว่าเคยสั่ง AI แค่ว่า 'ตัดคลิปนี้ให้สวยๆ หน่อย' แล้วได้งานที่จังหวะเนิบเกินไป ตัวหนังสือเล็กจนอ่านไม่ออก หรือซับไทยมีคำผิดไหม ปัญหาไม่ได้อยู่ที่ AI อย่างเดียว แต่อยู่ที่เรายังไม่ได้ให้ข้อมูลพอ ก่อนสั่งตัด ให้เตรียม 5 อย่างนี้ก่อน: ไฟล์ดิบ, Reference, สคริปต์, Style Guide และสเปกไฟล์ส่งออก แล้วให้ AI 'วิเคราะห์และเสนอแผน' ก่อนลงมือจริงทุกครั้ง การแก้ที่แผนง่ายกว่า Render ใหม่ทั้งคลิปเยอะ",
      workflowSteps: [
        { step: "01. เตรียม 5 อย่าง", desc: "ไฟล์ดิบจัดโฟลเดอร์เป็นระเบียบ, คลิป Reference, สคริปต์หรือ Transcript, Style Guide ของช่อง (เป็นไฟล์ .md) และสเปกไฟล์ที่อยากได้ เช่น 9:16, 1080×1920, MP4" },
        { step: "02. ให้ AI วิเคราะห์ก่อนตัด", desc: "สั่งให้ตรวจไฟล์ อ่าน Style Guide ถอดกฎจาก Reference และบอกว่าขาดอะไร แล้วเสนอ Edit Plan แบ่งตามเวลา ห้าม Render จริงก่อนเรากด OK" },
        { step: "03. ตรวจ Draft แล้วสั่งแก้ให้ตรงจุด", desc: "ดู Draft MP4 ทั้งคลิป แล้วสั่งแก้ด้วยเวลา + ปัญหา + ผลที่ต้องการ เช่น '00:03–00:06 ซับยาวไป ลดคำต่อบรรทัด' แทนคำว่า 'ยังไม่สวย'" }
      ],
      promptCopyText: `คุณคือ AI Video Editor และ Motion Designer
ทำงานร่วมกับฉันเพื่อสร้างวิดีโอที่พร้อมเผยแพร่จริง

ไฟล์ที่ต้องตรวจ:
- Raw footage: [ระบุชื่อไฟล์]
- Reference video: [ระบุชื่อไฟล์]
- Script / Transcript: [ระบุชื่อไฟล์]
- Style Guide: [เช่น MY_VIDEO_STYLE.md]
- Output spec: [เช่น TikTok/Reels, 9:16, 1080x1920, 30fps, MP4, ซับไทยฝังในวิดีโอ]

PHASE 1: ANALYZE
1. ตรวจว่าไฟล์มีจริงและเปิดได้ แจ้งไฟล์ที่ขาดก่อนเริ่ม
2. อ่าน Style Guide
3. วิเคราะห์ Reference: จังหวะตัด, ซับ, ตัวอักษร, Motion, Transition, เสียง
4. ตรวจ Transcript เทียบกับเสียงต้นฉบับ

PHASE 2: PLAN
1. ทำ Edit Plan แบ่งตาม Timestamp
2. ระบุภาพ, ซับ, B-roll, Motion และเสียงประกอบของแต่ละช่วง
3. บอกจุดที่ต้องการข้อมูลเพิ่ม
ห้าม Render Final จนกว่าฉันจะอนุมัติ Edit Plan

PHASE 3: EXECUTE (หลังอนุมัติ)
ทำตามแผนที่อนุมัติ รักษาเนื้อหาและเสียงต้นฉบับ

PHASE 4: QA
ตรวจภาพ เสียง ซับไทย จังหวะตัด ความละเอียด และสัดส่วนภาพ

PHASE 5: EXPORT
ส่ง Draft ให้ตรวจ แก้ตาม Feedback แล้วส่ง Final พร้อมรายงานผลตรวจ

กฎสำคัญ:
- ห้ามแต่งคำพูดใหม่ที่ผู้พูดไม่ได้พูด
- ห้ามเปลี่ยนส่วนที่อนุมัติแล้วโดยไม่มีเหตุผล
- ถ้ายังไม่ได้ตรวจผลลัพธ์จริง ห้ามบอกว่าทดสอบหรือ Render สำเร็จ
- มีข้อจำกัดอะไรให้บอกตรงๆ`,
      takeaways: [
        "รู้ว่าต้องเตรียมอะไรก่อนสั่ง AI ตัดต่อ ลดการแก้งานซ้ำหลายรอบ",
        "ได้โครง Style Guide และ Prompt 5 เฟสที่เอาไปใช้กับคลิปถัดไปได้ ไม่ต้องเริ่มใหม่ทุกครั้ง",
        "คลิปภาษาไทยปลอดภัยขึ้น เพราะมีกฎกันการแต่งคำพูดและเช็กคำผิดก่อนส่งออก",
        "จำไว้ว่า Claude Code ช่วยวิเคราะห์และประสานงานในโปรเจกต์ แต่การตัดและ Render จริงต้องมีเครื่องมือรองรับ เช่น FFmpeg, Remotion และเครื่องมือถอดเสียงอย่าง Whisper ที่ติดตั้งไว้ก่อน"
      ]
    },
    cta: {
      title: "อยากได้ระบบตัดต่อด้วย AI ที่ใช้ซ้ำได้ทุกคลิป?",
      description: "เทคนิค AI Video Workflow เต็มรูปแบบ ทั้ง Style Guide, Skill Library และ Prompt ที่ผ่านการใช้งานจริง รวมอยู่ใน Modty AI Insider Club อัปเดตทุกสัปดาห์ ปรึกษาได้เดือนละครั้ง เดือนละ 99 บาทเท่านั้น",
      primaryBtnText: "เข้าร่วม Insider Club (99.-/เดือน) →",
      secondaryBtnText: "ปรึกษา Modty ผ่าน LINE"
    }
  },
  {
    id: "motion-graphics-28-tools-for-claude",
    title: "28 เครื่องมือทำ Motion Graphics ด้วย Claude — ไม่ต้องลงครบ เริ่มแค่ 5 ตัวก็พอ",
    subtitle: "แยกให้ชัดว่าอะไรคือ Engine, Render, UI, เสียง และ Skills/MCP พร้อมเส้นทางทำคลิปแรกเป็น MP4",
    category: "AI Visual",
    categoryBadge: "TOOL DIRECTORY",
    icon: "🎬",
    coverImage: "/resources/motion-tools-28.svg",
    directoryLabel: "Tools",
    readTime: "10 นาที",
    date: "2026-10",
    tags: ["Motion Graphics", "Remotion", "GSAP", "FFmpeg", "Claude Code", "Skills", "MCP"],
    summary: "รวม 28 เครื่องมือสำหรับทำ Motion Graphics ร่วมกับ Claude จัดเป็น 5 กลุ่ม พร้อมสรุปว่ามือใหม่ควรเริ่มที่ตัวไหน เลือกตามโจทย์ยังไง ทำคลิป 15 วินาทีแนวตั้งเป็น MP4 ทีละขั้น และ Prompt พร้อมคัดลอก",
    featured: false,
    skillCategories: [
      {
        icon: "🧩",
        name: "Engines — สร้างภาพเคลื่อนไหว",
        skills: [
          { name: "Three.js", desc: "ฉาก 3D กล้อง แสง วัตถุ เหมาะกับสินค้าหมุน 3D (ระดับกลาง)", link: "threejs.org", label: "เปิดเว็บ" },
          { name: "Anime.js", desc: "ขยับตัวหนังสือ SVG และรูปทรง เหมาะกับ Kinetic Typography (ง่าย-กลาง)", link: "animejs.com", label: "เปิดเว็บ" },
          { name: "Motion", desc: "Animation บนเว็บและ React เหมาะกับหน้า SaaS (ง่าย-กลาง)", link: "motion.dev", label: "เปิดเว็บ" },
          { name: "React Three Fiber", desc: "เขียน Three.js ผ่าน React ทำเว็บ 3D โต้ตอบได้ (กลาง-สูง)", link: "r3f.docs.pmnd.rs", label: "เปิดเว็บ" },
          { name: "Lottie-web", desc: "เล่นไฟล์ Lottie บนเว็บ เหมาะกับโลโก้และไอคอนเคลื่อนไหว (ง่าย-กลาง)", link: "github.com/airbnb/lottie-web" },
          { name: "GSAP", desc: "คุม Timeline และจังหวะละเอียด เหมาะกับโมชั่นหลายฉาก (กลาง)", link: "gsap.com", label: "เปิดเว็บ" }
        ]
      },
      {
        icon: "🎞️",
        name: "Render — เปลี่ยนงานเป็นวิดีโอ",
        skills: [
          { name: "FFmpeg", desc: "แปลง ตัด ต่อ รวมเสียง ใช้ได้กับทุกงานที่ต้องส่ง MP4 (กลาง)", link: "ffmpeg.org", label: "เปิดเว็บ" },
          { name: "Remotion", desc: "สร้างวิดีโอจาก React แล้ว Render เป็น MP4 เหมาะกับ Reels และ Product Launch (ง่าย-กลาง)", link: "remotion.dev", label: "เปิดเว็บ" },
          { name: "HyperFrames", desc: "เรนเดอร์โมชั่นจาก HTML/CSS/JS เป็นวิดีโอ ตรวจวิธีติดตั้งจาก repo รุ่นล่าสุดก่อนใช้ (กลาง)", link: "github.com/hyperframes" },
          { name: "Manim", desc: "ทำแอนิเมชันด้วย Python เหมาะกับกราฟ สูตร และภาพอธิบายแนวคิด (กลาง)", link: "manim.community", label: "เปิดเว็บ" },
          { name: "Motion Canvas", desc: "Motion Graphic ผ่าน TypeScript เหมาะกับวิดีโออธิบายโค้ดและไดอะแกรม (กลาง)", link: "motioncanvas.io", label: "เปิดเว็บ" },
          { name: "Revideo", desc: "สร้างและเรนเดอร์วิดีโอด้วยโค้ด เหมาะกับงานอัตโนมัติบนเซิร์ฟเวอร์ (กลาง)", link: "revideo.dev", label: "เปิดเว็บ" }
        ]
      },
      {
        icon: "🧱",
        name: "UI Parts — งาน UI เคลื่อนไหว",
        skills: [
          { name: "shadcn/ui", desc: "ชุดพื้นฐาน UI สำหรับ React เพิ่มคอมโพเนนต์ผ่าน CLI (ง่าย-กลาง)", link: "ui.shadcn.com", label: "เปิดเว็บ" },
          { name: "React Bits", desc: "คลัง Text, Background และ UI Animation หยิบไปปรับได้เร็ว (ง่าย)", link: "reactbits.dev", label: "เปิดเว็บ" },
          { name: "Magic UI", desc: "คอมโพเนนต์ UI มีเอฟเฟกต์ เหมาะกับ Landing Page และคลิปโปรโมตแอป (ง่าย)", link: "magicui.design", label: "เปิดเว็บ" },
          { name: "Motion Primitives", desc: "องค์ประกอบ Animation สำหรับ React ปรับให้เข้ากับ Design System ได้ (ง่าย-กลาง)", link: "motion-primitives.com", label: "เปิดเว็บ" },
          { name: "Magic MCP", desc: "ให้ AI Agent ค้นและนำ UI มาใช้ในโปรเจกต์ผ่าน MCP (กลาง)", link: "21st.dev/mcp", label: "เปิดเว็บ" }
        ]
      },
      {
        icon: "🔊",
        name: "Sound — เสียงและซับไตเติล",
        skills: [
          { name: "Whisper", desc: "ถอดเสียงพูดเป็นข้อความพร้อมเวลา แล้วให้ Claude แปลงเป็น SRT ได้ (กลาง)", link: "github.com/openai/whisper" },
          { name: "Tone.js", desc: "สร้างเสียงและเพลงด้วย JavaScript เหมาะกับเสียงแจ้งเตือนตามจังหวะ (กลาง)", link: "tonejs.github.io", label: "เปิดเว็บ" },
          { name: "Wavesurfer.js", desc: "แสดงคลื่นเสียงเป็นกราฟิก เหมาะกับ Podcast และ Waveform Overlay (ง่าย-กลาง)", link: "wavesurfer.xyz", label: "เปิดเว็บ" },
          { name: "ElevenLabs Skills", desc: "เชื่อมงานเสียง AI เช่น Voiceover และ SFX ตรวจค่าบริการและสิทธิ์ก่อนใช้ (กลาง)", link: "github.com/elevenlabs/skills" }
        ]
      },
      {
        icon: "🔌",
        name: "Skills & MCP — เพิ่มความรู้และการเชื่อมต่อ",
        skills: [
          { name: "Anthropic Skills", desc: "ชุด Skills ทางการสำหรับงาน Art, Canvas, GIF ติดตั้งตาม README (ง่าย-กลาง)", link: "github.com/anthropics/skills" },
          { name: "MCP for Blender", desc: "ให้ Claude คุยกับ Blender เพื่อทำงาน 3D ต้องติดตั้ง Blender แยก (สูง)", link: "github.com/ahujasid/blender-mcp" },
          { name: "GSAP Skills", desc: "คู่มือ Agent สำหรับเขียน GSAP ค้นหา repo ที่ยังดูแลอยู่ แล้วเช็ก SKILL.md ก่อนเพิ่ม (กลาง)", link: "github.com/search?q=gsap+skills&type=repositories", label: "ค้นหา" },
          { name: "Remotion Skills", desc: "แนวทางใช้ Remotion ให้ถูกวิธี รัน npx skills add remotion-dev/skills ในโปรเจกต์ (ง่าย-กลาง)", link: "github.com/remotion-dev/skills" },
          { name: "Three.js Skills", desc: "ความรู้ฉาก 3D สำหรับ Coding Agent อ่านคู่มือของ repo ก่อนเพิ่ม (กลาง-สูง)", link: "github.com/search?q=threejs+skills&type=repositories", label: "ค้นหา" },
          { name: "After Effects MCP", desc: "สำหรับคนใช้ After Effects อยู่แล้ว เลือกตัวที่รองรับเวอร์ชันของคุณและทดสอบกับไฟล์สำเนา (สูง)", link: "github.com/search?q=after+effects+mcp&type=repositories", label: "ค้นหา" },
          { name: "Motion Graphics Skills", desc: "ชุด 13 Skills ทำ Motion ด้วยโค้ด เริ่มจาก brand-intake (ง่าย-กลาง)", link: "github.com/charlie947/motion-graphics-skills" }
        ]
      }
    ],
    content: {
      intro: "ลิสต์นี้ยาว 28 ตัวก็จริง แต่ไม่ต้องลงครบ และไม่ได้ติดตั้งเข้า Claude แบบเดียวกันทั้งหมดด้วย เพราะมีทั้ง Library, เครื่องมือ Render, โปรแกรม, Skills และ MCP ปนกันอยู่ มือใหม่เริ่มแค่ 5 ตัวก่อน: Motion Graphics Skills (ตั้งกติกาแบรนด์), Remotion (สร้างและ Render MP4), GSAP (คุมจังหวะ), React Bits (หยิบองค์ประกอบสำเร็จรูป) และ FFmpeg (งานท้าย รวมเสียง ส่งออก) ที่เหลือค่อยเพิ่มตามโจทย์",
      workflowSteps: [
        { step: "01. เตรียมเครื่อง + ติดตั้ง Skills", desc: "ติดตั้ง Node.js, VS Code, Claude Code และ FFmpeg ตามเอกสารทางการ แล้วรัน npx skills add charlie947/motion-graphics-skills จากนั้นเริ่มด้วยคำว่า 'Set up my brand for motion'" },
        { step: "02. สร้างโปรเจกต์ Remotion", desc: "รัน npx create-video@latest my-first-motion แล้ว npx skills add remotion-dev/skills จากนั้นสั่ง Claude ทำคลิป 15 วินาที 1080×1920 แบ่ง 3 ฉาก: Hook, สาธิต, CTA" },
        { step: "03. พรีวิว → Render → QA", desc: "พรีวิวด้วย npx remotion studio เช็กชื่อ Composition ให้ถูกก่อน แล้ว npx remotion render <CompositionId> out/clip.mp4 ตรวจว่าตัวหนังสือไม่หลุดจอ ภาษาไทยไม่เพี้ยน และสิทธิ์ใช้เพลง/ฟอนต์/โลโก้" }
      ],
      promptCopyText: `Create a 15-second vertical (1080x1920, 30fps) motion graphics MP4 for a Thai beginner audience.
Topic: [หัวข้อคลิปของคุณ]

Scenes:
1. 0-3s Hook: "[ข้อความเปิด]"
2. 3-12s Show [ประเด็นหลัก] in clear editorial cards with gentle transitions.
3. 12-15s CTA: "[ข้อความปิด]"

Visual direction: [สไตล์ที่ต้องการ เช่น clean editorial, cream background, orange accent, bold Kanit Thai typography]
Use real screenshots or user-supplied logo assets. Do not fabricate logos.
Build with Remotion. Use GSAP only where technically appropriate and compatible.

First create a shot plan and list all assets required.
Then implement, preview, export MP4, and inspect frames for clipping and incorrect Thai text.
Do not guess the composition ID: read it from the project before rendering.`,
      takeaways: [
        "รู้ว่าเครื่องมือแต่ละตัวอยู่กลุ่มไหน ทำหน้าที่อะไร ไม่ต้องลงครบ 28 ตัว",
        "เลือกชุดเครื่องมือตามโจทย์ได้ เช่น คลิปโปรโมตแอป, งาน 3D, อินโฟกราฟิก, ซับจากคลิปพูด",
        "ระวังไว้ว่า 'ใช้ฟรี' ไม่ได้แปลว่าไม่มีต้นทุน: Claude, API, เสียง AI และบริการ Render บางตัวมีค่าใช้จ่ายหรือเงื่อนไขไลเซนส์ และ MCP ควรเช็ก repo กับสิทธิ์เข้าถึงไฟล์ก่อนเชื่อม",
        "มีเส้นทางทำคลิปแรกเป็น MP4 ที่ทำตามได้ทีละขั้น"
      ]
    },
    cta: {
      title: "อยากได้คู่มือฉบับเต็มและอัปเดตเครื่องมือใหม่ทุกสัปดาห์?",
      description: "เครื่องมือ Motion และ AI Video เปลี่ยนเร็วมาก ใน Modty AI Insider Club เราอัปเดตเทคนิคล่าสุดให้ทุกสัปดาห์ และปรึกษาได้เดือนละครั้ง เดือนละ 99 บาทเท่านั้น",
      primaryBtnText: "เข้าร่วม Insider Club (99.-/เดือน) →",
      secondaryBtnText: "ปรึกษา Modty ผ่าน LINE"
    }
  },
  {
    id: "snapcn-motion-video-guide",
    title: "SnapCN คืออะไร? ประกอบวิดีโอ Motion ด้วยชิ้นส่วนสำเร็จรูป สำหรับมือใหม่",
    subtitle: "ไม่ใช่เว็บที่พิมพ์แล้วได้ภาพยนตร์ แต่เป็นตัวต่อ LEGO สำหรับคลิปแนะนำแอป เว็บ AI Tools และ SaaS",
    category: "AI Visual",
    categoryBadge: "MOTION VIDEO GUIDE",
    icon: "🧱",
    coverImage: "/resources/snapcn-motion-video.svg",
    readTime: "9 นาที",
    date: "2026-10",
    tags: ["SnapCN", "Remotion", "Motion Video", "Claude Code", "Codex", "MCP", "Product Demo"],
    summary: "รู้จัก SnapCN คลังชิ้นส่วนโมชั่นสำหรับ React + Remotion (ข้อความขยับ, จำลองแชต AI, กรอบมือถือ/แล็ปท็อป, Terminal, โลโก้) มี 2 ทางเริ่มต้น: ลองใน Browser Editor แบบไม่ต้องโค้ด หรือให้ Claude Code / Codex ประกอบให้ พร้อม Prompt สร้างคลิป 15–20 วินาที",
    featured: false,
    content: {
      intro: "SnapCN คือคลังชิ้นส่วนโมชั่นสำเร็จรูปสำหรับทำวิดีโอด้วย React และ Remotion เช่น ข้อความที่ปรากฏทีละคำ การพิมพ์คำสั่งใน Terminal แชต AI ที่ค่อยๆ ตอบ กรอบโทรศัพท์/แล็ปท็อป และแอนิเมชันโลโก้ เหมือนตัวต่อที่หยิบมาประกอบเป็นฉากได้ สิ่งที่ต้องรู้ก่อน: นี่ไม่ใช่เว็บ AI ที่พิมพ์ข้อความแล้วได้หนังสมจริง แต่เหมาะมากกับ Product Demo, คลิปแนะนำเว็บและแอป ถ้าอยากลองเร็วโดยไม่ติดตั้งอะไร ให้เริ่มที่ Browser Editor แต่ถ้าอยากคุมทุกจุดให้ใช้ Remotion + SnapCN + Coding Agent",
      workflowSteps: [
        { step: "ทางที่ 1: Browser Editor", desc: "เปิด SnapCN Video Editor เลือกชิ้นส่วน เช่น Text Reveal, Laptop Frame แก้ข้อความ สี ระยะเวลา เรียงบน Timeline แล้วลอง Export MP4 (ปุ่มและตัวเลือกอาจเปลี่ยนตามรุ่น Editor)" },
        { step: "ทางที่ 2: Claude Code / Codex", desc: "สร้างโปรเจกต์ด้วย npx create-video@latest เพิ่ม Component อย่าง npx shadcn@latest add @snapcn/text-reveal และติดตั้ง Agent Skill ด้วย npx skills add snapcndev/snapcn --skill snapcn --yes ให้ AI ประกอบฉาก" },
        { step: "ทางที่ 3: Preview + Render", desc: "เปิด Remotion Studio ตรวจภาพ แล้วเช็กชื่อ Composition จริงก่อน Render เช่น npx remotion render ProductDemo out/product-demo.mp4 --codec h264 (เปลี่ยนชื่อให้ตรงกับของคุณ)" }
      ],
      promptCopyText: `ช่วยสร้างวิดีโอ Product Demo แนวตั้ง 9:16 ความยาว 15 วินาที
ด้วย Remotion และ SnapCN Components ในโปรเจกต์นี้ (1080x1920, 30 fps)

สินค้า: [ชื่อแอปหรือเว็บของคุณ]
กลุ่มเป้าหมาย: [ใครคือคนดู]
สไตล์: [เช่น สะอาด ทันสมัย สีครีม ดำ ส้ม] ข้อความภาษาไทย ฟอนต์ Kanit

Scene 1 (0-3s): Text Reveal ข้อความ "[ประโยคเปิด]"
Scene 2 (3-7s): โชว์ภาพหน้าแอปใน Laptop Frame
Scene 3 (7-12s): จำลองการพิมพ์ Prompt "[ตัวอย่างคำสั่ง]" และ AI ตอบกลับ
Scene 4 (12-15s): โลโก้ / ชื่อแอป พร้อม CTA "[ข้อความชวนทำ]"

เงื่อนไข:
- ตรวจว่า Components และ Props มีอยู่จริงใน SnapCN ก่อนเรียกใช้
- ติดตั้งเฉพาะชิ้นส่วนที่จำเป็น
- ตั้งจำนวนเฟรมให้ตรง 15 วินาที ฉากต้องไม่ทับกัน
- ใช้ภาพใน public/app.png ถ้ามี ถ้าไม่มีให้ใช้ Placeholder และบอกว่าอะไรต้องเปลี่ยน
- ตรวจว่าข้อความไทยไม่ล้นจอ ก่อน Preview และ Render เป็น MP4
- รายงานพาธไฟล์ที่ได้ และคำสั่งสำหรับ Render ซ้ำ`,
      takeaways: [
        "เข้าใจว่า SnapCN เหมาะกับงานแบบไหน (Product Demo, คลิปแนะนำเว็บ/แอป) และไม่ใช่เครื่องมือสร้างภาพยนตร์จากข้อความ",
        "เลือกเส้นทางได้ตามความถนัด: ไม่เขียนโค้ดก็เริ่มได้ที่ Browser Editor",
        "ใช้ภาพหน้าจอของสินค้าจริงเท่านั้น หรือบอกชัดว่าเป็นตัวอย่าง อย่าใช้ภาพจำลองอ้างเป็นฟีเจอร์ที่มีจริง",
        "SnapCN MCP เป็นฟีเจอร์แพ็กเกจ Pro ใช้ API Key (อย่าโพสต์คีย์ลงคลิป GitHub หรือแชร์ให้ใคร) ถ้าไม่อยากสมัคร ใช้ Agent Skill ตัวฟรีแทนได้",
        "ใน Claude แชตปกติจะไม่ได้ MP4 ออกมาเอง ต้องมีสภาพแวดล้อมที่รันโค้ดและ Render จริง"
      ]
    },
    cta: {
      title: "อยากทำวิดีโอ Motion ด้วย AI ให้ใช้งานจริงในธุรกิจ?",
      description: "ใน Modty AI Insider Club เรารวมเทคนิค AI Video, Motion และ Claude Code ที่ลองใช้จริงแล้ว อัปเดตทุกสัปดาห์ ปรึกษาได้เดือนละครั้ง เดือนละ 99 บาทเท่านั้น",
      primaryBtnText: "เข้าร่วม Insider Club (99.-/เดือน) →",
      secondaryBtnText: "ปรึกษา Modty ผ่าน LINE"
    }
  },
  {
    id: "motion-reference-to-new-video",
    title: "จาก Motion Reference สู่วิดีโอใหม่ด้วย AI — ชอบ Motion ไหน ก็ยืมจังหวะมาเล่าเรื่องของเรา",
    subtitle: "เห็นวิดีโอ Motion สวยๆ แล้วอยากได้ฟีลนั้น แต่อธิบายให้ AI ฟังไม่ถูก? ให้ AI ถอดสูตรให้ก่อน แล้วค่อยเปลี่ยนเรื่อง",
    category: "AI Visual",
    categoryBadge: "MOTION WORKFLOW",
    icon: "🎞️",
    coverImage: "/resources/motion-reference-to-video.svg",
    readTime: "8 นาที",
    date: "2026-10",
    tags: ["Motion Reference", "AI Video", "Prompt Engineering", "Google Flow", "Workflow", "Reverse Engineering"],
    summary: "Workflow ง่ายๆ 3 ก้าว: หา Motion Reference ที่ชอบ → แนบให้ AI ถอดเป็น Motion Direction และ Generation Prompt → พิมพ์สั้นๆ ว่า 'เปลี่ยนเรื่องเป็น…' ในแชทเดิม แล้วเอา Reference + Prompt ใหม่ไปสร้างวิดีโอจริง พร้อมวิธีสะสมคลัง Reference ของตัวเอง",
    featured: false,
    content: {
      intro: "คำสั่งอย่าง 'ทำให้เหมือนโฆษณา Product สวยๆ' กว้างเกินไป เพราะความสวยของวิดีโอมาจากหลายอย่างพร้อมกัน ทั้งจังหวะ การเคลื่อนกล้อง ตำแหน่งวัตถุ การขึ้นข้อความ แสง วัสดุ และ Transition ระหว่างฉาก วิธีที่ง่ายกว่าคือหา Reference ที่ชอบ แล้วให้ AI อธิบายออกมาก่อนว่า Motion Direction ของคลิปนั้นเป็นยังไง จากนั้นค่อยเปลี่ยน 'เรื่อง' ให้เป็นเรื่องของเรา ข้อสำคัญคือ หลังได้ผลวิเคราะห์แล้ว ให้คุยต่อในแชทเดิม อย่าเปิดแชทใหม่ เพราะ AI ยังจำ Reference, ผลวิเคราะห์ และ Prompt ทั้งหมดไว้ใน Context เดียวกัน",
      workflowSteps: [
        { step: "01. หา Reference", desc: "ค้นใน Pinterest ด้วยคำอย่าง SaaS Product Animation, Product Motion Design, 3D Motion Graphics, Kinetic Typography, Product Launch Animation แล้วเก็บคลิปที่ชอบไว้" },
        { step: "02. แนบวิดีโอ ให้ AI ถอดสูตร", desc: "ใช้ Prompt ด้านล่าง ให้ AI ไล่ดูทีละฉาก ทั้งกล้อง องค์ประกอบ ตัวอักษร สี แสง Transition และเสียง ก่อนสรุปเป็น Generation Prompt" },
        { step: "03. พิมพ์ 'เปลี่ยนเรื่องเป็น…'", desc: "ในแชทเดิม เช่น 'เปลี่ยนเรื่องเป็น AI ช่วยวางแผนการเงิน ใช้ Motion Direction เดิม ส่ง Final Prompt ใหม่มาอย่างเดียว' แล้วเอา Reference + Prompt ใหม่แนบเข้าเครื่องมือสร้างวิดีโอ (เช่น Google Flow) พร้อมกัน" }
      ],
      promptCopyText: `คุณคือ Motion Graphics Director และ Prompt Engineer
ฉันแนบวิดีโอ Reference มาให้ (motion graphics / product demo / SaaS explainer)
ให้ทำ 3 เฟสตามลำดับ ห้ามสรุปหลวมๆ ให้ละเอียดจนคนอื่นสร้างซ้ำได้โดยไม่ต้องเห็นต้นฉบับ

PHASE 1 — วิเคราะห์ทีละฉากตลอดความยาวคลิป
สรุปภาพรวมก่อน: ความยาว, สัดส่วนภาพ, สไตล์หลักในหนึ่งบรรทัด, จังหวะ, motif ที่วนซ้ำ
แล้วแต่ละฉาก (ระบุช่วงเวลา) ให้บอก:
1. Composition และกล้อง (การจัดเฟรม, การเคลื่อนกล้อง, ความชัดตื้น)
2. สิ่งที่อยู่ในภาพ (วัตถุ ไอคอน UI รูปร่าง สไตล์ ตำแหน่ง ขนาด)
3. ตัวอักษร (ข้อความ, สไตล์ฟอนต์, ลำดับขนาด, Animation ของข้อความ)
4. สีและ Gradient (ประมาณ Hex ได้)
5. แสง เงา พื้นผิว
6. Motion และ Transition ไปฉากถัดไป
7. เสียง (ดนตรี, SFX, เสียงพูด) ถ้าสังเกตได้

PHASE 2 — เปลี่ยนผลวิเคราะห์เป็น Generation Prompt ชุดเดียว พร้อมคัดลอก
ต้องมี: Style line, Technical specs (ความยาว สัดส่วน fps), Timeline ทีละช่วง,
Typography spec, Sound design, Final frame spec
เขียนเป็นคำสั่งตรงๆ ไม่ใช่คำถาม สร้างสไตล์และเทคนิคให้ใกล้เคียง ไม่ลอกเนื้อหาที่มีลิขสิทธิ์

PHASE 3 — ปรับตามที่ฉันต้องการ (เว้นว่างหมายถึงคงตามต้นฉบับ)
- แบรนด์/โลโก้: [...]
- สี: [คงเดิม หรือระบุ Hex]
- ข้อความบนจอ: [...]
- ความยาว: [...]
- โทน/สไตล์ที่อยากเปลี่ยน: [...]
- สิ่งที่อยากเพิ่มหรือตัดออก: [...]`,
      takeaways: [
        "เปลี่ยน Reference ที่ชอบให้เป็น Motion Direction ที่ AI เข้าใจ แทนการอธิบายด้วยคำกว้างๆ",
        "Reference ตัวเดียวใช้ได้กับหลายหัวข้อ แค่พิมพ์ 'เปลี่ยนเรื่องเป็น…' ในแชทเดิม ไม่ต้องวิเคราะห์ใหม่",
        "เวลาสร้างจริงให้แนบทั้ง Reference ต้นฉบับ และ Prompt เรื่องใหม่เข้าไปด้วยกัน อย่าใช้ข้อความอย่างเดียว",
        "ค่อยๆ สะสม Motion Reference Library แยกหมวด เช่น SaaS, Product, 3D, UI, Typography, Brand, Finance, Education",
        "ถ้าต้องการ Motion คนละแบบ เช่นจากงาน SaaS เรียบๆ เป็น 3D Product Commercial ให้หา Reference ใหม่แล้วเริ่มวิเคราะห์ใหม่ และเลี่ยงการลอกเนื้อหาที่มีลิขสิทธิ์ของต้นฉบับ"
      ]
    },
    cta: {
      title: "อยากทำ Motion Video ด้วย AI แบบมีระบบ ไม่ต้องเดาทุกครั้ง?",
      description: "Workflow เต็มรูปแบบ พร้อม Prompt ที่ผ่านการใช้งานจริง รวมอยู่ใน Modty AI Insider Club อัปเดตทุกสัปดาห์ ปรึกษาได้เดือนละครั้ง เดือนละ 99 บาท หรือจองเวิร์กช็อปส่วนตัวแบบ 1:1 ทาง LINE",
      primaryBtnText: "เข้าร่วม Insider Club (99.-/เดือน) →",
      secondaryBtnText: "สอบถาม Workshop 1:1 ผ่าน LINE"
    }
  },
  {
    id: "5-ai-agent-repos",
    title: "รวม 5 AI Agent Repos ไว้ศึกษา ก่อนสร้างทีม AI ของตัวเอง",
    subtitle: "ไม่ต้องเริ่มจากศูนย์ ดูของที่คนอื่นทำไว้เป็นต้นแบบ แล้วลองงานเล็กๆ ทีละอย่าง",
    category: "Automation",
    categoryBadge: "AI AGENT REPOS",
    icon: "🤖",
    coverImage: "/resources/ai-agent-repos.svg",
    readTime: "5 นาที",
    date: "2026-10",
    tags: ["AI Agent", "Open Source", "GitHub", "Automation", "Multi-Agent", "Claude Code", "Codex"],
    summary: "5 โปรเจกต์ Open Source ที่ใช้ศึกษาแนวทางสร้างผู้ช่วย AI และทีม AI ที่แบ่งงานกันทำ พร้อมไอเดียงานเล็กๆ ให้ลอง ขั้นตอนเริ่มใช้ 5 ข้อ และ Prompt ให้ Codex / Claude Code ช่วยอ่านโปรเจกต์ก่อนลงมือ",
    featured: false,
    skillCategories: [
      {
        icon: "🧪",
        name: "5 Repos ที่ควรลอง",
        skills: [
          { name: "Open Dot", desc: "ศึกษาการสร้างทีม AI ส่วนตัวที่แยกหน้าที่ให้แต่ละ Agent ลองให้ตัวหนึ่งค้นข้อมูล อีกตัวเตรียมเนื้อหา แล้วเราตรวจก่อนใช้", link: "github.com/composio-community/open-dot" },
          { name: "OpenMausBot", desc: "ทดลอง Personal Agent หลายตัวและการเลือกโมเดลให้เหมาะกับงาน เช่น Research Bot, Coding Bot, Content Bot", link: "github.com/milind-soni/OpenMausBot" },
          { name: "OpenManus", desc: "Agent ที่วางแผนและใช้เครื่องมือหลายขั้นตอนจากเป้าหมายที่ให้ ลองให้ค้นข้อมูลคู่แข่ง 3 ราย แล้วสรุปเป็นตาราง", link: "github.com/FoundationAgents/OpenManus" },
          { name: "Kortix", desc: "AI Worker ที่ทำงานผ่าน Browser และเครื่องมือต่างๆ (ชื่อ repo ในลิงก์ยังเป็น suna)", link: "github.com/kortix-ai/suna" },
          { name: "OpenBot by CopilotKit", desc: "แนวทางสร้าง Workspace ให้ Bot หลายตัวทำงานร่วมกัน เช่นทีมคอนเทนต์ ทีมซัพพอร์ต กำหนดสิทธิ์ตามงาน", link: "github.com/CopilotKit/openbot" }
        ]
      }
    ],
    content: {
      intro: "อยากมีผู้ช่วย AI หรือทีม AI ที่แบ่งงานกันทำ แต่ไม่รู้จะเริ่มตรงไหน ลองศึกษาโปรเจกต์ Open Source เหล่านี้เป็นต้นแบบก่อน แล้วค่อยปรับให้เข้ากับงานของเรา ข้อดีคือเราอ่านโค้ดได้ ปรับเองได้ ข้อควรรู้คือยังอาจมีค่า API ตามการใช้งานจริง ค่าเซิร์ฟเวอร์ และเวลาตั้งค่าดูแลระบบ ความสามารถและวิธีติดตั้งให้ยึด README ล่าสุดของแต่ละ Repo",
      workflowSteps: [
        { step: "01. เลือกตัวเดียว", desc: "เลือก Repo ที่ใกล้กับโจทย์ของเราที่สุดเพียงตัวเดียวก่อน อย่าลองทั้ง 5 พร้อมกัน" },
        { step: "02. อ่านก่อนติดตั้ง", desc: "อ่าน README, วิธีติดตั้ง และ License แล้ว Clone ให้ Codex หรือ Claude Code ช่วยอธิบายโครงสร้างและขั้นตอนตั้งค่า" },
        { step: "03. ทดลองด้วยข้อมูลจำลอง", desc: "ตั้งค่าโมเดลและ API Key ตามที่โปรเจกต์รองรับ ทดสอบกับข้อมูลจำลองก่อนปรับ Workflow หรือเชื่อมบัญชีจริง" }
      ],
      promptCopyText: `ช่วยอ่านโปรเจกต์นี้และอธิบาย:
1. โครงสร้างโปรเจกต์
2. วิธีติดตั้ง
3. ค่าใช้จ่ายที่เกี่ยวข้อง (API, เซิร์ฟเวอร์, บริการอื่น)
4. จุดที่ปรับแต่งได้

จากนั้นเสนอวิธีทดลองงานเล็กๆ หนึ่งงานที่เหมาะกับฉัน
โดยยังไม่แก้ไข Code และยังไม่ติดตั้งอะไรลงเครื่อง
บอกความเสี่ยงที่ต้องระวังก่อนเชื่อมบัญชีหรือข้อมูลจริงด้วย`,
      takeaways: [
        "ได้รายชื่อโปรเจกต์ต้นแบบ 5 ตัวสำหรับศึกษาการสร้างทีม AI",
        "มีไอเดียงานเล็กๆ ให้เริ่มทดลอง แทนที่จะเริ่มจากระบบใหญ่",
        "รู้ว่าต้องเช็ก README, License, ค่า API และข้อมูลจริงก่อนใช้งานเสมอ",
        "ทดสอบกับข้อมูลจำลองก่อนเชื่อมบัญชีหรือข้อมูลจริงทุกครั้ง"
      ]
    },
    cta: {
      title: "อยากสร้างทีม AI ที่ทำงานแทนคุณจริงๆ?",
      description: "เราเตรียมนำไอเดียจาก 5 โปรเจกต์นี้ไปทดลองสร้างทีม AI ทำคอนเทนต์ ตั้งแต่หาเทรนด์ วางแผน เขียนสคริปต์ ไปจนถึงตรวจงาน แล้วเอาผลลัพธ์มาแชร์ใน Modty AI Insider Club เดือนละ 99 บาท",
      primaryBtnText: "เข้าร่วม Insider Club (99.-/เดือน) →",
      secondaryBtnText: "ปรึกษา Modty ผ่าน LINE"
    }
  },
  {
    id: "5-github-tools-save-claude-tokens",
    title: "5 GitHub Tools ช่วยให้ Claude ใช้ Token คุ้มขึ้น",
    subtitle: "ประหยัดจริงคือทำงานเสร็จถูกต้องด้วย Context และรอบแก้น้อยที่สุด ไม่ใช่แค่ให้ Claude พูดน้อยลง",
    category: "Automation",
    categoryBadge: "TOKEN OPTIMIZATION",
    icon: "🪙",
    coverImage: "/resources/token-saving-tools.svg",
    readTime: "9 นาที",
    date: "2026-10",
    tags: ["Token", "Claude Code", "Skills", "Context", "Prompt Engineering", "Workflow"],
    summary: "เครื่องมือ 5 ตัวสำหรับแก้ปัญหาต่างกัน: Context Optimizer, Prompt Master, Token Efficiency, Strategic Compact และ Caveman พร้อมวิธีติดตั้งแบบไม่ต้องใช้ Git สูตรเลือกใช้ตามงาน และตารางวัดผลก่อน-หลัง",
    featured: false,
    skillCategories: [
      {
        icon: "🧰",
        name: "5 Tools และจุดที่ช่วย",
        skills: [
          { name: "Context Optimizer", desc: "ตรวจสิ่งที่โหลดเข้า Context ตอนเริ่ม เช่น CLAUDE.md, Plugins, MCP หาส่วนที่ไม่จำเป็น เหมาะกับโปรเจกต์ที่มี MCP เยอะ", link: "github.com/egorfedorov/claude-context-optimizer" },
          { name: "Prompt Master", desc: "ทำให้ Prompt ชัดตั้งแต่ครั้งแรก ตรวจ Task, Context, Constraints, Output ลดการสั่งแก้หลายรอบ", link: "github.com/nidhinjs/prompt-master" },
          { name: "Token Efficiency (denfry)", desc: "ลดการอธิบายซ้ำ อ่านไฟล์ซ้ำ และเรียก Tool เกินจำเป็น เหมาะกับ Coding, Debugging, Research", link: "github.com/denfry/claude-skills" },
          { name: "Strategic Compact", desc: "เลือกจังหวะ /compact ให้เหมาะ แทนการย่อ Context แบบสุ่มระหว่างงานยาว", link: "github.com/affaan-m/ECC" },
          { name: "Caveman", desc: "ลดความยืดเยื้อของคำตอบ เหมาะกับ Code Review สรุปสถานะ Commit message ติดตั้งตาม INSTALL.md ของ Repo", link: "github.com/ryailabs/caveman" }
        ]
      }
    ],
    content: {
      intro: "ตัวเลขประหยัด Token ในแต่ละเครื่องมือเป็นตัวอย่างหรือผลทดสอบที่ผู้พัฒนารายงานเอง ไม่ใช่ผลรับประกัน และไม่ควรเอาเปอร์เซ็นต์ของแต่ละตัวมาบวกกัน เลือกให้ตรงปัญหาที่เจอจริง: Startup Context เยอะ → Context Optimizer, สั่งงานไม่ชัดต้องแก้หลายรอบ → Prompt Master, งาน Coding/Debug ที่ทำซ้ำ → Token Efficiency, งานยาวหลาย Milestone → Strategic Compact, คำตอบยาวเกินจำเป็น → Caveman ที่สำคัญคือวัดผลก่อนและหลังเอง ไม่ต้องติดตั้งทั้ง 5 พร้อมกัน",
      workflowSteps: [
        { step: "01. ติดตั้งแบบไม่ต้องใช้ Git", desc: "บน Claude.ai: ดาวน์โหลด ZIP จาก GitHub หาโฟลเดอร์ที่มี SKILL.md บีบเป็น ZIP/.skill แล้วอัปโหลดใน Settings → Skills บน Claude Code: คัดลอกโฟลเดอร์ไปที่ ~/.claude/skills/<skill-name>/ แล้วเปิดใหม่ (Skill ที่พึ่ง Hooks อาจใช้บน Claude.ai ไม่ครบ)" },
        { step: "02. ลองกับงานเล็กที่วัดผลได้", desc: "ใช้งานเดียวกัน โมเดลเดียวกัน เปรียบเทียบแบบไม่ติดตั้งกับติดตั้งทีละเครื่องมือ ดู Token, Tool Calls, จำนวนรอบที่ต้องสั่งแก้ และความถูกต้อง" },
        { step: "03. จัดเป็น Workflow ตามงาน", desc: "สร้างแอป: Context Optimizer → Prompt Master → Token Efficiency → Strategic Compact → Caveman / ทำคอนเทนต์: Prompt Master → Token Efficiency → Strategic Compact / Debug: Token Efficiency → Strategic Compact → Caveman" }
      ],
      promptCopyText: `// 1) Audit Context ตอนเริ่ม (Context Optimizer)
Audit this Claude Code project's startup context.
Inspect CLAUDE.md, project instructions, MCP configuration and enabled plugins.
List redundant or rarely needed context.
Propose a minimal optimization plan.
Do not edit any files yet.
Preserve security rules and critical instructions.

// 2) เขียน Prompt ให้ชัด (Prompt Master)
Use Prompt Master to rewrite this idea into a scoped prompt for Claude Code:
[ไอเดียของคุณ]
Ask at most 3 critical questions if required.
Specify: Files, Constraints, Deliverables, Acceptance tests, Stop conditions.

// 3) ลดงานซ้ำระหว่างทำงาน (Token Efficiency)
Apply token-efficiency principles to this task.
Read only relevant files.
Avoid duplicate tool calls.
Make the smallest correct change.
Run necessary tests.
Report concise results and unresolved risks.

// 4) ก่อน /compact (Strategic Compact)
Research complete. Before compacting, summarize:
1. Confirmed requirements and architecture decisions
2. Relevant files and paths
3. Changes already made and tests passed
4. Unresolved issues and exact next action
Then suggest whether this is a safe point to run /compact.`,
      takeaways: [
        "เลือกเครื่องมือตามปัญหาที่เจอจริง ไม่ต้องติดตั้งทั้ง 5 ตัว",
        "วัดผลด้วยงานเดียวกันก่อน-หลัง ทั้ง Startup Input Tokens, Total Tokens, Tool Calls, จำนวนรอบที่ต้องสั่งแก้ และต้นทุนต่อหนึ่งงานที่เสร็จจริง",
        "การลด Output ไม่ได้แปลว่าลด Input และการ Compact อาจทำให้รายละเอียดบางส่วนหาย จึงควรบันทึกสถานะสำคัญลงไฟล์ก่อนเสมอ",
        "อย่ารัน Hooks หรือ Installer จากแหล่งที่ไม่ไว้ใจโดยไม่อ่านก่อน"
      ]
    },
    cta: {
      title: "อยากใช้ Claude Code ให้คุ้มทั้งเวลาและค่าใช้จ่าย?",
      description: "เทคนิค Claude Code, Skills, MCP และ Workflow ที่ทดลองใช้จริง มีอัปเดตทุกสัปดาห์ใน Modty AI Insider Club ปรึกษาได้เดือนละครั้ง เดือนละ 99 บาทเท่านั้น",
      primaryBtnText: "เข้าร่วม Insider Club (99.-/เดือน) →",
      secondaryBtnText: "ปรึกษา Modty ผ่าน LINE"
    }
  },
  {
    id: "ai-video-motion-resource-hub",
    title: "AI Video & Motion Guide — สร้าง Motion Studio ของตัวเองด้วย Claude Code / Codex",
    subtitle: "คุณภาพไม่ได้มาจาก Prompt อย่างเดียว แต่มาจาก Environment ที่ Agent ได้รับก่อนเริ่มสร้าง",
    category: "AI Visual",
    categoryBadge: "RESOURCE HUB",
    icon: "🎥",
    coverImage: "/resources/ai-video-motion-hub.svg",
    readTime: "12 นาที",
    date: "2026-10",
    tags: ["Motion Studio", "Remotion", "HyperFrames", "Claude Code", "Codex", "Motion Recipe", "QA"],
    summary: "ศูนย์รวมแหล่งอ้างอิงสำหรับทำวิดีโอด้วย Agent: แนวคิด Reference → Skill → Code → Render → Review, Repo ที่ควรเริ่มลอง, Motion Recipe, วิธีตั้งโฟลเดอร์ Motion Studio ของตัวเอง และ QA 4 ชั้นก่อนส่งออก",
    featured: false,
    skillCategories: [
      {
        icon: "🧱",
        name: "Framework หลัก",
        skills: [
          { name: "HyperFrames", desc: "HTML/CSS → Video เหมาะกับ Motion Graphic และงานที่ให้ Agent สร้างจากเทคโนโลยีเว็บได้เร็ว", link: "github.com/heygen-com/hyperframes" },
          { name: "Remotion AI Skills", desc: "React → Video คุม Shot, Transition, Timing ได้ละเอียดถึงระดับเฟรม", link: "remotion.dev/docs/ai/skills", label: "เปิดเว็บ" }
        ]
      },
      {
        icon: "🎬",
        name: "Repo ที่ควรเริ่มลอง",
        skills: [
          { name: "video-shotcraft", desc: "Product Video ด้วย Remotion มี Shot Recipe Cards 152 แบบ", link: "github.com/search?q=video-shotcraft&type=repositories", label: "ค้นหา" },
          { name: "video-talkcraft", desc: "Explainer จาก Voiceover พร้อม Motion Recipe Cards 109 แบบ", link: "github.com/search?q=video-talkcraft&type=repositories", label: "ค้นหา" },
          { name: "huashu-art-motion", desc: "Skill เน้น Art Direction + Code-based Motion มี 35 Art Styles และ 9 Explainer Grammars", link: "github.com/alchaincyf/huashu-art-motion" },
          { name: "lanshu-create-ai-presenter-video", desc: "Skill ทำ Explainer ตั้งแต่ Script ถึงไฟล์ส่งมอบ มีทั้ง Presenter Route และ Styled Explainer Route พร้อมระบบตรวจก่อนจบงาน", link: "github.com/cclank/lanshu-create-ai-presenter-video" }
        ]
      },
      {
        icon: "📚",
        name: "แหล่งอ้างอิงและแรงบันดาลใจ",
        skills: [
          { name: "Prompt Motion", desc: "หา Reference และไอเดีย Motion / Animation", link: "prompt-motion.com", label: "เปิดเว็บ" },
          { name: "Awesome Claude Video Skills", desc: "รวม Open-source Skill ด้าน Video, Editing และ Motion สำหรับ Claude Code / Codex", link: "github.com/zhuyansen/awesome-claude-video-skills" },
          { name: "awesome-ai-motion", desc: "คลัง Pattern และไอเดีย Motion", link: "github.com/guanmo-ai/awesome-ai-motion" },
          { name: "ClaudeAnimationBase", desc: "Starter สำหรับ Animation ด้วย p5.js พร้อมตัวอย่าง Character และ Emotion", link: "github.com/JohnHeibel/ClaudeAnimationBase" },
          { name: "claude-animation-skill", desc: "Reference สำหรับสร้าง Animation ด้วยโค้ด", link: "github.com/buildwithhanif/claude-animation-skill" }
        ]
      }
    ],
    content: {
      intro: "แนวเดิมคือ Prompt → AI Video → ได้คลิป แต่แนวแบบ Agent คือ Idea / Reference → Agent → Skill / Recipe → Code → Render → Review → Fix → Export ข้อดีคือแก้ข้อความ สี และจังหวะได้เป็นระบบ และนำ Workflow เดิมกลับมาใช้ซ้ำได้ เวลาเห็น Demo สวยๆ อย่าถามแค่ว่า 'Prompt อะไร' ให้ถามด้วยว่า มี Skill อะไร ใช้ Repo ไหนเป็น Reference มี Brand Context แบบไหน ใช้ Framework ใด และ QA แก้งานอย่างไร สองตัวหลักที่เจอบ่อยคือ HyperFrames (เหมาะกับ HTML Motion) และ Remotion (เหมาะกับงานที่ต้องคุมระดับเฟรม)",
      workflowSteps: [
        { step: "01. ตั้ง Motion Studio Folder", desc: "แยกโฟลเดอร์ brand, references, repos, skills, audio, assets, renders พร้อมไฟล์ CLAUDE.md ที่เก็บกฎซ้ำๆ ของแบรนด์ ให้ Agent ทำงานจาก Context เดียวกันทุกครั้ง" },
        { step: "02. Brand Brief → Storyboard → First Cut", desc: "ใส่ Screenshot, Logo, สี, ฟอนต์ หรือ Reference ก่อน ให้ Agent สกัดเป็น Brand Motion Brief แล้ววาง Storyboard และ Shot list ก่อนเขียนโค้ดจริง" },
        { step: "03. QA 4 ชั้น → Fix one thing → Save Recipe", desc: "ตรวจ Visual, Motion, Audio, Brand แก้ทีละอย่าง แล้วเก็บ Motion ที่ดีเป็น Recipe / Style Card ใช้ซ้ำในงานต่อไป" }
      ],
      promptCopyText: `// ตัวอย่างกฎใน CLAUDE.md ของ Motion Studio
# Motion Studio Rules

Read the brand files and reference library before designing.
Do not invent brand colors or typography when references exist.

Before coding:
1. Create a storyboard.
2. Define shot duration.
3. Define motion purpose for every shot.
4. Identify which reference or recipe supports the decision.

Motion must support the message, not decorate it.
Every frame must remain readable when paused.
Keep typography inside safe areas.
Use real data or clearly label demo data.

Before final export:
- check text overflow
- check static frames
- check abrupt jumps
- check loop/end transition
- check audio sync
- check logo lockup

---

// Prompt สั่งงานแบบ Production (แทน "ทำวิดีโอเปิดตัวให้หน่อย")
Read CLAUDE.md first.
Study the files inside /brand and /references.
Review the relevant examples inside /repos.
Create a storyboard before writing production code.

Goal: Create a [ความยาว] brand film for [สินค้า].
Message: [สิ่งที่คนดูควรเข้าใจ]
Use: [Remotion / HyperFrames / Skill ที่เลือก]
Visual direction: [สไตล์/Reference]
Audio: [เสียงพากย์/ดนตรี]

Deliver: storyboard, shot list with timing, implementation, first render, QA report, final render.
Do not change established brand rules without asking.

---

// เมื่องาน "เกือบถูก"
Fix one thing only. Keep the motion, timing and loop exactly as they are. Tell me what you changed.`,
      takeaways: [
        "Repo คือ Reference (งานดีหน้าตาเป็นยังไง) ส่วน Skill คือ Working Rules (ต้องใช้ Framework ยังไง) ควรมีทั้งสองอย่าง",
        "Motion Recipe = Shot + Composition + Camera + Timing + Transition + Easing + Typography + Parameters เก็บไว้ใช้ซ้ำได้",
        "ใช้แนวคิด Evidence-gated: งานไม่ถือว่าเสร็จเพราะ Agent บอกว่าเสร็จ ต้องมีไฟล์และการตรวจรองรับ และอย่าเริ่ม Paid Generation เต็มงานทันที ให้ทำ Pilot ราคาถูกก่อน",
        "ก่อนรันคำสั่งติดตั้งทุกครั้ง ให้เช็ก README ล่าสุดและให้ Agent บอกก่อนว่าจะติดตั้งหรือเปลี่ยนอะไร ส่วน Presenter Route ใช้ได้เฉพาะรูปและเสียงที่เรามีสิทธิ์ใช้"
      ]
    },
    cta: {
      title: "อยากมี Motion Studio ของตัวเองแต่ไม่อยากไล่ตั้งค่าทีละอย่าง?",
      description: "Workflow, Skill, Recipe และ QA ที่ใช้จริง อัปเดตทุกสัปดาห์ใน Modty AI Insider Club เดือนละ 99 บาท หรือจองเวิร์กช็อปส่วนตัวให้ปรับระบบตรงกับงานของคุณทาง LINE",
      primaryBtnText: "เข้าร่วม Insider Club (99.-/เดือน) →",
      secondaryBtnText: "สอบถาม Workshop ส่วนตัวผ่าน LINE"
    }
  },
  {
    id: "5-claude-code-skills-pro-website",
    title: "5 Claude Code Skills ที่ช่วยให้เว็บดูโปรขึ้น",
    subtitle: "เว็บใช้งานได้แล้ว แต่ยังดูเหมือน 'เว็บที่ AI สร้าง' ลองเติมความสามารถด้าน Design, 3D, Animation และ Motion",
    category: "Vibe Coding",
    categoryBadge: "WEB DESIGN SKILLS",
    icon: "✨",
    coverImage: "/resources/claude-code-web-skills.svg",
    readTime: "5 นาที",
    date: "2026-08",
    tags: ["Claude Code", "Skills", "Three.js", "GSAP", "Design", "Motion", "Vibe Coding"],
    summary: "Skills ฟรีจาก GitHub 5 ตัว: Three.js Skills, GSAP Skills, Design DNA, Motion Design Skill และ Genjutsu พร้อมลำดับใช้งาน 4 ขั้นตั้งแต่แกะ Reference ถึงเก็บงานรอบสุดท้าย",
    featured: false,
    skillCategories: [
      {
        icon: "🧩",
        name: "5 Skills",
        skills: [
          { name: "Three.js Skills", desc: "ช่วยทำเว็บ 3D และ Interactive: 3D Scene, Lighting & Shadow, Camera Controls, GLTF/GLB, Particle & Shader", link: "github.com/CloudAI-X/threejs-skills" },
          { name: "GSAP Skills", desc: "Official AI Skills จาก GSAP: Text Reveal, Timeline, ScrollTrigger, React Animation, Plugins", link: "github.com/greensock/gsap-skills" },
          { name: "Design DNA", desc: "วิเคราะห์ Layout, Typography, สี, Spacing และ Mood จาก Reference ให้ AI เข้าใจ โดยไม่ต้องคัดลอกเว็บต้นฉบับ", link: "github.com/zanwei/design-dna" },
          { name: "Motion Design Skill", desc: "ให้ Claude คิดเรื่อง Timing, Easing, Choreography, Micro-interaction แบบ Motion Designer", link: "github.com/LottieFiles/motion-design-skill" },
          { name: "Genjutsu", desc: "ขั้นเก็บงานรอบสุดท้าย ปรับ Creative Direction, Layout, Animation, 3D และ Design System ให้ไปทางเดียวกัน", link: "github.com/AThevon/genjutsu" }
        ]
      }
    ],
    content: {
      intro: "ไม่จำเป็นต้องใช้ทั้ง 5 ตัวพร้อมกัน เลือกใช้ตามงานที่กำลังทำ ถ้าเว็บทำเสร็จและใช้งานได้แล้วแต่ยังรู้สึกว่า 'ทำไมมันยังดูเหมือนเว็บที่ AI สร้าง' ปัญหามักอยู่ที่ทิศทางดีไซน์ จังหวะของ Animation และรายละเอียดภาพรวม ซึ่ง Skills เหล่านี้ช่วยเติมได้ ติดตั้งตาม README ของแต่ละ Repo แล้วเรียกใช้ตอนที่ต้องการสร้างหรือแก้ส่วนนั้นๆ",
      workflowSteps: [
        { step: "01. Design DNA", desc: "นำ Screenshot หรือ Reference ที่ชอบให้ AI สกัดเป็น Design Direction ก่อนสร้าง UI ใหม่ ใช้เป็นแนวทาง ไม่ใช่ลอกเว็บเดิมตรงๆ" },
        { step: "02. Three.js / GSAP", desc: "เพิ่ม 3D, Interaction และ Scroll Animation ตามที่โปรเจกต์ต้องการ" },
        { step: "03. Motion Design → Genjutsu", desc: "ปรับ Timing, Easing และจังหวะ แล้วปิดท้ายด้วยการเก็บ Layout, Design System และ Visual รอบสุดท้าย" }
      ],
      promptCopyText: `// ตัวอย่างสั่ง Claude Code หลังติดตั้ง Skills

// 1) แกะ Reference (Design DNA)
วิเคราะห์ภาพ Reference นี้เป็น Design DNA:
Layout, Typography, Color Palette, Spacing, Visual Effects, Mood & Style
ใช้เป็น Design Direction เท่านั้น ห้ามคัดลอกเนื้อหาหรือภาพของต้นฉบับ

// 2) ปรับ Motion (Motion Design Skill)
Animation ในหน้านี้ใช้งานได้แล้ว แต่ยังรู้สึกแข็ง
ช่วยวาง Motion Direction ก่อนแก้โค้ด: Timing, Easing, Choreography ของแต่ละ Element
และเสนอว่าจะเปลี่ยนอะไร ก่อนลงมือ

// 3) เก็บงานรอบสุดท้าย (Genjutsu)
เว็บนี้โครงสร้างและ Function เสร็จแล้ว
ตรวจ Visual Direction, Layout, Motion และ Design System ให้ไปในทิศทางเดียวกัน
เสนอรายการปรับแก้ก่อนแก้จริง`,
      takeaways: [
        "รู้จัก Skills 5 ตัวที่ช่วยเรื่อง 3D, Animation, Design Reference, Motion และการเก็บงาน",
        "มีลำดับใช้งาน 4 ขั้นที่ต่อกันได้ แต่เลือกใช้เฉพาะตัวที่แก้ปัญหาของโปรเจกต์ตัวเองก็พอ",
        "เว็บที่ใช้งานได้แล้วจะดูมี Direction มากขึ้น เมื่อมีทั้งแนวดีไซน์และจังหวะ Animation ที่ชัด"
      ]
    },
    cta: {
      title: "อยากได้เทคนิคทำเว็บด้วย AI แบบเจาะลึกเฉพาะงานของคุณ?",
      description: "เข้า Modty AI Insider Club เดือนละ 99 บาท เพื่อรับเทคนิค Claude Code, Skills, MCP และ Vibe Coding ที่ทดลองใช้จริงทุกสัปดาห์ หรือขอ Private Workshop ที่ปรับตามโจทย์ของคุณทาง LINE",
      primaryBtnText: "เข้าร่วม Insider Club (99.-/เดือน) →",
      secondaryBtnText: "สอบถาม Private Workshop ผ่าน LINE"
    }
  },
  {
    id: "rea-reverse-engineer-anything-guide",
    title: "REA: ติดตั้งและใช้ AI Agent ศึกษาโครงสร้างแอป แล้วต่อยอดเป็นฟีเจอร์ของตัวเอง",
    subtitle: "ชุดเครื่องมือ MCP ที่ให้ AI ช่วยดูว่าซอฟต์แวร์ทำงานอย่างไร พร้อมหลักฐานอ้างอิง สำหรับระบบที่เราเป็นเจ้าของหรือมีสิทธิ์ตรวจสอบ",
    category: "Automation",
    categoryBadge: "AGENT TOOL GUIDE",
    icon: "🔍",
    coverImage: "/resources/rea-reverse-engineer-guide.svg",
    readTime: "8 นาที",
    date: "2026-10",
    tags: ["REA", "MCP", "Claude Code", "Codex", "Reverse Engineering", "Prompt"],
    summary: "รู้จัก REA (Reverse Engineer Anything) ติดตั้งด้วยคำสั่งไม่กี่บรรทัด เชื่อมกับ Claude Code / Codex ทดลองกับโปรเจกต์ของตัวเองก่อน พร้อม Prompt 5 แบบสำหรับไล่ Flow ของฟีเจอร์ วิเคราะห์ Electron เทียบสองเวอร์ชัน และออกแบบฟีเจอร์ใหม่จากข้อค้นพบ",
    featured: false,
    content: {
      intro: "REA เป็นชุดเครื่องมือแบบ MCP ที่ให้ AI Agent ช่วยวิเคราะห์เว็บ แอป และไฟล์โปรแกรมที่เรามีสิทธิ์ตรวจสอบ แล้วคืนข้อมูลพร้อมหลักฐาน เช่น เส้นทางเรียกฟังก์ชัน โครงสร้างโค้ด พฤติกรรมตอนทำงาน และจุดที่ยังไม่แน่ใจ ต่างจากการก๊อปแอป เพราะเป้าหมายคือเข้าใจว่า 'ทำงานอย่างไร' แล้วเขียนของใหม่ของเราเอง ไม่ใช่เอาโค้ดหรือทรัพย์สินของคนอื่นมาใช้ ข้อจำกัดที่ควรรู้: ความสามารถต่างกันตามชนิดไฟล์และเครื่องมือที่ติดตั้ง บางผลลัพธ์เป็นการอนุมาน ต้องตรวจหลักฐานและทดสอบซ้ำเสมอ และการวิเคราะห์ Native binary ระดับลึกต้องตั้งค่า Hopper, Ghidra หรือ IDA เพิ่มเอง",
      workflowSteps: [
        { step: "01. เตรียมเครื่อง", desc: "ติดตั้ง Node.js (22.19+, 24.11+ หรือ 26+) และ AI Agent ที่รองรับ local MCP เช่น Claude Code, Codex, Cursor หรือ Gemini CLI ตรวจด้วย node -v และ npm -v" },
        { step: "02. ติดตั้งและเชื่อม Agent", desc: "รัน npx rea-agents setup เลือก Agent ที่ใช้ ตรวจรายการเปลี่ยนแปลงก่อนอนุมัติ รีสตาร์ต Agent แล้วเช็กสถานะด้วย npx rea-agents@latest doctor --json" },
        { step: "03. ลองกับโปรเจกต์ตัวเอง", desc: "เริ่มจากโฟลเดอร์ JavaScript / Electron ของเราเอง (ไม่ต้องติดตั้งเครื่องมือเสริม) เช่น npx -y rea-agents@latest analyze-javascript-application /absolute/path/to/your-app --json" }
      ],
      promptCopyText: `// PROMPT 1 — เข้าใจฟีเจอร์ในแอปที่เราเป็นเจ้าของ
ฉันต้องการศึกษา feature [ชื่อฟีเจอร์ เช่น Search] ของแอปที่ฉันเป็นเจ้าของหรือมีสิทธิ์วิเคราะห์ โดยใช้ REA ผ่าน MCP
1. ตรวจสอบว่า feature นี้เริ่มทำงานจากจุดใด
2. ไล่ data flow ตั้งแต่ input, validation, processing ถึง output
3. แสดงหลักฐานเป็น path, function, request หรือ reference เท่าที่ตรวจสอบได้
4. แยกข้อเท็จจริงกับการคาดเดาให้ชัดเจน
5. สรุปเป็นภาษาคนทั่วไป พร้อมข้อจำกัดและสิ่งที่ต้องทดสอบเพิ่ม
อย่าเปลี่ยนแปลงไฟล์หรือรันคำสั่งที่มีผลกับระบบโดยไม่ขออนุมัติก่อน

---

// PROMPT 2 — แกะ Flow เว็บที่เราดูแล
ใช้ REA วิเคราะห์เว็บที่ฉันมีสิทธิ์ตรวจสอบ: [URL]
ต้องการเข้าใจเส้นทางตั้งแต่กดปุ่มจนแสดงผลลัพธ์
สรุปเป็น Flow: User Action → UI State → Request → Response → UI Update
ระบุหลักฐาน ข้อจำกัด และจุดที่ยังไม่ทราบ
ห้ามเก็บหรือเปิดเผย credential และข้อมูลส่วนบุคคล

---

// PROMPT 3 — จากข้อค้นพบสู่ฟีเจอร์ของเรา
นำข้อค้นพบที่ยืนยันด้วยหลักฐานจาก REA มาช่วยออกแบบฟีเจอร์ [ชื่อฟีเจอร์] สำหรับโปรเจกต์ของฉัน
Tech stack: [เช่น Next.js + TypeScript]
เงื่อนไข:
- เขียน implementation ใหม่ ไม่คัดลอก proprietary source code, assets หรือ branding
- เริ่มจากสรุป requirements, user flow, architecture และ edge cases
- แยก component และมี test ขั้นพื้นฐาน
- บอกส่วนที่เป็นสมมติฐาน และวิธีตรวจสอบ
- ขออนุมัติก่อนแก้ระบบ production หรือเชื่อมบริการภายนอก

---

// PROMPT 4 — วิเคราะห์ Electron app ของเรา
ใช้ REA วิเคราะห์ Electron app ใน path [ABSOLUTE_PATH] ที่ฉันเป็นเจ้าของ
ค้นหา main process, renderer, preload, IPC channels และการสื่อสารระหว่างส่วนต่างๆ
ทำแผนภาพ architecture แบบง่าย พร้อม file/function references
แนะนำจุดปรับปรุงด้าน reliability และ security โดยไม่แก้ไฟล์ทันที

---

// PROMPT 5 — เทียบพฤติกรรมสองเวอร์ชันของแอปเรา
ฉันมี build A และ build B ของแอปตัวเอง
ตรวจจุดแตกต่างที่เกี่ยวข้องกับ feature [ชื่อฟีเจอร์] ด้วยเครื่องมือที่ REA รองรับ
ระบุข้อแตกต่างพร้อมหลักฐาน ไม่สรุปเกินข้อมูล
เสนอ regression test และแผนแก้ปัญหาที่ทำต่อได้`,
      takeaways: [
        "ติดตั้ง REA และเชื่อมกับ Claude Code / Codex ได้เอง ทดลองกับโปรเจกต์ตัวเองได้ทันที",
        "ได้ Prompt 5 แบบที่แยก 'ข้อเท็จจริงที่มีหลักฐาน' ออกจาก 'การคาดเดา' ตั้งแต่ต้น",
        "ไอเดียต่อยอด: ปรับปรุง Search, แก้บั๊กปุ่มใน Electron, ทำเอกสาร Architecture ให้ทีม, ตรวจ Network request ซ้ำซ้อน, ทำ QA Checklist",
        "ใช้เฉพาะระบบที่เราเป็นเจ้าของหรือมีสิทธิ์ตรวจสอบ ห้ามคัดลอกโค้ด ละเมิดสิทธิ์ หรือข้ามการป้องกันของผู้อื่น และตรวจหลักฐานทุกครั้งก่อนเชื่อข้อสรุปของ AI"
      ]
    },
    cta: {
      title: "อยากใช้ AI Agent กับงานพัฒนาและระบบของคุณแบบเป็นขั้นตอน?",
      description: "Workflow Claude Code, MCP และ Automation ที่ทดลองใช้จริง อัปเดตทุกสัปดาห์ใน Modty AI Insider Club เดือนละ 99 บาท ปรึกษาได้เดือนละครั้ง",
      primaryBtnText: "เข้าร่วม Insider Club (99.-/เดือน) →",
      secondaryBtnText: "ปรึกษา Modty ผ่าน LINE"
    }
  },
  {
    id: "ai-system-architect-prompt-dola",
    title: "Prompt วางแผน AI Agent / Chatbot / ระบบอัตโนมัติ — เริ่มเล็กก่อน แล้วค่อยขยาย",
    subtitle: "ให้ AI คิดแบบ System Architect: เริ่มด้วย Apps Script → n8n → Custom App ตามขนาดงานจริง ไม่ใช่ลงโค้ดทันที",
    category: "Automation",
    categoryBadge: "SYSTEM PLANNING",
    icon: "🧭",
    coverImage: "/resources/ai-system-architect-prompt.svg",
    readTime: "7 นาที",
    date: "2026-07",
    tags: ["AI Agent", "Chatbot", "n8n", "Google Apps Script", "System Design", "Prompt", "Dola AI"],
    summary: "Prompt วางระบบที่ให้ AI ประเมินว่าไอเดียของคุณควรเริ่มด้วย Google Apps Script, n8n หรือทำเป็น Web App + Backend พร้อมผลลัพธ์ 10 ส่วน ตั้งแต่ Workflow, โครงสร้างข้อมูล, MVP, Scale และ Prompt ส่งต่อให้ Claude เขียนโค้ด แถมเทคนิคใช้ Dola สร้างภาพรวมสินค้ากับพื้นหลัง",
    featured: false,
    content: {
      intro: "ข้อผิดพลาดที่พบบ่อยคือรีบให้ AI เขียนโค้ดก่อนรู้ว่าระบบควรสร้างด้วยอะไร Prompt นี้บังคับให้คิดตามลำดับ ปัญหา → เป้าหมาย → ผู้ใช้ → Workflow → ข้อมูล → Trigger → Logic → เครื่องมือ → ผลลัพธ์ → การขยาย แล้วประเมินเป็น 3 ระดับ: Level 1 Google Apps Script (ใช้ Google Sheet เป็นฐานข้อมูล ระบบไม่ซับซ้อน ต้นทุนต่ำ เหมาะทำ MVP) Level 2 n8n (เชื่อมหลายแอป หลาย Trigger Workflow ยาว) และ Level 3 Custom App / Backend (มี Login หลาย Role Dashboard ฐานข้อมูลจริง เช่น Supabase หรือ Firebase) ใช้ได้กับ Dola AI, ChatGPT, Gemini หรือ Claude ตัวไหนก็ได้",
      workflowSteps: [
        { step: "01. วาง Prompt แล้วเล่าไอเดีย", desc: "วาง System Prompt ด้านล่างในแชท แล้วเล่าระบบที่อยากได้ เช่น 'บอทตอบลูกค้าใน LINE แล้วบันทึกลง Google Sheet'" },
        { step: "02. ดูผลประเมินระดับและ MVP", desc: "AI จะบอกว่าอยู่ Level ไหน แนะนำเครื่องมือ เหตุผล และเวอร์ชันเล็กที่สุดที่ควรเริ่มก่อน พร้อมเกณฑ์วัดผลว่าสำเร็จหรือไม่" },
        { step: "03. ส่งต่อให้ Claude เขียนโค้ด", desc: "ใช้ส่วนที่ 9 (Prompt for Claude / AI Coding Tool) ที่ AI สร้างให้ ส่งต่อให้ Claude หรือ Codex ลงมือทำเป็นระบบจริง" }
      ],
      promptCopyText: `## Role
คุณคือ AI System Architect สำหรับ Solopreneur, SME, Creator และคนที่ไม่เก่งโค้ด
ช่วยวิเคราะห์ว่าไอเดียระบบควรสร้างด้วยอะไร เริ่มเวอร์ชันเล็กก่อน หรือควรขยับไปเครื่องมือที่ใหญ่ขึ้น

## Core Principle
ห้ามเริ่มจากโค้ดทันที ต้องออกแบบระบบก่อนเสมอ
คิดตามลำดับ: Problem → Goal → User → Workflow → Data → Trigger → Logic → Tool → Output → Scale

## Tool Recommendation Rule
Level 1: Google Apps Script — ถ้าระบบยังไม่ซับซ้อน ใช้ Google Sheet เป็นฐานข้อมูล ผู้ใช้ไม่เยอะ อยากประหยัดและเริ่มเร็ว
Level 2: n8n — ถ้าเชื่อมหลายแอป หลาย Trigger หลายเงื่อนไข Workflow ยาว ต้องมี Retry / Error handling
Level 3: Custom App / Backend — ถ้ามี Login หลาย Role Dashboard ฐานข้อมูลจริง (เช่น Supabase / Firebase) หรือข้อมูลจำนวนมาก
อย่าแนะนำ n8n ทันทีทุกเคส ถ้าระบบยังเล็กให้เริ่มที่ Apps Script ก่อน

## Output Format (ตอบตามนี้ทุกครั้ง)
1. System Summary
2. System Level Assessment (Level 1/2/3 พร้อมเหตุผล)
3. Recommended Stack (ประหยัด / ระบบเริ่มใหญ่ / ระบบจริงจัง)
4. Workflow Diagram (เขียนเป็นข้อความ ลูกศรขึ้นลง)
5. Data Structure (ตาราง Field / Description)
6. Automation Logic (If/Then)
7. MVP Version (ตัดอะไรออก ทำอะไรก่อน วัดผลอย่างไร)
8. Scale Version (Phase 1 → 2 → 3)
9. Prompt for Claude / AI Coding Tool (เป้าหมาย เครื่องมือ Workflow Data Logic ข้อจำกัดสำหรับคนไม่เก่งโค้ด)
10. Final Recommendation (ฟันธงว่าเริ่มจากอะไรดีสุด)

## Tone
ตอบเป็นภาษาไทย คิดแบบ System Architect แต่พูดให้คนทั่วไปเข้าใจ ไม่ใช้ศัพท์ยาก เน้นทำได้จริง ประหยัดก่อน ขยายทีหลัง

## First Response Template
"ได้เลย เดี๋ยวฉันช่วยประเมินระบบนี้ในมุม AI System Architect ก่อน
จากที่เล่ามา ระบบนี้อยู่ระดับ: [Level 1 / 2 / 3]
คำแนะนำเบื้องต้นคือ: [เริ่มด้วย Apps Script / ใช้ n8n / ทำ Custom App]
เหตุผลคือ: [เหตุผลสั้นๆ]"
แล้วตอบต่อตามโครงสร้าง 1–10

---

// เทคนิคเสริม: รวมภาพสินค้ากับพื้นหลัง (ในโหมดสร้างภาพของ Dola)
แนบรูป 1 = สินค้า, รูป 2 = พื้นหลัง แล้วพิมพ์:
นำภาพสินค้ารูป 1 มาวางไว้ในภาพที่ 2 ให้เนียนและเหมาะสมกับแสงสีและขนาด`,
      takeaways: [
        "ได้ Prompt ที่ทำให้ AI ประเมินระบบแบบ Architect ก่อนเขียนโค้ด และไม่แนะนำเครื่องมือหนักเกินจำเป็น",
        "มีเกณฑ์ชัดว่าเมื่อไหร่ควรใช้ Apps Script, n8n หรือทำ Web App + Backend",
        "ผลลัพธ์ 10 ส่วนจบด้วย Prompt ส่งต่อให้ Claude ลงมือสร้างจริง",
        "ถ้าใช้ Dola สร้างภาพสินค้า เทคนิคแนบสินค้า + พื้นหลัง 2 รูปช่วยให้ได้ภาพขายของเร็วขึ้น"
      ]
    },
    cta: {
      title: "อยากให้ช่วยออกแบบระบบ AI สำหรับงานของคุณโดยเฉพาะ?",
      description: "Modty AI Insider Club อัปเดตเทคนิค AI Agent และ Automation ทุกสัปดาห์ เดือนละ 99 บาท และปรึกษาได้เดือนละครั้ง หรือทักไลน์เพื่อคุยโจทย์ระบบของคุณ",
      primaryBtnText: "เข้าร่วม Insider Club (99.-/เดือน) →",
      secondaryBtnText: "ปรึกษา Modty ผ่าน LINE"
    }
  },
  {
    id: "design-md-sources-and-skills",
    title: "แหล่งรวม design.md + Skills ดีไซน์ ให้ AI สร้างเว็บสวยแบบไม่ 'โหล'",
    subtitle: "เริ่มจาก design.md ที่ใช่ ลองใน Google Stitch แล้วเสริมด้วย Skills กันงานดูเหมือนที่ AI ทำทุกเว็บ",
    category: "Vibe Coding",
    categoryBadge: "DESIGN RESOURCES",
    icon: "🎨",
    coverImage: "/resources/design-md-and-skills.svg",
    readTime: "5 นาที",
    date: "2026-10",
    tags: ["design.md", "Design System", "Google Stitch", "Skills", "Claude Code", "Anti-Slop"],
    summary: "รวมแหล่งหาไฟล์ design.md สำหรับสั่ง AI Agent (Claude Code, Antigravity, Cursor) สร้างเว็บ วิธีเริ่มดีไซน์ใน Google Stitch ฟรี และ Skills 3 ตัวที่ช่วยคุมคุณภาพดีไซน์และ Animation",
    featured: false,
    skillCategories: [
      {
        icon: "🧾",
        name: "แหล่งหา design.md",
        skills: [
          { name: "getdesign.md", desc: "แหล่งรวมไฟล์ Design.md จากเว็บไซต์ดังๆ", link: "getdesign.md", label: "เปิดเว็บ" },
          { name: "Neuform", desc: "คอลเลกชัน Design System 400+ แบบ", link: "neuform.ai", label: "เปิดเว็บ" },
          { name: "Aura Design Systems", desc: "รวม Design System ให้เลือกใช้เป็น Reference", link: "aura.build/design-systems", label: "เปิดเว็บ" },
          { name: "DESIGN.md Generator (Chrome Extension)", desc: "ดึง Design System ของเว็บไซต์เป็นไฟล์ DESIGN.md หรือ SKILL.md เพื่อป้อนให้ Claude Code, Cursor หรือ Codex", link: "chromewebstore.google.com/detail/designmd-generator/jbgahjopiacfecejenojopjpljocdigb", label: "เปิดเว็บ" }
        ]
      },
      {
        icon: "🛠️",
        name: "Skills ที่ควรมี",
        skills: [
          { name: "Impeccable", desc: "ฝึก Claude ให้เชี่ยวชาญดีไซน์ มีคำสั่งตรวจจับและแก้ 'Design Tells' เช่น ฟอนต์ Gradient Padding", link: "impeccable.style", label: "เปิดเว็บ" },
          { name: "UI Animation Expert", desc: "สอน AI ใช้ Framer Motion / GSAP ทำ Micro-interaction และการเปลี่ยนหน้าที่ลื่นไหล (ประมาณ 150–300ms)", link: "explainx.ai/skills/mblode/agent-skills/ui-animation", label: "เปิดเว็บ" },
          { name: "Taste Skill", desc: "เฟรมเวิร์กช่วยกันงานดู 'โหล' ให้ออกมาพรีเมียมและมีเอกลักษณ์", link: "tasteskill.dev", label: "เปิดเว็บ" },
          { name: "UI UX Pro Max", desc: "Skill ด้านดีไซน์ UI/UX ที่ช่วยให้งานมีระบบมากขึ้น", link: "github.com/nextlevelbuilder/ui-ux-pro-max-skill" }
        ]
      }
    ],
    content: {
      intro: "คิดดีไซน์ไม่ออกไม่เป็นไร ให้เริ่มจาก 'ไฟล์ design.md' ที่บอก AI ว่าสี ฟอนต์ ระยะห่าง และบุคลิกของงานเป็นแบบไหน แล้วค่อยลองในเครื่องมืออย่าง Google Stitch ที่ฟรีและเห็นภาพเร็วที่สุด จากนั้นเสริมด้วย Skills ที่ช่วยคุมรายละเอียด เลือกแหล่ง design.md ให้เหมาะกับโปรเจกต์ ถ้าได้แรงบันดาลใจจากเว็บของคนอื่น ให้ใช้เป็น Reference ของสไตล์ ไม่ใช่ก๊อปงานทั้งหน้า",
      workflowSteps: [
        { step: "01. หา design.md ที่ใช่", desc: "ค้นจาก getdesign.md, Neuform, Aura หรือใช้ Chrome Extension ดึง Design System ของเว็บที่ชอบ แล้วเก็บเป็น Reference" },
        { step: "02. ลองใน Google Stitch", desc: "เข้า Stitch เลือก Start with your design แล้ววาง design.md หรืออัปโหลดไฟล์ .md พร้อมโลโก้ สี และฟอนต์ของแบรนด์ (หรือนำเข้าจาก GitHub สาธารณะ/เว็บของเรา) แล้วกด Continue" },
        { step: "03. เสริม Skills ให้งานไม่โหล", desc: "ติดตั้ง Skills เช่น Impeccable, UI Animation Expert, Taste Skill หรือ UI UX Pro Max กับ Claude Code เพื่อคุมดีไซน์และ Motion" }
      ],
      promptCopyText: `อ่านไฟล์ design.md ในโปรเจกต์ก่อนเริ่มทำงาน
สรุปให้ฉันฟังก่อนว่าเข้าใจ Design System อย่างไร:
- สีหลัก/สีรอง และการใช้งาน
- Typography และลำดับขนาดตัวอักษร
- Spacing, Corner radius, Shadow
- บุคลิกและ Mood ของแบรนด์

จากนั้นสร้างหน้า [ชื่อหน้า เช่น Landing Page] ให้สอดคล้องกับ design.md
ข้อกำหนด:
- ห้ามคิดสีหรือฟอนต์ใหม่เอง ถ้า design.md ระบุไว้แล้ว
- หลีกเลี่ยงงานดู 'โหล' เช่น Gradient สุ่ม การ์ดลอยไร้เหตุผล
- Animation ใช้เพื่อช่วยสื่อสาร ไม่ใช่ตกแต่งอย่างเดียว (150–300ms)
- ถ้าใช้ภาพหรือข้อมูลตัวอย่าง ให้ระบุว่าเป็นตัวอย่าง`,
      takeaways: [
        "มีแหล่ง design.md 4 แหล่งให้หยิบเป็นจุดเริ่มต้น แทนการเริ่มจากหน้าว่าง",
        "Google Stitch ช่วยให้เห็นภาพดีไซน์ได้เร็วและเริ่มได้ฟรี",
        "Skills ด้านดีไซน์และ Animation ช่วยลดอาการงานดูเหมือนที่ AI ทำทุกครั้ง",
        "ใช้เว็บของคนอื่นเป็นแรงบันดาลใจด้านสไตล์เท่านั้น ไม่ลอกเนื้อหาหรือภาพ"
      ]
    },
    cta: {
      title: "อยากสร้างเว็บและแอปด้วย AI ให้ดูโปรและขายได้จริง?",
      description: "คอร์ส Vibe Coding Master Route สอนสร้างเว็บและแอปด้วย AI และเครื่องมือฟรีของ Google พร้อมอีบุ๊กฉบับเต็ม แหล่งเรียนอัปเดตทุกสัปดาห์ และปรึกษาต่ออีก 60 วัน ราคา 2,990 บาท หรือเข้า Insider Club เดือนละ 99 บาท",
      primaryBtnText: "เข้าร่วม Insider Club (99.-/เดือน) →",
      secondaryBtnText: "ดูคอร์ส 2,990.- ที่ mastervibecode"
    }
  },
  {
    id: "ai-video-vlog-condo-walkthrough",
    title: "AI Video Vlog พาชมห้อง — ให้ AI เป็น 'ผู้กำกับ' ไม่ใช่แค่คนเขียน Prompt",
    subtitle: "พิมพ์แค่ 'รีวิวโรงแรม' หรือ 'พาชมสวน' แล้วได้ทั้งแผนถ่าย Storyboard และ Prompt พร้อมใช้ใน Google Flow / Veo",
    category: "AI Visual",
    categoryBadge: "AI VIDEO PROMPT",
    icon: "🏢",
    coverImage: "/resources/ai-video-vlog-walkthrough.svg",
    readTime: "7 นาที",
    date: "2026-07",
    tags: ["AI Video", "Google Flow", "Veo", "Creative Director", "Walkthrough", "Real Estate", "Prompt"],
    summary: "System Prompt ที่ทำให้ AI เป็น Creative Director ประเมินความยาว โครงเรื่อง กล้อง แสง Transition แล้วสร้าง Storyboard และ Prompt พร้อมใช้ พร้อมตัวอย่างคอนเซ็ปต์ 'AI Condo Walkthrough' ที่ให้ความรู้สึกเหมือนมีคนถือกล้องเดินในห้องจริง",
    featured: false,
    content: {
      intro: "หัวใจคือเปลี่ยนบทบาทของ AI จาก 'คนเขียน Prompt' เป็น 'Creative Director' ที่ต้องคิดแบบคนทำหนังก่อน แล้วค่อยแปลงเป็น Prompt ผู้ใช้พิมพ์แค่ไอเดียสั้นๆ เช่น รีวิวโรงแรม เปิดร้านกาแฟ พาชมสวน หรือสร้างบ้าน แล้ว AI จะวิเคราะห์เป้าหมาย แนะนำความยาว โครงเรื่อง การเคลื่อนกล้อง แสง ไปจนถึงสร้าง Prompt พร้อมใช้ ใช้งานคู่กับ Flow AI / Gemini Pro โหมดวิดีโอ และใช้ ChatGPT/Gemini ช่วยปรับ Prompt ให้พอดีกับความยาว 8–10 วินาทีต่อคลิป นำ Prompt ด้านล่างไปสร้างเป็น Gem หรือ GPT ครั้งเดียว ใช้ได้ตลอด",
      workflowSteps: [
        { step: "01. ตั้ง Creative Director", desc: "วาง System Prompt ด้านล่างในแชท หรือสร้างเป็น Gem/GPT ไว้ใช้ซ้ำ" },
        { step: "02. พิมพ์ไอเดียสั้นๆ", desc: "เช่น 'พาชมคอนโด 1 ห้องนอน สไตล์มินิมอล' AI จะเสนอแผนถ่าย การปรับปรุงไอเดีย Storyboard และ Prompt พร้อมใช้" },
        { step: "03. สร้างทีละฉาก 8–10 วินาที", desc: "ใช้ภาพห้องแต่ละมุมเป็นภาพตั้งต้นของแต่ละฉาก แล้วเชื่อมฉากด้วย Match cut ผ่านประตู กำแพง หรือกรอบหน้าต่าง แทนการตัดภาพ" }
      ],
      promptCopyText: `# ROLE
You are an AI Creative Director, Film Director, Cinematographer, Storyboard Artist, and Google Flow / Veo Prompt Engineer.
Your mission is to transform a simple user idea into a professional, production-ready AI video concept.
Never simply rewrite the user's request. Always think like a filmmaker first.

# WORKFLOW
When a user provides a short idea, image, or rough concept:
Step 1 — Understand the Goal: main subject, target audience, purpose, emotional impact.
  If information is missing, make the most reasonable creative assumption instead of asking unnecessary questions.
Step 2 — Recommend the Production Plan: ideal duration, storytelling structure, number of scenes, camera style and movement, lens, lighting, character movement, dialogue style, pacing, transitions, visual mood, music, sound effects, aspect ratio.
  Explain briefly why each recommendation improves the result.
Step 3 — Improve the Idea: better hook, more cinematic sequence, better ending, more realistic movement. Never change the user's original intention.
Step 4 — Generate Storyboard: for each scene include Scene Number, Duration, Camera Angle, Camera Movement, Character Action, Dialogue, Environment, Lighting, Transition, Visual Notes.
Step 5 — Generate one complete production-ready prompt optimized for Google Flow / Veo, including a Negative Prompt.

# VIDEO QUALITY
Photorealistic, natural human motion, consistent characters and environment, accurate lighting, professional camera language.

# NEGATIVE PROMPT (always prevent)
Cartoon, anime, CGI look, plastic skin, object morphing, extra fingers/limbs, face distortion, warped architecture, furniture changing, flickering, low quality, camera shaking, teleportation, jump cuts, unnatural motion

# OUTPUT FORMAT (in this order)
1. Creative Analysis  2. Production Recommendations  3. Creative Improvements
4. Storyboard  5. Production-Ready Prompt  6. Negative Prompt  7. Optional Advanced Suggestions

---

// ตัวอย่างฉากสำหรับ Condo Walkthrough (ใช้ภาพห้องจริงเป็นภาพตั้งต้นแต่ละฉาก)
Scene 1: Realistic handheld camera entering a modern minimalist condominium, natural walking motion, slight camera sway, warm morning sunlight from windows, ultra realistic property tour
Scene 2: Continuous walkthrough into the living room, slight left-right look-around motion, photorealistic interior, smooth cinematic movement
Scene 3: Camera enters the bedroom, slow pan around the bed, soft curtain movement in sunlight
Scene 4: Professional consultant walks naturally into frame, warm smile, looks at camera, shallow depth of field
Scene 5 (transition): Match cut through doorway, seamless room-to-room movement, continuous camera path, no jump cuts`,
      takeaways: [
        "ได้ System Prompt ที่ทำให้ AI คิดแบบผู้กำกับ ได้ทั้งแผนถ่าย Storyboard และ Prompt ในครั้งเดียว",
        "ตั้งเป็น Gem/GPT ครั้งเดียว ใช้ได้กับทุกไอเดีย ตั้งแต่รีวิวโรงแรม ร้านกาแฟ ไปจนถึงงานก่อสร้าง",
        "ตัวอย่าง Condo Walkthrough ใช้ Match cut แทนการตัดภาพ ทำให้คลิปต่อเนื่องเหมือนมีคนถือกล้องเดินจริง",
        "ถ้าใช้ภาพห้องหรือบุคคลจริง ควรเป็นภาพที่เรามีสิทธิ์ใช้ และถ้าไม่ใช่ห้องจริง ควรบอกผู้ชมว่าเป็นภาพที่สร้างด้วย AI"
      ]
    },
    cta: {
      title: "อยากได้ Prompt และ Workflow AI Video ที่ใช้ได้จริงในธุรกิจ?",
      description: "Modty AI Insider Club อัปเดตเทคนิค AI Video, Flow และ Prompt ทุกสัปดาห์ เดือนละ 99 บาท พร้อมปรึกษาหรือรีเควสให้ช่วยทำ 1 เรื่องต่อเดือน",
      primaryBtnText: "เข้าร่วม Insider Club (99.-/เดือน) →",
      secondaryBtnText: "ปรึกษา Modty ผ่าน LINE"
    }
  },
  {
    id: "3d-carousel-hero-slide-prompt",
    title: "Prompt ทำสไลด์และหน้าเว็บ Hero แบบ 3D Carousel (มีเสียงพากย์ไทยในตัว)",
    subtitle: "วาง 2 Prompt ใน Canvas mode ได้สไลด์เลื่อนเอง พร้อมตัวอักษรยักษ์ 3D ด้านหลังที่เปลี่ยนตามหัวข้อ",
    category: "Vibe Coding",
    categoryBadge: "WEB & SLIDE PROMPT",
    icon: "🎠",
    coverImage: "/resources/3d-carousel-hero-prompt.svg",
    readTime: "6 นาที",
    date: "2026-07",
    tags: ["Hero Section", "Carousel", "3D", "React", "Tailwind CSS", "Slide", "Gemini TTS"],
    summary: "สูตรสั่ง AI ให้สร้างสไลด์หรือหน้า Hero แบบ Carousel ฟิกเกอร์ 3D: Prompt แรกบอกเรื่องที่จะทำสไลด์ ใส่เสียงพากย์ไทย ปุ่มเล่นอัตโนมัติ และข้อความยักษ์เบื้องหลัง ส่วน Prompt ที่สองเป็นต้นแบบ React + Tailwind และมี Prompt ให้ AI ช่วยเกลาข้อความแล้วจัดเป็น CONFIG ที่แปะลงโค้ดได้ทันที",
    featured: false,
    content: {
      intro: "ใช้ได้ทั้งทำสไลด์นำเสนอและทำ Hero Section ของเว็บ วิธีคือวาง Prompt แรกก่อน ตามด้วยเนื้อหาที่ต้องการ แล้วตามด้วย Prompt ที่สองซึ่งเป็นต้นแบบหน้าตา จากนั้นกดสร้าง (เลือก Canvas mode และโมเดล Pro) ถ้าอยากแก้ก็พิมพ์สั่งต่อได้เรื่อยๆ หัวใจของต้นแบบคือ ตัวละคร/ฟิกเกอร์ 4 ตัววนบทบาทซ้าย-กลาง-ขวา-หลังเมื่อกดลูกศร พื้นหลังเปลี่ยนสีเนียนๆ และมีตัวอักษรยักษ์อยู่ด้านหลัง รูปที่ใช้ให้เป็นรูปของเราเอง (หรือรูปที่เรามีสิทธิ์ใช้) ไม่ใช้ลิงก์รูปตัวอย่างของคนอื่น",
      workflowSteps: [
        { step: "01. Prompt แรก + เนื้อหา", desc: "บอกหัวข้อสไลด์ เพิ่มเสียงพากย์ไทย ปุ่มเล่นอัตโนมัติ สีสันตามเนื้อหา กรอบข้อความไม่กลืนกับพื้นขาว และข้อความยักษ์ด้านหลังที่เปลี่ยนตามชื่อหัวข้อ (ไม่เกิน 2 คำ)" },
        { step: "02. Prompt ต้นแบบ Hero", desc: "วางสเปก React + TypeScript + Vite + Tailwind ที่กำหนดฟอนต์ ตำแหน่ง ขนาด และ Transition 650ms ของ Carousel ทั้ง 4 ตำแหน่ง" },
        { step: "03. ให้ AI เกลาคำ + ทำ CONFIG", desc: "กรอกข้อมูลดิบ (ชื่อแบรนด์ ข้อความลายน้ำ หัวข้อ คำอธิบาย ปุ่ม รูป 4 รูป + สีพื้นหลัง) แล้วให้ AI เกลาและส่งกลับเป็นตัวแปร CONFIG กับ IMAGES ไปแปะในโค้ด" }
      ],
      promptCopyText: `// PROMPT 1 — วางก่อน แล้วตามด้วยเนื้อหาของคุณ
จาก prompt ถัดไปนี้ ต้องการสร้างเนื้อหาใหม่เป็นสไลด์เรื่อง [หัวข้อ]
เพิ่มเสียงพากย์ภาษาไทย น้ำเสียงสดใสเป็นธรรมชาติ ด้วย Gemini TTS API
มีปุ่มกดเล่นอัตโนมัติ แล้วสไลด์เลื่อนเองได้
ปรับสีสันให้เข้ากับเนื้อหา กรอบข้อความให้ไม่กลืนกับสีขาวเกินไป
มี Dynamic Background Text (Giant Text): ข้อความ 3D SHAPE ด้านหลังตัวละครเปลี่ยนตาม activeSlide.title
เป็นชื่อเรื่องไม่เกิน 2 คำที่เกี่ยวข้องกับเรื่องนั้นๆ

---

// PROMPT 2 (ย่อ) — ต้นแบบ Hero Carousel สร้างด้วย React + TypeScript + Vite + Tailwind CSS + lucide-react
Build a single full-viewport hero section called "[ชื่อแบรนด์]" as a character-figurine carousel.
- Fonts: Anton (display), Inter (body)
- 4 images with their own background colors; preload on mount
- State: activeIndex (0-3), isAnimating lock, isMobile (<640px)
- Roles: center = activeIndex, left = (i+3)%4, right = (i+1)%4, back = (i+2)%4
- center: large (scale ~1.68 desktop / 1.25 mobile), no blur; left/right: small, blur 2px, opacity .85; back: smaller, blur 4px
- Giant ghost text behind the figures: clamp(90px, 28vw, 380px), Anton, white
- Bottom-left: title, short description, prev/next circular arrow buttons
- Bottom-right: large link text with arrow
- Background color and all positions/scales/blur/opacity transition together over 650ms cubic-bezier(0.4,0,0.2,1)
- Add a subtle grain overlay (SVG fractalNoise)
- Ignore navigation clicks while animating

---

// PROMPT 3 — ให้ AI เกลาคำและจัดฟอร์แมตให้แปะลงโค้ด
ฉันมีเนื้อหาร่างสำหรับ Hero Section สไตล์ Carousel
ช่วยเกลาคำให้น่าสนใจ ดูเป็นมืออาชีพ และจัดกลับมาเป็นตัวแปร CONFIG และ IMAGES เพื่อแปะใน React ได้ทันที

ข้อมูลดิบ:
- ชื่อแบรนด์: [...]
- ข้อความลายน้ำพื้นหลัง (อังกฤษ 1-2 คำ): [...]
- หัวข้อหลัก (ซ้ายล่าง): [...]
- คำอธิบาย (ซ้ายล่าง): [...]
- ข้อความปุ่ม (ขวาล่าง): [...]
- รูป 4 รูป (ลิงก์รูปของฉัน + โทนสีพื้นหลัง): [...]

รูปแบบผลลัพธ์:
const CONFIG = { brandName: '...', ghostText: '...', bottomTitle: '...', bottomDesc: '...', linkText: '...', linkUrl: '#' };
const IMAGES = [ { src: '...', bg: '...', panel: '...' } ]; // ให้ครบ 4 รูป`,
      takeaways: [
        "ได้สูตรทำสไลด์หรือ Hero Carousel แบบ 3D ที่มีเสียงพากย์ไทยและเลื่อนเองได้",
        "แยกส่วนที่ต้องแก้ (CONFIG, IMAGES) ออกจากโค้ด ทำให้เปลี่ยนแบรนด์และเนื้อหาได้ง่าย",
        "ใช้รูปที่เรามีสิทธิ์ใช้เท่านั้น และตรวจ Responsive บนมือถือก่อนเผยแพร่"
      ]
    },
    cta: {
      title: "อยากทำเว็บและสไลด์สวยๆ ด้วย AI เป็นระบบ?",
      description: "เทคนิค Vibe Coding และ Prompt สำหรับเว็บ สไลด์ และ Motion อัปเดตทุกสัปดาห์ใน Modty AI Insider Club เดือนละ 99 บาท ปรึกษาได้เดือนละครั้ง",
      primaryBtnText: "เข้าร่วม Insider Club (99.-/เดือน) →",
      secondaryBtnText: "ปรึกษา Modty ผ่าน LINE"
    }
  },
  {
    id: "claude-skills-beginner-guide",
    title: "คู่มือสร้าง Claude Skills สำหรับมือใหม่ — เขียน SOP ให้ Claude ครั้งเดียว ใช้ได้ตลอด",
    subtitle: "7 เทคนิคเขียน SKILL.md ให้ Claude เรียกใช้ถูกจังหวะ ได้ผลลัพธ์รูปแบบเดิมทุกครั้ง พร้อมเทมเพลตพร้อมใช้",
    category: "Claude Skills",
    categoryBadge: "SKILL BUILDING GUIDE",
    icon: "🧠",
    coverImage: "/resources/claude-skills-beginner-guide.svg",
    readTime: "8 นาที",
    date: "2026-05",
    tags: ["Claude Skills", "SKILL.md", "Prompt Engineering", "Workflow", "Template"],
    summary: "Skill คือคู่มือที่สอน Claude ว่าต้องทำงานแบบไหนในแต่ละสถานการณ์ เหมือน SOP ของพนักงาน บทความนี้สรุปโครงสร้างโฟลเดอร์ รูปแบบ SKILL.md เทคนิค 7 ข้อ เทมเพลต วิธีติดตั้ง และเช็กลิสต์ก่อนใช้งานจริง",
    featured: false,
    content: {
      intro: "ทำไมต้องสร้าง Skill แทนการพิมพ์ Prompt ทุกครั้ง: ไม่ต้องสั่งซ้ำ ได้รูปแบบผลลัพธ์เดิมทุกครั้ง Claude รู้บริบทงานของเรา และแชร์ให้คนอื่นใช้ได้ สำหรับมือใหม่ ใช้แค่ไฟล์ SKILL.md ไฟล์เดียวก็พอ (โฟลเดอร์เสริมอย่าง references/, scripts/, assets/ ใส่เมื่อจำเป็น) ไฟล์ประกอบด้วย 2 ส่วนหลัก: ส่วนหัวที่มี name กับ description และส่วนเนื้อหาที่บอกวิธีทำงานและรูปแบบผลลัพธ์ เทคนิคสำคัญคือ description เพราะเป็นตัวที่ Claude ใช้ตัดสินใจว่าจะเรียก Skill ไหม",
      workflowSteps: [
        { step: "01. เขียน description ให้ครอบคลุม", desc: "ใส่คีย์เวิร์ดไทย/อังกฤษที่ผู้ใช้จะพิมพ์จริง และบอกเงื่อนไข 'ใช้เมื่อ…' ให้ชัด เพราะ description สั้นเกินไปมักทำให้ Claude ไม่เรียก Skill" },
        { step: "02. กำหนด Output + Context + Input", desc: "ใส่ Output Format ที่ชัด (ถ้าเพิ่มตัวอย่าง Input → Output จะเข้าใจเร็วขึ้น) บริบทที่ Claude ควรรู้ และแยกว่าข้อมูลไหนต้องถามผู้ใช้ ข้อมูลไหนทำเองได้ ถ้าไม่ครบให้ถามทีละ 1 คำถาม" },
        { step: "03. ติดตั้ง + ทดสอบ", desc: "สร้างโฟลเดอร์ชื่อ skill-name/ มี SKILL.md แพ็กเป็น .skill แล้วอัปโหลดที่ Claude Settings → Skills ทดลองกับงานจริงแล้วปรับ" }
      ],
      promptCopyText: `---
name: ชื่อ-skill-ของคุณ
description: [อธิบายว่าทำอะไร] ใช้ skill นี้ทุกครั้งที่ผู้ใช้พูดถึง "[keyword1]", "[keyword2]", "[keyword3]" หรือต้องการ [สถานการณ์] แม้จะไม่ได้ระบุชัดเจน ให้ trigger เสมอ
---

# ชื่อ Skill
[ประโยคเปิด: skill นี้ทำอะไร]

## Context
[บริบทสำคัญที่ Claude ควรรู้ เช่น แบรนด์ โทนเสียง แพลตฟอร์ม กลุ่มเป้าหมาย]

## Input ที่ต้องการจากผู้ใช้
- [ข้อมูลบังคับ]
- [ข้อมูลที่ไม่บังคับ + ถ้าไม่บอกให้ทำอย่างไร]
ถ้า input ไม่ครบ ให้ถามก่อน 1 คำถาม แล้วค่อยเริ่มทำ ไม่ถามหลายคำถามพร้อมกัน

## Output ที่สร้าง
### 1. [ส่วนแรก]
### 2. [ส่วนที่สอง]

## Output Format
[template หรือตัวอย่าง format]

## Tips
[เทคนิคพิเศษ และสิ่งที่ควรระวัง พร้อมเหตุผล เช่น 'ใช้ bullet เพราะจะนำไป copy ลง LINE ถ้าเป็นย่อหน้ายาวจะอ่านยากบนมือถือ']`,
      takeaways: [
        "เข้าใจโครงสร้าง Skill และทำไมไฟล์ SKILL.md ไฟล์เดียวก็เริ่มได้",
        "เทคนิค 7 ข้อ: description ที่ครอบคลุม, Output Format ชัด, ใส่ Context, โหลดข้อมูล 3 ระดับ, อธิบายเหตุผลแทนสั่งห้าม, แยกสิ่งที่ต้องถามกับทำเองได้, ตั้งชื่อ lowercase-hyphen",
        "เก็บ SKILL.md ไว้ไม่เกิน 500 บรรทัด ถ้าเนื้อหาเยอะให้แยกไป references/",
        "เช็กลิสต์ก่อนใช้: มีคีย์เวิร์ดจริง, บอกเงื่อนไข trigger, มี template, มี context, ขนาดไม่เกินกำหนด, ชื่อถูกรูปแบบ"
      ]
    },
    cta: {
      title: "อยากให้ช่วยสร้าง Skill ที่เหมาะกับงานคุณโดยเฉพาะ?",
      description: "ถ้าไม่อยากลองผิดลองถูกเอง ปรึกษาเพื่อออกแบบ Skill ตามขั้นตอนงานจริงของคุณ เริ่มต้น 490 บาท หรือเข้า Modty AI Insider Club เดือนละ 99 บาทเพื่อรับเทคนิค Skill Engineering ทุกสัปดาห์",
      primaryBtnText: "เข้าร่วม Insider Club (99.-/เดือน) →",
      secondaryBtnText: "ปรึกษาสร้าง Skill (490.-) ผ่าน LINE"
    }
  },
  {
    id: "ugc-doodle-image-analysis-prompt",
    title: "เทคนิควิเคราะห์ภาพสินค้า แล้วเติมดูเดิลกับข้อความไทยสไตล์ UGC รีวิวจริง",
    subtitle: "ภาพสินค้าธรรมดากลายเป็นภาพพร้อมโพสต์ที่ดูเหมือนเพื่อนป้ายยา โดยไม่แตะตัวสินค้า",
    category: "AI Visual",
    categoryBadge: "IMAGE PROMPT",
    icon: "✏️",
    coverImage: "/resources/ugc-doodle-image-prompt.svg",
    readTime: "4 นาที",
    date: "2026-05",
    tags: ["ChatGPT Image", "UGC", "Doodle", "สกินแคร์", "Prompt", "Social Media"],
    summary: "2 ขั้นตอน: ให้ AI วิเคราะห์สไตล์ แสง มุมกล้อง องค์ประกอบของภาพก่อน แล้วค่อยสั่งเติมดูเดิลลายเส้นและข้อความไทยแบบภาษาพูด พร้อมเปลี่ยนพื้นหลังให้ดูเป็น User-Generated Content",
    featured: false,
    content: {
      intro: "ภาพโฆษณาที่เรียบเกินไปมักดูเหมือนโฆษณา ภาพแนว UGC (เหมือนคนทั่วไปถ่ายรีวิวเอง) จึงน่าเชื่อถือกว่า เทคนิคนี้คือให้ AI วิเคราะห์ภาพก่อนเพื่อไม่ให้พลาดรายละเอียด แล้วสั่งเติมดูเดิลที่ 'ตอบสนอง' กับวัตถุในภาพ เช่น เส้นตามขอบขวด ประกายไฟ หัวใจ ดาว พร้อมข้อความภาษาไทยแบบพูดจริง กฎเหล็กคือห้ามเปลี่ยนตัวสินค้า โครงสร้าง หรือฉลาก และอย่าใส่คำโฆษณาเกินจริงหรือรับรองสรรพคุณที่สินค้าไม่มี",
      workflowSteps: [
        { step: "01. วิเคราะห์ภาพก่อน", desc: "แนบภาพแล้วสั่งให้อธิบายสไตล์ แสง มุมกล้อง และองค์ประกอบอย่างละเอียด" },
        { step: "02. เติมดูเดิล + ข้อความไทย", desc: "ใช้ Prompt ด้านล่าง ให้ดูเดิลเป็นลายเส้นมือแบบร่างที่ตอบสนองกับวัตถุ และใส่ข้อความภาษาพูดในกรอบวงกลมสลับเส้นทึบ/เส้นประ" },
        { step: "03. ปรับพื้นหลังให้เป็น UGC", desc: "เปลี่ยนฉากเป็นห้องเรียบง่ายธรรมชาติ หรือมีมือถือสินค้าแบบสุ่ม ให้ดูเป็นภาพรีวิวจริง แล้วตรวจฉลากและข้อความไทยทุกคำก่อนโพสต์" }
      ],
      promptCopyText: `// ขั้นที่ 1 — วิเคราะห์ภาพ
Analyze this image attached and describe its style, lighting, camera angle, and composition in detail.

// ขั้นที่ 2 — เติมดูเดิล + ข้อความไทย
โปรดวิเคราะห์ภาพผลิตภัณฑ์ที่อัปโหลดอย่างละเอียด โดยรักษาวัตถุหลัก องค์ประกอบ และการจัดแสงตามต้นฉบับอย่างเคร่งครัด
อย่าเปลี่ยนแปลงเอกลักษณ์ โครงสร้าง หรือฉลากของวัตถุหลักโดยเด็ดขาด

ส่วนที่ 1: ดูเดิล
เพิ่มลายเส้นดูเดิลแบบวาดด้วยมือที่สนุกสนานและมีปฏิสัมพันธ์กับวัตถุในภาพ เช่น ลากเส้นตามขอบขวด เส้นบอกความเคลื่อนไหว ประกายไฟ หัวใจ ดาว หรือการ์ตูนที่เหมาะกับสินค้า
ให้กลมกลืนเหมือนวาดลงบนรูปถ่ายด้วยความตั้งใจ ใช้สไตล์ sketchy เส้นออร์แกนิก จังหวะเส้นไม่สม่ำเสมอเล็กน้อย

ส่วนที่ 2: ข้อความ
ใส่ข้อความลายมือแบบ whimsical รอบภาพ ใช้ภาษาไทยเท่านั้น เป็นภาษาพูดธรรมชาติ ไม่ใช้สำนวนแบบ AI ไม่เป็นทางการเกินไป
ตัวอย่างแนวคำ: "ลูกรักคนใหม่!", "ดีงามมม!", "ป้ายยาเพื่อนด่วน!"
มีกรอบวงกลมสีขาวล้อมข้อความ สลับเส้นเรียบกับเส้นประ บางคำไม่ต้องมีกรอบ
(หลีกเลี่ยงคำอ้างสรรพคุณที่สินค้าไม่ได้รับรอง)

ส่วนที่ 3: คุณภาพ
องค์ประกอบสมดุล ดูเดิลไม่บังวัตถุหลัก ความละเอียดสูง สีสดใสแต่เป็นธรรมชาติ พร้อมโพสต์โซเชียล
เปลี่ยนพื้นหลังให้เป็นแนว UGC รีวิวจริง เรียบง่ายเป็นธรรมชาติ อาจมีมือคนถือสินค้า`,
      takeaways: [
        "วิเคราะห์ภาพก่อนสั่งแก้ ช่วยให้รักษาสินค้าและแสงเดิมได้ดีขึ้น",
        "ดูเดิลและข้อความภาษาพูดทำให้ภาพดูเป็นมิตรและน่าเชื่อกว่าภาพโฆษณาเรียบๆ",
        "ตรวจฉลากสินค้าและตัวอักษรไทยทุกคำหลัง Gen เพราะ AI อาจสะกดผิดได้"
      ]
    },
    cta: {
      title: "อยากสร้างระบบผลิตภาพสินค้าและคอนเทนต์ด้วย AI?",
      description: "Prompt และ Workflow ภาพ/วิดีโอ AI ที่ใช้ได้จริงกับธุรกิจ อัปเดตทุกสัปดาห์ใน Modty AI Insider Club เดือนละ 99 บาท ปรึกษาได้เดือนละครั้ง",
      primaryBtnText: "เข้าร่วม Insider Club (99.-/เดือน) →",
      secondaryBtnText: "ปรึกษา Modty ผ่าน LINE"
    }
  },
  {
    id: "humanizer-gem-tone-of-voice",
    title: "สร้าง Gem 'Humanizer' ให้งานเขียนไม่มีภาษา AI — และดึงโทนเสียงของตัวเองมาใช้",
    subtitle: "ตัดคำหุ่นยนต์ ลดความเว่อร์ ให้ข้อความอ่านเหมือนคนเขียน พร้อมสูตรโทนเสียงที่เลือกใช้ได้ทันที",
    category: "Prompt Engineering",
    categoryBadge: "WRITING SYSTEM",
    icon: "🗣️",
    coverImage: "/resources/humanizer-gem-prompt.svg",
    readTime: "6 นาที",
    date: "2026-05",
    tags: ["Humanizer", "Gemini Gem", "Tone of Voice", "Copywriting", "Prompt Engineering"],
    summary: "Prompt สร้าง Gem บรรณาธิการที่แก้ข้อความจาก AI ให้เป็นธรรมชาติ ตัดคำคลีเช่ ลดความเว่อร์ พร้อม 3 วิธีให้ AI รู้จักโทนเสียงของคุณ: ดึงจากประวัติแชท (Personal Intelligence), แนบงานเขียนเก่าเป็น Reference และเลือกสูตรโทนเสียงสำเร็จรูป",
    featured: false,
    content: {
      intro: "ข้อความจาก AI มักมีลายเซ็นเดียวกัน เช่น ประโยคเปิดแบบสูตรสำเร็จ คำฮิตอย่าง 'ปฏิวัติวงการ' 'เจาะลึก' หรือโทนขายของเกินจริง วิธีแก้คือสร้าง Gem (หรือ GPT) ตัวหนึ่งไว้เป็นบรรณาธิการ ให้รับข้อความแล้วปรับให้กระชับ จริงใจ คงใจความเดิม และตอบกลับเฉพาะข้อความที่แก้แล้ว จากนั้นเติมโทนเสียงของเราเข้าไป เพื่อให้งานเขียนไม่ใช่แค่ 'ไม่เหมือน AI' แต่ 'เหมือนเรา'",
      workflowSteps: [
        { step: "01. สร้าง Gem Humanizer", desc: "ก๊อป Prompt ด้านล่างไปสร้าง Gem ครั้งเดียว ใช้ได้ตลอด แล้วต่อท้ายด้วยโทนเสียงที่ต้องการ (Specific Persona & Tone)" },
        { step: "02. ให้ AI อ่านโทนเสียงเรา", desc: "ถ้าเปิดการเชื่อมต่อ Google Workspace ใน Gemini ไว้ ให้สั่งวิเคราะห์ Persona และ Tone of Voice จากประวัติแชท/อีเมล แล้วเก็บผลลัพธ์ไว้ต่อท้าย Prompt (ตรวจสิทธิ์ข้อมูลที่ยอมให้เข้าถึงก่อน)" },
        { step: "03. แนบงานเขียนเก่า", desc: "วางแคปชั่นหรือบทความที่เคยเขียนและชอบที่สุดลงท้าย Prompt ให้ AI เลียนแบบการเว้นวรรคและคำติดปาก" }
      ],
      promptCopyText: `Role:
คุณคือ "Humanizer" ผู้เชี่ยวชาญด้านการเขียนและบรรณาธิการ หน้าที่คือรับข้อความที่สร้างโดย AI มาปรับให้เป็นธรรมชาติเหมือนมนุษย์เขียน และกำจัดแพทเทิร์นภาษาแบบหุ่นยนต์

Core Rules:
1. Anti-AI Clichés
   - อังกฤษ: ห้ามใช้ revolutionary, game-changing, introducing, delve into, a testament to, unlock, seamless, dynamic landscape, crucial, cutting-edge
   - ไทย: ห้ามใช้ ปฏิวัติวงการ, พลิกโฉม, ขอแนะนำ, เจาะลึก, กุญแจสำคัญ, สัมผัสประสบการณ์, อย่างไรก็ตาม, ท้ายที่สุดนี้, สรุปได้ว่า
2. Natural Flow
   - เลิกโครงสร้างสูตรสำเร็จ (เช่น ขึ้นต้นทุกย่อหน้าด้วย นอกจากนี้ / ยิ่งไปกว่านั้น)
   - ประโยคสั้น กระชับ อ่านลื่นเหมือนคนคุยกัน
3. Tone Down the Drama
   - ลดน้ำเสียงตื่นเต้นเกินจริงและคำคุณศัพท์ที่พยายามขายของ ให้จริงใจ ตรงไปตรงมา เป็นมืออาชีพ
4. Preserve Meaning
   - คงใจความสำคัญของต้นฉบับครบ เปลี่ยนแค่วิธีเล่า

Specific Persona & Tone:
[พิมพ์สไตล์ของคุณ เช่น เพื่อนสนิทที่ป้ายยาของ / รุ่นพี่ที่ทำงานมา 10 ปีมาแชร์ประสบการณ์ / สายฮาที่ชอบแซะตัวเอง]

Tone Reference:
จดจำและเลียนแบบสไตล์การเขียน การเว้นวรรค และคำติดปาก จากตัวอย่างงานเขียนของฉันด้านล่าง
[วางข้อความ แคปชั่น หรือบทความเก่าที่ชอบที่สุด]

Output Condition:
เมื่อฉันส่งข้อความให้ ให้ตอบกลับเฉพาะข้อความที่ปรับแก้แล้วเท่านั้น ห้ามมีคำเกริ่นนำหรือคำอธิบายต่อท้าย

---

// Prompt ให้ Gemini วิเคราะห์โทนเสียงของคุณ
ช่วยวิเคราะห์ Specific Persona และ Tone of Voice ของฉัน จากประวัติการแชทหรืออีเมลที่ผ่านมา
สกัดออกมาเป็นโครงสร้างที่ฉันนำไปใช้สั่งงาน AI ต่อได้ทันที`,
      takeaways: [
        "สร้างบรรณาธิการ AI ไว้ครั้งเดียว ใช้ปรับทุกข้อความให้เป็นธรรมชาติ",
        "มีรายการคำต้องห้ามไทย/อังกฤษที่ทำให้ข้อความดูเป็น AI ทันที",
        "โทนเสียงมาได้ 3 ทาง: ดึงจากประวัติแชท, แนบงานเขียนเก่า หรือเลือกสูตรสำเร็จ (เพื่อนสาวป้ายยา, กูรูมินิมอล, พลังบวก, จิกกัดขำขัน)",
        "ต้องอ่านตรวจสุดท้ายเอง Humanizer ช่วยปรับสำนวน แต่ไม่รับรองความถูกต้องของข้อเท็จจริง"
      ]
    },
    cta: {
      title: "อยากให้ AI เขียนงานด้วยเสียงของคุณจริงๆ?",
      description: "เทคนิค Prompt, Gem และโทนเสียงแบรนด์ อัปเดตทุกสัปดาห์ใน Modty AI Insider Club เดือนละ 99 บาท พร้อมปรึกษาได้เดือนละครั้ง",
      primaryBtnText: "เข้าร่วม Insider Club (99.-/เดือน) →",
      secondaryBtnText: "ปรึกษา Modty ผ่าน LINE"
    }
  },
  {
    id: "chatgpt-image-prompts-personal-analysis",
    title: "รวม Prompt ทำภาพด้วย ChatGPT: วิเคราะห์สีผิว แต่งหน้า สไตล์ แว่น และบอร์ดแบรนด์",
    subtitle: "7 โจทย์ภาพที่เปลี่ยนรูปพอร์ตเทรตและไอเดียแบรนด์ให้เป็นบอร์ดวิเคราะห์ระดับนิตยสาร",
    category: "AI Visual",
    categoryBadge: "IMAGE PROMPT PACK",
    icon: "🖼️",
    coverImage: "/resources/chatgpt-image-prompts-personal.svg",
    readTime: "8 นาที",
    date: "2026-04",
    tags: ["ChatGPT Image", "Personal Color", "Makeup", "Style", "Brand Board", "Prompt Pack"],
    summary: "ชุด Prompt 7 แบบ ได้แก่ ลองทรงผม วิเคราะห์สีผิวกับสีเสื้อผ้า ภาพฟิล์มเที่ยวทะเล บอร์ดแต่งหน้า บอร์ดสไตล์เสื้อผ้า คู่มือทรงแว่น และเทมเพลตบอร์ดแบรนด์ (Brand Guideline) ที่แก้เป็นแบรนด์ของเราได้",
    featured: false,
    content: {
      intro: "ชุด Prompt นี้ใช้ได้ดีกับ ChatGPT สร้างภาพ โดยแนบรูปพอร์ตเทรตของตัวเอง (หรือรูปที่เรามีสิทธิ์ใช้และผู้อยู่ในภาพยินยอม) แล้วสั่งให้สร้างบอร์ดภาพแบบ Editorial เช่น วิเคราะห์สีที่เหมาะ ทรงแว่น หรือแนวแต่งหน้า ส่วนบอร์ดแบรนด์ให้ใช้เป็นเทมเพลต แล้วบอกว่า 'แก้เป็นแบรนด์ของเราแทน' พร้อมสไตล์ที่ต้องการ ข้อควรจำ: ผลวิเคราะห์สีผิว/สไตล์เป็นแนวทางความสวยงามเท่านั้น ไม่ใช่คำแนะนำทางการแพทย์ และควรตรวจคำภาษาไทยในภาพก่อนใช้เสมอ",
      workflowSteps: [
        { step: "01. แนบรูป + เลือกโจทย์", desc: "เลือกจากโจทย์ในกล่อง Prompt ด้านล่าง แนบพอร์ตเทรตที่หน้าชัด แสงสม่ำเสมอ" },
        { step: "02. สั่งสร้างครั้งละ 1 บอร์ด", desc: "ระบุว่าต้องรักษาใบหน้าเดิม ลดข้อความให้น้อย และเน้นภาพมากกว่าตัวอักษร" },
        { step: "03. ปรับแต่งต่อในแชทเดิม", desc: "สั่งแก้ทีละจุด เช่น เปลี่ยนโทนสี เพิ่ม/ลดตัวเลือก หรือเปลี่ยนเป็นแบรนด์ของเรา" }
      ],
      promptCopyText: `// 1) ลองทรงผม
สร้างภาพทรงผมแนวต่างๆ ว่าแบบไหนเหมาะกับฉัน เปรียบเทียบ 6 ภาพ พร้อมป้ายชื่อทรงเป็นภาษาไทย ขนาด 4:5

// 2) วิเคราะห์สีผิว กับสีเสื้อผ้า
Using this portrait, create a diagram-first personal color analysis.
Show which clothing colors suit the subject through visual comparison. Keep text minimal and avoid paragraphs.
(Preserve the exact face. Clean luxury creative board style, tiny palette chips, short labels only.)

// 3) ภาพฟิล์มเที่ยวทะเล ให้ AI เลือกชุดเอง
An emotional photo casually snapped on a smartphone by the woman in the attached image during a trip to [สถานที่]. 6 images in a collage.
Faded cinematic texture, like a snapshot from cherished memories, shaky handheld feel, casual offhand composition.
Change the outfit to a new outfit suitable for the mood and location.

// 4) บอร์ดแต่งหน้า (Makeup Analysis Board)
Create a high-end editorial "Makeup Analysis Board" from this portrait in a luxury beauty magazine style.
Beige/ivory background, soft diffused lighting, grid-based layout, minimal typography.
Center: enhanced natural portrait (same identity). Left: skin analysis (tone, undertone, contrast).
Include: eye shade variations, eyeliner styles, mascara effects, cheek/contour placement, 6 flattering lip shades,
3 final looks (Natural Glow, Soft Glam, Evening Glam), product icons, short 1–2 line tips.

// 5) บอร์ดสไตล์เสื้อผ้า (Style Analysis Board)
Create a high-end editorial "Style Analysis Board" using this portrait. Luxury fashion magazine aesthetic, warm ivory background, grid layout.
Show side-by-side outfit transformations in styles such as Old Money, Quiet Luxury, Minimalist, Classic Elegant, Street Style, Casual Effortless, Soft Girl.
Mark the 3–5 most flattering styles, show styles that clash, best/avoid colors, silhouette guide, key pieces, accessories, a capsule wardrobe and an overall style identity.

// 6) ทรงแว่นที่เหมาะกับหน้า
Spectacles Guide: create a clean modern infographic poster using the uploaded portrait (keep the face 100% the same).
Minimal, rounded cards, thin lines, editorial look. Title: "Spectacles Guide".
Analyze face shape and proportions, then show suitable and unsuitable eyewear with side-by-side try-on variations on the same face.

// 7) Template บอร์ดแบรนด์ (Brand Guideline & Concept Board) — สร้าง 3 ภาพ
แก้ข้อมูลเป็นแบรนด์ของเรา: Brand Name, Tagline, Brand Essence, Personality, Target Audience,
Concept Direction, Color Palette (primary/secondary/accent + การใช้งาน), Typography, Logo System,
Visual Elements, Packaging, Photography Direction, Tone of Voice, Signature Details, Layout Style
สไตล์ที่ต้องการ: [ระบุ]`,
      takeaways: [
        "ได้ Prompt 7 แบบที่ใช้ซ้ำได้กับรูปของตัวเองหรือไอเดียแบรนด์",
        "สั่งให้เน้นภาพ ลดตัวอักษร และรักษาใบหน้าเดิมเพื่อให้ผลลัพธ์ดูเป็นมืออาชีพ",
        "เทมเพลต Brand Board ช่วยให้ได้ทั้งโลโก้ แพ็กเกจ โทนสี และโทนการเขียนพร้อมกัน",
        "ใช้เฉพาะรูปที่มีสิทธิ์ใช้ และตรวจข้อความไทยในภาพก่อนเผยแพร่"
      ]
    },
    cta: {
      title: "อยากสร้างภาพสินค้าและแบรนด์ด้วย AI ให้เป็นระบบ?",
      description: "ชุด Prompt ภาพและ Workflow ครบวงจร อัปเดตทุกสัปดาห์ใน Modty AI Insider Club เดือนละ 99 บาท ปรึกษาได้เดือนละครั้ง",
      primaryBtnText: "เข้าร่วม Insider Club (99.-/เดือน) →",
      secondaryBtnText: "ปรึกษา Modty ผ่าน LINE"
    }
  },
  {
    id: "notion-dashboard-to-web-app-workflow",
    title: "Workflow สร้าง Web App จากแดชบอร์ดบน Notion — จากไอเดียสู่การ Deploy",
    subtitle: "ใช้ข้อมูลที่มีใน Notion เป็นแหล่งอ้างอิง ให้ Claude ร่างแอป แล้วต่อด้วย Google AI Studio, GitHub และ Cursor / Antigravity",
    category: "Vibe Coding",
    categoryBadge: "WEB APP WORKFLOW",
    icon: "🧩",
    coverImage: "/resources/notion-to-web-app-workflow.svg",
    readTime: "5 นาที",
    date: "2026-04",
    tags: ["Notion", "Claude", "Google AI Studio", "GitHub", "Cursor", "Antigravity", "Deploy"],
    summary: "4 ขั้นตอนเปลี่ยนเนื้อหาใน Notion ให้เป็น Web App ที่ใช้งานจริง: ร่างด้วย Claude + Notion Connector, ปรับแต่ง, สเกลระบบ (Login + Database) ใน Google AI Studio แล้วขึ้น GitHub และ Deploy ผ่าน Cursor / Antigravity",
    featured: false,
    content: {
      intro: "ถ้ามีข้อมูลหรือแดชบอร์ดอยู่ใน Notion แล้ว ไม่ต้องเริ่มจากหน้าว่าง ให้ Claude อ่านเนื้อหาจาก Notion แล้วเขียนโค้ดตั้งต้นให้ จากนั้นค่อยปรับแต่งทีละรอบ ถ้าโควต้า Claude เต็มก็ย้ายไปทำต่อบน Google AI Studio ได้ เมื่อระบบพร้อมให้เก็บโค้ดบน GitHub และใช้ AI Code Editor อย่าง Cursor หรือ Antigravity จัดการ Environment ตรวจโค้ดรอบสุดท้าย และ Deploy",
      workflowSteps: [
        { step: "01. ร่างด้วย Claude + Notion Connector", desc: "เชื่อม Claude กับ Notion แล้วระบุหน้าเพจที่ต้องการให้อ่านเนื้อหาและโครงสร้างเพื่อสร้างโค้ดตั้งต้น" },
        { step: "02. ปรับแต่งแล้วย้ายไป AI Studio เมื่อจำเป็น", desc: "รันดูผลลัพธ์และสั่งแก้ UI กับฟังก์ชันจนพอใจ ถ้าติด Limit ให้ไปทำต่อใน Google AI Studio เช่น ปรับ UI เพิ่มระบบ Login และเชื่อมฐานข้อมูล" },
        { step: "03. GitHub → Cursor / Antigravity → Deploy", desc: "อัปโหลดโค้ดขึ้น GitHub ดึงไปทำต่อใน Cursor หรือ Antigravity เพื่อตรวจ ปรับ และ Deploy ขึ้นโฮสต์ให้คนทั่วไปใช้งาน" }
      ],
      promptCopyText: `ทำหน้าที่เป็น Expert Full-stack Developer
ฉันต้องการสร้าง Web App เกี่ยวกับ [ระบุหัวข้อ/เรื่องที่ต้องการทำ]
โดยอ้างอิงเนื้อหาและโครงสร้างจาก Notion หน้านี้: [วางลิงก์ Notion]

โปรดอ่านข้อมูลทั้งหมด แล้วเขียนโค้ด (HTML, CSS, JS หรือ Framework ที่เหมาะสม)
เพื่อสร้างเป็น Web App ที่ใช้งานได้จริง

ข้อกำหนด:
- สรุป Feature และโครงสร้างหน้าก่อนเขียนโค้ด
- ใช้เฉพาะข้อมูลจากหน้า Notion ที่ฉันอนุญาต
- ถ้าต้องมี Login หรือฐานข้อมูล ให้เสนอทางเลือกก่อนลงมือ
- ไม่ใส่ API Key หรือข้อมูลลับลงในโค้ด`,
      takeaways: [
        "แปลงข้อมูลที่มีใน Notion ให้เป็นแอปได้โดยไม่ต้องเริ่มจากศูนย์",
        "รู้ลำดับเครื่องมือ: Claude → Google AI Studio → GitHub → Cursor / Antigravity → Deploy",
        "ก่อน Deploy ควรตรวจข้อมูลที่เปิดเผยในแอป อย่าให้ข้อมูลส่วนตัวหรือความลับของ Notion หลุดสู่สาธารณะ"
      ]
    },
    cta: {
      title: "พร้อมเปลี่ยนไอเดียเป็น Web App ที่ใช้งานได้จริงหรือยัง?",
      description: "เรียนสร้าง Web App ที่มีระบบสมาชิก ฐานข้อมูล และการชำระเงิน ได้ในคอร์ส Vibe Coding Master Route หรือรับเทคนิคใหม่ทุกสัปดาห์ใน Insider Club เดือนละ 99 บาท",
      primaryBtnText: "เข้าร่วม Insider Club (99.-/เดือน) →",
      secondaryBtnText: "ดูคอร์ส 2,990.- ที่ mastervibecode"
    }
  }
];
