import { useEffect, useState } from 'react';
import WhatsAppIcon from './WhatsAppIcon.jsx';
import { waLink } from '../data/contacts.js';
import { useLang } from '../i18n/context.js';

/**
 * Tombol WhatsApp melayang (kanan bawah) — muncul setelah halaman digulir
 * sedikit, tenggelam saat modal portofolio terbuka (modal z-[90] > z-40).
 */
export default function FloatingWa() {
  const { t } = useLang();
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 150);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <a
      href={waLink(t.nav.waCta)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t.nav.waFloat}
      title={t.nav.waFloat}
      className={`group fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_14px_30px_-10px_rgba(37,211,102,0.65)] transition duration-300 hover:scale-105 active:scale-95 ${
        show
          ? 'translate-y-0 opacity-100'
          : 'pointer-events-none translate-y-4 opacity-0'
      }`}
    >
      {/* Cincin pulse halus */}
      <span
        className="absolute inset-0 animate-ping rounded-full bg-[#25D366]/30 motion-reduce:animate-none [animation-duration:2.8s]"
        aria-hidden="true"
      />
      <WhatsAppIcon className="h-7 w-7" aria-hidden="true" />

      {/* Tooltip kecil (desktop) */}
      <span className="absolute right-full mr-3 hidden -translate-x-1 whitespace-nowrap rounded-full bg-ink px-3 py-1.5 text-xs font-semibold text-white opacity-0 shadow-card transition duration-200 group-hover:translate-x-0 group-hover:opacity-100 md:block dark:bg-white dark:text-forest-900">
        {t.nav.waFloat}
      </span>
    </a>
  );
}
