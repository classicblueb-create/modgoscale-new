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
  }
];
