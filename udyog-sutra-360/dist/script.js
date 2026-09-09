(() => {
  'use strict';

  const translations = {
    en: {
      skip: 'Skip to main content', brandLine: 'Your digital growth partner',
      navAbout: 'About', navServices: 'Services', navWork: 'Work', navPricing: 'Packages', navContact: 'Contact', navCta: 'Start a project',
      heroEyebrow: 'FOR MSMEs & SMALL BUSINESSES',
      heroTitle: 'Give your business a new identity in the <span>digital world.</span>',
      heroText: 'Affordable, fast and conversion-focused websites - complete 360° digital support from design to ongoing care.',
      heroCta: 'Start my website', heroWork: 'View our work', heroTrust: 'digital solutions for growing businesses',
      orbitWeb: 'Website', orbitSocial: 'Promotion', orbitSupport: 'Support', orbitComplete: 'Complete digital support', pillMobile: 'Mobile friendly', pillFast: 'Fast website', scrollLabel: 'Scroll',
      ticker1: 'Website Development', ticker2: 'Google Business', ticker3: 'WhatsApp Marketing', ticker4: 'Banner Design', ticker5: 'Website Support',
      aboutKicker: 'WHO WE ARE', aboutTitle: 'Your complete digital journey from <span>idea to growth.</span>',
      aboutText: 'Udyog Sutra 360 helps local shops, service businesses, manufacturers, startups and entrepreneurs grow online through useful websites, web applications and digital campaigns.',
      value1: 'Trustworthy', value2: 'Approachable', value3: 'Progressive', stat1: 'digital projects', stat2: 'business sectors', stat3: 'complete digital support', stat4: 'website support',
      servicesKicker: 'OUR SERVICES', servicesTitle: 'Every digital service your <span>business needs to grow.</span>', servicesIntro: 'Each service is shaped around a small business owner’s goals, budget and customers.',
      service1Title: 'Website Development', service1Text: 'Professional websites that are fast, mobile-friendly and designed to turn visitors into enquiries.', service1a: 'Corporate and business websites', service1b: 'Landing pages and catalogues', service1c: 'SEO-ready and responsive',
      service2Title: 'Google Business', service2Text: 'Help local customers discover your business in search and reach you without friction.',
      service3Title: 'WhatsApp Marketing', service3Text: 'Simple systems for direct conversations, offers, catalogues and lead follow-ups.',
      service4Title: 'Social Media & Banners', service4Text: 'Distinctive posts, banners and promotional designs that make your brand easier to notice.',
      service5Title: 'Website Support & Maintenance', service5Text: 'Updates, backups, security checks and regular technical help to keep your website ready.', serviceLink: 'Learn more',
      processKicker: 'OUR PROCESS', processTitle: 'Grow online in <span>four simple steps.</span>', processText: 'No confusion and no difficult technical language. You receive clear information and approve every important stage.', processCta: 'Book a free discussion',
      step1Small: 'DISCOVERY', step1Title: 'Your business and goals', step1Text: 'We understand your customers, services, competition and the result you want from the website.',
      step2Small: 'DIRECTION', step2Title: 'Content, design and structure', step2Text: 'We create the right page plan, language and visual direction for your brand.',
      step3Small: 'CREATION', step3Title: 'Development and testing', step3Text: 'We build a fast, consistent experience across mobile, tablet and desktop.',
      step4Small: 'GROWTH', step4Title: 'Launch, training and support', step4Text: 'We launch the site, show you how it works and stay available for future growth.',
      workKicker: 'SAMPLE WORK', workTitle: 'A bigger digital identity for <span>small businesses.</span>', workIntro: 'These concept projects use dummy information to show how your future website could look and feel.', dragWork: 'Slide through projects',
      work1Type: 'LOCAL RETAIL', work1Title: 'Aarambh Kirana & Foods', work2Type: 'PROFESSIONAL SERVICE', work2Title: 'Pragati Tax Solutions', work3Type: 'DIGITAL CAMPAIGN', work3Title: 'MSME Growth Campaign',
      benefitKicker: 'BUSINESS BENEFITS', benefitTitle: 'More than a website: <span>a tool for business growth.</span>',
      benefit1Title: 'A trusted brand identity', benefit1Text: 'Give customers clear, professional information about your business.', benefit2Title: 'More customers and enquiries', benefit2Text: 'Use clear call-to-actions for direct phone, WhatsApp and form leads.', benefit3Title: 'A better mobile experience', benefit3Text: 'Deliver a fast, simple experience where most of your customers are.', growthRing: 'digital support',
      pricingKicker: 'SIMPLE PACKAGES', pricingTitle: 'Website plans that <span>grow with your business.</span>', pricingIntro: 'These are sample prices. Final pricing depends on your pages, features and content.',
      plan1Tag: 'START', plan1Title: 'Starter Presence', plan1Text: 'For new and local businesses', plan1a: '5-page website', plan1b: 'Mobile responsive', plan1c: 'WhatsApp and contact form', plan1d: 'Basic SEO setup',
      plan2Tag: 'GROW', plan2Title: 'Business Growth', plan2Text: 'For established businesses seeking more customers', plan2a: 'Up to 10 pages', plan2b: 'Custom UI and animations', plan2c: 'Google Business setup', plan2d: 'One month of support',
      plan3Tag: 'CUSTOM', plan3Title: '360° Digital', plan3Text: 'Complete website and marketing support', plan3a: 'Custom website or web app', plan3b: 'Content and banner design', plan3c: 'WhatsApp lead flow', plan3d: 'Ongoing website support',
      onwards: ' onwards*', customPrice: 'Custom quote', choosePlan: 'Choose this package', popular: 'MOST POPULAR',
      testimonialKicker: 'CUSTOMER TRUST', testimonialTitle: 'Experiences from <span>business owners.</span>', dummyNote: 'Sample testimonials for demonstration',
      quote1: '“Customers can now find our shop on Google and our website. We have seen a meaningful increase in phone enquiries.”', quote1Name: 'Amol Kadam', quote1Role: 'Retail business owner, Pune',
      quote2: '“Every technical detail was explained in simple language. The website feels modern and loads quickly on mobile.”', quote2Name: 'Sneha Naik', quote2Role: 'Consultant, Mumbai',
      quote3: '“Getting the website, banners and WhatsApp campaign in one place saved our time and made the brand more consistent.”', quote3Name: 'Rohit Patil', quote3Role: 'Manufacturer, Nashik',
      faqKicker: 'COMMON QUESTIONS', faqTitle: 'What to know <span>before we begin.</span>', faqIntro: 'If your question is different, call us or send a WhatsApp message.',
      faq1Q: 'How long does a website take?', faq1A: 'A standard business website can usually be completed in 10 to 20 working days. The schedule depends on content and approval time.',
      faq2Q: 'Will you help with domain and hosting?', faq2A: 'Yes. We guide you with domain selection, hosting, SSL and basic business email setup.',
      faq3Q: 'Can I update the website later?', faq3A: 'Yes. Depending on the technology, we can train you or you can choose one of our maintenance plans.',
      faq4Q: 'Can the website support Marathi and English?', faq4A: 'Yes. We can build your website in Marathi, English or both languages based on your customers.',
      contactKicker: 'LET’S GET STARTED', contactTitle: 'Ready to bring your business <span>online?</span>', contactText: 'Tell us what you need. We will explain the right website plan, approximate timeline and next step clearly.', callUs: 'Call us',
      formName: 'Your name', formBusiness: 'Business name', formPhone: 'Mobile number', formService: 'Service needed', formMessage: 'Your requirement', formSelect: 'Select a service', formSubmit: 'Request a free discussion', formNote: 'This is a demo website. Form submission currently works as a sample interaction.',
      formNamePh: 'Full name', formBusinessPh: 'Business name', formPhonePh: '+91', formMessagePh: 'Tell us briefly about your business and website requirement',
      footerText: 'Websites, digital marketing and dependable support for small businesses.', footerNav: 'Navigation', footerServices: 'Services', footerCta: 'Start your digital journey.', footerRights: 'All rights reserved.', whatsapp: 'Chat on WhatsApp', toast: 'Thank you! Your information has been recorded.'
    }
  };

  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const root = document.documentElement;
  const body = document.body;
  const header = document.querySelector('.site-header');
  const navToggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.main-nav');
  const progress = document.querySelector('.scroll-progress span');
  const toast = document.querySelector('.toast');
  const form = document.querySelector('.contact-form');
  const originalText = new Map();
  const originalHTML = new Map();
  const originalPlaceholders = new Map();

  document.querySelectorAll('[data-i18n]').forEach((el) => originalText.set(el, el.textContent));
  document.querySelectorAll('[data-i18n-html]').forEach((el) => originalHTML.set(el, el.innerHTML));
  document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => originalPlaceholders.set(el, el.placeholder));

  function setLanguage(lang) {
    const isEnglish = lang === 'en';
    document.documentElement.lang = lang;
    document.title = isEnglish
      ? 'Udyog Sutra 360 | MSME Website Development & Digital Marketing'
      : 'उद्योग सूत्र 360 | MSME वेबसाइट आणि डिजिटल मार्केटिंग';
    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.dataset.i18n;
      el.textContent = isEnglish && translations.en[key] ? translations.en[key] : originalText.get(el);
    });
    document.querySelectorAll('[data-i18n-html]').forEach((el) => {
      const key = el.dataset.i18nHtml;
      el.innerHTML = isEnglish && translations.en[key] ? translations.en[key] : originalHTML.get(el);
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
      const key = el.dataset.i18nPlaceholder;
      el.placeholder = isEnglish && translations.en[key] ? translations.en[key] : originalPlaceholders.get(el);
    });
    document.querySelectorAll('[data-lang]').forEach((button) => {
      const active = button.dataset.lang === lang;
      button.classList.toggle('active', active);
      button.setAttribute('aria-pressed', String(active));
    });
    try { localStorage.setItem('udyog-language', lang); } catch (_) { /* File previews may block storage. */ }
  }

  document.querySelectorAll('[data-lang]').forEach((button) => button.addEventListener('click', () => setLanguage(button.dataset.lang)));
  let savedLanguage = null;
  try { savedLanguage = localStorage.getItem('udyog-language'); } catch (_) { /* Keep Marathi default. */ }
  setLanguage(savedLanguage || 'mr');

  navToggle.addEventListener('click', () => {
    const open = body.classList.toggle('menu-open');
    navToggle.setAttribute('aria-expanded', String(open));
  });
  nav.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
    body.classList.remove('menu-open');
    navToggle.setAttribute('aria-expanded', 'false');
  }));

  function onScroll() {
    const top = window.scrollY;
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    progress.style.width = `${scrollable > 0 ? (top / scrollable) * 100 : 0}%`;
    header.classList.toggle('scrolled', top > 30);
    root.style.setProperty('--orbit-rotation', `${top * .035}deg`);
  }
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const delay = entry.target.dataset.delay || 0;
      entry.target.style.setProperty('--delay', `${delay}ms`);
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    });
  }, { threshold: .13 });
  document.querySelectorAll('.reveal').forEach((el, index) => {
    el.classList.add(['reveal-left', 'reveal-right', 'reveal-scale'][index % 3]);
    revealObserver.observe(el);
  });

  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting || entry.target.dataset.done) return;
      entry.target.dataset.done = 'true';
      const target = Number(entry.target.dataset.count);
      if (reducedMotion) { entry.target.textContent = target; return; }
      const start = performance.now();
      const duration = 1100;
      const update = (now) => {
        const amount = Math.min(1, (now - start) / duration);
        entry.target.textContent = Math.round(target * (1 - Math.pow(1 - amount, 3)));
        if (amount < 1) requestAnimationFrame(update);
      };
      requestAnimationFrame(update);
      counterObserver.unobserve(entry.target);
    });
  }, { threshold: .7 });
  document.querySelectorAll('[data-count]').forEach((el) => counterObserver.observe(el));

  const sections = [...document.querySelectorAll('main section[id]')];
  const navLinks = [...nav.querySelectorAll('a[href^="#"]')];
  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      navLinks.forEach((link) => link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`));
    });
  }, { rootMargin: '-35% 0px -55% 0px' });
  sections.forEach((section) => sectionObserver.observe(section));

  const sectionMotionObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => entry.target.classList.toggle('section-active', entry.isIntersecting));
  }, { threshold: .18 });
  sections.forEach((section) => sectionMotionObserver.observe(section));

  if (!reducedMotion && matchMedia('(pointer:fine)').matches) {
    const glow = document.querySelector('.cursor-glow');
    const hero = document.querySelector('.hero');
    const parallaxItems = document.querySelectorAll('.parallax');
    window.addEventListener('pointermove', (event) => {
      glow.style.transform = `translate(${event.clientX - 240}px, ${event.clientY - 240}px)`;
      root.style.setProperty('--mx', `${event.clientX}px`);
      root.style.setProperty('--my', `${event.clientY}px`);
      root.style.setProperty('--cursor-x', `${event.clientX}px`);
      root.style.setProperty('--cursor-y', `${event.clientY}px`);
      const rect = hero.getBoundingClientRect();
      const px = (event.clientX - rect.left) / rect.width - .5;
      const py = (event.clientY - rect.top) / rect.height - .5;
      parallaxItems.forEach((item) => {
        const depth = Number(item.dataset.depth || 10);
        item.style.translate = `${px * depth}px ${py * depth}px`;
      });
    });

    document.querySelectorAll('[data-tilt]').forEach((card) => {
      card.addEventListener('pointermove', (event) => {
        const rect = card.getBoundingClientRect();
        const rx = ((event.clientY - rect.top) / rect.height - .5) * -6;
        const ry = ((event.clientX - rect.left) / rect.width - .5) * 6;
        card.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-3px)`;
      });
      card.addEventListener('pointerleave', () => { card.style.transform = ''; });
    });

    document.querySelectorAll('.magnetic').forEach((button) => {
      button.addEventListener('pointermove', (event) => {
        const rect = button.getBoundingClientRect();
        button.style.translate = `${(event.clientX - rect.left - rect.width / 2) * .13}px ${(event.clientY - rect.top - rect.height / 2) * .13}px`;
      });
      button.addEventListener('pointerleave', () => { button.style.translate = ''; });
    });

    const canvas = document.getElementById('mouse-network');
    const context = canvas?.getContext('2d');
    if (context) {
      let width = 0;
      let height = 0;
      let ratio = 1;
      let pointerX = window.innerWidth / 2;
      let pointerY = window.innerHeight / 2;
      let targetX = pointerX;
      let targetY = pointerY;
      const resizeNetwork = () => {
        ratio = Math.min(window.devicePixelRatio || 1, 2);
        width = window.innerWidth;
        height = window.innerHeight;
        canvas.width = width * ratio;
        canvas.height = height * ratio;
        context.setTransform(ratio, 0, 0, ratio, 0, 0);
      };
      resizeNetwork();
      window.addEventListener('resize', resizeNetwork, { passive: true });
      window.addEventListener('pointermove', (event) => {
        targetX = event.clientX;
        targetY = event.clientY;
      }, { passive: true });
      const drawNetwork = () => {
        pointerX += (targetX - pointerX) * .12;
        pointerY += (targetY - pointerY) * .12;
        context.clearRect(0, 0, width, height);
        const gap = 68;
        const radius = 215;
        for (let x = gap / 2; x < width; x += gap) {
          for (let y = gap / 2; y < height; y += gap) {
            const distance = Math.hypot(x - pointerX, y - pointerY);
            if (distance > radius) continue;
            const strength = 1 - distance / radius;
            const bendX = x + (pointerX - x) * strength * .12;
            const bendY = y + (pointerY - y) * strength * .12;
            context.beginPath();
            context.moveTo(pointerX, pointerY);
            context.lineTo(bendX, bendY);
            context.strokeStyle = `rgba(7,95,216,${strength * .19})`;
            context.lineWidth = .6;
            context.stroke();
            context.beginPath();
            context.arc(bendX, bendY, 1.25 + strength * 1.7, 0, Math.PI * 2);
            context.fillStyle = `rgba(0,174,239,${.18 + strength * .56})`;
            context.fill();
          }
        }
        requestAnimationFrame(drawNetwork);
      };
      requestAnimationFrame(drawNetwork);
    }
  }

  const workViewport = document.querySelector('.work-viewport');
  const previousWork = document.querySelector('.work-prev');
  const nextWork = document.querySelector('.work-next');
  if (workViewport && previousWork && nextWork) {
    const updateWorkControls = () => {
      previousWork.disabled = workViewport.scrollLeft < 8;
      nextWork.disabled = workViewport.scrollLeft + workViewport.clientWidth >= workViewport.scrollWidth - 8;
    };
    const moveWork = (direction) => workViewport.scrollBy({ left: direction * workViewport.clientWidth * .78, behavior: reducedMotion ? 'auto' : 'smooth' });
    previousWork.addEventListener('click', () => moveWork(-1));
    nextWork.addEventListener('click', () => moveWork(1));
    workViewport.addEventListener('scroll', updateWorkControls, { passive: true });
    window.addEventListener('resize', updateWorkControls, { passive: true });
    updateWorkControls();
    if (!reducedMotion) {
      let sliderTimer;
      const startSlider = () => {
        clearInterval(sliderTimer);
        sliderTimer = setInterval(() => {
          const atEnd = workViewport.scrollLeft + workViewport.clientWidth >= workViewport.scrollWidth - 12;
          workViewport.scrollTo({ left: atEnd ? 0 : workViewport.scrollLeft + workViewport.clientWidth * .78, behavior: 'smooth' });
        }, 5500);
      };
      const stopSlider = () => clearInterval(sliderTimer);
      workViewport.addEventListener('mouseenter', stopSlider);
      workViewport.addEventListener('mouseleave', startSlider);
      workViewport.addEventListener('focusin', stopSlider);
      workViewport.addEventListener('focusout', startSlider);
      startSlider();
    }
  }

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    toast.classList.add('show');
    form.reset();
    setTimeout(() => toast.classList.remove('show'), 3600);
  });

  document.querySelectorAll('.faq-list details').forEach((item) => {
    item.addEventListener('toggle', () => {
      if (!item.open) return;
      document.querySelectorAll('.faq-list details').forEach((other) => {
        if (other !== item) other.open = false;
      });
    });
  });

  document.getElementById('year').textContent = new Date().getFullYear();
})();
