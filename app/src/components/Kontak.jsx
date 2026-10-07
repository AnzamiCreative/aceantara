import { useState } from 'react';
import { Instagram, Mail, MessageCircle, Send } from 'lucide-react';
import SectionHeading from './SectionHeading.jsx';
import TikTokIcon from './TikTokIcon.jsx';
import WhatsAppIcon from './WhatsAppIcon.jsx';
import { waLink } from '../data/contacts.js';
import { useInView } from '../hooks/useInView.js';
import { useLang } from '../i18n/context.js';

const initialForm = { nama: '', email: '', pesan: '' };

/** Ikon sosial media di daftar kontak (id → ikon). */
const socialIcons = {
  instagram: Instagram,
  tiktok: TikTokIcon,
};

/** Section kontak: info di kiri, form sederhana (submit → buka WhatsApp) di kanan. */
export default function Kontak() {
  const { t } = useLang();
  const [ref, inView] = useInView();
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [hint, setHint] = useState('');

  const copy = t.kontak;

  /* Info kontak di kolom kiri (label/nilai ikut bahasa aktif) */
  const infoItems = [
    {
      id: 'whatsapp',
      label: copy.info.whatsapp,
      value: '+62 856-3198-6842',
      icon: MessageCircle,
      href: waLink(t.nav.waCta),
    },
    {
      id: 'email',
      label: copy.info.email,
      value: 'aceantara.software@gmail.com',
      icon: Mail,
      href: 'mailto:aceantara.software@gmail.com',
    },
    /* Sosial media — handle + link (lihat dict `kontak.socials`) */
    ...copy.socials.map((social) => ({
      id: social.id,
      label: social.label,
      value: social.handle || social.url || copy.socialPlaceholder,
      icon: socialIcons[social.id] ?? MessageCircle,
      href: social.url || null,
    })),
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
    setHint('');
  };

  /* ---- Submit: validasi lalu buka WhatsApp dengan pesan dari form ---- */
  const handleSubmit = (e) => {
    e.preventDefault();

    const formCopy = copy.form;
    const nextErrors = {};
    if (!form.nama.trim()) nextErrors.nama = formCopy.errors.name;
    if (!form.email.trim()) {
      nextErrors.email = formCopy.errors.emailRequired;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      nextErrors.email = formCopy.errors.emailFormat;
    }
    if (!form.pesan.trim()) nextErrors.pesan = formCopy.errors.message;

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    const message = formCopy.waTemplate
      .replace('{name}', form.nama.trim())
      .replace('{email}', form.email.trim())
      .replace('{message}', form.pesan.trim());

    window.open(waLink(message), '_blank', 'noopener,noreferrer');
    setHint(formCopy.hint);
  };

  return (
    <section
      id="kontak"
      ref={ref}
      className={`relative overflow-hidden bg-mint-50 py-24 dark:bg-[#0A1811] md:py-28 ${
        inView ? 'in-view' : ''
      }`}
    >
      {/* Tekstur kisi halus untuk section latar mint */}
      <span
        className="pattern-grid pointer-events-none absolute inset-0 opacity-70"
        aria-hidden="true"
      />
      <span
        className="deco-circle -left-48 bottom-0 h-[26.25rem] w-[26.25rem]"
        aria-hidden="true"
      />

      <div className="container-x relative grid gap-10 lg:grid-cols-2 lg:gap-14">
        {/* ================= Kolom kiri: info ================= */}
        <div>
          <SectionHeading
            align="left"
            label={copy.label}
            title={copy.title}
            subtitle={copy.subtitle}
          />

          <ul className="mt-8 space-y-3">
            {infoItems.map((item, index) => {
              const Icon = item.icon;
              const content = (
                <>
                  <span
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-mint-100 text-forest-700 dark:bg-mint-200/10 dark:text-mint-200"
                    aria-hidden="true"
                  >
                    <Icon className="h-5 w-5" />
                  </span>
                  <div className="min-w-0">
                    <p className="label-mono">{item.label}</p>
                    <p className="mt-1 break-words text-[0.9375rem] font-bold text-ink dark:text-white">
                      {item.value}
                    </p>
                  </div>
                </>
              );

              return (
                <li
                  key={item.id}
                  className="reveal card flex items-center gap-3.5 p-4"
                  style={{ transitionDelay: `${index * 60}ms` }}
                >
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.href.startsWith('mailto:') ? undefined : '_blank'}
                      rel="noopener noreferrer"
                      aria-label={copy.ariaCopy.replace('{label}', item.label)}
                      className="flex min-w-0 items-center gap-3.5 transition hover:opacity-75"
                    >
                      {content}
                    </a>
                  ) : (
                    content
                  )}
                </li>
              );
            })}
          </ul>
        </div>

        {/* ================= Kolom kanan: form ================= */}
        <div className="reveal" style={{ transitionDelay: '140ms' }}>
          <form
            onSubmit={handleSubmit}
            noValidate
            className="rounded-[1.5rem] border border-line bg-white p-6 shadow-card dark:border-white/10 dark:bg-[#16301F] sm:p-8"
          >
            <p className="label-mono">{copy.form.label}</p>
            <h3 className="mt-3 text-xl font-extrabold tracking-[-0.02em] text-ink dark:text-white sm:text-2xl">
              {copy.form.title}
            </h3>
            <p className="mt-2 text-sm leading-[1.7] text-muted dark:text-white/70">
              {copy.form.text}
            </p>

            {/* Nama */}
            <div className="mt-6">
              <label htmlFor="nama" className="block text-sm font-semibold text-ink dark:text-white">
                {copy.form.name}
              </label>
              <input
                id="nama"
                name="nama"
                type="text"
                value={form.nama}
                onChange={handleChange}
                placeholder={copy.form.namePlaceholder}
                aria-invalid={Boolean(errors.nama)}
                className="mt-2 h-12 w-full rounded-xl border border-line bg-mint-50 px-4 text-sm text-ink transition placeholder:text-muted/70 focus:border-forest-600 focus:bg-white dark:border-white/10 dark:bg-[#0E1F17] dark:text-white dark:placeholder:text-white/40 dark:focus:border-mint-200 dark:focus:bg-[#0A1811]"
              />
              {errors.nama ? (
                <p className="mt-1.5 text-xs font-medium text-red-600 dark:text-red-400">{errors.nama}</p>
              ) : null}
            </div>

            {/* Email */}
            <div className="mt-5">
              <label htmlFor="email" className="block text-sm font-semibold text-ink dark:text-white">
                {copy.form.email}
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder={copy.form.emailPlaceholder}
                aria-invalid={Boolean(errors.email)}
                className="mt-2 h-12 w-full rounded-xl border border-line bg-mint-50 px-4 text-sm text-ink transition placeholder:text-muted/70 focus:border-forest-600 focus:bg-white dark:border-white/10 dark:bg-[#0E1F17] dark:text-white dark:placeholder:text-white/40 dark:focus:border-mint-200 dark:focus:bg-[#0A1811]"
              />
              {errors.email ? (
                <p className="mt-1.5 text-xs font-medium text-red-600 dark:text-red-400">{errors.email}</p>
              ) : null}
            </div>

            {/* Pesan */}
            <div className="mt-5">
              <div className="flex items-center justify-between">
                <label htmlFor="pesan" className="block text-sm font-semibold text-ink dark:text-white">
                  {copy.form.message}
                </label>
                <span className="font-mono text-[0.6875rem] text-muted dark:text-white/60">
                  {form.pesan.length}/500
                </span>
              </div>
              <textarea
                id="pesan"
                name="pesan"
                rows={4}
                maxLength={500}
                value={form.pesan}
                onChange={handleChange}
                placeholder={copy.form.messagePlaceholder}
                aria-invalid={Boolean(errors.pesan)}
                className="mt-2 w-full resize-none rounded-xl border border-line bg-mint-50 px-4 py-3 text-sm leading-[1.6] text-ink transition placeholder:text-muted/70 focus:border-forest-600 focus:bg-white dark:border-white/10 dark:bg-[#0E1F17] dark:text-white dark:placeholder:text-white/40 dark:focus:border-mint-200 dark:focus:bg-[#0A1811]"
              />
              {errors.pesan ? (
                <p className="mt-1.5 text-xs font-medium text-red-600 dark:text-red-400">{errors.pesan}</p>
              ) : null}
            </div>

            {/* Submit */}
            <button type="submit" className="btn btn-primary mt-6 w-full">
              <Send className="h-[1.0625rem] w-[1.0625rem]" aria-hidden="true" />
              {copy.form.submit}
            </button>

            <p className="mt-4 flex items-start gap-2 text-xs leading-[1.7] text-muted dark:text-white/70">
              <WhatsAppIcon
                className="mt-0.5 h-3.5 w-3.5 shrink-0 text-forest-600 dark:text-mint-200"
                aria-hidden="true"
              />
              {copy.form.viaWa}
            </p>

            {hint ? (
              <p className="mt-3 rounded-xl bg-mint-100 px-3 py-2.5 text-xs leading-[1.6] text-forest-700 dark:bg-mint-200/10 dark:text-mint-200">
                {hint}
              </p>
            ) : null}
          </form>
        </div>
      </div>
    </section>
  );
}
