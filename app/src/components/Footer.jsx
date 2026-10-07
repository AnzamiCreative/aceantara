import { Github, Instagram, Linkedin } from 'lucide-react';
import Logo from './Logo.jsx';
import TikTokIcon from './TikTokIcon.jsx';
import { useLang } from '../i18n/context.js';
import { waLink } from '../data/contacts.js';

/** Ikon sosial (URL placeholder — isi di dict `footer.socials[].url`). */
const socialIcons = {
  instagram: Instagram,
  tiktok: TikTokIcon,
  github: Github,
  linkedin: Linkedin,
};

/** Footer 4 kolom: brand, navigasi, kontak, ikuti kami + baris copyright. */
export default function Footer() {
  const { t } = useLang();
  const f = t.footer;
  const navLinks = t.nav.links;

  const linkClass =
    'text-sm text-muted transition hover:text-forest-700 dark:text-white/70 dark:hover:text-mint-200';
  const socialClass =
    'flex h-10 w-10 items-center justify-center rounded-full border border-line bg-white text-forest-700 transition hover:border-forest-700 hover:bg-forest-700 hover:text-white dark:border-white/10 dark:bg-white/5 dark:text-mint-200 dark:hover:border-mint-200 dark:hover:bg-mint-200 dark:hover:text-forest-900';

  return (
    <footer className="border-t border-line bg-white dark:border-white/10 dark:bg-[#132019]">
      <div className="container-x py-12 md:py-14">
        {/* ===== Grid 4 kolom ===== */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* 1. Brand */}
          <div>
            <a href="#home" className="flex items-center gap-2.5">
              <Logo />
              <span className="text-[0.9375rem] font-extrabold tracking-[0.18em]">
                <span className="text-ink dark:text-white">ACE</span>
                <span className="text-forest-600 dark:text-mint-200">
                  ANTARA
                </span>
              </span>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-[1.7] text-muted dark:text-white/70">
              {f.tagline}
            </p>
          </div>

          {/* 2. Navigasi */}
          <nav aria-label={f.aria}>
            <p className="label-mono">{f.navHeading}</p>
            <ul className="mt-4 space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className={linkClass}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* 3. Kontak — pola seragam: label tebal + nilai tipis di tiap baris */}
          <div>
            <p className="label-mono">{f.contactHeading}</p>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <a href={waLink(t.nav.waCta)} target="_blank" rel="noopener noreferrer">
                  <span className="font-semibold text-ink dark:text-white">
                    {t.kontak.info.whatsapp}:
                  </span>{' '}
                  <span className="text-muted transition hover:text-forest-700 dark:text-white/70 dark:hover:text-mint-200">
                    +62 856-3198-6842
                  </span>
                </a>
              </li>
              <li>
                <a href="mailto:aceantara.software@gmail.com">
                  <span className="font-semibold text-ink dark:text-white">
                    {t.kontak.info.email}:
                  </span>{' '}
                  <span className="text-muted transition hover:text-forest-700 dark:text-white/70 dark:hover:text-mint-200">
                    aceantara.software@gmail.com
                  </span>
                </a>
              </li>
              <li>
                <span className="font-semibold text-ink dark:text-white">
                  {f.locationLabel}:
                </span>{' '}
                <span className="text-muted dark:text-white/70">
                  {f.locationValue}
                </span>
              </li>
              <li>
                <span className="font-semibold text-ink dark:text-white">
                  {f.hoursLabel}:
                </span>{' '}
                <span className="text-muted dark:text-white/70">
                  {f.hoursValue}
                </span>
              </li>
            </ul>
          </div>

          {/* 4. Ikuti Kami */}
          <div>
            <p className="label-mono">{f.socialHeading}</p>
            <ul className="mt-4 flex gap-3">
              {f.socials.map((social) => {
                const Icon = socialIcons[social.id];
                if (!Icon) return null;

                // URL masih null → tampil sebagai placeholder (lihat dict, komentar "GANTI DENGAN URL ASLI")
                if (!social.url) {
                  return (
                    <li key={social.id}>
                      <span
                        className={`${socialClass} cursor-default opacity-60`}
                        title={f.socialPlaceholder}
                        aria-label={`${social.label} — ${f.socialPlaceholder}`}
                      >
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </span>
                    </li>
                  );
                }

                return (
                  <li key={social.id}>
                    <a
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={socialClass}
                      aria-label={social.label}
                      title={social.label}
                    >
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* ===== Garis tipis + baris copyright ===== */}
        <div className="mt-10 flex flex-col gap-2 border-t border-line pt-6 text-xs text-muted dark:border-white/10 dark:text-white/60 sm:flex-row sm:items-center sm:justify-between">
          <p>{f.copyright}</p>
          <p>{f.madeIn}</p>
        </div>
      </div>
    </footer>
  );
}
