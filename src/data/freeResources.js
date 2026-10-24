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
  },
  {
    id: "songkran-realistic-sticker-pack-prompt",
    title: "Prompt สร้างสติ๊กเกอร์สงกรานต์จากรูปตัวเอง — 12 ท่า คนเดียวกันทุกภาพ",
    subtitle: "ชุด Prompt ที่ล็อกใบหน้าเดิม พื้นขาว มีขอบสติ๊กเกอร์ และข้อความไทยน่ารักๆ พร้อมตัดไปทำสติ๊กเกอร์ LINE",
    category: "AI Visual",
    categoryBadge: "STICKER PROMPT",
    icon: "💦",
    coverImage: "/resources/songkran-sticker-prompt.svg",
    readTime: "5 นาที",
    date: "2026-04",
    tags: ["Sticker", "สงกรานต์", "Gemini", "ChatGPT Image", "LINE Sticker", "Prompt"],
    summary: "Prompt สร้างสติ๊กเกอร์ภาพคนจริง 10–12 ภาพจากรูปอ้างอิงเดียว ล็อกใบหน้า ชุดไม่ซ้ำ ท่าทางมี movement พื้นขาวล้วน ข้อความภาษาไทยลายมือ และเส้นขอบสติ๊กเกอร์ชิ้นเดียวที่ตัดง่าย",
    featured: false,
    content: {
      intro: "ปัญหาของสติ๊กเกอร์ AI คือหน้าไม่ตรงกัน ท่ายืนแข็ง และข้อความลอยแยกจากตัวแบบ Prompt นี้แก้ด้วยการกำหนดทีละข้อ: ใช้รูปอ้างอิงเดียว บังคับให้เป็นคนเดียวกันทุกภาพ สั่งสร้างทีละภาพ ล็อกพื้นขาวไม่มีเงา ท่าทางต้องไม่ซ้ำและดูเคลื่อนไหว และให้ตัวแบบ ข้อความ และของตกแต่งอยู่ในเส้นขอบสีขาวเส้นเดียวกัน ใช้เฉพาะรูปตัวเองหรือรูปที่เจ้าของยินยอม และเปลี่ยนข้อความให้เข้ากับเทศกาลหรือโอกาสอื่นได้",
      workflowSteps: [
        { step: "01. แนบรูปอ้างอิง 1 รูป", desc: "เลือกรูปที่หน้าชัด แสงสม่ำเสมอ แล้ววาง Prompt ด้านล่าง" },
        { step: "02. สร้างทีละภาพ 1–12", desc: "สั่งให้สร้างทีละภาพตามลำดับ ตรวจใบหน้าและข้อความทุกภาพ ถ้าหน้าเพี้ยนให้สั่งแก้เฉพาะภาพนั้น" },
        { step: "03. ตัดและส่งตรวจ", desc: "ตัดตามเส้นขอบสีขาว ปรับขนาดและตรวจเงื่อนไขของแพลตฟอร์มสติ๊กเกอร์ก่อนส่งขาย" }
      ],
      promptCopyText: `ให้สร้างสติ๊กเกอร์ภาพคนจริงจำนวน 12 ภาพ โดยใช้รูปอ้างอิงเดียวกัน และต้องเป็น "คนคนเดียวกันทุกภาพ" สร้างทีละภาพ 1-12
ภาพครึ่งตัว (ตั้งแต่หน้าอกขึ้นไป) photorealistic แสงธรรมชาตินุ่ม ผิวเนียน ตาคม
พื้นหลังสีขาวล้วนเท่านั้น (ไม่มีเงา ไม่มีฉากอื่น)

ข้อกำหนดสำคัญ:
- ใบหน้าเหมือนต้นฉบับ 100% (ห้ามเปลี่ยนโครงหน้า สีผิว ทรงผม)
- ทุกภาพเป็นคนเดียวกัน มุมกล้องตรงหรือ 3/4 และจัดเฟรมใกล้เคียงกัน
- แสงนุ่ม สะอาด ไม่แข็ง ไม่มืด

ธีม + ชุด: ฟีลสดใส ขี้เล่น มี energy ทุกภาพใส่ชุดไม่ซ้ำกัน
(เสื้อฮาวายลายดอก, ครอปพาสเทล + ยีนส์, เดรสหน้าร้อน, tie-dye, โทนสดใส)
ผมดูธรรมชาติ เปียกเล็กน้อยได้ มีพร็อพได้ เช่น ปืนฉีดน้ำ ขันน้ำ น้ำกระเซ็น แต่ห้ามบังหน้า

ท่าทาง: ทุกภาพ gesture ไม่ซ้ำ ต้องมี movement เช่น โบกมือทักทาย ยิงปืนฉีดน้ำใส่กล้อง เอียงตัวยิ้มขี้เล่น
ทำท่าห้ามน่ารัก ไหว้ สาดน้ำ ชูนิ้วโป้ง/peace โบกมือลา ยกมือเหนือหัว ใช้มือพัดหน้า
ห้ามยืนตรงแขนแนบตัวหรือโพสแข็ง

ตัวหนังสือบนภาพ: ภาษาไทยเท่านั้น ฟอนต์ลายมือมนน่ารัก สีขาวหรือพาสเทล มีขอบให้อ่านชัด วางใกล้ตัวแบบ
ข้อความ 12 ภาพ:
1. สุขสันต์วันสงกรานต์ค่าา  2. เดินทางปลอดภัยนะคะ  3. เล่นน้ำกันนน!  4. เที่ยวให้สนุกน้า
5. สวัสดีปีใหม่ไทยค่า  6. สาดความสุขค่าา  7. ไปแดนซ์ดีกว่าา  8. กลับดีๆ นะคะ
9. ขอให้โชคดีทั้งปี  10. เปียกได้ แต่อย่าป่วยน้า  11. ร้อนม๊ากกก  12. อยากโดนสาดด..5555

การจัดองค์ประกอบสติ๊กเกอร์:
- ตัวแบบ + ข้อความ + ของตกแต่ง อยู่ในสติ๊กเกอร์ชิ้นเดียวกัน ห้ามแยกชิ้น
- มีเส้นขอบสีขาวหนาพอประมาณ เรียบ สม่ำเสมอ ล้อมทั้งชิ้น ไม่แตกเป็นหลายส่วน
- เว้นระยะขอบเล็กน้อยเพื่อให้ตัดออกมาสวย

ห้ามมี: การ์ตูน/อนิเมะ/ภาพวาด, พื้นหลังอื่นนอกจากขาว, เงา, หน้าบิดเบี้ยว, ภาพนิ่งแข็ง, ลายน้ำ, ข้อความภาษาอื่น
Keywords: realistic, identity consistency, same person, natural dynamic pose, cute Thai sticker typography, white outline border, ready-to-cut`,
      takeaways: [
        "ได้ Prompt ที่ล็อกหน้า ท่าทาง ข้อความ และเส้นขอบสติ๊กเกอร์ไว้ในที่เดียว",
        "เปลี่ยนธีมและข้อความเป็นเทศกาลอื่นหรือเป็นแบรนด์ตัวเองได้ง่าย",
        "ใช้เฉพาะรูปที่เรามีสิทธิ์ใช้ และตรวจตัวอักษรไทยทุกภาพก่อนส่ง"
      ]
    },
    cta: {
      title: "อยากทำภาพและสติ๊กเกอร์ด้วย AI ให้สม่ำเสมอทุกชุด?",
      description: "ระบบ Visual Identity, Prompt ภาพ และ Workflow ครบ อยู่ใน Modty AI Insider Club อัปเดตทุกสัปดาห์ เดือนละ 99 บาท",
      primaryBtnText: "เข้าร่วม Insider Club (99.-/เดือน) →",
      secondaryBtnText: "ปรึกษา Modty ผ่าน LINE"
    }
  },
  {
    id: "pretty-app-to-fullstack-monetized-app",
    title: "เปลี่ยน 'หน้าตาแอปสวยๆ' ให้เป็นแอปที่ใช้งานได้จริงและรับเงินได้ (Full-Stack ใน 4 สเต็ป)",
    subtitle: "Supabase (ล็อกอิน + ฐานข้อมูล) → Stripe (รับชำระเงิน) → Resend (อีเมลอัตโนมัติ) → GitHub + Vercel (ขึ้นระบบจริง)",
    category: "Vibe Coding",
    categoryBadge: "FULL-STACK GUIDE",
    icon: "💳",
    coverImage: "/resources/fullstack-monetize-app.svg",
    readTime: "8 นาที",
    date: "2026-04",
    tags: ["Supabase", "Stripe", "Resend", "Vercel", "Claude Code", "Full-Stack", "Authentication"],
    summary: "ลำดับตั้งระบบหลังบ้านสำหรับแอปที่ออกแบบหน้าตาไว้แล้ว: เชื่อม Supabase Auth + RLS, ทำ Checkout แบบ Subscription ด้วย Stripe (ทดสอบใน Test Mode ก่อน), ส่งอีเมล Welcome ด้วย Resend และ Deploy บน Vercel พร้อม Prompt สำหรับสั่ง Claude Code",
    featured: false,
    content: {
      intro: "แอปที่หน้าตาสวยยังไม่ใช่ผลิตภัณฑ์ ต้องมีบัญชีผู้ใช้ ฐานข้อมูล การจ่ายเงิน และอีเมลตอบกลับ ลำดับที่ลงตัวคือ Supabase → Stripe → Resend → GitHub/Vercel โดยให้ Claude Code ช่วยต่อให้ทีละสเต็ป สิ่งที่ต้องระวังที่สุดคือความลับ: Secret key ของ Stripe และคีย์ฝั่งเซิร์ฟเวอร์ ห้ามพิมพ์ลงในแชท ห้ามใส่ในโค้ดฝั่งหน้าเว็บ และห้าม commit ขึ้น GitHub ให้เก็บในไฟล์ .env (ที่อยู่ใน .gitignore) แล้วไปใส่ Environment Variables ใน Vercel (ในไทยจะลองใช้ Omise หรือ Beam แทน Stripe ได้ แต่บุคคลธรรมดาอาจสมัครยากกว่า)",
      workflowSteps: [
        { step: "01. Supabase", desc: "สร้างโปรเจกต์ ใช้ Project URL และ anon public key จาก Settings > API สั่ง Claude Code ให้ทำหน้า Login/Sign-up และตั้ง Row-Level Security (RLS) พื้นฐาน" },
        { step: "02. Stripe + Resend", desc: "เปิด Test Mode สร้าง Product / Price ID แล้วสั่งทำ Checkout แบบ Subscription และหน้า Pricing จากนั้นต่อ Resend ให้ส่งอีเมล Welcome เมื่อมีผู้ใช้ใหม่ ทดสอบด้วยบัญชีทดลองก่อน" },
        { step: "03. GitHub → Vercel", desc: "Push โค้ดขึ้น GitHub แล้ว Import เข้า Vercel ใส่ Environment Variables ทั้งหมดก่อนกด Deploy รอ 1–2 นาทีจะได้ URL ของแอปจริง" }
      ],
      promptCopyText: `// 1) Supabase: ล็อกอิน + ฐานข้อมูล
ช่วยเชื่อมต่อระบบ Authentication ของ Supabase เข้ากับโปรเจกต์นี้
สร้างหน้า Login/Sign-up และตั้งค่า Row-Level Security (RLS) พื้นฐานให้ปลอดภัย
ค่าที่ต้องใช้ให้อ่านจากไฟล์ .env (NEXT_PUBLIC_SUPABASE_URL, NEXT_PUBLIC_SUPABASE_ANON_KEY) ห้ามเขียนคีย์ลงในโค้ด

// 2) Stripe: Subscription (ใช้ Test Mode เท่านั้นก่อน)
ช่วยสร้างระบบ Checkout แบบ Subscription ด้วย Stripe
ใช้ Price ID: [price_...] อ่าน Publishable key / Secret key จาก .env
สร้างหน้า Pricing ที่มีปุ่มจ่ายเงิน เรียก Stripe ฝั่งเซิร์ฟเวอร์เท่านั้น (Secret key ห้ามไปอยู่ในโค้ดฝั่งหน้าเว็บ)
เพิ่ม Webhook สำหรับยืนยันการชำระเงินและอัปเดตสถานะสมาชิก

// 3) Resend: อีเมลอัตโนมัติ
ช่วยเชื่อม Resend API กับระบบสมัครสมาชิก อ่าน RESEND_API_KEY จาก .env
เมื่อมีผู้ใช้สมัครใหม่ ให้ส่งอีเมล Welcome ทันที

// 4) ขึ้นระบบจริง
ตรวจว่า .env อยู่ใน .gitignore แล้ว Push โค้ดทั้งหมดขึ้น GitHub repository
แล้วสรุปรายการ Environment Variables ที่ต้องไปใส่ใน Vercel ให้ครบก่อน Deploy`,
      takeaways: [
        "รู้ลำดับสร้างระบบ: ล็อกอิน/ฐานข้อมูล → จ่ายเงิน → อีเมล → ขึ้นระบบจริง",
        "ทดสอบการจ่ายเงินใน Test Mode ก่อนเปิดจริงทุกครั้ง",
        "ห้ามส่ง Secret key ให้ใครหรือ AI ตรงๆ ในแชท ใช้ไฟล์ .env และ Environment Variables แทน",
        "อย่าลืมเรื่อง PDPA ข้อกำหนดการใช้งาน และการออกใบเสร็จก่อนรับเงินจากลูกค้าจริง"
      ]
    },
    cta: {
      title: "อยากสร้างแอปที่มีสมาชิก ฐานข้อมูล และรับเงินอัตโนมัติจริงๆ?",
      description: "คอร์ส Vibe Coding Master Route สอนตั้งแต่เริ่มจนถึง Deploy พร้อมอีบุ๊กเต็ม แหล่งเรียนอัปเดตทุกสัปดาห์ และปรึกษาต่ออีก 60 วัน ราคา 2,990 บาท",
      primaryBtnText: "ดูคอร์ส Vibe Coding Master Route (2,990.-)",
      secondaryBtnText: "ปรึกษา Modty 1:1"
    }
  },
  {
    id: "ai-sourcing-agent-accio-guide",
    title: "AI Agent หาซัพพลายเออร์ทั่วโลก: รู้จัก Accio พร้อมแผน 3 ขั้นหาสินค้าขาย",
    subtitle: "ค้นด้วยรูปหรือคีย์เวิร์ด ส่งออก Excel เปรียบเทียบราคา ออกแบบสินค้าให้ต่าง และหา Niche ก่อนสั่งตัวอย่าง",
    category: "Automation",
    categoryBadge: "SOURCING WORKFLOW",
    icon: "🛒",
    coverImage: "/resources/ai-supplier-sourcing-accio.svg",
    readTime: "6 นาที",
    date: "2026-03",
    tags: ["AI Agent", "Sourcing", "Accio", "Dropshipping", "Niche", "E-commerce"],
    summary: "Accio คือ AI Agent ด้านการหาสินค้าและซัพพลายเออร์ของ Alibaba (ตามที่ผู้พัฒนาระบุ) เนื้อหานี้สรุปฟีเจอร์ที่ใช้ได้ และ Roadmap 3 ขั้น: คัดซัพพลายเออร์ Top 3 จากข้อมูล, ใช้ AI ช่วยดีไซน์ให้สินค้าแตกต่าง, และเจาะตลาดนิชแทนการขายให้ทุกคน",
    featured: false,
    demoLink: "https://www.accio.com/login?sId=O6%2FyY%2FyjQ3As5io4l9zAUw%3D%3D&ic=IC330167260660",
    demoLabel: "เปิด Accio (ลิงก์รับเครดิตทดลอง 3 เครดิต)",
    content: {
      intro: "ฟีเจอร์หลักตามที่ผู้พัฒนาระบุ: ค้นหาสินค้าจากรูปหรือคีย์เวิร์ด คัดกรองซัพพลายเออร์ ส่งออกข้อมูลเป็น Excel เปรียบเทียบราคา สร้างภาพ Mockup สินค้า ทักแชทพร้อมแปลภาษาอัตโนมัติ และวิเคราะห์เทรนด์เพื่อหา Niche ข้อควรระวัง: ข้อมูลและคะแนนความน่าเชื่อถือในระบบเป็นเพียงตัวช่วยคัดกรอง ควรตรวจซัพพลายเออร์เอง สั่งตัวอย่างก่อนเสมอ และเช็กต้นทุนรวม ภาษี และเงื่อนไขนำเข้าก่อนตัดสินใจ ลิงก์ในหน้านี้เป็นลิงก์แนะนำที่ให้เครดิตทดลอง",
      workflowSteps: [
        { step: "01. คัดตัวจริงจากข้อมูล", desc: "ส่งออกรายชื่อเป็น Excel เลือกเพียง Top 3 ดูคะแนนความน่าเชื่อถือและอัตราการตอบแชท แล้วถามเรื่อง ขอตัวอย่างสินค้า (Sample), ขั้นต่ำการผลิต (MOQ) และรับทำโลโก้แบรนด์เรา (OEM)" },
        { step: "02. สร้างความต่างด้วย AI", desc: "ให้ AI ช่วยดีไซน์/เจน Mockup เช่น 'Minimalist matte ceramic, pastel tone, wood handle' แล้วส่งภาพให้ซัพพลายเออร์เช็กความเป็นไปได้ในการผลิต" },
        { step: "03. เจาะตลาดนิช", desc: "หา Pain Point เช่น แก้วล้างคราบกาแฟง่าย สร้างเรื่องเล่า (แก้วแฮนด์เมดสำหรับทาสแมว) และเช็กเทรนด์ก่อนเลือกสไตล์" }
      ],
      promptCopyText: `ช่วยวางแผนหาสินค้าและซัพพลายเออร์ให้ฉัน

สินค้าที่สนใจ: [เช่น แก้วเซรามิก]
กลุ่มลูกค้าเป้าหมาย: [...]
งบเริ่มต้น: [...]
ช่องทางขาย: [...]

ให้ทำ:
1. เสนอ Niche ที่แข่งขันน้อยกว่า 5 แบบ พร้อมเหตุผลและ Pain Point ของลูกค้า
2. ร่าง Prompt สำหรับเจน Mockup สินค้าแต่ละแบบ (วัสดุ สี รูปทรง)
3. ร่างข้อความภาษาอังกฤษสำหรับทักซัพพลายเออร์: ขอตัวอย่าง, ถาม MOQ, ถามเรื่อง OEM, ระยะเวลาผลิต/ส่ง
4. ตารางเปรียบเทียบซัพพลายเออร์: ราคา, MOQ, ระยะเวลา, คะแนน, ความเสี่ยง
5. เช็กลิสต์ก่อนสั่งผลิตจริง (ตัวอย่าง คุณภาพ ต้นทุนรวม ภาษี การนำเข้า การคืนสินค้า)`,
      takeaways: [
        "มีลำดับขั้นหาสินค้า: ส่งออกข้อมูล → คัด Top 3 → ขอตัวอย่าง → สร้างความต่าง → เจาะ Niche",
        "ใช้ AI ช่วยทำ Mockup เพื่อสื่อสารกับโรงงานให้ชัดและลดความผิดพลาด",
        "AI ช่วยคัดกรอง แต่ต้องตรวจซัพพลายเออร์เอง ขอตัวอย่างก่อนสั่งผลิตเสมอ"
      ]
    },
    cta: {
      title: "อยากใช้ AI Agent หาโอกาสขายและทำงานแทนทีม?",
      description: "เทคนิค AI Agent, Automation และ Workflow ที่ทดลองใช้จริง อัปเดตทุกสัปดาห์ใน Modty AI Insider Club เดือนละ 99 บาท ปรึกษาได้เดือนละครั้ง",
      primaryBtnText: "เข้าร่วม Insider Club (99.-/เดือน) →",
      secondaryBtnText: "ปรึกษา Modty ผ่าน LINE"
    }
  },
  {
    id: "five-website-builder-prompts-figma-make",
    title: "5 Prompt สร้างเว็บไซต์ครบระบบด้วย AI: สถาปัตยกรรม ดีไซน์ Copy Interaction และ Figma Make",
    subtitle: "ไล่ตั้งแต่วางโครงเว็บไปจนถึง Prompt พร้อมใช้ใน Figma Make หรือเครื่องมือสร้างเว็บที่คุณถนัด",
    category: "Vibe Coding",
    categoryBadge: "WEBSITE PROMPT KIT",
    icon: "🏗️",
    coverImage: "/resources/five-website-builder-prompts.svg",
    readTime: "8 นาที",
    date: "2026-03",
    tags: ["Website", "Design System", "Copywriting", "Figma Make", "Claude", "Prompt Engineering"],
    summary: "ชุด Prompt 5 บทบาท (Systems Architect, Visual System, Conversion Copy, Interaction Engineer, Prompt Translator) พร้อม Prompt รวมที่เติมแค่ 5 ช่องแล้วให้ AI วางกลยุทธ์ โครงสร้างเว็บ Wireframe Design System Copy เทคสแตก และ SEO ในครั้งเดียว",
    featured: false,
    content: {
      intro: "ชื่อ 'เว็บมูลค่า 50,000 บาทใน 2 ชั่วโมง' ฟังเกินจริง แต่สิ่งที่ช่วยได้จริงคือการแบ่งงานเป็นบทบาท: ให้ AI คิดโครงสร้างก่อน ออกแบบระบบภาพ เขียน Copy วางพฤติกรรมโต้ตอบ แล้วค่อยแปลงเป็น Prompt สำหรับเครื่องมือสร้างเว็บ ผลลัพธ์ควรผ่านการตรวจโดยคนก่อนนำไปใช้ โดยเฉพาะเนื้อหาด้านกฎหมาย ราคา และคำอ้างสรรพคุณ",
      workflowSteps: [
        { step: "01. ใช้ Prompt รวมเติม 5 ช่อง", desc: "ใส่ Website type, Product name, Product description, Target audience, Brand personality แล้วให้ AI สร้างทั้ง Strategy, Sitemap, User Journey, Wireframe, Design System, Copy, Interaction, Tech Stack และ SEO" },
        { step: "02. เจาะลึกทีละบทบาท", desc: "ถ้าต้องการละเอียดขึ้น ใช้ Prompt แยกบทบาท เช่น Visual System Architect สร้าง Design Tokens, Copy Architect เขียนข้อความทุกหน้า" },
        { step: "03. แปลงเป็น Prompt สร้างเว็บ", desc: "ใช้ตัวแปล Prompt เปลี่ยน Specification เป็น Prompt 5 ชุดสำหรับ Figma Make หรือ AI Builder ที่ใช้อยู่ แล้วตรวจ Responsive และคำสะกด" }
      ],
      promptCopyText: `You are a world-class full-stack product team combined into one AI system.
Act as: Product Manager, Systems Architect, UX Designer, Conversion Copywriter, Frontend Engineer, Backend Architect, SEO Specialist.
Design and generate a complete production-ready website system.

PROJECT
- Website type: [SaaS / Portfolio / AI Tool / Agency / Marketplace / E-commerce]
- Product / Brand name: [NAME]
- Core product description (2-3 sentences): [...]
- Primary goal: [Lead generation / Sales / User signup / Product demo]
- Target audience: [Describe in detail]
- Brand personality: [Minimal / Bold / Luxury / Playful / Technical / Futuristic]
- Primary color: [Color]   Font style: [Modern / Tech / Elegant / Clean]

STEP 1 — PRODUCT STRATEGY: unique value proposition, key benefits, differentiation, user problems, core conversion goal
STEP 2 — WEBSITE STRUCTURE: sitemap (Home, Features, Pricing, Use Cases, About, Blog, Contact, Legal) with page objective, key sections, conversion goal
STEP 3 — USER JOURNEY: Visitor → signup, Visitor → demo request, Visitor → purchase, with conversion triggers
STEP 4 — PAGE WIREFRAMES: Hero, Features, Problem/Solution, Social proof, Testimonials, Pricing, FAQ, CTA blocks, Footer
STEP 5 — DESIGN SYSTEM: color palette, type scale, 8px spacing, buttons, cards, navigation, dark mode
STEP 6 — CONVERSION COPY: hero headline (max 6 words), subheadline, CTA, feature/benefit descriptions, pricing descriptions, FAQ
  (use only claims I can substantiate; mark any placeholder testimonials or numbers clearly as placeholders)
STEP 7 — INTERACTION DESIGN: navigation, hover states, scroll animations, form validation, loading/empty/error states
STEP 8 — TECH STACK: Frontend (Next.js/React), Backend (Node/Supabase/Firebase), DB (PostgreSQL), Auth, Hosting (Vercel/Netlify), CMS if needed
STEP 9 — SEO STRUCTURE: titles, meta descriptions, URL structure, schema markup, internal linking
STEP 10 — BUILD OUTPUT: site structure, page-by-page content, component list, API structure, database schema
Format so it can be directly implemented by developers or AI coding tools.

---

// ตัวแปล Specification → Prompt สำหรับ Figma Make (ใช้หลังได้ผลลัพธ์ข้างบน)
แปลง specification ด้านล่างเป็น Figma Make Prompt แม่นยำสูง 5 ชุด
[PASTE SPECIFICATION HERE]
แต่ละ prompt ต้อง: เริ่มด้วยผลลัพธ์ภาพสุดท้าย, ใส่ brand identity (สี typography tone), ระบุ interaction (hover, click, scroll, transitions), ระบุ responsive ทุก breakpoint, ระบุโครงสร้าง section (hero, feature grid, CTA, footer)`,
      takeaways: [
        "ได้ Prompt รวมที่เติมแค่ 5 ช่องก็ได้ทั้งแผนและโครงสร้างเว็บ",
        "แยกบทบาท Architect, Designer, Copywriter, Engineer ทำให้ผลลัพธ์ละเอียดและตรวจง่ายขึ้น",
        "AI ช่วยร่างได้เร็ว แต่ต้องตรวจเนื้อหา ราคา และคำอ้างต่างๆ ก่อนเปิดเว็บจริง"
      ]
    },
    cta: {
      title: "อยากสร้างเว็บและระบบด้วย AI ให้ใช้งานจริง?",
      description: "ดูตัวอย่างการสร้างเว็บ แอป และระบบตั้งแต่เริ่มจนถึง Deploy ในคอร์ส Vibe Coding Master Route หรือรับเทคนิคใหม่ทุกสัปดาห์ใน Insider Club เดือนละ 99 บาท",
      primaryBtnText: "เข้าร่วม Insider Club (99.-/เดือน) →",
      secondaryBtnText: "ดูคอร์ส 2,990.- ที่ mastervibecode"
    }
  },
  {
    id: "free-claude-learning-resources-and-cowork",
    title: "รวมแหล่งเรียนรู้ Claude ฟรี + เริ่มใช้ Cowork ภายใน 5 นาที",
    subtitle: "คอร์สฟรีจากทีมผู้สร้าง Claude, หน้า Learn และ Plugin ทางการ พร้อมสูตร Prompt 3 ส่วนและ Workflow สำหรับ Cowork",
    category: "Claude Skills",
    categoryBadge: "LEARNING HUB",
    icon: "📚",
    coverImage: "/resources/claude-free-learning-cowork.svg",
    readTime: "9 นาที",
    date: "2026-03",
    tags: ["Claude", "Cowork", "Free Course", "Skills", "Plugins", "Prompt", "Workflow"],
    summary: "แหล่งเรียน Claude ฟรี (คอร์สพร้อมใบประกาศ, คู่มือ best practices, Knowledge Work Plugins) และคู่มือเริ่มต้น Claude Cowork: ติดตั้ง Desktop App รันงานแรก เขียน Prompt ด้วยสูตร Task / Context / Output ปรับแต่งด้วย Connectors, Skills, Plug-ins และ 3 Workflow ตัวอย่าง",
    featured: false,
    skillCategories: [
      {
        icon: "🎓",
        name: "แหล่งเรียนรู้ฟรี",
        skills: [
          { name: "Anthropic Academy (Skilljar)", desc: "คอร์สจากทีมผู้สร้าง Claude อธิบายวิธีคิดของโมเดล การออกแบบคำสั่ง ขีดจำกัดและจุดแข็ง มีใบประกาศตอนจบ", link: "anthropic.skilljar.com", label: "เปิดเว็บ" },
          { name: "Anthropic Learn", desc: "รวมคำแนะนำการใช้ Claude เทคนิคคำสั่ง และแนวทางทำงานกับโมเดลให้ได้ผลดี ใช้เป็น reference ออกแบบ workflow", link: "anthropic.com/learn", label: "เปิดเว็บ" },
          { name: "Knowledge Work Plugins", desc: "Plugin ทางการสำหรับงานแบบ Knowledge Worker เช่น Marketing, Finance, Legal", link: "github.com/anthropics/knowledge-work-plugins" },
          { name: "Using Cowork Safely", desc: "คู่มือทางการเรื่องความปลอดภัยในการใช้ Cowork อ่านก่อนเชื่อมโฟลเดอร์และเครื่องมือ", link: "support.claude.com/en/articles/13364135-using-cowork-safely", label: "เปิดเว็บ" }
        ]
      }
    ],
    content: {
      intro: "Cowork ในมุมของคู่มือนี้คือผู้ช่วยที่ลงมือทำงานต่อเนื่องให้เสร็จ ไม่ใช่แค่แชตบอต เข้าถึงโฟลเดอร์ เชื่อมเครื่องมือ และตั้งเวลารันงานได้ วิธีเริ่ม: ติดตั้ง Claude Desktop App เปิดแท็บ Cowork เขียนงานแรกเป็นภาษาปกติ ดูขั้นตอนที่มันทำ แล้วค่อยปรับ ให้คิดว่า Cowork เป็นพนักงานใหม่ที่เก่งแต่ยังไม่รู้บริบท จึงต้องบอก Task, Context และ Output ที่ต้องการ ก่อนให้สิทธิ์เข้าถึงอีเมลหรือไฟล์สำคัญ ควรอ่านคู่มือความปลอดภัยและให้สิทธิ์เท่าที่จำเป็นเท่านั้น (ความสามารถและชื่อเมนูอาจเปลี่ยนตามเวอร์ชัน ให้ยึดเอกสารทางการล่าสุด)",
      workflowSteps: [
        { step: "01. เรียนพื้นฐานจากแหล่งทางการ", desc: "เริ่มจากคอร์สฟรีและหน้า Learn เพื่อเข้าใจวิธีคิดของโมเดลและการออกแบบคำสั่งอย่างเป็นระบบ" },
        { step: "02. เริ่มงานแรกใน Cowork", desc: "ติดตั้ง Claude Desktop เปิดแท็บ Cowork ใส่งานง่ายๆ ที่มี Task + Context + Output แล้วตรวจผลลัพธ์ก่อนใช้จริง" },
        { step: "03. ปรับแต่งทีละอย่าง", desc: "เชื่อม Connectors ที่จำเป็น เปลี่ยน Prompt ที่ใช้บ่อยเป็น Skill รวมหลาย Skill เป็น Plug-in ตามบทบาท และเริ่มจาก 1–2 Workflow ต่อสัปดาห์" }
      ],
      promptCopyText: `// สูตร Prompt 3 ส่วนสำหรับ Cowork
TASK: [ต้องการให้ทำอะไร เช่น ร่างคำตอบอีเมลทุกฉบับที่ยังไม่ได้อ่านใน 24 ชั่วโมง]
CONTEXT: [บริบทที่ต้องรู้ เช่น ฉันทำเอเจนซี่คอนเทนต์ โทนตรงไปตรงมาและเป็นมืออาชีพ ลูกค้าคาดหวังการตอบเร็ว]
OUTPUT: [รูปแบบผลลัพธ์ เช่น ทุกฉบับให้แสดง Sender / Subject / Draft Response และติดธงสิ่งที่ต้องให้ฉันตัดสินใจก่อนส่ง]

ถ้าต้องการให้ทำจนจบ ให้ต่อท้ายว่า:
Complete this task autonomously.
Only stop and ask me if you hit something you genuinely cannot resolve without my input.
Otherwise deliver the finished result.
(อย่าอนุญาตให้ส่งอีเมลหรือแก้ไขไฟล์จริงโดยไม่ขออนุมัติ)

---

// Workflow 1: AI Morning Brief
You are my personal chief of staff. Every morning when I run this task:
1. Pull today's meetings and events from my Google Calendar (time, attendees, location or link).
2. Pull tasks in Notion marked high priority or due today.
3. Cross-reference both and flag anything underprepared, overdue, or likely to conflict.
Deliver in this format: TODAY IS / YOUR SCHEDULE / YOUR PRIORITIES TODAY (1-3) / WATCH OUT FOR / YOUR FOCUS FOR TODAY

---

// Workflow 2: Email Manager
Pull every unread email from the last 24 hours. Sort into Urgent / Important / FYI / Junk.
For Urgent and Important, draft responses. Format: FROM / SUBJECT / SUMMARY / DRAFT.
Do not send anything; leave all drafts for my review.

---

// Workflow 3: Daily News Research
Every day at [TIME], search the most important developments from the last 24 hours in [topics].
For each topic find the top 3 stories and deliver: Headline / Source / Summary / Why it matters,
then TODAY'S BIGGEST THEME and any BREAKING ALERTS.`,
      takeaways: [
        "มีแหล่งเรียน Claude ฟรีจากแหล่งทางการให้เริ่มต้นอย่างเป็นระบบ",
        "สูตร Prompt 3 ส่วน (Task / Context / Output) ใช้ได้กับ AI ทุกตัว ไม่ใช่เฉพาะ Cowork",
        "เปลี่ยน Prompt ที่ใช้บ่อยเป็น Skill และจัดกลุ่มเป็น Plug-in เพื่อใช้ซ้ำ",
        "ให้สิทธิ์เฉพาะที่จำเป็น เริ่มจากงานเล็ก และตรวจร่างอีเมล/ไฟล์ก่อนส่งหรือบันทึกทุกครั้ง"
      ]
    },
    cta: {
      title: "อยากสร้าง AI Operating System ส่วนตัวหรือของทีม?",
      description: "ChatGPT Work, Claude, Codex และ Workflow อัตโนมัติ อัปเดตทุกสัปดาห์ใน Modty AI Insider Club เดือนละ 99 บาท หรือจัด Workshop ตามโจทย์ของทีมคุณทาง LINE",
      primaryBtnText: "เข้าร่วม Insider Club (99.-/เดือน) →",
      secondaryBtnText: "สอบถาม Workshop ผ่าน LINE"
    }
  },
  {
    id: "flutter-rebuild-create-workflow-antigravity",
    title: "Workflow สร้างแอป Flutter ด้วย AI: Rebuild จากภาพ UI หรือสร้างใหม่จากไอเดีย",
    subtitle: "ลากภาพ UI เข้า Antigravity Agent Manager หรือเล่าไอเดียสั้นๆ แล้วให้ AI สร้างแอปที่กดเล่นได้บน Emulator",
    category: "Vibe Coding",
    categoryBadge: "APP WORKFLOW",
    icon: "📱",
    coverImage: "/resources/flutter-rebuild-workflow.svg",
    readTime: "5 นาที",
    date: "2026-02",
    tags: ["Flutter", "Antigravity", "Material 3", "Riverpod", "Mobile App", "Prompt"],
    summary: "2 กรณีใช้งาน: (1) Rebuild จากภาพ mockup / sketch / screenshot (2) สร้างใหม่จากไอเดีย พร้อม Prompt ที่กำหนด Material 3, Riverpod, โครงสร้าง lib/ และสั่งให้รันบน Emulator รวมถึงอธิบายว่าต้องติดตั้งอะไรบ้างในแต่ละระดับ",
    featured: false,
    content: {
      intro: "จุดสำคัญคือใส่คำว่า 'Build in Flutter and show on emulator' ไว้ใน Prompt เพื่อให้ AI ไม่แค่เขียนโค้ด แต่ต้องรันให้เห็นผลด้วย ถ้าแค่อยากดูตัวอย่าง UI ทำงาน (เหมาะกับสายไอเดียหรือสายขาย) ไม่ต้องติดตั้ง Flutter หรือ Android Studio เอง AI จะเปิดให้ดูผ่าน Flutter Web หรือหน้าต่างมือถือจำลอง ถ้าอยากเห็นเป็นหน้าต่าง iPhone/Android จริงควรมี Flutter SDK และ Emulator และถ้าจะต่อยอดเป็นแอปจริงควรมี Flutter SDK, IDE (VS Code / Android Studio) และ Emulator หรือเครื่องจริง (ความสามารถของเครื่องมือขึ้นกับเวอร์ชันที่ใช้)",
      workflowSteps: [
        { step: "กรณี 1: Rebuild จากภาพ", desc: "ลากไฟล์ภาพ UI (.png/.jpg/mockup/สเก็ตช์ที่เห็น layout ข้อความ และระยะชัดเจน) เข้า Antigravity Agent Manager แล้วใช้ Rebuild Prompt" },
        { step: "กรณี 2: สร้างจากไอเดีย", desc: "อธิบายสั้นๆ เช่น 'Login + Dashboard สำหรับ productivity app โทน minimal' แล้วใช้ Create Prompt" },
        { step: "ผลลัพธ์ที่ควรได้", desc: "โครง lib/, theme + typography, Riverpod, และหน้าจอที่กดเล่นได้บน Emulator หรือ Flutter Web ตรวจว่าตรงกับภาพ/ไอเดียก่อนต่อยอด" }
      ],
      promptCopyText: `// Rebuild จากภาพ UI (แนบภาพก่อนส่ง)
Rebuild this UI in Flutter.

Requirements:
- Build in Flutter using Material 3
- Responsive layout (mobile, tablet, web)
- Use Riverpod for state management
- Match typography, font family, font weight, spacing, and colors from the image
- Create a clean and scalable lib/ folder structure
- Update pubspec.yaml with all required dependencies
- Build in Flutter and show on emulator
- Ensure the UI is interactive on the emulator

---

// สร้างใหม่จากไอเดีย (ไม่มีภาพ)
Design and build a new application in Flutter.

App concept:
- [เช่น Minimal productivity app]
- [เช่น Login screen and dashboard screen]

Requirements:
- Use Flutter with Material 3
- Responsive UI for mobile and tablet
- Use Riverpod for state management
- Define a clear design system (colors, typography, spacing)
- Create a scalable lib/ folder structure
- Update pubspec.yaml with required dependencies
- Build in Flutter and show on emulator
- Launch the app so it is visible and interactive on the emulator`,
      takeaways: [
        "ได้ Prompt 2 แบบที่บังคับให้ AI รันแอปให้เห็นผล ไม่ใช่แค่เขียนโค้ด",
        "รู้ว่าต้องติดตั้งอะไรเมื่อแค่ดู Demo เมื่อดูบน Emulator และเมื่อจะทำแอปจริง",
        "เปลี่ยนภาพ mockup เป็นโค้ด Flutter ที่มีโครงสร้างโปรเจกต์ชัดเจนและปรับต่อได้"
      ]
    },
    cta: {
      title: "อยากสร้างแอปของตัวเองด้วย AI ตั้งแต่ไอเดียจนใช้งานจริง?",
      description: "ดูคอร์ส Vibe Coding Master Route สำหรับสร้างเว็บและแอปที่มีระบบสมาชิก ฐานข้อมูล และการชำระเงิน หรือเข้า Insider Club เพื่อรับเทคนิคใหม่ทุกสัปดาห์",
      primaryBtnText: "เข้าร่วม Insider Club (99.-/เดือน) →",
      secondaryBtnText: "ดูคอร์ส 2,990.- ที่ mastervibecode"
    }
  },
  {
    id: "talking-objects-pixar-gem",
    title: "GPT & Gem 'สิ่งของพูดได้' สไตล์ Pixar — จากไอเดียสู่ภาพ สคริปต์ 10 วินาที และ Prompt วิดีโอ",
    subtitle: "ตั้ง Gem ครั้งเดียว พิมพ์ชื่อสิ่งของ เลือกสายอารมณ์ แล้วได้ภาพ + บทพูด + Prompt วิดีโอ + ไอเดีย 4 ตัวละครต่อเนื่อง",
    category: "AI Visual",
    categoryBadge: "CHARACTER PROMPT",
    icon: "🗣️",
    coverImage: "/resources/talking-objects-pixar-gem.svg",
    readTime: "7 นาที",
    date: "2026-02",
    tags: ["Pixar Style", "Gem", "Custom GPT", "Shorts", "Reels", "AI Video", "Character"],
    summary: "System Prompt สำหรับสร้าง Gem/GPT ที่ให้วัตถุมีชีวิตพูดเสียดสีแต่ให้ความรู้แบบไม่สั่งสอน ผลลัพธ์ 4 ส่วน: Prompt ภาพ 3D, สคริปต์ 10 วินาที, Prompt Image-to-Video พร้อม lip-sync และไอเดียวัตถุที่เกี่ยวข้อง 4 ชิ้น ในแนวตั้ง 9:16",
    featured: false,
    demoLink: "https://chatgpt.com/g/g-69667f7a5fb081918fcc4499670788f3-object-talk",
    demoLabel: "ลองใช้ GPT 'Object Talk'",
    content: {
      intro: "คอนเทนต์สิ่งของพูดได้ใช้ได้ดีกับคลิปสั้น เพราะทั้งขำ ให้ความรู้ และทำซ้ำได้เป็นซีรีส์ วิธีคือตั้ง Gem หรือ GPT ที่ล็อกบุคลิก 'วัตถุที่พูดแทนมนุษย์' และบังคับรูปแบบผลลัพธ์ทุกครั้ง Phase 1 รับโจทย์ (ถ้าพิมพ์แค่ชื่อสิ่งของ จะถามสายอารมณ์ก่อน: บ่น/เหนื่อย/สกปรก/ตลก/ความรู้) Phase 2 สร้างผลลัพธ์ 4 ส่วนตายตัว หมายเหตุ: ต้นฉบับกำหนดให้บทพูดใช้สรรพนามกระด้างแบบเสียดสี ถ้าจะใช้กับแบรนด์ ให้เปลี่ยนสรรพนาม/ระดับความแรงของโทนให้เหมาะกับกลุ่มผู้ชมและแพลตฟอร์ม และหลีกเลี่ยงการกล่าวอ้างสุขภาพเกินจริงในเนื้อหาความรู้",
      workflowSteps: [
        { step: "01. สร้าง Gem / GPT", desc: "ตั้งชื่อ 'สิ่งของปากแจ๋ว' (หรือชื่อของคุณ) วาง System Prompt ด้านล่างในช่องคำสั่ง" },
        { step: "02. พิมพ์สิ่งของ + เลือกสาย", desc: "เช่น 'แปรงสีฟัน สายความรู้' หรือ 'กาต้มน้ำ หงุดหงิด บนเตา' ระบุฉากด้วยก็ได้" },
        { step: "03. ไปต่อเป็นภาพและวิดีโอ", desc: "นำ Prompt ภาพไปสร้างภาพแนวตั้ง 9:16 แล้วนำภาพกับ Prompt วิดีโอไปทำ Image-to-Video พร้อม lip-sync ด้วยเครื่องมือวิดีโอที่มี" }
      ],
      promptCopyText: `คุณคือ "Angry Object Director" x "Pixar-style Object Animation"
คุณคือวัตถุมีชีวิตที่พูดแทนมนุษย์ในสไตล์ 3D Animation สร้างคอนเทนต์เสียดสี คมคาย และให้ความรู้แบบไม่สั่งสอน
ภาษาในแชทใช้คำสุภาพ ส่วนภาษาในบทพูดของวัตถุ (Object Script) ใช้สรรพนามและโทนตามที่ระบุ: [กำหนดสรรพนาม/ระดับความแรงที่เหมาะกับแบรนด์ของคุณ]

กฎเหล็กของตัวตน:
- มองโลกผ่านมุมมองของ "ตัวละครวัตถุ" เสมอ
- พูดนิ่ง ไม่ฟูมฟาย เนื้อหาแรงแบบเสียดสี แฝงความรู้ (Fact Drop) แต่ไม่เป็นสารานุกรม
- ห้ามปลอบใจ ห้ามเชิญชวน ห้ามขายของ ห้ามอธิบายยืดยาว
- ใบหน้าของสิ่งของต้องสื่ออารมณ์ตามบทพูด

Phase 1: Smart Reception
- ถ้าผู้ใช้ทักทายหรือขอไอเดีย: แนะนำตัวและเสนอ 5 สาย: 🔥บ่น/เตือนแรงๆ | 🥲เหนื่อย/หมดไฟ | 🤢สกปรก/สุขภาพ | 😂ตลก/ชีวิตประจำวัน | 🧠ให้ความรู้ (Fact Drop)
- ถ้าผู้ใช้พิมพ์แค่ชื่อสิ่งของ: ถามกลับว่าอยากได้สายไหน (และฉากหลัง)
- ถ้าระบุครบ (สิ่งของ + อารมณ์ + สถานที่): ไป Phase 2 ทันที

Phase 2: Production Output (ต้องตอบ 4 ส่วนนี้เสมอ)
1) Text-to-Image Prompt: Pixar-style 3D render ตัวละครวัตถุที่มีแขน ขา ใบหน้า อารมณ์ชัดเจน
   โครงสร้าง Subject / Face / Action / Scene / Lighting & Mood / Technical, 9:16, NO TEXT in image
2) 10-Second Script: มุมมองบุคคลที่ 1 บทพูดสั้น 1-2 ประโยค ไม่มีคำขายของ
3) Video Prompt (Image-to-Video): ใช้ภาพจากข้อ 1 เป็นต้นแบบ รักษารูปหน้า สัดส่วน สไตล์ ขยับปากตรงบทพูด (lip-sync) กล้องเคลื่อนไหวนุ่ม 9:16
4) Related Object Characters: ไอเดียวัตถุที่เกี่ยวข้องอีก 4 ชิ้น พร้อมสคริปต์สั้นๆ
ปิดท้ายด้วยคำแนะนำเครื่องมือวิดีโอ (เช่น Veo / Kling) และเช็กลิสต์: ภาพแนวตั้ง 9:16, ไม่มีตัวอักษรในภาพ, บทพูดสอดคล้องกับสายที่เลือก

Conversation starters:
- แนะนำตัวหน่อย คุณคืออะไร?
- ขอไอเดีย "ของใช้ในครัว" สายบ่น
- "รองเท้าวิ่ง" สายเหนื่อย
- "แปรงสีฟัน" สายความรู้`,
      takeaways: [
        "ได้ระบบสร้างคอนเทนต์สั้นแบบซีรีส์: ภาพ → บท → วิดีโอ → ไอเดียตัวต่อไป",
        "Prompt ภาพและวิดีโอถูกล็อกให้เป็นแนวตั้ง 9:16 ไม่มีตัวอักษรในภาพ ลดการแก้งาน",
        "ปรับโทนและสรรพนามให้เหมาะกับแบรนด์ได้ และตรวจข้อเท็จจริงในเนื้อหาความรู้ก่อนโพสต์"
      ]
    },
    cta: {
      title: "อยากสร้างคอนเทนต์ซีรีส์ด้วย AI ให้สม่ำเสมอ?",
      description: "Prompt, Gem และ Workflow วิดีโอสั้นที่ลองใช้จริง อัปเดตทุกสัปดาห์ใน Modty AI Insider Club เดือนละ 99 บาท พร้อมปรึกษาได้เดือนละครั้ง",
      primaryBtnText: "เข้าร่วม Insider Club (99.-/เดือน) →",
      secondaryBtnText: "ปรึกษา Modty ผ่าน LINE"
    }
  },
  {
    id: "notebooklm-to-gemini-business-assets",
    title: "Pipeline NotebookLM → Gemini: เปลี่ยน Insight เป็นแผนธุรกิจและเอกสารที่ใช้งานจริง",
    subtitle: "NotebookLM เป็นนักวิจัย Gemini เป็นที่ปรึกษากลยุทธ์ที่ลงมือทำ ชุด Prompt 10 แบบสำหรับ Pitch, Landing, แผน 30 วัน และอื่นๆ",
    category: "Prompt Engineering",
    categoryBadge: "RESEARCH TO ACTION",
    icon: "🔁",
    coverImage: "/resources/notebooklm-to-gemini-assets.svg",
    readTime: "9 นาที",
    date: "2026-01",
    tags: ["NotebookLM", "Gemini", "Business Strategy", "Pitch Deck", "Landing Page", "Prompt Set"],
    summary: "Flow: Idea → NotebookLM (วิจัย) → Insight แบบมีโครงสร้าง → Gemini (ลงมือ) → ผลลัพธ์พร้อมใช้ พร้อม Master Prompt ที่สร้าง Business Assets 27 รายการ และชุด Prompt แยก 10 แบบ ตั้งแต่ Pitch Deck, Landing Page, Investor Summary ถึง Execution Plan 30 วัน",
    featured: false,
    content: {
      intro: "เมื่อทำวิจัยใน NotebookLM แล้ว อย่าหยุดที่บทสรุป ให้ export หรือคัดลอก Insight ที่มีโครงสร้างออกมา เช่น ขนาดตลาด กลุ่มลูกค้า Pain Point คู่แข่ง จุดต่าง ความเสี่ยง และคะแนนความเป็นไปได้ แล้วป้อนให้ Gemini เป็นก้อนเดียว จากนั้นสั่งทีละงาน จะได้ของที่ใช้จริง: Pitch ใช้คุย, Landing ใช้ขาย, Summary ใช้ส่ง, Plan ใช้ลงมือ ข้อควรระวัง: ตัวเลขตลาดและคำอ้างอิงในผลลัพธ์ต้องตรวจกับแหล่งข้อมูลจริงเสมอ และ Prompt ด้านกฎหมายเป็นเพียงแนวทางเบื้องต้น ไม่ใช่คำปรึกษากฎหมาย",
      workflowSteps: [
        { step: "01. ทำ Insight ใน NotebookLM", desc: "ให้สรุปเป็นหัวข้อ: Market Size/Growth, Target Customer, Pain Point, Competitor, Differentiation, Risk และคะแนนความเป็นไปได้ แล้วคัดลอกมาทั้งก้อน" },
        { step: "02. แปลงเป็นกลยุทธ์ด้วย Gemini", desc: "ใช้ Prompt หลักให้ได้ Business Strategy, Business Model Canvas, MVP, แผนหาลูกค้า 30 วัน, Metric และความเสี่ยง" },
        { step: "03. สร้างเอกสารทีละชิ้น", desc: "วาง {{STRATEGY}} ก้อนเดียว แล้วยิง Prompt ทีละงาน เช่น Pitch Deck 10 หน้า, Landing Page, Investor Summary, Execution Plan, Pricing, Persona, Sales Script, Partnership, Compliance, Scale" }
      ],
      promptCopyText: `// PROMPT หลัก — แปลง Insight เป็นแผนที่ลงมือได้
คุณคือ Startup Strategist + Product Manager + Growth Marketer
นี่คือข้อมูล Insight ธุรกิจจาก NotebookLM:
[วาง Insight ทั้งหมดตรงนี้]

งานของคุณ:
1. แปลง Insight นี้เป็น Business Strategy ที่ปฏิบัติได้จริง
2. สร้าง Business Model Canvas (สรุป 1 หน้า)
3. เสนอ Product / Service Version แรก (MVP)
4. เสนอ Go-to-Market Plan 30 วันแรก
5. ระบุ Key Metric ที่ควรวัด
6. เตือน Risk สำคัญ + วิธีลดความเสี่ยง
สรุปให้อ่านง่าย เป็นหัวข้อชัดเจน และ actionable
ข้อมูลตัวเลขที่ไม่มีในแหล่งข้อมูล ให้ระบุว่าเป็นสมมติฐาน

---

// ตัวอย่างงานแยก: Pitch Deck (10 หน้า)
คุณคือ Startup Pitch Deck Expert
จากกลยุทธ์ธุรกิจนี้: {{STRATEGY}}
สร้าง Pitch Deck 10 หน้า: Problem, Solution, Product/MVP, Target Market, Unique Advantage, Business Model, Traction/Assumption, Go-to-Market, Team/Capability, Ask/Next Step
แต่ละสไลด์เป็น bullet สั้น ชัด โทนนักลงทุน เน้นเหตุผลเชิงธุรกิจ ไม่ขายฝันเกินจริง

// Landing Page (ขาย MVP)
คุณคือ Conversion Copywriter
จาก {{STRATEGY}} เขียน Copy: Hero (Headline + Sub-headline), Pain Point, Solution/MVP, Key Benefits (ไม่เกิน 5), How it works (3 ขั้น), Social Proof (ใช้ placeholder ที่ระบุชัดว่าเป็นตัวอย่าง), CTA

// Execution Plan 30 วัน
คุณคือ Startup Operator
จาก {{STRATEGY}} แตกแผน Week 1–4 พร้อม Task, Output และ Metric จัดเป็น Checklist เอาไปใส่ Notion / Asana / ClickUp ได้

// งานอื่นที่ใช้ {{STRATEGY}} เดียวกัน (เปลี่ยนบทบาท):
Investor Summary 1 หน้า | Pricing & Packaging | Customer Persona & Journey | Cold Outreach / Sales Script
Partnership Strategy | Legal/Compliance Checklist เบื้องต้น (เชิงแนะแนว ไม่ใช่คำปรึกษากฎหมาย) | Exit / Scale Strategy

// ถ้าอยากให้ตัดสินใจ
จากข้อมูลทั้งหมดนี้ ถ้าคุณเป็นผู้ก่อตั้ง จะไปต่อ / พับ / pivot? เพราะอะไร และถ้า pivot ควรไปทางไหน`,
      takeaways: [
        "แยกบทบาทชัด: NotebookLM วิจัย Gemini ลงมือสร้างเอกสาร",
        "ใช้ Insight ก้อนเดียวสร้างได้ทั้ง Pitch, Landing, Investor Summary, แผน 30 วัน และอื่นๆ",
        "ตรวจตัวเลข แหล่งอ้างอิง และ Social Proof ในผลลัพธ์ก่อนใช้จริง อย่าใช้ตัวอย่างสมมติเป็นข้อเท็จจริง"
      ]
    },
    cta: {
      title: "อยากเปลี่ยนงานวิจัยเป็นแผนธุรกิจที่ลงมือทำได้จริง?",
      description: "เทคนิค NotebookLM, Gemini, Claude และ Workflow ธุรกิจ อัปเดตทุกสัปดาห์ใน Modty AI Insider Club เดือนละ 99 บาท ปรึกษาได้เดือนละครั้ง",
      primaryBtnText: "เข้าร่วม Insider Club (99.-/เดือน) →",
      secondaryBtnText: "ปรึกษา Modty ผ่าน LINE"
    }
  },
  {
    id: "logo-redesign-from-reference-prompts",
    title: "ชุดคำสั่ง Redesign โลโก้จากภาพต้นแบบ — 3 สไตล์พร้อมเทคนิคแนบภาพ",
    subtitle: "แนบภาพโลโก้หรือฟอนต์ที่ชอบ ใส่ชื่อแบรนด์ของคุณ แล้วได้โลโก้ใหม่ที่ไม่หลุดสไตล์ตัวอักษร",
    category: "AI Visual",
    categoryBadge: "LOGO PROMPT",
    icon: "🖼️",
    coverImage: "/resources/logo-redesign-prompts.svg",
    readTime: "3 นาที",
    date: "2025-12",
    tags: ["Logo", "Redesign", "Branding", "ChatGPT Image", "Gemini", "Prompt"],
    summary: "3 Prompt พร้อมใช้ (ตามฟอนต์ต้นฉบับ, โมเดิร์นขึ้นแต่ยังมีกลิ่นเดิม, มินิมอลคลีน) และเทคนิค 6 ข้อสำหรับงานที่แนบภาพโลโก้ เช่น บอกให้อ้างอิงฟอนต์จากภาพแนบ ระบุสีพื้นหลัง ขอหลายเวอร์ชัน และกำหนดขนาด/คุณภาพ",
    featured: false,
    content: {
      intro: "ปัญหาของ AI เวลาทำโลโก้คือชอบเปลี่ยนสไตล์ตัวอักษรจนเพี้ยน วิธีแก้คือแนบภาพตัวอย่างและบอกให้ชัดว่า 'อ้างอิงฟอนต์จากภาพแนบ' พร้อมระบุฟีลที่ต้องการ สีพื้นหลัง จำนวนเวอร์ชัน และขนาดภาพ ข้อควรจำ: อย่าใช้ภาพโลโก้ของแบรนด์อื่นเป็นต้นแบบเพื่อทำให้ดูเหมือนหรือสร้างความสับสน ให้ใช้เป็นแรงบันดาลใจเรื่องสไตล์ตัวอักษรเท่านั้น และตรวจความซ้ำของโลโก้และเครื่องหมายการค้าก่อนใช้จริง",
      workflowSteps: [
        { step: "01. แนบภาพต้นแบบ", desc: "ใช้ภาพที่เห็นฟอนต์และสไตล์ตัวอักษรชัดเจน" },
        { step: "02. เลือก Prompt 1 ใน 3 แบบ", desc: "ตามฟอนต์เดิม, โมเดิร์นขึ้นเล็กน้อย หรือมินิมอลคลีน ใส่ชื่อแบรนด์และสีพื้นหลัง" },
        { step: "03. ขอหลายเวอร์ชัน + ขนาด", desc: "สั่ง 3 เวอร์ชันในครั้งเดียว ระบุขนาดโพสต์ (IG/Facebook/Story) และคุณภาพ 1K/4K" }
      ],
      promptCopyText: `// Prompt 1 — ตามฟอนต์ต้นฉบับ
ใช้ภาพที่แนบเป็นต้นแบบ ช่วยออกแบบโลโก้ใหม่ชื่อ {ใส่ชื่อแบรนด์ของคุณ} โดยอ้างอิงรูปแบบตัวอักษร ฟีลลิ่ง และน้ำหนักฟอนต์ตามไฟล์แนบ
เปลี่ยนพื้นหลังเป็นสี [สีที่ต้องการ] ปรับให้โลโก้คมชัด เป็นมืออาชีพ พร้อมใช้งาน ขนาด 1:1 คุณภาพ 4K

// Prompt 2 — โมเดิร์นแต่ยังคงกลิ่นต้นฉบับ
ช่วย redesign โลโก้ {ใส่ชื่อแบรนด์ของคุณ} โดย reference รูปแบบตัวอักษรจากภาพแนบ แต่ปรับให้โมเดิร์นขึ้นเล็กน้อย เส้นคมขึ้น ตัวอักษรบาลานซ์ขึ้น
พื้นหลังเป็นสี [เลือกสี] ขอ 3 เวอร์ชัน

// Prompt 3 — Minimal Clean
ใช้ภาพแนบเป็นตัวอย่างลักษณะฟอนต์ ช่วยออกแบบโลโก้ {ใส่ชื่อแบรนด์ของคุณ} สไตล์มินิมอล คลีนมาก ตัวอักษรลื่น ดูแพง
พื้นหลังสี [สีที่ต้องการ] และเพิ่มเวอร์ชันขาวล้วนบนพื้นเข้มให้ด้วย

// เทคนิคเสริม
1. บอกให้ "อ้างอิงฟอนต์จากภาพแนบ" เพื่อไม่ให้สไตล์ตัวอักษรเพี้ยน
2. ระบุฟีล เช่น modern, clean, premium
3. ระบุสีพื้นหลังชัดๆ เช่น ขาวนวล, ดำล้วน, น้ำเงินกรม
4. ขอหลายเวอร์ชันในครั้งเดียว (เช่น 3 แบบ)
5. ต่อท้ายขนาดสำหรับโพสต์ IG / Facebook / Story
6. ระบุคุณภาพ 1K หรือ 4K`,
      takeaways: [
        "ได้ 3 Prompt โลโก้ที่คุมสไตล์ตัวอักษรไม่ให้เพี้ยน",
        "ขอหลายเวอร์ชันและหลายขนาดในครั้งเดียวได้ ประหยัดเวลาเทียบและเลือก",
        "ใช้ภาพต้นแบบเป็นแรงบันดาลใจเรื่องสไตล์เท่านั้น และตรวจเครื่องหมายการค้าก่อนใช้โลโก้จริง"
      ]
    },
    cta: {
      title: "อยากสร้างอัตลักษณ์แบรนด์ด้วย AI ให้เป็นระบบ?",
      description: "ชุด Prompt แบรนด์ โลโก้ และ Visual Identity อัปเดตทุกสัปดาห์ใน Modty AI Insider Club เดือนละ 99 บาท ปรึกษาได้เดือนละครั้ง",
      primaryBtnText: "เข้าร่วม Insider Club (99.-/เดือน) →",
      secondaryBtnText: "ปรึกษา Modty ผ่าน LINE"
    }
  },
  {
    id: "pastel-3d-icon-prompt-pack",
    title: "Pastel 3D Icon Pack — Prompt ไอคอนน่ารัก 120+ แบบ ใช้ได้ทันที",
    subtitle: "โครงสร้าง JSON เดียวใช้ได้ทุกไอคอน แค่เปลี่ยน icon_idea ใน 4 หมวด: อาหาร เครื่องมือ ความสนุก และการเรียนรู้",
    category: "AI Visual",
    categoryBadge: "ICON PROMPT PACK",
    icon: "🧁",
    coverImage: "/resources/pastel-3d-icon-pack.svg",
    readTime: "4 นาที",
    date: "2025-08",
    tags: ["3D Icon", "Pastel", "Prompt Pack", "Canva", "Figma", "Infographic"],
    summary: "เทมเพลต Prompt แบบ JSON สำหรับสร้างไอคอน 3 มิติโทนพาสเทลสไตล์เล่นสนุก พร้อมตัวอย่าง icon_idea จาก 4 หมวด (Food & Drink, Tools & Utility, Creative & Fun, Education & Learning) และเคล็ดลับพื้นหลังโปร่งใส",
    featured: false,
    content: {
      intro: "ชุดนี้ใช้โครงสร้างเดียวกันทุกไอคอน ทำให้สไตล์สม่ำเสมอทั้งชุด สิ่งที่เปลี่ยนมีแค่ช่อง icon_idea ซึ่งเขียนเป็นรูปแบบ 'สี + วัตถุ + รายละเอียด + หน้าตา/อารมณ์' เช่น A pastel-pink cupcake liner with a swirl of pastel-blue frosting เหมาะกับการใช้ใน Canva, Figma, Photoshop, โพสต์โซเชียล, อินโฟกราฟิก และสไลด์ เคล็ดลับ: เพิ่มคำว่า transparent background ในช่อง icon_idea เพื่อให้ได้พื้นหลังโปร่งใส",
      workflowSteps: [
        { step: "01. เลือกหมวดและไอเดีย", desc: "เลือกจาก Food & Drink, Tools & Utility, Creative & Fun, Education & Learning หรือคิดไอเดียเองตามสูตร สี + วัตถุ + รายละเอียด" },
        { step: "02. ใส่ลงในเทมเพลต JSON", desc: "แก้เฉพาะ icon_idea ส่วน task และ style_reference ให้คงเดิม เพื่อให้สไตล์ไม่หลุด" },
        { step: "03. สร้างทีละไอคอน", desc: "สร้างทีละภาพ ตรวจความเข้ากันของสีทั้งชุด แล้วนำไปใช้ในงานออกแบบ" }
      ],
      promptCopyText: `// เทมเพลตหลัก (เปลี่ยนเฉพาะ icon_idea)
{"task": "Generate a 3D icon in a soft, playful style", "style_reference": "Soft 3D icon style with smooth rounded shapes and bright pastel colors. Inspired by playful UI illustrations often seen in onboarding flows or empty states, glossy plastic-like surface.", "icon_idea": "[ไอเดียไอคอน เช่น A pastel-pink cupcake liner with a swirl of pastel-blue frosting topped with a tiny star. transparent background]"}

// ตัวอย่าง icon_idea
FOOD & DRINK
- A mint-green coffee cup with a smiling face and steam shaped like tiny hearts.
- A pastel-yellow ice cream cone with mint-green and lavender scoops, topped with a cherry.
- A pastel-pink donut with mint-green icing and colorful sprinkles.
TOOLS & UTILITY
- A pastel-blue wrench with a rounded mint-green handle and a tiny star sparkle on the side.
- A pastel-green gear with rounded teeth and a smiling face in the center.
- A pastel-yellow safety cone with coral stripes and a happy face.
CREATIVE & FUN
- A pastel-pink paint palette with three colorful paint blobs (lavender, mint, yellow).
- A pastel-yellow magic wand with a coral-pink star tip and sparkles around it.
- A mint-green treasure chest with pastel-pink gems spilling out.
EDUCATION & LEARNING
- A pastel-blue graduation cap with a coral tassel and a smiling face on the front.
- A pastel-yellow open book with a mint-green globe floating above it.
- A pastel-yellow lightbulb with a mint-green brain shape inside.`,
      takeaways: [
        "โครงสร้าง Prompt เดียว ใช้สร้างไอคอนสไตล์เดียวกันได้ไม่จำกัด",
        "สูตรเขียน icon_idea: สี + วัตถุ + รายละเอียด + หน้าตา/อารมณ์",
        "เพิ่ม transparent background เพื่อนำไปวางในงานออกแบบได้ทันที"
      ]
    },
    cta: {
      title: "อยากสร้างชุดภาพและไอคอนประจำแบรนด์ด้วย AI?",
      description: "ระบบ Visual Identity และชุด Prompt ภาพ อัปเดตทุกสัปดาห์ใน Modty AI Insider Club เดือนละ 99 บาท ปรึกษาได้เดือนละครั้ง",
      primaryBtnText: "เข้าร่วม Insider Club (99.-/เดือน) →",
      secondaryBtnText: "ปรึกษา Modty ผ่าน LINE"
    }
  },
  {
    id: "clothing-3d-mockup-prompt",
    title: "Prompt ทำรูปเสื้อผ้า Mockup 3 มิติให้สวยขึ้น — อัปรูป + วาง Prompt เดียว",
    subtitle: "สินค้าลอยกลางเฟรม แสงนุ่ม เงาใต้สินค้า พื้นหลังไล่สีเข้ากับสินค้าอัตโนมัติ พร้อมสูตรปรับได้ 15 จุด",
    category: "AI Visual",
    categoryBadge: "PRODUCT MOCKUP",
    icon: "👗",
    coverImage: "/resources/clothing-3d-mockup-prompt.svg",
    readTime: "4 นาที",
    date: "2025-12",
    tags: ["Mockup", "Product Photo", "เสื้อผ้า", "E-commerce", "ChatGPT Image", "Prompt"],
    summary: "Prompt พร้อมใช้ที่เปลี่ยนรูปสินค้าแฟชั่นให้เป็นภาพ Mockup 3 มิติลอยกลางเฟรม พร้อมเวอร์ชันเทมเพลตที่ปรับมุมมอง วัสดุ แสง เงา พื้นหลัง และอัตราส่วนภาพตามแพลตฟอร์มได้",
    featured: false,
    content: {
      intro: "ภาพ Mockup สวยๆ ช่วยให้ร้านค้าออนไลน์ดูเป็นมืออาชีพโดยไม่ต้องจ้างช่างภาพทุกครั้ง แค่อัปโหลดรูปสินค้าแล้ววาง Prompt ด้านล่างได้ทันที ให้ AI จัดทรงเสื้อผ้าให้เป็นธรรมชาติ ใส่เงาและรอยพับ พร้อมแสงนุ่มจากด้านหน้า ข้อควรระวัง: ภาพที่ AI สร้างอาจเปลี่ยนสี ลาย หรือรายละเอียดของสินค้าจริง ควรเทียบกับสินค้าจริงทุกครั้งก่อนลงขาย เพื่อไม่ให้ลูกค้าเข้าใจผิด",
      workflowSteps: [
        { step: "01. อัปรูปสินค้า", desc: "ใช้รูปที่เห็นสินค้าชัด สีตรง แสงสม่ำเสมอ" },
        { step: "02. วาง Prompt พร้อมใช้", desc: "ใช้เวอร์ชันสำเร็จรูปได้เลย หรือใช้เทมเพลตด้านล่างเพื่อปรับมุม วัสดุ แสง และพื้นหลัง" },
        { step: "03. เทียบกับสินค้าจริง", desc: "ตรวจสี ลาย และรายละเอียดให้ตรงกับสินค้าจริงก่อนนำไปใช้ในร้าน" }
      ],
      promptCopyText: `// เวอร์ชันพร้อมใช้ (อัปรูป + วางตามนี้)
Generate a realistic 3D mockup of a clothing item or accessory floating at the center of the frame. The item should be front-facing, fully visible, and softly rendered to showcase its design clearly.

Style: Depict the item in its natural fit or shape (e.g., relaxed sleeves for shirts, flowing silhouette for dresses, natural folds for pants/skirts, proper form for hats and accessories).

Color & Texture: Incorporate smooth shadows and natural-looking folds or contours to enhance realism. Ensure the material looks natural and dynamic, reflecting its real-world texture.

Background: Use a clean gradient or smooth background that auto-adjusts to complement the item's dominant color.

Lighting: Apply soft, diffused lighting from the front to highlight texture, volume, and shape. Add subtle shadows beneath the item to create depth and emphasize a floating or standalone effect.

Aspect Ratio: 4:5

---

// เทมเพลตปรับแต่ง
Generate a realistic 3D mockup of [clothing item or accessory] floating at the center of the frame. The item should be [front-facing / angled / worn by model], fully visible, and softly rendered to showcase its [design / texture / pattern] clearly.
Style: natural fit or shape ([relaxed sleeves for shirts / flowing silhouette for dresses / natural folds for pants and skirts / proper form for hats and accessories]).
Color & Texture: [smooth shadows / natural-looking folds] and a [material, e.g. cotton, silk, denim, leather] that looks natural.
Background: [clean gradient / smooth background / custom scene] that complements the item's [dominant color / overall style].
Lighting: [soft, diffused lighting / directional lighting] from the [front / side / above]. Add [subtle / pronounced] shadows beneath for a [floating / standalone / on-surface] effect.
Aspect Ratio: [4:5 (IG Feed) / 1:1 (Square) / 16:9 (YouTube/Video)]`,
      takeaways: [
        "ได้ภาพ Mockup แบบลอยกลางเฟรมโดยไม่ต้องจัดสตูดิโอ",
        "เทมเพลตปรับได้ทั้งมุมมอง วัสดุ แสง เงา พื้นหลัง และอัตราส่วนตามแพลตฟอร์ม",
        "ตรวจสี/ลาย/รายละเอียดให้ตรงกับสินค้าจริงก่อนลงขาย"
      ]
    },
    cta: {
      title: "อยากทำภาพสินค้าและคอนเทนต์ร้านค้าด้วย AI ให้เป็นระบบ?",
      description: "Prompt ภาพสินค้า โมเดล และ Workflow ออนไลน์ อัปเดตทุกสัปดาห์ใน Modty AI Insider Club เดือนละ 99 บาท ปรึกษาได้เดือนละครั้ง",
      primaryBtnText: "เข้าร่วม Insider Club (99.-/เดือน) →",
      secondaryBtnText: "ปรึกษา Modty ผ่าน LINE"
    }
  },
  {
    id: "local-seo-5r-strategy-prompt",
    title: "กรอบกลยุทธ์ 5-R สำหรับ Local SEO — Prompt ให้ ChatGPT วางแผน 90 วันให้ร้านของคุณ",
    subtitle: "Research → Rebuild → Reputation → Reach → Results พร้อมศัพท์ Local SEO สำหรับมือใหม่ ร้านค้า และร้านอาหาร",
    category: "Prompt Engineering",
    categoryBadge: "LOCAL SEO",
    icon: "📍",
    coverImage: "/resources/local-seo-5r.svg",
    readTime: "6 นาที",
    date: "2025-10",
    tags: ["Local SEO", "Google Business Profile", "ChatGPT", "Strategy", "SME", "Marketing"],
    summary: "Prompt ที่ให้ ChatGPT รับบทนักกลยุทธ์ Local SEO วางแผน 90 วัน ตามกรอบ 5-R พร้อมตัวอย่างการกรอกข้อมูลร้านกาแฟ และ Glossary มือใหม่ (GBP, NAP, Citation, Schema, Review ฯลฯ)",
    featured: false,
    content: {
      intro: "ธุรกิจท้องถิ่นจะถูกเจอบน Google Maps ได้ต้องทำหลายอย่างพร้อมกัน ตั้งแต่ข้อมูลร้านให้ตรงกันทุกที่ ไปจนถึงรีวิวและลิงก์ในพื้นที่ กรอบ 5-R ช่วยจัดลำดับให้เป็นแผน 90 วัน ใช้ได้ทั้งกับธุรกิจตัวเองและลูกค้า เพียงก๊อป Prompt ไปวางใน ChatGPT แล้วใส่ข้อมูลธุรกิจ ข้อควรจำ: ผลลัพธ์เป็นแผนเริ่มต้น ไม่ได้รับประกันอันดับ ต้องเช็กข้อมูลจริงของร้านเอง และเรื่องรีวิวให้ขอรีวิวจากลูกค้าจริงอย่างตรงไปตรงมา ไม่ซื้อ ไม่เขียนเอง และไม่คัดเลือกเฉพาะรีวิวดี เพราะผิดกติกาของ Google",
      workflowSteps: [
        { step: "01. วาง Prompt", desc: "วาง Prompt Atlas ใน ChatGPT แล้วรอข้อความเปิด" },
        { step: "02. กรอกข้อมูลธุรกิจ", desc: "ประเภทธุรกิจ + เมือง, เว็บไซต์ + ลิงก์ Google Business Profile, เป้าหมาย (โทร, จอง, ลีด)" },
        { step: "03. ทำตามแผนและวัดผลทุก 30 วัน", desc: "ตามรอบ RESEARCH → REBUILD → REPUTATION → REACH → RESULTS ติดตามการโทร ฟอร์ม และอันดับ แล้วปรับกลยุทธ์ทุก 30 วัน" }
      ],
      promptCopyText: `คุณคือ Atlas นักกลยุทธ์ Local SEO ระดับมาสเตอร์
ภารกิจ: เปลี่ยนทุกสถานการณ์ธุรกิจท้องถิ่นให้เป็นแผน SEO ที่แม่นยำ ใช้งานได้จริง เพื่อเพิ่มอันดับ การโทร และรายได้

กรอบกลยุทธ์ 5-R
1. RESEARCH: ระบุประเภทธุรกิจ เมือง/พื้นที่บริการ คู่แข่ง ตรวจ Google Business Profile (GBP), เว็บไซต์ และ citations หาช่องโหว่ เช่น ข้อมูลที่ขาด อันดับอ่อน NAP ไม่สอดคล้อง
2. REBUILD: ปรับปรุง GBP (หมวดหมู่ บริการ รูปภาพ Q&A) สร้างหน้าบริการที่แปลงลูกค้าได้ + แลนดิ้งเพจตามพื้นที่ แก้ NAP ให้ตรงกันใน directories
3. REPUTATION: วางระบบขอรีวิวจากลูกค้าจริงอย่างถูกต้องตามกติกา ตอบรีวิวทั้งหมดภายใน 24 ชั่วโมง
4. REACH: หาลิงก์ท้องถิ่นจาก directories เว็บข่าว การสนับสนุนกิจกรรม โพสต์ใน GBP รายสัปดาห์พร้อมรูปภาพ เสริม internal linking
5. RESULTS: ติดตามการโทร ฟอร์ม อันดับ ปรับกลยุทธ์ใหม่ทุก 30 วัน และขยายพื้นที่เมื่อพิสูจน์ ROI แล้ว

ข้อความเปิดใช้งาน:
"สวัสดี! ฉันคือ Atlas นักกลยุทธ์ Local SEO ของคุณ ฉันเปลี่ยนสถานการณ์ธุรกิจของคุณให้เป็นแผน 90 วันที่ชัดเจน
สิ่งที่ฉันต้องรู้: ประเภทธุรกิจ + เมือง / ลิงก์เว็บไซต์ + ลิงก์ GBP / เป้าหมาย (การโทร, leads, การจอง)"

---
ตัวอย่างข้อมูลที่กรอก:
ประเภทธุรกิจ: ร้านกาแฟ
เมือง: กรุงเทพฯ
เว็บไซต์: [ลิงก์เว็บไซต์]
ลิงก์ GBP: [ลิงก์ Google Business Profile]
เป้าหมาย: อยากให้มีคนโทรจองโต๊ะมากขึ้น

---
Glossary มือใหม่ (จำ 3 ตัวหลักก่อน)
- GBP = หน้าร้านออนไลน์บน Google Maps
- NAP (ชื่อ-ที่อยู่-เบอร์) = ต้องตรงกันทุกที่
- Review = รีวิวจริงจากลูกค้าช่วยสร้างความน่าเชื่อถือ
อื่นๆ: Citation, Category, Landing Page, Schema Markup (LocalBusiness), Local Link Building, GBP Post, Call Tracking, Ranking Tracking, ROI`,
      takeaways: [
        "ได้กรอบ 5 ขั้นที่ทำเป็นแผน 90 วันกับธุรกิจท้องถิ่นได้ทันที",
        "เข้าใจศัพท์พื้นฐาน GBP, NAP, Citation ก่อนลงมือ",
        "เน้นรีวิวจากลูกค้าจริงและทำตามกติกาแพลตฟอร์ม พร้อมวัดผลและปรับทุก 30 วัน"
      ]
    },
    cta: {
      title: "อยากให้ AI ช่วยวางแผนการตลาดสำหรับร้านและธุรกิจของคุณ?",
      description: "Prompt การตลาด SEO และ Workflow ธุรกิจ อัปเดตทุกสัปดาห์ใน Modty AI Insider Club เดือนละ 99 บาท ปรึกษาได้เดือนละครั้ง",
      primaryBtnText: "เข้าร่วม Insider Club (99.-/เดือน) →",
      secondaryBtnText: "ปรึกษา Modty ผ่าน LINE"
    }
  },
  {
    id: "gem-photo-to-prompt-analyzer",
    title: "Gem วิเคราะห์ภาพถ่ายเป็น Prompt พร้อมใช้ — อัปรูปเดียว ได้ Prompt ภาษาไทยครบ",
    subtitle: "ตั้งครั้งเดียว อัปภาพบุคคลหรือสินค้า แล้วได้ Prompt แยกหัวข้อ ผม ชุด แต่งหน้า ท่า แสง กล้อง พร้อมก๊อปรอบเดียว",
    category: "Prompt Engineering",
    categoryBadge: "GEM PROMPT",
    icon: "🔬",
    coverImage: "/resources/gem-image-to-prompt.svg",
    readTime: "4 นาที",
    date: "2026-01",
    tags: ["Gemini Gem", "Image to Prompt", "Reverse Engineering", "Portrait", "Product Photo"],
    summary: "System Prompt สำหรับสร้าง Gem ที่วิเคราะห์ภาพถ่ายแล้วเขียน Prompt สร้างภาพให้ครบทุกหัวข้อ (Hair, Outfits, Makeup, Poses, Expression, Setting, Lighting, Camera ฯลฯ) มีโหมดภาพบุคคลและโหมดสินค้า + นางแบบ และแนะนำสไตล์ภาพแนวกล้องมือถือ",
    featured: false,
    content: {
      intro: "ถ้าเห็นภาพที่ชอบแล้วไม่รู้จะเขียน Prompt ยังไง ให้ Gem ตัวนี้ถอดรายละเอียดออกมาให้ ใช้ได้กับภาพบุคคล ภาพสินค้า และภาพโฆษณา/แบนเนอร์/โพสต์ขายของ ผลลัพธ์เป็นภาษาไทยและก๊อปได้ในครั้งเดียว ข้อควรระวัง: Prompt ที่เน้นล็อกใบหน้า 100% ควรใช้กับรูปของตัวเองหรือรูปที่ผู้อยู่ในภาพยินยอมเท่านั้น และไม่ใช้เพื่อสร้างภาพที่ทำให้เข้าใจผิดว่าเป็นบุคคลอื่นจริง",
      workflowSteps: [
        { step: "01. สร้าง Gem", desc: "ไปที่ Gemini → Gems → สร้าง Gem ใหม่ วางคำสั่งด้านล่างในช่อง Instructions แล้วบันทึก" },
        { step: "02. อัปรูปที่ต้องการวิเคราะห์", desc: "ภาพบุคคล สินค้า หรือภาพโฆษณา แล้วบอกสไตล์ที่ต้องการ เช่น ภาพบุคคล 8K เหมือนจริง หรือภาพสินค้าพร้อมนางแบบ" },
        { step: "03. ก๊อป Prompt ไปสร้างภาพ", desc: "นำ Prompt ที่ได้ไปใช้กับเครื่องมือสร้างภาพ ปรับพารามิเตอร์ เช่น Aspect Ratio และ Negative Prompt ตามคำแนะนำ" }
      ],
      promptCopyText: `คุณคือผู้เชี่ยวชาญการวิเคราะห์ภาพถ่ายให้ออกมาเป็น Prompts พร้อมใช้งาน ที่ควบคุมสีภาพ ท่าทางบุคคล และองค์ประกอบของภาพได้อย่างแม่นยำ

วัตถุประสงค์:
- วิเคราะห์ภาพที่ผู้ใช้อัปโหลด เพื่อสร้าง Prompt ข้อความที่ละเอียดและพร้อมใช้กับโมเดลสร้างภาพ

พฤติกรรมและกฎ:
1) การตอบสนองเริ่มต้น
   - ทักทายและแนะนำตัวว่าเป็น "ผู้เชี่ยวชาญการวิเคราะห์ภาพถ่ายเพื่อสร้าง Prompts"
   - ขอให้อัปโหลดภาพ หรืออธิบายแนวคิดของภาพ
   - ถามสไตล์/ผลลัพธ์ที่ต้องการ (เช่น ภาพบุคคลเหมือนจริง 8K, ภาพสินค้าพร้อมนางแบบ)
2) Prompt สำหรับภาพบุคคล: เน้นพอร์ตเทรตสมจริง 8K ต้องมีหัวข้อ
   Hair / Outfits / Makeup / Attire / Poses / Expression / Setting / Foreground-Seating / Shadows / Mood & Tone / Color Palette / Style / Camera & Lens / Lighting / Technical details
   ควบคุมใบหน้าให้เหมือนต้นฉบับ เช่น "Create ultra-high-resolution 8K photo-realistic images of the original person (100% exact facial likeness, no alterations)" (ใช้เฉพาะกับรูปที่มีสิทธิ์ใช้)
3) Prompt สำหรับสินค้าและนางแบบ: ระบุการใช้ภาพต้นฉบับชัดเจน เช่น
   "Use the uploaded model (Image 1) as the main reference, preserve face, expression, skin tone"
   "Use the uploaded product (Image 2) as the product reference"
   พร้อมคำแนะนำเรื่องพื้นหลัง แสง และการจัดวาง
4) คำแนะนำทางเทคนิค: ถ้าต้องการภาพเรียลแบบกล้องมือถือ ให้แนะนำ Prompt ที่เลียนแบบกล้องสมาร์ทโฟน และแนะนำ Aspect Ratio, Negative Prompt, โมเดลที่เหมาะสม
5) ถ้าเป็นภาพโฆษณา แบนเนอร์ หรือโพสต์ขายของ ให้ปรับ Prompt ให้เหมาะกับงานนั้น

น้ำเสียง: มืออาชีพ ชัดเจน ให้ข้อมูล กระตือรือร้น และแม่นยำ
Output: Prompt ที่ได้ต้องก๊อปได้ในครั้งเดียว และเป็นภาษาไทย`,
      takeaways: [
        "ตั้ง Gem ครั้งเดียว อัปรูปแล้วได้ Prompt ครบหัวข้อที่ควบคุมภาพได้แม่น",
        "มีโหมดภาพบุคคลและโหมดสินค้า + นางแบบ รวมถึงโทนกล้องมือถือสำหรับภาพเรียล",
        "ใช้กับรูปที่มีสิทธิ์ใช้เท่านั้น และไม่ใช้เลียนแบบบุคคลอื่นโดยไม่ได้รับอนุญาต"
      ]
    },
    cta: {
      title: "อยากให้ช่วยสร้าง Gem ที่เหมาะกับงานของคุณ?",
      description: "ถ้าไม่รู้จะเริ่มสร้าง Gem ของตัวเองอย่างไร มีแพ็กเกจช่วยสร้างระบบ Gem พร้อมสอนตั้งค่า เริ่มต้น 3 Gem 599 บาท (ประมาณ 30 นาที) หรือ 5 Gem 990 บาท ทักไลน์สอบถามได้เลย",
      primaryBtnText: "เข้าร่วม Insider Club (99.-/เดือน) →",
      secondaryBtnText: "สอบถามแพ็กเกจสร้าง Gem ผ่าน LINE"
    }
  },
  {
    id: "gem-sketchnote-infographic-generator",
    title: "Gem สร้างอินโฟกราฟิกสรุปแบบ Sketchnote วาดมือ — กรอกแค่หัวข้อ",
    subtitle: "ให้ AI ค้นคว้าหัวข้อ แตก 5–7 ประเด็น แล้ววาดเป็นภาพ Visual Thinking ปากกาดำ 3 สี พื้นขาวสะอาด",
    category: "AI Visual",
    categoryBadge: "GEM PROMPT",
    icon: "✍️",
    coverImage: "/resources/gem-sketchnote-infographic.svg",
    readTime: "3 นาที",
    date: "2026-01",
    tags: ["Infographic", "Sketchnote", "Visual Thinking", "Gemini Gem", "Summary"],
    summary: "Prompt สำหรับ Gem ที่รับหัวข้อ แล้วทำ 2 ขั้น: ค้นคว้าและแตกประเด็น จากนั้นสร้างภาพสรุปสไตล์ hand-drawn sketchnote ตัวอักษรไทยลายมือ หัวข้อหลักตรงกลาง ประเด็นย่อยกระจายรอบ เชื่อมด้วยลูกศร ใช้หมึกดำ + teal ส้ม แดงหม่น",
    featured: false,
    content: {
      intro: "อินโฟกราฟิกสรุปที่ดูเป็นลายมือทำให้เนื้อหายากๆ ดูเป็นมิตรและจำง่าย สูตรนี้บังคับทั้งสไตล์ สี พื้นหลัง และเลย์เอาต์ ให้ผลลัพธ์สม่ำเสมอทุกครั้งที่เปลี่ยนแค่หัวข้อ ให้ Gem ถามขนาดภาพและจุดเน้นก่อนสร้าง ข้อควรระวัง: ข้อมูลที่ AI ค้นคว้าต้องตรวจกับแหล่งอ้างอิงจริงก่อนเผยแพร่ และตรวจตัวอักษรไทยในภาพทุกคำ",
      workflowSteps: [
        { step: "01. สร้าง Gem", desc: "วางคำสั่งด้านล่างในช่อง Instructions แล้วเปลี่ยน {{TOPIC}} เป็นหัวข้อ หรือให้ Gem ถามหัวข้อทุกครั้ง" },
        { step: "02. ตอบคำถามเน้นด้านและขนาด", desc: "บอกด้านที่อยากเน้น และขนาดภาพตามแพลตฟอร์ม (เช่น 4:5, 1:1, 9:16)" },
        { step: "03. ตรวจเนื้อหาและตัวอักษร", desc: "เช็กข้อเท็จจริง คำสะกด และความอ่านง่ายก่อนโพสต์" }
      ],
      promptCopyText: `คุณเป็นนักคิดเชิงภาพ (visual thinker), graphic recorder และนักวิจัย

ขั้นตอนที่ 1: ค้นคว้าและทำความเข้าใจหัวข้อ: "{{TOPIC}}"
- ระบุแนวคิดหลัก
- แยก 5–7 ประเด็นย่อยหรือไอเดียสำคัญ
- ระบุความสัมพันธ์ระหว่างแนวคิด

ขั้นตอนที่ 2: สร้างภาพสรุปแบบ hand-drawn sketchnote จากหัวข้อ
STYLE: hand-drawn sketchnote / graphic recording / visual thinking ดูเหมือนวาดด้วยปากกา fineliner สีดำ ใช้หมึกสีดำสำหรับเส้นและตัวอักษรทั้งหมด
ใช้เพียง 3 สีสำหรับลงเงาและตกแต่งเล็กน้อย: teal, ส้ม, แดงหม่น ห้ามใช้สีอื่น
BACKGROUND: กระดาษสีขาวสะอาด ไม่มีเส้นตาราง เส้นบรรทัด หรือ texture
LAYOUT: ถามผู้ใช้ก่อนว่าต้องการเน้นด้านใด (ยกตัวอย่างให้เลือก)
 - หัวข้อหลักอยู่ตรงกลางในกรอบสี่เหลี่ยมสไตล์ 3D เล็กน้อย
 - ประเด็นย่อยกระจายรอบหัวข้อแบบรัศมี เชื่อมด้วยลูกศร
 - ใช้ doodle ง่ายๆ คนไม้ ไอคอนธุรกิจ กราฟ สัญลักษณ์
TEXT: ตัวอักษรลายมือภาษาไทย ชัดเจน เรียบร้อย อ่านง่าย
CONTENT: กล่องกลางแสดงหัวข้อ "{{TOPIC}}" รอบๆ เป็นวลีสั้น คีย์เวิร์ด คำอธิบายสั้น และ visual metaphor
FEEL: เหมือน sketchnote มืออาชีพจากเวิร์กช็อป สะอาด เป็นระเบียบ สมดุล ไม่รก
SIZE: ถามผู้ใช้ก่อนว่าอยากได้ขนาดภาพเท่าไรตามขนาด Social Media
Output: เนื้อหาที่สรุปเป็นภาษาไทย`,
      takeaways: [
        "ได้อินโฟกราฟิกลายมือที่สไตล์สม่ำเสมอ เปลี่ยนแค่หัวข้อ",
        "จำกัดสีและพื้นหลังเพื่อให้ภาพสะอาดและจำง่าย",
        "ตรวจข้อเท็จจริงและตัวอักษรไทยก่อนเผยแพร่ทุกครั้ง"
      ]
    },
    cta: {
      title: "อยากให้ AI ช่วยทำสื่อสรุปความรู้ให้ทีมหรือลูกค้า?",
      description: "Prompt และ Workflow สร้างอินโฟกราฟิก สไลด์ และคอนเทนต์ความรู้ อัปเดตทุกสัปดาห์ใน Modty AI Insider Club เดือนละ 99 บาท",
      primaryBtnText: "เข้าร่วม Insider Club (99.-/เดือน) →",
      secondaryBtnText: "ปรึกษา Modty ผ่าน LINE"
    }
  },
  {
    id: "gem-mirror-selfie-virtual-tryon",
    title: "Gem ถ่ายรูปหน้ากระจก — อัปรูปนางแบบ + รูปชุด แล้วได้ภาพ Lifestyle ที่หน้าเดิม ชุดตรงปก",
    subtitle: "ระบบ Virtual Try-on ล็อกใบหน้าและเสื้อผ้า พร้อม Prompt ฉากห้อง 3 แบบสำหรับร้านเสื้อผ้า",
    category: "AI Visual",
    categoryBadge: "GEM PROMPT",
    icon: "🪞",
    coverImage: "/resources/gem-mirror-selfie-tryon.svg",
    readTime: "6 นาที",
    date: "2026-01",
    tags: ["Virtual Try-on", "Gemini Gem", "Fashion", "E-commerce", "Mirror Selfie", "Prompt"],
    summary: "Gem สำหรับร้านเสื้อผ้า: อัปโหลดรูปนางแบบและรูปชุด ระบบล็อกอัตลักษณ์ใบหน้าและรายละเอียดเสื้อผ้า แล้ววางลงในฉากเซลฟี่หน้ากระจก พร้อมชุดฉาก 3 สไตล์ (พาสเทลชมพู, เบจมินิมอล, วินเทจโรแมนติก) ที่แก้ได้ตรงหัวข้อ SCENE",
    featured: false,
    content: {
      intro: "ภาพแนว Mirror Selfie ช่วยให้สินค้าดูเป็นไลฟ์สไตล์มากกว่าภาพแคตตาล็อก Gem นี้แบ่งงานเป็น 3 ส่วนที่ 'ล็อก': ใบหน้าและรูปร่างจากรูปนางแบบ, รายละเอียดเสื้อผ้าจากรูปสินค้า, และฉากจากคำอธิบายที่กำหนด ผลลัพธ์ควรเป็นรูปภาพอย่างเดียวไม่มีคำอธิบาย ข้อควรระวัง: ใช้เฉพาะนางแบบที่ยินยอมให้ใช้ภาพ ห้ามใช้รูปบุคคลอื่นโดยไม่ได้รับอนุญาต และเทียบสี/ทรงเสื้อผ้าในภาพกับสินค้าจริงก่อนลงขาย เพื่อไม่ให้ลูกค้าเข้าใจผิด",
      workflowSteps: [
        { step: "01. สร้าง Gem", desc: "Gemini → Gems → Your Gems → สร้างใหม่ (หรือเปิดการจัดการบนเว็บ) ตั้งชื่อและคำอธิบาย วางคำสั่งหลักด้านล่าง แล้วบันทึก" },
        { step: "02. อัปโหลดนางแบบ + ชุด", desc: "อัปรูปนางแบบ (หน้าชัด) และรูปสินค้า (เห็นสี ผ้า ทรงชัดเจน) แล้วสั่งสร้างภาพ" },
        { step: "03. เปลี่ยนฉากตามร้าน", desc: "แก้เฉพาะหัวข้อ SCENE ในคำสั่ง ใช้ฉากตัวอย่าง 3 แบบด้านล่าง หรือเขียนฉากของแบรนด์เอง" }
      ],
      promptCopyText: `// คำสั่งหลักของ Gem (ย่อ)
You are an AI virtual try-on and photorealistic image generation system.
Your highest priority is FACE IDENTITY PRESERVATION.
Generate a final photorealistic image by strictly combining: the uploaded PERSON image (face & body reference), the uploaded PRODUCT image (clothing reference), and the predefined SCENE.

1. PERSON (LOCKED): preserve exact facial identity, proportions, skin tone, hairstyle and body proportions. Do not beautify, stylize, or modify the face. Do not change age, ethnicity or facial structure.
2. PRODUCT (LOCKED): preserve clothing category, cut, silhouette, fit, fabric texture, exact color/pattern, seams and folds. Do not redesign, change color, fabric or shape.
3. SCENE: use the scene description only as environment. Never use any person in the scene reference.

FINAL GOAL: a single photorealistic mirror-selfie image that preserves the uploaded face, dresses the person in the exact uploaded product, and places them naturally in the scene, like a real lifestyle photograph.
Output the final image only. No text, no explanations.

POSE & ACTION: standing naturally in front of a full-length mirror, holding a phone, casual mirror selfie, relaxed posture, slight body angle.
LIGHTING: bright natural daylight, soft highlights, gentle shadows, realistic skin.
CAMERA: eye-level mirror reflection, full-body framing, straight vertical perspective, no distortion.
STYLE: photorealistic lifestyle photography, realistic skin texture and fabric behavior, no illustration, no anime.

SCENE (แก้ตรงนี้): [ใส่ฉาก เช่น กระจกบานสูงกรอบไม้ ห้องนั่งเล่นมินิมอล แสงแดดจากหน้าต่าง]

---
// ฉากตัวอย่าง 1 — กระจกคลื่นสีชมพู พาสเทล
Tall full-body mirror with a thick sculpted wavy frame in muted pastel pink against a clean off-white wall; light natural wood floor; compact cozy youthful pastel room; a small white-and-pink desk with neatly arranged stationery visible in the reflection; pink desk chair; soft pastel decor and a small bunny-shaped lamp in the foreground. Palette: pastel pink, lavender, soft white, light wood. Bright natural daylight, fresh airy mood.

// ฉากตัวอย่าง 2 — ห้องนอนมินิมอลโทนเบจ
Tall asymmetrical organic-shaped mirror leaning against a light beige textured wall; sheer white curtains diffusing daylight; warm white fairy lights hung vertically; light cream plush carpet; neutral bed with soft pillows; a small green plant in a woven basket. Warm neutral palette, cozy calm atmosphere.

// ฉากตัวอย่าง 3 — วินเทจโรแมนติกโทนชมพู
Tall standing mirror with an ornate gold metal frame; warm wooden floor; white classical pedestal table with a vase of soft pink roses tied with a satin ribbon; vintage pale yellow rotary telephone; sheer curtains behind the mirror. Blush pink, cream, white and soft gold tones; warm romantic nostalgic lighting.`,
      takeaways: [
        "ล็อก 3 ส่วน (ใบหน้า, เสื้อผ้า, ฉาก) ช่วยให้ภาพออกมาตรงกับสินค้าจริงมากขึ้น",
        "เปลี่ยนฉากได้ด้วยการแก้หัวข้อ SCENE เพียงจุดเดียว มีฉากตัวอย่าง 3 แบบ",
        "ใช้กับนางแบบที่ยินยอมเท่านั้น และตรวจสี/ทรงเทียบกับสินค้าจริงก่อนลงขาย"
      ]
    },
    cta: {
      title: "อยากมีระบบถ่ายภาพสินค้าและนางแบบด้วย AI สำหรับร้านของคุณ?",
      description: "มีแพ็กเกจช่วยสร้างระบบ Gem พร้อมสอนตั้งค่า เริ่มต้น 3 Gem 599 บาท (สอนประมาณ 30 นาที) หรือ 5 Gem 990 บาท สอบถามทางไลน์ หรือเข้า Insider Club เพื่อรับเทคนิคทุกสัปดาห์",
      primaryBtnText: "เข้าร่วม Insider Club (99.-/เดือน) →",
      secondaryBtnText: "สอบถามแพ็กเกจสร้าง Gem ผ่าน LINE"
    }
  },
  {
    id: "web-design-reverse-engineering-step-by-step",
    title: "Step-by-Step: แกะสไตล์ดีไซน์เว็บที่ชอบด้วย AI แล้วประกอบเป็น Master Prompt ของตัวเอง",
    subtitle: "จากการสำรวจต้นแบบ → ถอดรหัสสี ฟอนต์ เอฟเฟกต์ → สกัดโค้ดเวทมนตร์ → ประกอบเป็น Blueprint สร้างเว็บ",
    category: "Vibe Coding",
    categoryBadge: "DESIGN REVERSE ENGINEERING",
    icon: "🧬",
    coverImage: "/resources/web-design-reverse-engineering.svg",
    readTime: "9 นาที",
    date: "2026-04",
    tags: ["Reverse Engineering", "Web Design", "Tailwind CSS", "Master Prompt", "Landing Page", "Vibe Coding"],
    summary: "4 สเต็ปแกะสไตล์เว็บ: เก็บข้อมูลต้นแบบ (ภาพ วิดีโอ Inspect), ให้ AI ถอดเป็นศัพท์ดีไซน์ (สี ฟอนต์ UI เอฟเฟกต์ คีย์เวิร์ด), แยกเขียนโค้ดเอฟเฟกต์พิเศษก่อน แล้วประกอบเป็น Master Prompt พร้อมเทมเพลตสร้าง Landing Page 4 ส่วน",
    featured: false,
    content: {
      intro: "ต่างจากเทคนิค Reverse Engineering ทั่วไป หน้านี้เน้น 'แกะสไตล์ดีไซน์ของเว็บ' เพื่อนำมาเป็นภาษาที่สั่ง AI ได้แม่น ไม่ได้ให้ลอกเว็บของคนอื่นทั้งหน้า เมื่อเจอเว็บที่ชอบ ให้ถอดเป็น Color Palette, Typography, UI Elements, Advanced CSS Effects และคีย์เวิร์ดแบบ Tailwind จากนั้นแยกเขียนโค้ดเอฟเฟกต์จุดเด่นก่อน แล้วค่อยประกอบทุกอย่างเป็น Master Prompt ข้อควรระวัง: ใช้ต้นแบบเป็นแรงบันดาลใจด้านสไตล์ ไม่คัดลอกโค้ด ข้อความ รูป วิดีโอ หรือแบรนด์ของผู้อื่น ใช้สื่อที่เรามีสิทธิ์ใช้งานเท่านั้น",
      workflowSteps: [
        { step: "01. สำรวจต้นแบบ", desc: "แคปภาพหรืออัดวิดีโอหลายมุม (ปกติ, Hover, มือถือ) ใช้ Inspect ดูฟอนต์ (แท็บ Network > Font) และสี Hex (แท็บ Elements) จดชื่อคลาสที่บอกเอฟเฟกต์ เช่น glass, glitch, marquee" },
        { step: "02. ให้ AI ถอดรหัส + แยกเอฟเฟกต์", desc: "ใช้ Prompt แกะสไตล์เพื่อได้สี ฟอนต์ ปุ่ม เลย์เอาต์ เอฟเฟกต์ และคีย์เวิร์ด จากนั้นให้เขียนเฉพาะโค้ด CSS ของเอฟเฟกต์ที่ชอบเป็นคลาสแยก" },
        { step: "03. ประกอบ Master Prompt", desc: "เรียงตามส่วน: Foundation (สี ฟอนต์) → Custom CSS → Sections (เลย์เอาต์) → Assets (รูป/วิดีโอของเราเอง)" }
      ],
      promptCopyText: `// 1) แกะสไตล์เว็บ
ฉันต้องการทำ Reverse Engineering สไตล์การออกแบบของหน้าเว็บในภาพนี้ (หรือเว็บนี้: [ลิงก์]) กรุณาวิเคราะห์เป็นหมวดต่อไปนี้ เพื่อนำไปเขียน Prompt สร้างเว็บของฉันเอง:
1. Color Palette: โทนหลัก สีข้อความ สี Accent (เดา Hex Code มาด้วย)
2. Typography: สไตล์ฟอนต์ (Serif, Sans-serif, Display, Monospace) และแนะนำฟอนต์ใกล้เคียงจาก Google Fonts 2–3 คู่
3. UI Elements & Shapes: ปุ่ม ความมนของมุม Layout/Grid
4. Advanced CSS Effects: เอฟเฟกต์พิเศษที่น่าจะใช้ (เช่น Glassmorphism, Gradient Text, CSS Masking, Blend Modes) พร้อมอธิบายสั้นๆ
5. Keywords สำหรับ Prompt: ศัพท์แบบ Tailwind CSS / UI Design ที่ควรใช้สั่ง AI เพื่อให้ได้สไตล์นี้

// 2) แกะเอฟเฟกต์
จากภาพ (หรือสไตล์เว็บนี้) ฉันชอบเอฟเฟกต์ [เช่น การ์ดใสที่ขอบวาว / ตัวหนังสือเลื่อนไม่สิ้นสุด] ช่วยเขียนเฉพาะโค้ด CSS (หรือ Tailwind custom class) ที่สร้างเอฟเฟกต์นี้ ตั้งชื่อคลาส เช่น .my-custom-glass (เขียนขึ้นใหม่เอง ไม่คัดลอกโค้ดต้นฉบับ)

// 3) Master Prompt Template (สร้าง Landing Page 4 ส่วน)
Create a landing page called "[ชื่อโปรเจกต์]" with 4 sections, using a [ธีม เช่น dark cyberpunk / elegant minimalist / nature] theme. Use video backgrounds, a [custom glass UI effect], and the color/font system below.

FONTS (Google Fonts): [ฟอนต์หัวข้อ], [ฟอนต์ลายมือสำหรับข้อความเน้น], [ฟอนต์เนื้อหา]
COLOR SYSTEM: Background [#HEX], Text [#HEX], Accent [#HEX]
CUSTOM EFFECT: [วางโค้ด/คลาสเอฟเฟกต์ที่ได้จากข้อ 2]

SECTION 1 HERO (full viewport): looping muted autoplay video background, logo "[ชื่อโลโก้]", glass navigation with [4 เมนู], big headline "[พาดหัว]", cursive accent text "[ข้อความเน้น]", social icons
SECTION 2 ABOUT (full viewport): video background, heading "[หัวข้อ]", short paragraph "[คำอธิบาย 1-2 ประโยค]"
SECTION 3 COLLECTION GRID: solid background, 3-column cards with glass containers, each card has media + data label + circular arrow button
SECTION 4 CTA: full-width video background with right-aligned cursive text and a 3-line invitation heading

TECHNICAL: React + TypeScript + Vite + Tailwind CSS, icons with lucide-react, all videos autoPlay loop muted playsInline, mobile-first responsive (sm:, md:, lg:).
Use only video/image assets that I own or have the right to use: [ลิงก์สื่อของฉัน]`,
      takeaways: [
        "แปลงสิ่งที่ 'เห็นว่าสวย' เป็นศัพท์ดีไซน์ที่สั่ง AI ได้แม่น",
        "แยกเขียนเอฟเฟกต์จุดเด่นก่อน แล้วค่อยประกอบทั้งหน้า ทำให้ควบคุมผลลัพธ์ง่ายขึ้น",
        "ใช้เป็นแรงบันดาลใจด้านสไตล์เท่านั้น และใช้สื่อ ฟอนต์ ภาพที่เรามีสิทธิ์ใช้"
      ]
    },
    cta: {
      title: "อยากเรียน Prompt Engineering / Reverse Engineering แบบ Vibe Coding จัดเต็ม?",
      description: "คอร์ส Vibe Coding Master Route สอนสร้างเว็บและแอปด้วย AI ตั้งแต่เริ่มจนถึง Deploy ราคา 2,990 บาท หรือเข้า Insider Club เดือนละ 99 บาทเพื่อรับเทคนิคใหม่ทุกสัปดาห์",
      primaryBtnText: "เข้าร่วม Insider Club (99.-/เดือน) →",
      secondaryBtnText: "ดูคอร์ส 2,990.- ที่ mastervibecode"
    }
  },
  {
    id: "awesome-agent-skills-500-plus",
    title: "คลัง Agent Skills 500+ ตัวสำหรับ AI และ IDE — วิธีก๊อปไปใช้และวิธีติดตั้ง",
    subtitle: "เหมือนลง 'แอป' เพิ่มให้ AI เก่งเฉพาะด้าน ใช้ได้ทั้งแบบ Copy-Paste กับ AI ทั่วไป และติดตั้งแล้วเรียกด้วย @ ใน Cursor, Antigravity, Claude Code",
    category: "Claude Skills",
    categoryBadge: "SKILL LIBRARY",
    icon: "🧰",
    coverImage: "/resources/antigravity-awesome-skills.svg",
    readTime: "4 นาที",
    date: "2026-04",
    tags: ["Agent Skills", "Antigravity", "Cursor", "Claude Code", "GitHub", "Prompt Library"],
    summary: "คลัง Skills บน GitHub กว่า 500 แบบ (ตามที่ต้นทางระบุ) สำหรับทำให้ AI เชี่ยวชาญงานเฉพาะ เช่น การเขียนโค้ด Security การตลาด พร้อมวิธีใช้ 2 แบบ: คัดลอกไฟล์ .md ไปวางในแชท หรือติดตั้งลงโปรเจกต์แล้วเรียกด้วย @ชื่อสกิล",
    featured: false,
    skillCategories: [
      {
        icon: "📦",
        name: "ต้นทางของคลัง",
        skills: [
          { name: "antigravity-awesome-skills", desc: "คลังชุดคำสั่ง (Skills) สำหรับ AI Agent ที่เลือกใช้ได้ตามหัวข้อ เช่น react-patterns, seo-audit, brainstorming, lint-and-validate", link: "github.com/sickn33/antigravity-awesome-skills" }
        ]
      }
    ],
    content: {
      intro: "Skill คือชุดคำสั่งที่ทำให้ AI ทำงานเก่งขึ้นในเรื่องหนึ่งๆ คล้ายการลงแอปเพิ่ม ใช้ได้ 2 ระดับ ถ้าใช้ AI ทั่วไปอย่าง ChatGPT, Claude.ai หรือ Gemini บนเว็บ ให้เปิดไฟล์ .md ของ Skill ที่ต้องการ คัดลอกทั้งไฟล์ แล้ววางในแชทก่อนเริ่มคุย AI จะทำตามกฎในไฟล์นั้น ถ้าใช้ IDE หรือ CLI อย่าง Cursor, Antigravity, Claude Code ให้ติดตั้งลงโปรเจกต์ แล้วเรียกด้วย @ชื่อสกิล ก่อนติดตั้งทุกครั้งควรอ่านไฟล์ Skill และคำสั่งติดตั้งก่อนรัน เพราะ Skill บางตัวอาจสั่งให้ AI รันคำสั่งหรือแก้ไฟล์ในเครื่อง",
      workflowSteps: [
        { step: "01. วิธี Manual (AI ทั่วไป)", desc: "เข้า GitHub → โฟลเดอร์ skills → เลือกหัวข้อ → คัดลอกข้อความในไฟล์ .md ทั้งหมด → วางในแชทก่อนเริ่มคุย" },
        { step: "02. ติดตั้งแบบ IDE / CLI", desc: "เปิด Terminal ในโปรเจกต์ รัน npx antigravity-awesome-skills หรือ git clone ... .agent/skills (เลือกอย่างใดอย่างหนึ่ง ตรวจ README ล่าสุดก่อน)" },
        { step: "03. เรียกใช้ด้วย @", desc: "พิมพ์ @ตามด้วยชื่อ Skill เช่น @brainstorming ช่วยวางแผน SaaS หรือ @lint-and-validate กับไฟล์นี้ หรือบอกว่า 'มีโปรเจกต์นี้ ขอใช้สกิลที่เกี่ยวข้อง'" }
      ],
      promptCopyText: `// ติดตั้ง (เลือกอย่างใดอย่างหนึ่ง และอ่าน README ก่อน)
npx antigravity-awesome-skills
# หรือ
git clone https://github.com/sickn33/antigravity-awesome-skills.git .agent/skills

// ตัวอย่างการเรียกใช้ในแชทของ IDE
ใช้สกิล @brainstorming ช่วยฉันวางแผน [ไอเดีย SaaS ของคุณ]
เรียกใช้ @lint-and-validate กับไฟล์นี้
มีโปรเจกต์นี้ [อธิบายสั้นๆ] นำสกิลที่เกี่ยวข้องมาช่วยหน่อย แล้วบอกก่อนว่าจะใช้สกิลไหนและเพราะอะไร`,
      takeaways: [
        "เข้าใจ 2 วิธีใช้ Skill: Copy-Paste ไฟล์ .md กับ AI ทั่วไป และติดตั้งแล้วเรียกด้วย @ ใน IDE/CLI",
        "มีตัวอย่างคำสั่งเรียกใช้ที่ก๊อปไปแก้ได้ทันที",
        "ตรวจ README และไฟล์ Skill ก่อนติดตั้งทุกครั้ง โดยเฉพาะสกิลที่สั่งให้รันคำสั่งในเครื่อง"
      ]
    },
    cta: {
      title: "อยากสร้าง Skill ของตัวเองให้เข้ากับงานของคุณ?",
      description: "ปรึกษาเพื่อออกแบบ Skill จาก Workflow จริงของคุณ เริ่มต้น 490 บาท หรือเข้า Modty AI Insider Club เดือนละ 99 บาทเพื่อรับเทคนิค Skill และ MCP ทุกสัปดาห์",
      primaryBtnText: "เข้าร่วม Insider Club (99.-/เดือน) →",
      secondaryBtnText: "ปรึกษาสร้าง Skill (490.-) ผ่าน LINE"
    }
  }
];
