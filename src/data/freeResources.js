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
  }
];
