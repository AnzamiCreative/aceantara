/** English dictionary — all visible copy lives here. */
export default {
  meta: {
    title: 'ACEANTARA — Digital Studio: Website, Unity Games & UI/UX',
    description:
      'ACEANTARA is a digital studio helping small businesses, personal brands, students, and startups build websites, Unity 2D & AR games, and UI/UX design.',
  },

  nav: {
    aria: 'Main navigation',
    openMenu: 'Open navigation menu',
    closeMenu: 'Close navigation menu',
    langLabel: 'Choose language',
    themeLabel: 'Toggle light / dark theme',
    themeLight: 'Light mode',
    themeDark: 'Dark mode',
    cta: 'Free Consultation',
    waCta: 'Hi Aceantara, I would like a free consultation.',
    links: [
      { label: 'About', href: '#tentang' },
      { label: 'Services', href: '#layanan' },
      { label: 'Portfolio', href: '#portofolio' },
      { label: 'Process', href: '#proses' },
      { label: 'Contact', href: '#kontak' },
    ],
  },

  hero: {
    badge: 'Digital Studio · Website · Game · UI/UX',
    titleLines: ['Create your {Website},', '{Game}, and {Design}', '{App} of Your Dreams'],
    paragraph:
      'Hand us your idea or assignment — we do the work until it is ready, tailored to your needs.',
    ctaPrimary: 'Free Consultation',
    waPrimary: 'Hi Aceantara, I would like a free consultation.',
    ctaSecondary: 'View Portfolio',
    url: 'aceantara.com/your-project',
    code: "const aceantara = { services: ['Website', 'Game', 'UI/UX'],\nestimate: 'tailored', consultation: 'free' };",
    cards: [
      { title: 'Landing Page', subtitle: '1 page · responsive' },
      { title: 'Unity 2D Game', subtitle: 'APK · WebGL' },
      { title: 'UI/UX Design', subtitle: 'FIGMA · PROTOTYPE' },
    ],
  },

  /* ==== About Us section (between Hero & Layanan) ==== */
  tentang: {
    // GANTI DENGAN TEKS ASLI
    label: 'About Us',
    titleLines: ['A digital studio for', '{websites, games}, and {design}'],
    // GANTI DENGAN TEKS ASLI
    intro:
      'We are not a big agency — just a small team helping with websites, Unity 2D & AR games, and UI/UX design. Tell us what you want, and we take care of the rest.',
    tabsLabel: 'About us sections',
    tabs: [
      { id: 'cerita', label: 'Story' },
      { id: 'visi', label: 'Vision' },
      { id: 'misi', label: 'Mission' },
    ],
    panels: {
      // GANTI DENGAN TEKS ASLI
      cerita:
        'Aceantara began from a habit of helping people around us with their digital needs — web pages for small businesses, games for class assignments, to app designs. Being asked for help so often, we narrowed it into three services we handle ourselves from start to finish.',
      // GANTI DENGAN TEKS ASLI
      visi:
        'To be the go-to choice when something needs to be done quickly and neatly: clear communication, results as requested, and no headaches about the technical side.',
      // GANTI DENGAN TEKS ASLI
      misi:
        'Turning requests into finished results — websites ready to use, games ready to play, and designs ready to hand over to developers.',
    },
    chips: ['Clean Code', 'Fast Delivery'],
  },

  layanan: {
    label: '01 — Our Services',
    title: '{Three services} for your digital needs',
    subtitle:
      'Pick what you need — one service or a combination, and we can discuss it first before starting.',
    items: {
      website: {
        title: 'Website',
        description:
          'Landing pages, company profiles, to custom websites for small businesses and personal branding.',
      },
      game: {
        title: 'Unity 2D & AR Games',
        description:
          'Casual, platformer, and educational games, to interactive augmented reality (AR).',
      },
      uiux: {
        title: 'UI/UX Design',
        description:
          'Mobile app, website, and dashboard designs that are tidy and ready to be developed.',
      },
    },
  },

  portofolio: {
    label: '02 — Portfolio',
    title: 'Example projects we {can build}',
    subtitle:
      'Filter by category, then open a project detail to see the video, features, and links.',
    tabsLabel: 'Filter projects',
    tabs: [
      { id: 'all', label: 'All' },
      { id: 'website', label: 'Website' },
      { id: 'game', label: 'Game' },
      { id: 'uiux', label: 'UI/UX' },
    ],
    categories: {
      website: 'Website',
      game: 'Unity 2D Game',
      uiux: 'UI/UX Design',
    },
    featuredBadge: 'Featured Project',
    buildLabel: 'What we built',
    detailBtn: 'View Details',
    previewLabel: 'Preview of {name}',
    playLabel: 'Play video of {name}',
    empty: 'No projects in this category yet.',
    note: 'All projects above are illustrations, not real clients.',
    modal: {
      close: 'Close project details',
      videoPending: 'Video coming soon',
      videoNote: 'The promo/deploy video will be added here.',
      aboutLabel: 'About this project',
      featuresLabel: 'Features',
      techLabel: 'Technology',
      linkPending: 'Link coming soon',
      actions: {
        website: 'Visit Website',
        play: 'Play Game (WebGL)',
        download: 'Download APK',
        figma: 'View Design in Figma',
      },
    },
  },

  proses: {
    label: '03 — Process',
    title: 'Four steps from {idea to reality}',
    subtitle:
      'The process is simple and transparent, so you always know which stage we are at.',
    steps: [
      {
        title: 'Consultation',
        description:
          'Tell us what you need via WhatsApp — free, with no obligation.',
      },
      {
        title: 'Design',
        description:
          'We draft the layout and flow first for you to review.',
      },
      {
        title: 'Development',
        description:
          'Built as agreed from the start, with progress updates along the way.',
      },
      {
        title: 'Handover',
        description:
          'We deliver the final files and access once the project is complete.',
      },
    ],
  },

  kontak: {
    label: '04 — Contact',
    title: 'Tell us your idea, {we’ll help make it happen}',
    subtitle:
      'Free consultation with no obligation to continue — WhatsApp is the easiest way to reach us.',
    info: {
      whatsapp: 'WhatsApp',
      email: 'Email',
    },
    socials: [
      {
        id: 'instagram',
        label: 'Instagram',
        handle: '@aceantara_software',
        url: 'https://www.instagram.com/aceantara_software',
      },
      {
        id: 'tiktok',
        label: 'TikTok',
        handle: '@aceantara_software',
        url: 'https://www.tiktok.com/@aceantara_software',
      },
    ],
    socialPlaceholder: 'URL not set yet',
    ariaCopy: 'Open {label}',
    form: {
      label: 'Send Message',
      title: 'Leave us a message',
      text: 'Fill in this form, then the message opens in WhatsApp — just press send.',
      name: 'Your name',
      namePlaceholder: 'e.g. Rina',
      email: 'Email',
      emailPlaceholder: 'name@email.com',
      message: 'Message',
      messagePlaceholder:
        'e.g. we need a company profile for a coffee shop, around 5 pages...',
      submit: 'Send Message',
      waTemplate: 'Hi Aceantara, I am {name}.\nEmail: {email}\n\n{message}',
      viaWa: 'Sent via WhatsApp — the message is prefilled.',
      hint: 'WhatsApp is opening in a new tab. If nothing appears, just chat to the number in the column next to this form.',
      errors: {
        name: 'Your name is empty, please fill it in.',
        emailRequired: 'Email is required so we can reply.',
        emailFormat: 'The email format is not correct.',
        message: 'Please write your message first.',
      },
    },
  },

  footer: {
    aria: 'Footer navigation',
    // GANTI DENGAN TEKS ASLI
    tagline:
      'We build websites, Unity 2D & AR games, and UI/UX design — tell us what you need, we do the work.',
    navHeading: 'Navigate',
    contactHeading: 'Contact',
    locationLabel: 'Location',
    locationValue: 'Indonesia',
    hoursLabel: 'Working Hours',
    hoursValue: 'Messages can be sent anytime — we reply during working hours',
    socialHeading: 'Follow Us',
    socials: [
      {
        id: 'instagram',
        label: 'Instagram',
        url: 'https://www.instagram.com/aceantara_software',
      },
      {
        id: 'tiktok',
        label: 'TikTok',
        url: 'https://www.tiktok.com/@aceantara_software',
      },
      // GANTI DENGAN URL ASLI (null = icon shown as placeholder)
      { id: 'github', label: 'GitHub', url: null },
      { id: 'linkedin', label: 'LinkedIn', url: null },
    ],
    socialPlaceholder: 'URL not set yet',
    copyright: '© 2026 Aceantara. All rights reserved.',
    madeIn: 'Built with care in Indonesia',
  },
};
