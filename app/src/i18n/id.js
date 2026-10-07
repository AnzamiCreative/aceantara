/** Kamus bahasa Indonesia — semua teks tampilan ada di sini. */
export default {
  meta: {
    title: 'ACEANTARA — Studio Digital: Website, Game Unity & UI/UX',
    description:
      'ACEANTARA adalah studio digital yang membantu UMKM, personal brand, mahasiswa, dan bisnis kecil mewujudkan website, game Unity 2D & AR, dan desain UI/UX.',
  },

  nav: {
    aria: 'Navigasi utama',
    openMenu: 'Buka menu navigasi',
    closeMenu: 'Tutup menu navigasi',
    langLabel: 'Pilih bahasa',
    themeLabel: 'Ganti tema terang / gelap',
    themeLight: 'Mode terang',
    themeDark: 'Mode gelap',
    cta: 'Konsultasi Gratis',
    waCta: 'Halo Aceantara, saya ingin konsultasi gratis.',
    waFloat: 'Chat via WhatsApp',
    links: [
      { label: 'Tentang', href: '#tentang' },
      { label: 'Layanan', href: '#layanan' },
      { label: 'Portofolio', href: '#portofolio' },
      { label: 'Proses', href: '#proses' },
      { label: 'Kontak', href: '#kontak' },
    ],
  },

  hero: {
    badge: 'Studio Digital · Website · Game · UI/UX',
    titleLines: ['Wujudkan {Website},', '{Game}, dan {Desain}', '{Aplikasi} Impianmu'],
    paragraph:
      'Ide atau tugasnya tinggal serahkan — kami yang kerjakan sampai jadi, hasilnya rapi dan disesuaikan kebutuhanmu.',
    ctaPrimary: 'Konsultasi Gratis',
    waPrimary: 'Halo Aceantara, saya ingin konsultasi gratis.',
    ctaSecondary: 'Lihat Portfolio',
    url: 'aceantara.com/proyek-kamu',
    code: "const aceantara = { layanan: ['Website', 'Game', 'UI/UX'],\nestimasi: 'sesuai kebutuhan', konsultasi: 'gratis' };",
    cards: [
      { title: 'Landing Page', subtitle: '1 halaman · responsif' },
      { title: 'Game Unity 2D', subtitle: 'APK · WebGL' },
      { title: 'UI/UX Design', subtitle: 'FIGMA · PROTOTYPE' },
    ],
  },

  /* ==== Section Tentang Kami (di antara Hero & Layanan) ==== */
  tentang: {
    // GANTI DENGAN TEKS ASLI
    label: 'Tentang Kami',
    titleLines: ['Studio digital untuk', '{website, game}, dan {desain}'],
    // GANTI DENGAN TEKS ASLI
    intro:
      'Kami bukan agensi besar — hanya tim kecil yang bantu mewujudkan website, game Unity 2D & AR, dan desain UI/UX. Cukup ceritakan maunya seperti apa, sisanya kami kerjakan.',
    tabsLabel: 'Bagian tentang kami',
    tabs: [
      { id: 'cerita', label: 'Cerita' },
      { id: 'visi', label: 'Visi' },
      { id: 'misi', label: 'Misi' },
    ],
    panels: {
      // GANTI DENGAN TEKS ASLI
      cerita:
        'Aceantara berawal dari kebiasaan bantu orang sekitar mengerjakan kebutuhan digitalnya — halaman web untuk usaha kecil, game untuk tugas kuliah, sampai desain aplikasi. Karena sering diminta bantuan, akhirnya kami fokuskan jadi tiga layanan yang kami kerjakan sendiri dari awal sampai jadi.',
      // GANTI DENGAN TEKS ASLI
      visi:
        'Menjadi andalan saat ada yang harus dikerjakan cepat dan rapi: komunikasi jelas, hasil sesuai permintaan, dan kamu tidak perlu pusing soal teknisnya.',
      // GANTI DENGAN TEKS ASLI
      misi:
        'Menerjemahkan permintaan jadi hasil jadi — website yang siap dipakai, game yang bisa langsung dimainkan, dan desain yang tinggal diteruskan ke developer.',
    },
    chips: ['Clean Code', 'Fast Delivery'],
  },

  layanan: {
    label: '01 — Layanan Kami',
    title: '{Tiga layanan} untuk kebutuhan digitalmu',
    subtitle:
      'Tinggal pilih mau yang mana — bisa satu, bisa digabung, dan boleh diskusi dulu sebelum mulai.',
    items: {
      website: {
        title: 'Website',
        description:
          'Landing page, company profile, sampai website custom untuk UMKM dan personal branding.',
      },
      game: {
        title: 'Game Unity 2D & AR',
        description:
          'Game casual, platformer, edukasi, hingga augmented reality (AR) interaktif.',
      },
      uiux: {
        title: 'UI/UX Design',
        description:
          'Desain aplikasi mobile, website, dan dashboard yang rapi dan siap dikembangkan.',
      },
    },
  },

  portofolio: {
    label: '02 — Portofolio',
    title: 'Contoh proyek yang {bisa kami buat}',
    subtitle:
      'Saring berdasarkan kategori, lalu buka detail proyek untuk melihat video, fitur, dan tautannya.',
    tabsLabel: 'Filter proyek',
    tabs: [
      { id: 'all', label: 'Semua' },
      { id: 'website', label: 'Website' },
      { id: 'game', label: 'Game' },
      { id: 'uiux', label: 'UI/UX' },
    ],
    categories: {
      website: 'Website',
      game: 'Game Unity 2D',
      uiux: 'UI/UX Design',
    },
    featuredBadge: 'Proyek Utama',
    buildLabel: 'Yang kami bangun',
    detailBtn: 'Lihat Detail',
    previewLabel: 'Pratinjau {name}',
    playLabel: 'Putar video {name}',
    empty: 'Belum ada proyek pada kategori ini.',
    note: 'Semua proyek di atas adalah ilustrasi, bukan klien nyata.',
    modal: {
      close: 'Tutup detail proyek',
      videoPending: 'Video segera hadir',
      videoNote: 'Video promosi/deploy akan ditambahkan di sini.',
      aboutLabel: 'Tentang proyek',
      featuresLabel: 'Fitur',
      techLabel: 'Teknologi',
      linkPending: 'Link menyusul',
      actions: {
        website: 'Kunjungi Website',
        play: 'Mainkan Game (WebGL)',
        download: 'Unduh APK',
        figma: 'Lihat Desain di Figma',
      },
    },
  },

  proses: {
    label: '03 — Proses',
    title: 'Empat langkah dari {ide jadi karya}',
    subtitle:
      'Prosesnya sederhana dan transparan, jadi kamu tahu persis ada di tahap mana.',
    steps: [
      {
        title: 'Konsultasi',
        description:
          'Ceritakan kebutuhanmu lewat WhatsApp, gratis dan tanpa kewajiban lanjut.',
      },
      {
        title: 'Rencana Kerja',
        description:
          'Dari hasil obrolan, kita sepakati isi proyek, biaya, dan jadwalnya.',
      },
      {
        title: 'Pengerjaan',
        description:
          'Dikerjakan sesuai kesepakatan awal, dan kami kabari progresnya berkala.',
      },
      {
        title: 'Serah Terima',
        description:
          'File final dan aksesnya kami serahkan setelah proyek selesai.',
      },
    ],
  },

  kontak: {
    label: '04 — Kontak',
    title: 'Ceritakan idemu, {kami bantu wujudkan}',
    subtitle:
      'Konsultasi dulu, gratis dan tanpa kewajiban lanjut — lewat WhatsApp paling nyaman.',
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
    socialPlaceholder: 'URL belum diisi',
    ariaCopy: 'Buka {label}',
    form: {
      label: 'Kirim Pesan',
      title: 'Tinggalkan pesanmu',
      text: 'Isi form ini, lalu pesan akan terbuka di WhatsApp tinggal kamu tekan kirim.',
      name: 'Nama kamu',
      namePlaceholder: 'Contoh: Rina',
      email: 'Email',
      emailPlaceholder: 'nama@email.com',
      message: 'Pesan',
      messagePlaceholder:
        'Contoh: butuh company profile untuk kedai kopi, sekitar 5 halaman...',
      submit: 'Kirim Pesan',
      waTemplate: 'Halo Aceantara, saya {name}.\nEmail: {email}\n\n{message}',
      viaWa: 'Dikirim lewat WhatsApp — pesan sudah terisi otomatis.',
      hint: 'WhatsApp sedang dibuka di tab baru. Kalau tidak muncul, chat saja langsung ke nomor di kolom sebelah.',
      errors: {
        name: 'Nama masih kosong, isi dulu ya.',
        emailRequired: 'Email wajib diisi supaya kami bisa membalas.',
        emailFormat: 'Format email belum benar.',
        message: 'Tulis dulu pesanmu.',
      },
    },
  },

  footer: {
    aria: 'Navigasi footer',
    // GANTI DENGAN TEKS ASLI
    tagline:
      'Jasa pembuatan website, game Unity 2D & AR, dan desain UI/UX — tinggal bilang, kami yang kerjakan.',
    navHeading: 'Navigasi',
    contactHeading: 'Kontak',
    locationLabel: 'Lokasi',
    locationValue: 'Indonesia',
    hoursLabel: 'Jam Kerja',
    hoursValue: 'Chat boleh dikirim kapan saja, kami balas pada jam kerja berikutnya',
    socialHeading: 'Ikuti Kami',
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
      // GANTI DENGAN URL ASLI (null = ikon tampil sebagai placeholder)
      { id: 'github', label: 'GitHub', url: null },
      { id: 'linkedin', label: 'LinkedIn', url: null },
    ],
    socialPlaceholder: 'URL belum diisi',
    copyright: '© 2026 Aceantara. All rights reserved.',
    madeIn: 'Dibuat dengan teliti di Indonesia',
  },
};
