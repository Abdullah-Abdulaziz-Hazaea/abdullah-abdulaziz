/**
 * ==========================================================================
 * FULL STACK DEVELOPER PORTFOLIO - ABDULLAH ABDULAZIZ
 * Script Architecture: Bilingual Translation, Theme System, Mobile Nav,
 * ScrollSpy, Animations, Form Validation & State Persistence.
 * ==========================================================================
 */

(function () {
  'use strict';

  /* --------------------------------------------------------------------------
     1. TRANSLATION DATA DICTIONARY
     -------------------------------------------------------------------------- */
  const translations = {
    en: {
      page_title: "Abdullah Abdulaziz | Full Stack Developer",
      meta_desc: "Abdullah Abdulaziz — Full Stack Developer and Computer Engineering student focused on modern web development, software engineering, automation, APIs, databases, and practical digital solutions.",
      skip_to_content: "Skip to main content",

      // Navigation
      nav_home: "Home",
      nav_about: "About",
      nav_skills: "Skills",
      nav_projects: "Projects",
      nav_education: "Education",
      nav_learning: "Learning",
      nav_services: "Services",
      nav_career_goal: "Career Goal",
      nav_contact: "Contact",

      // Theme toggle labels
      theme_to_light: "Switch to light mode",
      theme_to_dark: "Switch to dark mode",

      // Hero
      hero_title: "Full Stack Developer | Computer Engineering Student",
      hero_name: "Abdullah Abdulaziz",
      hero_tagline: "Building ideas into modern, functional web applications.",
      hero_intro: "I’m Abdullah Abdulaziz, a Full Stack Developer and Computer Engineering student passionate about building modern web applications and turning ideas into practical digital solutions. I am interested in understanding the complete application development lifecycle — from user interfaces and user experience to backend systems, APIs, databases, and the technologies that power modern applications.",
      hero_cta_projects: "View Projects",
      hero_cta_contact: "Contact Me",
      avatar_role: "Full Stack Developer",
      avatar_status: "Computer Engineering Student",
      stat_practical: "Practical Learning",
      stat_automation: "Developer Tools",
      stat_systems: "Computer Systems",

      // About Me
      about_badge: "About Me",
      about_heading: "Background & Development Journey",
      about_p1: "I am a Computer Engineering student pursuing a career in Full Stack Development.",
      about_p2: "I am interested in building complete web applications that combine modern user interfaces with backend systems, databases, APIs, and practical software solutions.",
      about_p3: "I also have a strong interest in automation, developer tools, command-line environments, networking, computer architecture, and understanding how technologies work behind the scenes rather than simply using them.",
      about_p4: "My development journey focuses on practical learning and building projects rather than relying solely on theoretical knowledge.",
      about_p5: "I continuously improve my technical skills by implementing projects, solving programming problems, debugging issues, exploring development tools, reading technical documentation, and experimenting with different technologies.",
      about_p6: "My long-term objective is to become a professional Full Stack Developer capable of designing, building, and maintaining real-world applications that are scalable, maintainable, and practical.",
      pillar_fullstack_title: "Full Stack Architecture",
      pillar_fullstack_desc: "Connecting clean frontend designs with robust backend logic, APIs, and databases.",
      pillar_practical_title: "Practical Project Building",
      pillar_practical_desc: "Strengthening development abilities by creating real tools and solving authentic challenges.",
      pillar_underhood_title: "Under-the-Hood Curiosity",
      pillar_underhood_desc: "Understanding computer systems, command-line environments, and fundamental architecture.",

      // Skills
      skills_badge: "Skills",
      skills_heading: "Technologies & Areas of Knowledge",
      skill_cat_frontend: "Frontend Development",
      skill_cat_backend: "Backend Development",
      skill_cat_databases: "Databases",
      skill_cat_languages: "Programming Languages",
      skill_cat_tools: "Development Tools",
      skill_cat_concepts: "Technologies & Concepts",
      skill_responsive: "Responsive Web Design",
      skill_modern_js: "Modern JavaScript Concepts",
      skill_serverside: "Server-Side Development",
      skill_auth: "Authentication",
      skill_api_integ: "API Integration",
      skill_cmd: "Command Line",
      skill_networking: "Networking",
      skill_arch: "Computer Architecture",
      skill_swdev: "Software Development",
      skill_auto: "Automation",
      skill_devtools: "Developer Tools",

      // Projects
      projects_badge: "Projects",
      projects_heading: "Featured Projects",
      coming_soon: "Coming Soon",
      key_features_heading: "Key Features:",
      purpose_heading: "Purpose:",
      project1_name: "YouTube Downloader Pro",
      project1_type: "Automation / Developer Tool",
      project1_desc: "An automation tool designed to simplify the downloading and organization of educational YouTube content, including playlists and individual videos. The system is designed to automate the workflow and organize downloaded content efficiently.",
      p1_f1: "Download YouTube playlists",
      p1_f2: "Download individual videos",
      p1_f3: "Automatically organize playlists into separate folders",
      p1_f4: "Organize individual videos independently",
      p1_f5: "Prevent previously downloaded files from being downloaded again",
      p1_f6: "Support subtitle downloads",
      p1_f7: "Handle download errors and continue the process",
      p1_f8: "Merge video and audio using FFmpeg",
      p1_f9: "Automate the workflow using Python and Batch scripts",
      project2_name: "Personal Portfolio",
      project2_type: "Web Development / Personal Website",
      project2_desc: "A professional personal portfolio website designed to showcase Abdullah Abdulaziz's technical skills, projects, education, professional identity, and development journey.",
      project2_purpose: "Create a professional online presence that represents Abdullah as a Full Stack Developer and provides visitors with information about his skills, projects, education, technical interests, and ways to contact him.",

      // Education
      education_badge: "Education",
      education_heading: "Academic Foundation",
      edu_degree: "Computer Engineering",
      edu_status: "Computer Engineering Student",
      edu_desc: "I am studying Computer Engineering while developing my knowledge of programming and software development, along with fundamental concepts in computer systems, networking, and computer architecture.",
      edu_university_label: "University:",
      edu_university_val: "To be added",
      edu_grad_label: "Expected Graduation:",
      edu_grad_val: "To be added",

      // Learning Approach
      learning_badge: "Learning Approach",
      learning_heading: "Philosophy & Methodology",
      flow_learn: "LEARN",
      flow_practice: "PRACTICE",
      flow_build: "BUILD",
      flow_solve: "SOLVE",
      flow_improve: "IMPROVE",
      learning_lead: "I believe that practical learning is an essential part of becoming a better developer.",
      lp_1: "Applying what I learn through projects",
      lp_2: "Solving programming problems",
      lp_3: "Debugging real issues",
      lp_4: "Exploring different technologies",
      lp_5: "Exploring development tools",
      lp_6: "Reading technical documentation",
      lp_7: "Improving projects progressively",
      lp_8: "Understanding fundamentals before moving to advanced concepts",

      // Technical Interests
      interests_badge: "Technical Interests",
      interests_heading: "Areas of Focus & Passion",
      ti_fullstack: "Full Stack Development",
      ti_webdev: "Web Development",
      ti_swe: "Software Engineering",
      ti_programming: "Programming",
      ti_databases: "Databases",
      ti_networking: "Networking",
      ti_arch: "Computer Architecture",
      ti_automation: "Automation",
      ti_devtools: "Developer Tools",
      ti_sysdesign: "System Design",
      ti_opensource: "Open Source",

      // Services
      services_badge: "Services",
      services_heading: "What I Can Build",
      serv1_title: "Full Stack Web Development",
      serv1_desc: "Building complete web applications integrating responsive front-end interfaces with structured server architectures and data persistence.",
      serv2_title: "Frontend Development",
      serv2_desc: "Crafting responsive, clean, and accessible user interfaces utilizing modern HTML5, CSS3, and JavaScript standards.",
      serv3_title: "Backend Development",
      serv3_desc: "Developing server-side logic, routing services, and authentication routines using Node.js to power digital applications.",
      serv4_title: "Web Application Development",
      serv4_desc: "Creating functional web applications designed for clear usability, maintainable structure, and practical user problem solving.",
      serv5_title: "REST API Development",
      serv5_desc: "Designing and implementing clean RESTful endpoints to exchange structured JSON data securely between clients and servers.",
      serv6_title: "Database Integration",
      serv6_desc: "Connecting relational and document databases including MySQL and MongoDB, structuring schemas and executing reliable data queries.",
      serv7_title: "Website Development",
      serv7_desc: "Developing modern, high-performance websites with clean semantic HTML, responsive CSS layouts, and fast loading speeds.",
      serv8_title: "Automation & Scripting",
      serv8_desc: "Creating custom Python, Batch, and command-line automation scripts to simplify repetitive tasks and organize digital workflows.",

      // Career Goal
      career_goal_badge: "Career Vision",
      career_goal_heading: "Career Goal",
      career_goal_p1: "My goal is to become a professional Full Stack Developer capable of designing and developing complete web applications, from the user interface to backend systems, databases, and APIs.",
      career_goal_p2: "I aim to contribute to real-world software projects and products, continue developing my technical expertise, and build useful, maintainable, and scalable digital solutions.",

      // Contact
      contact_badge: "Contact",
      contact_heading: "Get In Touch",
      form_label_name: "Name",
      form_label_email: "Email",
      form_label_subject: "Subject",
      form_label_message: "Message",
      form_btn_send: "Send Message",
      contact_channels_heading: "Connect & Network",
      contact_channels_sub: "Direct channels and developer profiles:",
      err_name_required: "Name is required.",
      err_email_required: "Email address is required.",
      err_email_invalid: "Please enter a valid email address.",
      err_subject_required: "Subject is required.",
      err_msg_required: "Message is required.",
      err_msg_min: "Message must be at least 10 characters.",
      form_success: "Your message has been validated successfully. The contact form is currently a front-end interface and is not connected to a backend.",

      // Footer
      footer_title: "Full Stack Developer | Computer Engineering Student",
      back_to_top: "Back to top",
      all_rights_reserved: "All rights reserved."
    },

    ar: {
      page_title: "عبدالله عبدالعزيز | مطور Full Stack",
      meta_desc: "عبدالله عبدالعزيز — مطور Full Stack وطالب هندسة حاسوب مهتم بتطوير الويب وهندسة البرمجيات والأتمتة وواجهات API وقواعد البيانات وبناء الحلول الرقمية العملية.",
      skip_to_content: "الانتقال إلى المحتوى الرئيسي",

      // Navigation
      nav_home: "الرئيسية",
      nav_about: "نبذة عني",
      nav_skills: "المهارات",
      nav_projects: "المشاريع",
      nav_education: "التعليم",
      nav_learning: "أسلوب التعلم",
      nav_services: "الخدمات",
      nav_career_goal: "الهدف المهني",
      nav_contact: "التواصل",

      // Theme toggle labels
      theme_to_light: "التبديل إلى الوضع الفاتح",
      theme_to_dark: "التبديل إلى الوضع الداكن",

      // Hero
      hero_title: "مطور Full Stack | طالب هندسة حاسوب",
      hero_name: "عبدالله عبدالعزيز",
      hero_tagline: "أحوّل الأفكار إلى تطبيقات ويب حديثة وعملية وفعّالة.",
      hero_intro: "أنا عبدالله عبدالعزيز، مطور Full Stack وطالب هندسة حاسوب، شغوف بتطوير تطبيقات الويب وبناء حلول برمجية عملية. أهتم بفهم دورة تطوير التطبيق بشكل متكامل، بدءًا من واجهات المستخدم وتجربة المستخدم، وصولًا إلى الأنظمة الخلفية وواجهات API وقواعد البيانات والتقنيات التي تدعم التطبيقات الحديثة.",
      hero_cta_projects: "مشاهدة المشاريع",
      hero_cta_contact: "تواصل معي",
      avatar_role: "مطور Full Stack",
      avatar_status: "طالب هندسة حاسوب",
      stat_practical: "التعلم العملي",
      stat_automation: "أدوات المطورين",
      stat_systems: "أنظمة الحاسوب",

      // About Me
      about_badge: "نبذة عني",
      about_heading: "الخلفية والمسيرة التطويرية",
      about_p1: "أدرس هندسة الحاسوب وأسعى إلى بناء مسيرة مهنية في مجال تطوير التطبيقات Full Stack.",
      about_p2: "أهتم ببناء تطبيقات ويب متكاملة تجمع بين واجهات المستخدم الحديثة والأنظمة الخلفية وقواعد البيانات وواجهات برمجة التطبيقات والحلول البرمجية العملية.",
      about_p3: "كما أهتم بالأتمتة وأدوات المطورين وبيئات سطر الأوامر والشبكات ومعمارية الحاسوب، وأستمتع بفهم كيفية عمل التقنيات خلف الكواليس، وليس فقط استخدامها.",
      about_p4: "تركز رحلتي البرمجية على التعلم العملي وبناء المشاريع بدلًا من الاعتماد على المعرفة النظرية فقط.",
      about_p5: "أعمل باستمرار على تطوير مهاراتي التقنية من خلال تنفيذ المشاريع، وحل المشاكل البرمجية، وتصحيح الأخطاء، وتجربة أدوات التطوير، وقراءة الوثائق التقنية، واستكشاف التقنيات المختلفة.",
      about_p6: "هدفي على المدى الطويل هو الوصول إلى مستوى احترافي يمكنني من تصميم وتطوير وصيانة تطبيقات حقيقية قابلة للتوسع والصيانة وعملية الاستخدام.",
      pillar_fullstack_title: "معمارية Full Stack",
      pillar_fullstack_desc: "الربط بين واجهات المستخدم النظيفة والأنظمة الخلفية وقواعد البيانات.",
      pillar_practical_title: "بناء المشاريع العملية",
      pillar_practical_desc: "تعزيز المهارات من خلال بناء أدوات حقيقية وحل المشكلات البرمجية الواقعية.",
      pillar_underhood_title: "فهم ما وراء الكواليس",
      pillar_underhood_desc: "التعمق في أنظمة الحاسوب وبيئات سطر الأوامر والمعمارية البرمجية الأساسية.",

      // Skills
      skills_badge: "المهارات",
      skills_heading: "التقنيات ومجالات المعرفة",
      skill_cat_frontend: "تطوير الواجهات الأمامية",
      skill_cat_backend: "تطوير الواجهات الخلفية",
      skill_cat_databases: "قواعد البيانات",
      skill_cat_languages: "لغات البرمجة",
      skill_cat_tools: "أدوات التطوير",
      skill_cat_concepts: "التقنيات والمفاهيم",
      skill_responsive: "تصميم ويب متجاوب",
      skill_modern_js: "مفاهيم جافاسكريبت الحديثة",
      skill_serverside: "تطوير جانب الخادم",
      skill_auth: "المصادقة والتحقق",
      skill_api_integ: "ربط وتكامل APIs",
      skill_cmd: "سطر الأوامر",
      skill_networking: "الشبكات",
      skill_arch: "معمارية الحاسوب",
      skill_swdev: "تطوير البرمجيات",
      skill_auto: "الأتمتة",
      skill_devtools: "أدوات المطورين",

      // Projects
      projects_badge: "المشاريع",
      projects_heading: "أبرز الأعمال",
      coming_soon: "قريبًا",
      key_features_heading: "أبرز الخصائص:",
      purpose_heading: "الهدف:",
      project1_name: "YouTube Downloader Pro",
      project1_type: "أداة أتمتة / أداة للمطورين",
      project1_desc: "أداة لأتمتة تحميل وتنظيم المحتوى التعليمي من YouTube، بما في ذلك قوائم التشغيل والفيديوهات الفردية، بهدف تسهيل عملية التحميل وتنظيم المحتوى تلقائيًا.",
      p1_f1: "تحميل قوائم التشغيل",
      p1_f2: "تحميل الفيديوهات الفردية",
      p1_f3: "تنظيم قوائم التشغيل داخل مجلدات منفصلة",
      p1_f4: "تنظيم الفيديوهات الفردية بشكل مستقل",
      p1_f5: "منع إعادة تحميل الملفات التي تم تنزيلها مسبقًا",
      p1_f6: "دعم تحميل الترجمات",
      p1_f7: "التعامل مع الأخطاء والاستمرار في عملية التحميل",
      p1_f8: "دمج الفيديو والصوت باستخدام FFmpeg",
      p1_f9: "أتمتة عملية التحميل باستخدام Python وBatch Scripts",
      project2_name: "Personal Portfolio",
      project2_type: "تطوير ويب / موقع شخصي",
      project2_desc: "موقع شخصي احترافي لعرض الهوية المهنية والمهارات التقنية والمشاريع والتعليم والمسيرة التطويرية لعبدالله عبدالعزيز.",
      project2_purpose: "إنشاء حضور رقمي احترافي يعكس مهارات عبدالله كمطور Full Stack ويساعد الزوار على التعرف على مهاراته ومشاريعه واهتماماته التقنية وطرق التواصل معه.",

      // Education
      education_badge: "التعليم",
      education_heading: "المسار الأكاديمي",
      edu_degree: "هندسة الحاسوب",
      edu_status: "طالب هندسة حاسوب",
      edu_desc: "أدرس هندسة الحاسوب مع تطوير معرفتي في البرمجة وتطوير البرمجيات، إلى جانب المفاهيم الأساسية في أنظمة الحاسوب والشبكات ومعمارية الحاسوب.",
      edu_university_label: "الجامعة:",
      edu_university_val: "سيتم إضافتها لاحقًا",
      edu_grad_label: "سنة التخرج:",
      edu_grad_val: "سيتم تحديدها لاحقًا",

      // Learning Approach
      learning_badge: "أسلوب التعلم",
      learning_heading: "فلسفة ومنهجية التعلم",
      flow_learn: "تعلّم",
      flow_practice: "مارس",
      flow_build: "ابنِ",
      flow_solve: "حل",
      flow_improve: "طوّر",
      learning_lead: "أؤمن بأن التعلم العملي جزء أساسي من تطوير مهارات البرمجة.",
      lp_1: "تطبيق ما أتعلمه من خلال المشاريع",
      lp_2: "حل المشاكل البرمجية",
      lp_3: "تصحيح الأخطاء والمشاكل البرمجية",
      lp_4: "تجربة التقنيات المختلفة",
      lp_5: "استكشاف أدوات التطوير",
      lp_6: "قراءة الوثائق والمراجع التقنية",
      lp_7: "تطوير المشاريع بشكل تدريجي",
      lp_8: "فهم الأساسيات قبل الانتقال إلى المفاهيم المتقدمة",

      // Technical Interests
      interests_badge: "الاهتمامات التقنية",
      interests_heading: "مجالات التركيز والشغف",
      ti_fullstack: "تطوير Full Stack",
      ti_webdev: "تطوير الويب",
      ti_swe: "هندسة البرمجيات",
      ti_programming: "البرمجة",
      ti_databases: "قواعد البيانات",
      ti_networking: "الشبكات",
      ti_arch: "معمارية الحاسوب",
      ti_automation: "الأتمتة",
      ti_devtools: "أدوات المطورين",
      ti_sysdesign: "تصميم الأنظمة",
      ti_opensource: "البرمجيات مفتوحة المصدر",

      // Services
      services_badge: "الخدمات",
      services_heading: "القدرات ومجالات العمل",
      serv1_title: "تطوير تطبيقات الويب Full Stack",
      serv1_desc: "بناء تطبيقات ويب متكاملة من البداية إلى النهاية تجمع بين الواجهات التفاعلية والأنظمة الخلفية المنظمة وتخزين البيانات.",
      serv2_title: "تطوير الواجهات الأمامية",
      serv2_desc: "تصميم وتطوير واجهات مستخدم متجاوبة وسهلة الوصول ونظيفة باستخدام أحدث معايير HTML5 وCSS3 وJavaScript.",
      serv3_title: "تطوير الواجهات الخلفية",
      serv3_desc: "تطوير المنطق البرمجي للخادم، والتوجيه، وأنظمة المصادقة باستخدام Node.js لدعم التطبيقات الرقمية.",
      serv4_title: "تطوير تطبيقات الويب",
      serv4_desc: "إنشاء تطبيقات ويب عملية مصممة لسهولة الاستخدام، وهيكلية أكواد برمجية نموذجية، وحل المشكلات بفعالية.",
      serv5_title: "تطوير REST APIs",
      serv5_desc: "تصميم وتطوير واجهات برمجة تطبيقات RESTful منظمة لتبادل بيانات JSON بأمان وسلاسة بين العميل والخادم.",
      serv6_title: "ربط قواعد البيانات",
      serv6_desc: "ربط قواعد البيانات العلائقية والوثائقية مثل MySQL وMongoDB، وتصميم المخططات وتنفيذ استعلامات موثوقة.",
      serv7_title: "تطوير المواقع",
      serv7_desc: "بناء مواقع ويب حديثة وعالية الأداء بهيكلية HTML دلالية نظيفة، وتصميم CSS متجاوب، وسرعة تحميل فائقة.",
      serv8_title: "الأتمتة والبرمجة النصية",
      serv8_desc: "تطوير برمجيات نصية مخصصة باستخدام Python وBatch وسطر الأوامر لأتمتة المهام المتكررة وتنظيم سير العمل.",

      // Career Goal
      career_goal_badge: "الرؤية المهنية",
      career_goal_heading: "الهدف المهني",
      career_goal_p1: "هدفي هو أن أصبح مطور Full Stack محترفًا قادرًا على تصميم وتطوير تطبيقات ويب متكاملة، بدءًا من واجهة المستخدم ووصولًا إلى الأنظمة الخلفية وقواعد البيانات وواجهات API.",
      career_goal_p2: "كما أطمح إلى المساهمة في تطوير مشاريع ومنتجات برمجية حقيقية، ومواصلة تطوير خبرتي التقنية، والمساهمة في بناء حلول رقمية مفيدة وقابلة للصيانة والتوسع.",

      // Contact
      contact_badge: "التواصل",
      contact_heading: "تواصل معي",
      form_label_name: "الاسم",
      form_label_email: "البريد الإلكتروني",
      form_label_subject: "الموضوع",
      form_label_message: "الرسالة",
      form_btn_send: "إرسال الرسالة",
      contact_channels_heading: "قنوات التواصل",
      contact_channels_sub: "القنوات المباشرة وحسابات المطور:",
      err_name_required: "الاسم مطلوب.",
      err_email_required: "البريد الإلكتروني مطلوب.",
      err_email_invalid: "يرجى إدخال عنوان بريد إلكتروني صحيح.",
      err_subject_required: "الموضوع مطلوب.",
      err_msg_required: "الرسالة مطلوبة.",
      err_msg_min: "يجب ألا تقل الرسالة عن 10 أحرف.",
      form_success: "تم التحقق من الرسالة بنجاح. نموذج التواصل حاليًا يعمل كواجهة أمامية فقط وغير متصل بخادم لإرسال الرسائل.",

      // Footer
      footer_title: "مطور Full Stack | طالب هندسة حاسوب",
      back_to_top: "العودة إلى الأعلى",
      all_rights_reserved: "جميع الحقوق محفوظة."
    }
  };

  /* --------------------------------------------------------------------------
     2. STATE & STORAGE MANAGEMENT
     -------------------------------------------------------------------------- */
  const STORAGE_KEYS = {
    LANG: 'abdullah_portfolio_lang',
    THEME: 'abdullah_portfolio_theme'
  };

  let currentLang = 'en';
  let currentTheme = 'dark';

  /* --------------------------------------------------------------------------
     3. DOM ELEMENTS CACHE
     -------------------------------------------------------------------------- */
  const dom = {
    html: document.documentElement,
    body: document.body,
    siteHeader: document.getElementById('site-header'),
    pageTitle: document.getElementById('page-title'),
    metaTitle: document.getElementById('meta-title'),
    metaDesc: document.getElementById('meta-desc'),
    ogTitle: document.getElementById('og-title'),
    ogDesc: document.getElementById('og-desc'),
    twTitle: document.getElementById('tw-title'),
    twDesc: document.getElementById('tw-desc'),

    // Nav & Toggles
    langEnBtn: document.getElementById('lang-en'),
    langArBtn: document.getElementById('lang-ar'),
    themeToggleBtn: document.getElementById('theme-toggle'),
    mobileMenuToggle: document.getElementById('mobile-menu-toggle'),
    mobileNavDrawer: document.getElementById('mobile-nav'),
    navLinks: document.querySelectorAll('.nav-link, .mobile-nav-link'),

    // Form
    contactForm: document.getElementById('contact-form'),
    formAlert: document.getElementById('form-alert'),
    inputName: document.getElementById('contact-name'),
    inputEmail: document.getElementById('contact-email'),
    inputSubject: document.getElementById('contact-subject'),
    inputMessage: document.getElementById('contact-message'),
    nameError: document.getElementById('name-error'),
    emailError: document.getElementById('email-error'),
    subjectError: document.getElementById('subject-error'),
    messageError: document.getElementById('message-error'),

    // Footer & Misc
    currentYearEl: document.getElementById('current-year'),
    scrollRevealEls: document.querySelectorAll('.scroll-reveal')
  };

  /* --------------------------------------------------------------------------
     4. LANGUAGE SYSTEM & TRANSLATION ENGINE
     -------------------------------------------------------------------------- */
  function applyLanguage(lang) {
    if (!translations[lang]) return;
    currentLang = lang;

    // 1. Update HTML document attributes
    dom.html.setAttribute('lang', lang);
    dom.html.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');

    // 2. Update all translatable elements using [data-i18n]
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(function (el) {
      const key = el.getAttribute('data-i18n');
      if (translations[lang][key]) {
        el.textContent = translations[lang][key];
      }
    });

    // 3. Update SEO and Document Title
    const titleText = translations[lang].page_title;
    const descText = translations[lang].meta_desc;

    if (dom.pageTitle) dom.pageTitle.textContent = titleText;
    if (dom.metaTitle) dom.metaTitle.setAttribute('content', titleText);
    if (dom.metaDesc) dom.metaDesc.setAttribute('content', descText);
    if (dom.ogTitle) dom.ogTitle.setAttribute('content', titleText);
    if (dom.ogDesc) dom.ogDesc.setAttribute('content', descText);
    if (dom.twTitle) dom.twTitle.setAttribute('content', titleText);
    if (dom.twDesc) dom.twDesc.setAttribute('content', descText);

    // 4. Update Theme Toggle accessible aria-label
    updateThemeToggleAriaLabel();

    // 5. Update Switcher active states
    if (dom.langEnBtn && dom.langArBtn) {
      if (lang === 'en') {
        dom.langEnBtn.classList.add('active');
        dom.langEnBtn.setAttribute('aria-pressed', 'true');
        dom.langArBtn.classList.remove('active');
        dom.langArBtn.setAttribute('aria-pressed', 'false');
      } else {
        dom.langArBtn.classList.add('active');
        dom.langArBtn.setAttribute('aria-pressed', 'true');
        dom.langEnBtn.classList.remove('active');
        dom.langEnBtn.setAttribute('aria-pressed', 'false');
      }
    }

    // 6. Save preference in localStorage
    try {
      localStorage.setItem(STORAGE_KEYS.LANG, lang);
    } catch (e) {
      // LocalStorage access handling (e.g. privacy mode)
    }
  }

  function initLanguage() {
    let savedLang = null;
    try {
      savedLang = localStorage.getItem(STORAGE_KEYS.LANG);
    } catch (e) {}

    // English is the default language
    const initialLang = savedLang === 'ar' ? 'ar' : 'en';
    applyLanguage(initialLang);

    // Bind event listeners to language switcher buttons
    if (dom.langEnBtn) {
      dom.langEnBtn.addEventListener('click', function () {
        if (currentLang !== 'en') applyLanguage('en');
      });
    }

    if (dom.langArBtn) {
      dom.langArBtn.addEventListener('click', function () {
        if (currentLang !== 'ar') applyLanguage('ar');
      });
    }
  }

  /* --------------------------------------------------------------------------
     5. THEME SYSTEM (DARK / LIGHT)
     -------------------------------------------------------------------------- */
  function updateThemeToggleAriaLabel() {
    if (!dom.themeToggleBtn) return;
    const isDark = currentTheme === 'dark';
    const labelKey = isDark ? 'theme_to_light' : 'theme_to_dark';
    const localizedLabel = translations[currentLang] ? translations[currentLang][labelKey] : (isDark ? 'Switch to light mode' : 'Switch to dark mode');
    dom.themeToggleBtn.setAttribute('aria-label', localizedLabel);
    dom.themeToggleBtn.setAttribute('title', localizedLabel);
  }

  function applyTheme(theme) {
    currentTheme = theme;
    dom.html.setAttribute('data-theme', theme);
    updateThemeToggleAriaLabel();

    try {
      localStorage.setItem(STORAGE_KEYS.THEME, theme);
    } catch (e) {}
  }

  function toggleTheme() {
    const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
    applyTheme(nextTheme);
  }

  function initTheme() {
    let savedTheme = null;
    try {
      savedTheme = localStorage.getItem(STORAGE_KEYS.THEME);
    } catch (e) {}

    // DARK MODE MUST BE THE DEFAULT
    const initialTheme = (savedTheme === 'light') ? 'light' : 'dark';
    applyTheme(initialTheme);

    if (dom.themeToggleBtn) {
      dom.themeToggleBtn.addEventListener('click', toggleTheme);
    }
  }

  /* --------------------------------------------------------------------------
     6. MOBILE NAVIGATION DRAWER
     -------------------------------------------------------------------------- */
  function toggleMobileMenu() {
    if (!dom.mobileNavDrawer || !dom.mobileMenuToggle) return;
    const isExpanded = dom.mobileMenuToggle.getAttribute('aria-expanded') === 'true';
    const newExpanded = !isExpanded;

    dom.mobileMenuToggle.setAttribute('aria-expanded', String(newExpanded));
    dom.mobileNavDrawer.classList.toggle('open', newExpanded);
    dom.mobileNavDrawer.setAttribute('aria-hidden', String(!newExpanded));
  }

  function closeMobileMenu() {
    if (!dom.mobileNavDrawer || !dom.mobileMenuToggle) return;
    dom.mobileMenuToggle.setAttribute('aria-expanded', 'false');
    dom.mobileNavDrawer.classList.remove('open');
    dom.mobileNavDrawer.setAttribute('aria-hidden', 'true');
  }

  function initMobileMenu() {
    if (dom.mobileMenuToggle) {
      dom.mobileMenuToggle.addEventListener('click', toggleMobileMenu);
    }

    // Close when clicking any nav item inside the drawer
    const drawerLinks = dom.mobileNavDrawer ? dom.mobileNavDrawer.querySelectorAll('a') : [];
    drawerLinks.forEach(function (link) {
      link.addEventListener('click', function () {
        closeMobileMenu();
      });
    });

    // Close on Escape key press
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && dom.mobileNavDrawer && dom.mobileNavDrawer.classList.contains('open')) {
        closeMobileMenu();
        if (dom.mobileMenuToggle) dom.mobileMenuToggle.focus();
      }
    });

    // Close on click outside
    document.addEventListener('click', function (e) {
      if (
        dom.mobileNavDrawer &&
        dom.mobileNavDrawer.classList.contains('open') &&
        !dom.mobileNavDrawer.contains(e.target) &&
        dom.mobileMenuToggle &&
        !dom.mobileMenuToggle.contains(e.target)
      ) {
        closeMobileMenu();
      }
    });
  }

  /* --------------------------------------------------------------------------
     7. SCROLL INTERACTIONS: HEADER SHADOW & ACTIVE NAV (SCROLLSPY)
     -------------------------------------------------------------------------- */
  function initScrollSpy() {
    const sections = document.querySelectorAll('section[id], header[id="hero"]');
    const header = dom.siteHeader;

    function onScroll() {
      // 1. Header scroll shadow
      if (window.scrollY > 30) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }

      // 2. Active section detection
      const scrollPos = window.scrollY + 120; // Offset for sticky navbar
      let currentSectionId = '';

      sections.forEach(function (sec) {
        const secTop = sec.offsetTop;
        const secHeight = sec.offsetHeight;
        if (scrollPos >= secTop && scrollPos < secTop + secHeight) {
          currentSectionId = sec.getAttribute('id');
        }
      });

      if (currentSectionId) {
        dom.navLinks.forEach(function (link) {
          const href = link.getAttribute('href');
          if (href === '#' + currentSectionId) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll(); // initial trigger
  }

  /* --------------------------------------------------------------------------
     8. SCROLL REVEAL ANIMATIONS (INTERSECTION OBSERVER)
     -------------------------------------------------------------------------- */
  function initScrollReveal() {
    // Respect reduced motion settings
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion || !('IntersectionObserver' in window)) {
      dom.scrollRevealEls.forEach(function (el) {
        el.classList.add('revealed');
      });
      return;
    }

    const observer = new IntersectionObserver(
      function (entries, obs) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            obs.unobserve(entry.target);
          }
        });
      },
      {
        root: null,
        rootMargin: '0px 0px -40px 0px',
        threshold: 0.1
      }
    );

    dom.scrollRevealEls.forEach(function (el) {
      observer.observe(el);
    });
  }

  /* --------------------------------------------------------------------------
     9. CONTACT FORM FRONT-END VALIDATION
     -------------------------------------------------------------------------- */
  function isValidEmail(email) {
    // Standard RFC-compliant email regex pattern
    const pattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;
    return pattern.test(String(email).trim());
  }

  function clearFormErrors() {
    [dom.inputName, dom.inputEmail, dom.inputSubject, dom.inputMessage].forEach(function (inp) {
      if (inp) inp.classList.remove('is-invalid');
    });
    if (dom.nameError) dom.nameError.textContent = '';
    if (dom.emailError) dom.emailError.textContent = '';
    if (dom.subjectError) dom.subjectError.textContent = '';
    if (dom.messageError) dom.messageError.textContent = '';
    if (dom.formAlert) {
      dom.formAlert.hidden = true;
      dom.formAlert.textContent = '';
      dom.formAlert.className = 'form-alert';
    }
  }

  function validateContactForm(e) {
    e.preventDefault();
    clearFormErrors();

    const t = translations[currentLang] || translations.en;
    let isValid = true;

    const nameVal = dom.inputName ? dom.inputName.value.trim() : '';
    const emailVal = dom.inputEmail ? dom.inputEmail.value.trim() : '';
    const subjectVal = dom.inputSubject ? dom.inputSubject.value.trim() : '';
    const messageVal = dom.inputMessage ? dom.inputMessage.value.trim() : '';

    // Validate Name
    if (!nameVal) {
      isValid = false;
      dom.inputName.classList.add('is-invalid');
      dom.nameError.textContent = t.err_name_required;
    }

    // Validate Email
    if (!emailVal) {
      isValid = false;
      dom.inputEmail.classList.add('is-invalid');
      dom.emailError.textContent = t.err_email_required;
    } else if (!isValidEmail(emailVal)) {
      isValid = false;
      dom.inputEmail.classList.add('is-invalid');
      dom.emailError.textContent = t.err_email_invalid;
    }

    // Validate Subject
    if (!subjectVal) {
      isValid = false;
      dom.inputSubject.classList.add('is-invalid');
      dom.subjectError.textContent = t.err_subject_required;
    }

    // Validate Message (min 10 characters)
    if (!messageVal) {
      isValid = false;
      dom.inputMessage.classList.add('is-invalid');
      dom.messageError.textContent = t.err_msg_required;
    } else if (messageVal.length < 10) {
      isValid = false;
      dom.inputMessage.classList.add('is-invalid');
      dom.messageError.textContent = t.err_msg_min;
    }

    // If validation fails, focus the first invalid field
    if (!isValid) {
      const firstInvalid = dom.contactForm.querySelector('.is-invalid');
      if (firstInvalid) firstInvalid.focus();
      return false;
    }

    // SUCCESS CASE: Show official message and reset fields
    if (dom.formAlert) {
      dom.formAlert.className = 'form-alert success';
      dom.formAlert.textContent = t.form_success;
      dom.formAlert.hidden = false;
      dom.formAlert.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }

    dom.contactForm.reset();
    return true;
  }

  function initContactForm() {
    if (!dom.contactForm) return;

    dom.contactForm.addEventListener('submit', validateContactForm);

    // Live validation clean-up on input
    const inputs = [dom.inputName, dom.inputEmail, dom.inputSubject, dom.inputMessage];
    inputs.forEach(function (inp) {
      if (!inp) return;
      inp.addEventListener('input', function () {
        if (inp.classList.contains('is-invalid')) {
          inp.classList.remove('is-invalid');
          const errorTargetId = inp.id.replace('contact-', '') + '-error';
          const errorSpan = document.getElementById(errorTargetId);
          if (errorSpan) errorSpan.textContent = '';
        }
      });
    });
  }

  /* --------------------------------------------------------------------------
     10. DYNAMIC YEAR
     -------------------------------------------------------------------------- */
  function initDynamicYear() {
    if (dom.currentYearEl) {
      dom.currentYearEl.textContent = String(new Date().getFullYear());
    }
  }

  /* --------------------------------------------------------------------------
     11. INITIALIZATION ON DOM READY
     -------------------------------------------------------------------------- */
  function init() {
    initDynamicYear();
    initTheme();
    initLanguage();
    initMobileMenu();
    initScrollSpy();
    initScrollReveal();
    initContactForm();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
