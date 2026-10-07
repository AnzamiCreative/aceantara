/**
 * Data proyek untuk section Portofolio — SATU array, teks per bahasa (id/en).
 *
 * Struktur: 3 kategori (website/game/uiux), tiap kategori punya 3 proyek
 * dengan tepat SATU `featured: true` (proyek utama, tampil kartu besar).
 * Tab "Semua" menampilkan semua proyek tanpa highlight proyek utama.
 *
 * Semua isi di sini adalah placeholder/contoh, bukan klien nyata.
 * Ganti dengan data asli saat sudah ada:
 *   videoUrl   — file video lokal, contoh: '/videos/nama-proyek.mp4'
 *   posterUrl  — gambar poster video, contoh: '/videos/nama-poster.jpg'
 *   youtubeUrl — alternatif embed YouTube (dipakai kalau videoUrl kosong)
 *   linkUrl    — tautan aksi utama (website / play WebGL / Figma)
 *   downloadUrl— hanya untuk game (APK)
 *   linkType   — 'website' | 'game' | 'figma' (menentukan tombol aksi)
 *
 * Selama URL masih null: video tampil placeholder "Video segera hadir",
 * tombol aksi tampil nonaktif dengan catatan "link menyusul".
 */

export const projects = [
  /* ============================ WEBSITE ============================ */
  {
    key: 'website-kedai-kopi',
    category: 'website',
    featured: true,
    tech: ['HTML', 'CSS', 'JavaScript', 'Responsive'],
    videoUrl: null,
    posterUrl: null,
    youtubeUrl: null,
    linkUrl: null,
    downloadUrl: null,
    linkType: 'website',
    copy: {
      id: {
        name: 'Company Profile — Kedai Kopi Lokal',
        short:
          'Website profil bisnis UMKM dengan galeri menu dan tombol pesan WhatsApp.',
        description:
          'Website company profile untuk kedai kopi: profil bisnis, galeri menu, lokasi, dan pintu masuk chat WhatsApp. Contoh ilustrasi untuk menunjukkan bentuk hasil kerja, bukan klien nyata.',
        highlights: [
          'Halaman profil bisnis dengan galeri menu',
          'Tombol pesan WhatsApp di tiap halaman',
          'Tampilan responsif untuk HP dan laptop',
        ],
        features: [
          'Halaman beranda, profil, galeri menu, dan kontak',
          'Galeri menu yang mudah diperbarui sendiri',
          'Tombol chat WhatsApp di setiap halaman',
          'Tampilan responsif untuk HP dan laptop',
        ],
      },
      en: {
        name: 'Company Profile — Local Coffee Shop',
        short:
          'A small-business profile website with a menu gallery and a WhatsApp message button.',
        description:
          'A company profile website for a coffee shop: business profile, menu gallery, location, and a WhatsApp chat entry point. An illustrative example of our work, not a real client.',
        highlights: [
          'Business profile page with a menu gallery',
          'WhatsApp message button on every page',
          'Responsive layout for phone and laptop',
        ],
        features: [
          'Home, profile, menu gallery, and contact pages',
          'Menu gallery the owner can update easily',
          'WhatsApp chat button on every page',
          'Responsive layout for phone and laptop',
        ],
      },
    },
  },
  {
    key: 'website-toko-fashion',
    category: 'website',
    featured: false,
    tech: ['HTML', 'CSS', 'JavaScript', 'WhatsApp'],
    videoUrl: null,
    posterUrl: null,
    youtubeUrl: null,
    linkUrl: null,
    downloadUrl: null,
    linkType: 'website',
    copy: {
      id: {
        name: 'Toko Online — Fashion Lokal',
        short:
          'Katalog produk online dengan pesan langsung ke WhatsApp saat checkout.',
        description:
          'Toko online sederhana untuk brand fashion kecil: katalog produk, filter ukuran dan warna, lalu pesan diteruskan ke WhatsApp penjual. Contoh ilustrasi, bukan klien nyata.',
        highlights: [],
        features: [
          'Katalog produk dengan foto dan harga',
          'Filter ukuran, warna, dan kategori',
          'Checkout diteruskan ke WhatsApp penjual',
          'Tampilan responsif untuk HP dan laptop',
        ],
      },
      en: {
        name: 'Online Store — Local Fashion',
        short:
          'A product catalog with direct-to-WhatsApp ordering at checkout.',
        description:
          'A simple online store for a small fashion brand: product catalog, size and color filters, with orders forwarded to the seller on WhatsApp. An illustrative example, not a real client.',
        highlights: [],
        features: [
          'Product catalog with photos and prices',
          'Size, color, and category filters',
          'Checkout forwarded to the seller via WhatsApp',
          'Responsive layout for phone and laptop',
        ],
      },
    },
  },
  {
    key: 'website-landing-event',
    category: 'website',
    featured: false,
    tech: ['React', 'Tailwind', 'Responsive'],
    videoUrl: null,
    posterUrl: null,
    youtubeUrl: null,
    linkUrl: null,
    downloadUrl: null,
    linkType: 'website',
    copy: {
      id: {
        name: 'Landing Page — Event Kampus',
        short:
          'Halaman acara satu halaman: jadwal, pembicara, dan form pendaftaran.',
        description:
          'Landing page event kampus satu halaman: rundown, daftar pembicara, galeri dokumentasi, dan form pendaftaran peserta. Contoh ilustrasi, bukan klien nyata.',
        highlights: [],
        features: [
          'Satu halaman dengan rundown acara',
          'Daftar pembicara dan galeri dokumentasi',
          'Form pendaftaran peserta',
          'Tampilan responsif untuk HP dan laptop',
        ],
      },
      en: {
        name: 'Landing Page — Campus Event',
        short:
          'A one-page event site with schedule, speakers, and a registration form.',
        description:
          'A one-page campus event landing page: schedule, speaker list, documentation gallery, and a participant registration form. An illustrative example, not a real client.',
        highlights: [],
        features: [
          'Single page with the event schedule',
          'Speaker list and documentation gallery',
          'Participant registration form',
          'Responsive layout for phone and laptop',
        ],
      },
    },
  },

  /* ============================= GAME ============================= */
  {
    key: 'game-kancil',
    category: 'game',
    featured: true,
    tech: ['Unity', 'C#', '2D', 'WebGL'],
    videoUrl: null,
    posterUrl: null,
    youtubeUrl: null,
    linkUrl: null,
    downloadUrl: null,
    linkType: 'game',
    copy: {
      id: {
        name: 'Game 2D — Petualangan Si Kancil',
        short:
          'Game platformer 2D edukasi bertema hutan dengan karakter kancil.',
        description:
          'Game platformer 2D bertema hutan dengan karakter kancil: lompat, rintangan, dan skor sederhana. Contoh ilustrasi, bukan proyek klien nyata.',
        highlights: [
          'Gameplay platformer 2D dengan karakter kancil',
          'Export WebGL untuk dimainkan langsung di browser',
          'Build Android (APK) siap pasang',
        ],
        features: [
          'Lompat, rintangan, dan skor sederhana',
          'Export WebGL untuk dimainkan langsung di browser',
          'Build Android (APK)',
          'Tema edukasi dengan suasana hutan',
        ],
      },
      en: {
        name: '2D Game — The Mouse Adventure',
        short:
          'An educational 2D platformer set in a forest, starring a mouse character.',
        description:
          'A forest-themed 2D platformer starring a mouse: jumping, obstacles, and a simple score. An illustrative example, not a real client project.',
        highlights: [
          '2D platformer gameplay with a mouse character',
          'WebGL export to play straight in the browser',
          'Android build (APK) ready to install',
        ],
        features: [
          'Jumping, obstacles, and a simple scoring system',
          'WebGL export to play straight in the browser',
          'Android build (APK)',
          'Educational forest theme',
        ],
      },
    },
  },
  {
    key: 'game-ar-kartu',
    category: 'game',
    featured: false,
    tech: ['Unity', 'AR Foundation', 'C#', 'Android'],
    videoUrl: null,
    posterUrl: null,
    youtubeUrl: null,
    linkUrl: null,
    downloadUrl: null,
    linkType: 'game',
    copy: {
      id: {
        name: 'Game AR — Kartu Hewan AR',
        short:
          'Kartu cetak yang hidup lewat kamera HP: model 3D hewan muncul di meja.',
        description:
          'Pengalaman AR berbasis kartu cetak: arahkan kamera HP ke kartu, lalu model hewan 3D muncul dan bisa diputar. Contoh ilustrasi, bukan klien nyata.',
        highlights: [],
        features: [
          'Deteksi kartu lewat kamera HP',
          'Model 3D muncul di permukaan meja',
          'Bisa diputar dan dilihat dari segala sisi',
          'Build Android (APK)',
        ],
      },
      en: {
        name: 'AR Game — Animal Cards AR',
        short:
          'Printed cards come alive through the phone camera: a 3D animal model appears on the table.',
        description:
          'A card-based AR experience: point the phone camera at a card and a 3D animal model appears and can be rotated. An illustrative example, not a real client.',
        highlights: [],
        features: [
          'Card detection through the phone camera',
          '3D model appears on the table surface',
          'Rotatable and viewable from any angle',
          'Android build (APK)',
        ],
      },
    },
  },
  {
    key: 'game-puzzle-kata',
    category: 'game',
    featured: false,
    tech: ['Unity', 'C#', '2D', 'WebGL'],
    videoUrl: null,
    posterUrl: null,
    youtubeUrl: null,
    linkUrl: null,
    downloadUrl: null,
    linkType: 'game',
    copy: {
      id: {
        name: 'Game Puzzle — Susun Kata',
        short:
          'Game santai menyusun kata berbahasa Indonesia untuk semua umur.',
        description:
          'Game puzzle santai menyusun kata berbahasa Indonesia: level bertambah, timer, dan skor. Contoh ilustrasi, bukan klien nyata.',
        highlights: [],
        features: [
          'Level bertambah tingkat kesulitannya',
          'Timer dan skor tiap ronde',
          'Kumpulan kata bahasa Indonesia',
          'Export WebGL untuk browser dan build Android',
        ],
      },
      en: {
        name: 'Puzzle Game — Word Scramble',
        short:
          'A casual Indonesian word-scrambling game for all ages.',
        description:
          'A casual puzzle game scrambling Indonesian words: increasing levels, a timer, and scoring. An illustrative example, not a real client.',
        highlights: [],
        features: [
          'Levels with increasing difficulty',
          'Timer and score for each round',
          'Indonesian word list',
          'WebGL export for browsers and an Android build',
        ],
      },
    },
  },

  /* ============================= UI/UX ============================= */
  {
    key: 'uiux-kas-umkm',
    category: 'uiux',
    featured: true,
    tech: ['Figma', 'Prototipe', 'Mobile'],
    videoUrl: null,
    posterUrl: null,
    youtubeUrl: null,
    linkUrl: null,
    downloadUrl: null,
    linkType: 'figma',
    copy: {
      id: {
        name: 'Mobile App — Aplikasi Kas UMKM',
        short:
          'Desain aplikasi pencatatan keuangan usaha kecil yang sederhana.',
        description:
          'Desain aplikasi mobile untuk pencatatan kas usaha kecil: alur catat, lihat ringkasan, dan cek saldo dalam beberapa ketukan. Contoh ilustrasi, bukan klien nyata.',
        highlights: [
          'Alur pencatatan kas dalam beberapa ketukan',
          'Ringkasan pemasukan dan pengeluaran',
          'Prototipe interaktif siap diuji',
        ],
        features: [
          'Alur pencatatan kas dalam beberapa ketukan',
          'Ringkasan pemasukan dan pengeluaran',
          'Komponen desain yang konsisten',
          'Prototipe interaktif untuk diuji sebelum development',
        ],
      },
      en: {
        name: 'Mobile App — Small Business Cash Book',
        short: 'A simple bookkeeping app design for small businesses.',
        description:
          'A mobile app design for small-business cash bookkeeping: record entries, view a summary, and check the balance in a few taps. An illustrative example, not a real client.',
        highlights: [
          'Cash entries in just a few taps',
          'Income and expense summary',
          'Interactive prototype ready to test',
        ],
        features: [
          'Cash entries in just a few taps',
          'Income and expense summary',
          'Consistent design components',
          'Interactive prototype to test before development',
        ],
      },
    },
  },
  {
    key: 'uiux-booking-klinik',
    category: 'uiux',
    featured: false,
    tech: ['Figma', 'Prototipe', 'Mobile'],
    videoUrl: null,
    posterUrl: null,
    youtubeUrl: null,
    linkUrl: null,
    downloadUrl: null,
    linkType: 'figma',
    copy: {
      id: {
        name: 'Mobile App — Booking Klinik',
        short:
          'Desain pilih dokter dan janji temu klinik dalam beberapa ketukan.',
        description:
          'Desain aplikasi mobile untuk booking klinik: pilih layanan, pilih dokter, pilih jadwal, lalu konfirmasi janji temu. Contoh ilustrasi, bukan klien nyata.',
        highlights: [],
        features: [
          'Pilihan layanan dan dokter',
          'Jadwal janji temu yang jelas',
          'Konfirmasi dan pengingat janji temu',
          'Prototipe interaktif siap diuji',
        ],
      },
      en: {
        name: 'Mobile App — Clinic Booking',
        short:
          'A design for choosing doctors and clinic appointments in a few taps.',
        description:
          'A mobile app design for clinic booking: pick a service, pick a doctor, pick a schedule, then confirm the appointment. An illustrative example, not a real client.',
        highlights: [],
        features: [
          'Service and doctor selection',
          'Clear appointment schedule',
          'Appointment confirmation and reminders',
          'Interactive prototype ready to test',
        ],
      },
    },
  },
  {
    key: 'uiux-dashboard-admin',
    category: 'uiux',
    featured: false,
    tech: ['Figma', 'Design System', 'Web'],
    videoUrl: null,
    posterUrl: null,
    youtubeUrl: null,
    linkUrl: null,
    downloadUrl: null,
    linkType: 'figma',
    copy: {
      id: {
        name: 'Web Dashboard — Panel Admin Toko',
        short:
          'Desain dashboard untuk memantau pesanan, stok, dan laporan penjualan.',
        description:
          'Desain dashboard web untuk admin toko: ringkasan pesanan, daftar stok, dan laporan penjualan dengan komponen yang konsisten. Contoh ilustrasi, bukan klien nyata.',
        highlights: [],
        features: [
          'Ringkasan pesanan dan penjualan',
          'Daftar stok produk',
          'Laporan penjualan sederhana',
          'Design system komponen yang konsisten',
        ],
      },
      en: {
        name: 'Web Dashboard — Store Admin Panel',
        short:
          'A dashboard design to track orders, stock, and sales reports.',
        description:
          'A web dashboard design for store admins: order summary, stock list, and sales reports with consistent components. An illustrative example, not a real client.',
        highlights: [],
        features: [
          'Order and sales summary',
          'Product stock list',
          'Simple sales reports',
          'Consistent component design system',
        ],
      },
    },
  },
];
