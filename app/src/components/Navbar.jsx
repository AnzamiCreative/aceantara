import { useEffect, useState } from 'react';
import { Menu, Moon, Sun, X } from 'lucide-react';
import Logo from './Logo.jsx';
import WaButton from './WaButton.jsx';
import { useLang } from '../i18n/context.js';
import { useTheme } from '../theme/context.js';

/** Toggle bahasa ID | EN (pill kecil, menyesuaikan gaya navbar). */
function LangToggle({ className = '' }) {
  const { lang, setLang, t } = useLang();

  return (
    <div
      role="group"
      aria-label={t.nav.langLabel}
      className={`flex items-center rounded-full border border-line bg-white p-1 dark:border-white/10 dark:bg-white/5 ${className}`}
    >
      {['id', 'en'].map((code) => (
        <button
          key={code}
          type="button"
          onClick={() => setLang(code)}
          aria-pressed={lang === code}
          className={`rounded-full px-2.5 py-1 text-[0.625rem] font-bold uppercase tracking-[0.08em] transition ${
            lang === code
              ? 'bg-forest-700 text-white dark:bg-mint-200 dark:text-forest-900'
              : 'text-muted hover:text-forest-700 dark:text-white/70 dark:hover:text-mint-200'
          }`}
        >
          {code}
        </button>
      ))}
    </div>
  );
}

/** Toggle tema terang / gelap (icon bulan saat terang, matahari saat gelap). */
function ThemeToggle({ className = '' }) {
  const { theme, setTheme } = useTheme();
  const { t } = useLang();
  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      aria-label={t.nav.themeLabel}
      title={isDark ? t.nav.themeLight : t.nav.themeDark}
      className={`flex h-9 w-9 items-center justify-center rounded-full border border-line bg-white text-forest-700 transition hover:border-forest-600 dark:border-white/10 dark:bg-white/5 dark:text-mint-200 dark:hover:border-mint-200 ${className}`}
    >
      {isDark ? (
        <Sun className="h-4 w-4" aria-hidden="true" />
      ) : (
        <Moon className="h-4 w-4" aria-hidden="true" />
      )}
    </button>
  );
}

/** Navbar sticky berbentuk floating pill (jarak 1rem dari atas & samping). */
export default function Navbar() {
  const { t } = useLang();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('');
  const navLinks = t.nav.links;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* Scroll-spy: tandai menu yang sedang aktif saat section lewat tengah layar */
  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') return undefined;

    const els = ['hero', ...navLinks.map((link) => link.href.slice(1))]
      .map((id) => document.getElementById(id))
      .filter(Boolean);
    if (els.length === 0) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
      {/* ===== Container pill: glassmorphism hijau primary ===== */}
      <nav
        aria-label={t.nav.aria}
        className={`mx-auto flex h-16 w-full max-w-[1200px] items-center justify-between rounded-full border border-white/70 px-5 backdrop-blur-2xl backdrop-saturate-150 transition-all duration-300 dark:border-white/10 md:px-7 ${
          scrolled
            ? 'bg-white/80 shadow-[0_0.875rem_3rem_rgba(31,92,58,0.16)] dark:bg-[#16301F]/85 dark:shadow-[0_0.875rem_3rem_rgba(0,0,0,0.5)]'
            : 'bg-mint-50/65 shadow-[0_0.625rem_2.5rem_rgba(31,92,58,0.12)] dark:bg-[#132019]/75 dark:shadow-[0_0.625rem_2.5rem_rgba(0,0,0,0.45)]'
        }`}
      >
        {/* Logo — link ke atas halaman */}
        <a href="#home" className="flex items-center gap-2.5">
          <Logo />
          <span className="text-[0.9375rem] font-extrabold tracking-[0.18em]">
            <span className="text-ink dark:text-white">ACE</span>
            <span className="text-forest-600 dark:text-mint-200">ANTARA</span>
          </span>
        </a>

        {/* Menu tengah (desktop) — muncul mulai lg biar muat semua menu */}
        <ul className="hidden items-center gap-5 lg:flex xl:gap-7">
          {navLinks.map((link) => {
            const isActive = active === link.href.slice(1);
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  aria-current={isActive ? 'true' : undefined}
                  className={`rounded-full px-4 py-2 text-[0.875rem] font-medium transition xl:text-[0.9375rem] ${
                    isActive
                      ? 'bg-mint-200/80 text-forest-700 dark:bg-mint-200/10 dark:text-mint-200'
                      : 'text-muted hover:text-forest-700 dark:text-white/70 dark:hover:text-mint-200'
                  }`}
                >
                  {link.label}
                </a>
              </li>
            );
          })}
        </ul>

        {/* Toggle bahasa + tema + CTA (desktop) */}
        <div className="hidden items-center gap-3 lg:flex">
          <LangToggle />
          <ThemeToggle />
          <WaButton text={t.nav.waCta}>{t.nav.cta}</WaButton>
        </div>

        {/* Hamburger (mobile) */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="menu-mobile"
          aria-label={open ? t.nav.closeMenu : t.nav.openMenu}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-line bg-white text-ink transition hover:border-forest-600 hover:text-forest-700 dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:border-mint-200 dark:hover:text-mint-200 lg:hidden"
        >
          {open ? (
            <X className="h-5 w-5" aria-hidden="true" />
          ) : (
            <Menu className="h-5 w-5" aria-hidden="true" />
          )}
        </button>
      </nav>

      {/* ===== Menu mobile: turun penuh lebar ===== */}
      {open ? (
        <div
          id="menu-mobile"
          className="mx-auto mt-2 max-w-[1200px] rounded-[1.625rem] border border-white/70 bg-mint-50/85 p-2 shadow-[0_0.625rem_2.5rem_rgba(31,92,58,0.12)] backdrop-blur-2xl backdrop-saturate-150 dark:border-white/10 dark:bg-[#132019]/92 dark:shadow-[0_0.625rem_2.5rem_rgba(0,0,0,0.5)] lg:hidden"
        >
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => {
              const isActive = active === link.href.slice(1);
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`rounded-xl px-3 py-3 text-[0.9375rem] font-medium transition dark:hover:bg-white/10 ${
                    isActive
                      ? 'bg-mint-200/80 text-forest-700 dark:bg-mint-200/10 dark:text-mint-200'
                      : 'text-ink hover:bg-mint-200/50 dark:text-white'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
            <div className="mt-3 flex items-center gap-2 self-start">
              <LangToggle />
              <ThemeToggle />
            </div>
            <WaButton text={t.nav.waCta} className="mt-3 w-full">
              {t.nav.cta}
            </WaButton>
          </div>
        </div>
      ) : null}
    </header>
  );
}
