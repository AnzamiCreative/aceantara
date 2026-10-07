import { useEffect, useRef, useState } from 'react';
import {
  CheckCircle2,
  Download,
  ExternalLink,
  Play,
  X,
} from 'lucide-react';
import { projects } from '../data/portfolio.js';
import { useInView } from '../hooks/useInView.js';
import { useLang } from '../i18n/context.js';
import { renderMarker } from '../lib/marker.jsx';

const FOCUSABLE =
  'a[href], button:not([disabled]), video, iframe, [tabindex]:not([tabindex="-1"])';

/* ============================================================
   Preview HTML/CSS (tanpa gambar AI)
   ============================================================ */

/** Mockup browser untuk proyek unggulan. */
function BrowserMockup() {
  return (
    <div className="rounded-[1.25rem] border border-line bg-white p-3 shadow-mockup dark:border-white/10 dark:bg-[#0E1F17]">
      <div className="flex items-center gap-1.5 px-1 pb-1">
        <span className="h-2 w-2 shrink-0 rounded-full bg-forest-700 dark:bg-mint-200" aria-hidden="true" />
        <span className="h-2 w-2 shrink-0 rounded-full bg-mint-200 dark:bg-forest-600" aria-hidden="true" />
        <span className="h-2 w-2 shrink-0 rounded-full bg-[#CBD5E1] dark:bg-white/25" aria-hidden="true" />
        <span className="ml-1 flex min-w-0 flex-1 items-center rounded-full border border-line bg-mint-50 px-2.5 py-1 dark:border-white/10 dark:bg-white/5">
          <span className="truncate font-mono text-[0.625rem] text-muted dark:text-white/60">
            https://example.com
          </span>
        </span>
      </div>

      <div className="mt-1.5 h-[17.5rem] overflow-hidden rounded-[1rem] sm:h-[21rem]">
        <div className="flex h-full flex-col gap-2 bg-gradient-to-br from-[#FBF3E7] to-[#E4F3E8] p-4">
          <div className="flex items-center justify-between">
            <span className="h-2.5 w-16 rounded-full bg-[#8B6F4E]/60" />
            <span className="flex gap-1.5">
              <span className="h-2 w-7 rounded-full bg-[#8B6F4E]/30" />
              <span className="h-2 w-7 rounded-full bg-[#8B6F4E]/30" />
              <span className="h-2 w-9 rounded-full bg-[#4E8B6B]/70" />
            </span>
          </div>

          <div className="rounded-lg bg-white/80 px-4 py-4">
            <span className="block h-3 w-3/4 rounded-full bg-[#3F5F4E]/70" />
            <span className="mt-2 block h-2 w-1/2 rounded-full bg-[#3F5F4E]/30" />
            <span className="mt-4 block h-5 w-24 rounded-full bg-[#4E8B6B]" />
          </div>

          <div className="grid flex-1 grid-cols-3 gap-2">
            <span className="rounded-md bg-white/70" />
            <span className="rounded-md bg-white/70" />
            <span className="rounded-md bg-white/70" />
          </div>

          <div className="flex items-center gap-2 rounded-lg bg-white/80 px-3 py-2">
            <span className="h-4 w-4 rounded-full bg-[#25D366]" />
            <span className="h-2 w-1/3 rounded-full bg-[#3F5F4E]/40" />
          </div>
        </div>
      </div>
    </div>
  );
}

/** Thumbnail CSS untuk kartu proyek kecil. */
function Thumb({ category }) {
  if (category === 'game') {
    return (
      <div className="relative h-full overflow-hidden bg-gradient-to-b from-[#BFE8C9] to-[#EAF7EE] dark:from-[#17321F] dark:to-[#0E1F17]">
        <span className="absolute right-5 top-5 h-5 w-5 rounded-full bg-[#F5D48A]" />
        <span className="absolute bottom-8 left-6 h-8 w-4 rounded-sm bg-[#1F5C3A]" />
        <span className="absolute bottom-12 left-5 h-4 w-6 rounded-sm bg-[#2E7D4F]" />
        <span className="absolute bottom-8 right-10 h-6 w-3 rounded-sm bg-[#1F5C3A]" />
        <span className="absolute bottom-12 right-9 h-3 w-5 rounded-sm bg-[#2E7D4F]" />
        <span className="absolute bottom-4 left-0 h-5 w-full bg-[#4E9B6B]" />
        <span className="absolute bottom-9 left-1/2 h-4 w-4 rounded-sm bg-[#8B5E3C]" />
        <span className="absolute bottom-9 left-1/2 ml-4 h-2 w-2 rounded-sm bg-[#8B5E3C]" />
      </div>
    );
  }

  if (category === 'uiux') {
    return (
      <div className="flex h-full items-center justify-center gap-3 bg-gradient-to-br from-[#E3F4E8] to-[#CDEDD7] p-4 dark:from-[#14291D] dark:to-[#0E1F17]">
        <div className="flex h-full w-[38%] flex-col gap-1.5 rounded-lg border border-white bg-white p-2 dark:border-white/10 dark:bg-[#16301F]">
          <span className="h-1.5 w-8 rounded-full bg-forest-700 dark:bg-mint-200" />
          <span className="h-5 w-full rounded-md bg-mint-200 dark:bg-white/10" />
          <span className="h-1.5 w-full rounded-full bg-line dark:bg-white/15" />
          <span className="h-1.5 w-3/4 rounded-full bg-line dark:bg-white/15" />
          <span className="mt-auto h-4 w-full rounded-md bg-forest-600" />
        </div>
        <div className="flex h-full w-[38%] flex-col gap-1.5 rounded-lg border border-white bg-white p-2 dark:border-white/10 dark:bg-[#16301F]">
          <span className="h-1.5 w-10 rounded-full bg-forest-700 dark:bg-mint-200" />
          <span className="h-3 w-full rounded-md bg-mint-100 dark:bg-white/10" />
          <span className="h-3 w-full rounded-md bg-mint-100 dark:bg-white/10" />
          <span className="h-3 w-full rounded-md bg-mint-100 dark:bg-white/10" />
          <span className="mt-auto h-1.5 w-2/3 rounded-full bg-line dark:bg-white/15" />
        </div>
      </div>
    );
  }

  return <div className="h-full bg-gradient-to-br from-[#FBF3E7] to-[#E4F3E8]" />;
}

/** Embed YouTube (dari link watch/shorts/share → format embed). */
function youtubeEmbed(url) {
  const match = url.match(/(?:v=|youtu\.be\/|shorts\/|embed\/)([\w-]{6,})/);
  return match ? `https://www.youtube.com/embed/${match[1]}` : null;
}

/** Section Portofolio: filter tab, proyek unggulan, grid kartu, modal detail. */
export default function Portofolio() {
  const { lang, t: dict } = useLang();
  const [ref, inView] = useInView();
  const [filter, setFilter] = useState('all');
  const [detail, setDetail] = useState(null);

  const modalRef = useRef(null);

  const t = dict.portofolio;

  /* Filter: "all" menampilkan semua proyek tanpa highlight proyek utama;
     kategori tertentu menampilkan 1 proyek utama + 2 proyek lain. */
  const visible = projects.filter((p) => filter === 'all' || p.category === filter);
  const featured =
    filter === 'all' ? null : (visible.find((p) => p.featured) ?? null);
  const others = visible.filter((p) => p !== featured);
  const nothingToShow = visible.length === 0;

  /* Label + tujuan tombol aksi di kartu (mengarah langsung ke link proyek) */
  const ctaLabel = (project) => {
    const actions = t.modal.actions;
    if (project.linkType === 'game') return actions.play;
    if (project.linkType === 'figma') return actions.figma;
    return actions.website;
  };
  const ctaHref = (project) => project.linkUrl || null;

  const CtaLink = ({ project, className = '' }) => {
    const href = ctaHref(project);
    if (href) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className={`inline-flex items-center gap-1.5 ${className}`}
        >
          {ctaLabel(project)}
          <ExternalLink className="h-4 w-4" aria-hidden="true" />
        </a>
      );
    }
    return (
      <span
        aria-disabled="true"
        className={`inline-flex items-center gap-1.5 opacity-60 ${className}`}
      >
        {ctaLabel(project)}
        <ExternalLink className="h-4 w-4" aria-hidden="true" />
      </span>
    );
  };

  /* ---- Modal: kunci fokus + Esc + kunci scroll di belakang ---- */
  useEffect(() => {
    if (!detail) return undefined;

    const opener = document.activeElement;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const onKey = (e) => {
      if (e.key === 'Escape') {
        setDetail(null);
        return;
      }
      if (e.key !== 'Tab' || !modalRef.current) return;

      const nodes = Array.from(modalRef.current.querySelectorAll(FOCUSABLE)).filter(
        (el) => el.offsetParent !== null
      );
      if (nodes.length === 0) return;

      const first = nodes[0];
      const last = nodes[nodes.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener('keydown', onKey);
    const frame = requestAnimationFrame(() => {
      const first = modalRef.current?.querySelector(FOCUSABLE);
      if (first instanceof HTMLElement) first.focus();
    });

    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prevOverflow;
      cancelAnimationFrame(frame);
      if (opener instanceof HTMLElement) opener.focus();
    };
  }, [detail]);

  /* ---- Tombol aksi modal sesuai tipe proyek ---- */
  const renderActions = (project) => {
    const actions = t.modal.actions;

    const makeLink = (label, href, Icon = ExternalLink) =>
      href ? (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary"
        >
          {label}
          <Icon className="h-4 w-4" aria-hidden="true" />
        </a>
      ) : (
        <span
          key={label}
          aria-disabled="true"
          className="btn cursor-not-allowed border border-line bg-white text-muted opacity-70 dark:border-white/10 dark:bg-white/5 dark:text-white/50"
        >
          {label}
          <Icon className="h-4 w-4" aria-hidden="true" />
        </span>
      );

    if (project.linkType === 'game') {
      return [
        makeLink(actions.play, project.linkUrl, Play),
        makeLink(actions.download, project.downloadUrl, Download),
      ];
    }

    if (project.linkType === 'figma') return [makeLink(actions.figma, project.linkUrl)];
    return [makeLink(actions.website, project.linkUrl)];
  };

  const hasPendingLink = (project) =>
    project.linkType === 'game'
      ? !project.linkUrl || !project.downloadUrl
      : !project.linkUrl;

  const detailText = detail ? detail.copy[lang] : null;
  const embed = detail?.youtubeUrl ? youtubeEmbed(detail.youtubeUrl) : null;

  return (
    <section
      id="portofolio"
      ref={ref}
      className={`relative overflow-hidden bg-mint-50 py-24 dark:bg-[#0A1811] md:py-28 ${
        inView ? 'in-view' : ''
      }`}
    >
      {/* Tekstur kisi halus untuk section latar mint */}
      <span
        className="pattern-grid pointer-events-none absolute inset-0 opacity-70 dark:opacity-30"
        aria-hidden="true"
      />
      <span
        className="deco-circle -right-40 top-24 h-[26.25rem] w-[26.25rem] dark:border-mint-200/20"
        aria-hidden="true"
      />

      <div className="container-x relative">
        {/* ================= Judul section ================= */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="reveal label-mono dark:text-mint-200">{t.label}</p>
          <h2 className="reveal mt-4 text-[clamp(1.75rem,1.3rem+2vw,2.5rem)] font-extrabold leading-[1.1] tracking-[-0.03em] text-ink dark:text-white" style={{ transitionDelay: '90ms' }}>
            {renderMarker(t.title)}
          </h2>
          <p
            className="reveal mt-4 text-base leading-[1.7] text-muted dark:text-white/70"
            style={{ transitionDelay: '180ms' }}
          >
            {t.subtitle}
          </p>
        </div>

        {/* ================= 1. Filter tab ================= */}
        <div
          className="reveal mt-9 flex flex-wrap items-center justify-center gap-2"
          role="group"
          aria-label={t.tabsLabel}
        >
          {t.tabs.map((tab) => {
            const isActive = filter === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setFilter(tab.id)}
                aria-pressed={isActive}
                className={`h-10 rounded-full border px-5 text-sm font-semibold transition ${
                  isActive
                    ? 'border-forest-700 bg-forest-700 text-white shadow-[0_10px_22px_-14px_rgba(31,92,58,0.65)] dark:border-mint-200 dark:bg-mint-200 dark:text-forest-900'
                    : 'border-line bg-white text-muted hover:border-forest-600 hover:text-forest-700 dark:border-white/10 dark:bg-white/5 dark:text-white/70 dark:hover:text-mint-200'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* ================= 2. Proyek utama (hanya di kategori) ================= */}
        {featured ? (
          <article
            onClick={() => setDetail(featured)}
            className="reveal card mt-9 grid cursor-pointer gap-8 p-6 dark:border-white/10 dark:bg-[#16301F] lg:grid-cols-2 lg:items-center lg:p-10"
            style={{ transitionDelay: '80ms' }}
          >
            {/* Info */}
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <span className="label-mono rounded-full bg-mint-200 px-3 py-1.5 text-forest-700 dark:bg-mint-200 dark:text-forest-900">
                  {t.featuredBadge}
                </span>
                <span className="rounded-full border border-line bg-white px-3 py-1.5 font-mono text-[0.6875rem] font-medium uppercase tracking-[0.14em] text-forest-700 dark:border-white/10 dark:bg-white/5 dark:text-mint-200">
                  {t.categories[featured.category]}
                </span>
              </div>

              <h3 className="mt-4 text-2xl font-extrabold leading-snug tracking-[-0.02em] text-ink dark:text-white">
                {featured.copy[lang].name}
              </h3>

              <p className="mt-3 text-sm leading-[1.7] text-muted dark:text-white/70">
                {featured.copy[lang].short}
              </p>

              <p className="label-mono mt-7 dark:text-mint-200">{t.buildLabel}</p>
              <ul className="mt-3 space-y-2.5 text-sm text-ink dark:text-white">
                {featured.copy[lang].highlights.map((point) => (
                  <li key={point} className="flex items-start gap-2.5">
                    <CheckCircle2
                      className="mt-0.5 h-4 w-4 shrink-0 text-forest-600 dark:text-mint-200"
                      aria-hidden="true"
                    />
                    {point}
                  </li>
                ))}
              </ul>

              <ul className="mt-6 flex flex-wrap gap-2">
                {featured.tech.map((tech) => (
                  <li
                    key={tech}
                    className="rounded-full border border-line bg-mint-50 px-3 py-1.5 text-[0.6875rem] font-semibold text-forest-700 dark:border-white/10 dark:bg-white/5 dark:text-mint-200"
                  >
                    {tech}
                  </li>
                ))}
              </ul>

              {/* Tombol aksi: mengarah langsung ke link proyek (buka tab baru) */}
              <div className="mt-7">
                <CtaLink
                  project={featured}
                  className="btn btn-primary"
                />
                {ctaHref(featured) ? null : (
                  <p className="mt-2 text-xs text-muted dark:text-white/60">
                    {t.modal.linkPending}
                  </p>
                )}
              </div>
            </div>

            {/* Preview */}
            <BrowserMockup />
          </article>
        ) : null}

        {/* ================= 3. Proyek lain ================= */}
        {others.length > 0 ? (
          <div
            key={filter}
            className={`mt-6 grid animate-popIn gap-6 ${
              filter === 'all'
                ? 'sm:grid-cols-2 lg:grid-cols-3'
                : 'sm:grid-cols-2'
            }`}
          >
            {others.map((project, index) => {
              const text = project.copy[lang];
              return (
                <article
                  key={project.key}
                  className="reveal card group relative overflow-hidden p-4 transition duration-300 hover:shadow-[0_1.25rem_2.75rem_rgba(31,92,58,0.2)] focus-within:ring-2 focus-within:ring-forest-600 dark:border-white/10 dark:bg-[#16301F]"
                  style={{ transitionDelay: `${index * 80}ms` }}
                >
                  {/* Area preview + ikon play */}
                  <div className="relative h-40 overflow-hidden rounded-[0.875rem]">
                    <Thumb category={project.category} />
                    <span
                      className="pointer-events-none absolute inset-0 flex items-center justify-center"
                      aria-hidden="true"
                    >
                      <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/90 text-forest-700 shadow-card transition group-hover:scale-110 dark:bg-[#16301F]/90 dark:text-mint-200">
                        <Play className="h-5 w-5 fill-current" />
                      </span>
                    </span>
                    <span className="pointer-events-none absolute bottom-3 left-3 rounded-full bg-white px-3 py-1 text-[0.6875rem] font-semibold text-ink shadow-card dark:bg-[#16301F]/90 dark:text-white">
                      {t.categories[project.category]}
                    </span>
                  </div>

                  <div className="px-1 pb-1 pt-5">
                    <h3 className="text-base font-extrabold leading-snug tracking-[-0.02em] text-ink dark:text-white">
                      {text.name}
                    </h3>
                    <p className="label-mono mt-1.5 dark:text-mint-200">
                      {t.categories[project.category]}
                    </p>

                    <p className="mt-2 text-sm leading-[1.7] text-muted dark:text-white/70">
                      {text.short}
                    </p>

                    <ul className="mt-4 flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <li
                          key={tech}
                          className="rounded-full border border-line bg-mint-50 px-3 py-1 text-[0.6875rem] font-semibold text-forest-700 dark:border-white/10 dark:bg-white/5 dark:text-mint-200"
                        >
                          {tech}
                        </li>
                      ))}
                    </ul>

                    {/* CTA: di atas overlay, mengarah langsung ke link proyek */}
                    <span className="relative z-20 mt-4 inline-block">
                      <CtaLink
                        project={project}
                        className="text-sm font-bold text-forest-700 dark:text-mint-200"
                      />
                    </span>
                  </div>

                  {/* Klik di mana saja pada kartu (selain tombol link) = buka modal */}
                  <button
                    type="button"
                    onClick={() => setDetail(project)}
                    aria-label={`${t.detailBtn} — ${text.name}`}
                    className="absolute inset-0 z-10 rounded-[1.25rem]"
                  />
                </article>
              );
            })}
          </div>
        ) : null}

        {nothingToShow ? (
          <p className="reveal mt-9 rounded-[1.5rem] border border-dashed border-line bg-white/70 p-10 text-center text-sm text-muted dark:border-mint-200/25 dark:bg-mint-200/[0.04] dark:text-white/70">
            {t.empty}
          </p>
        ) : null}

        <p className="reveal mt-10 text-center text-xs text-muted dark:text-white/60">
          {t.note}
        </p>
      </div>

      {/* ================= 4. Modal detail — tampilan pas, tanpa scroll ================= */}
      {detail ? (
        <div
          className="fixed inset-0 z-[90] flex items-end justify-center bg-forest-900/60 backdrop-blur-sm sm:items-center sm:p-6"
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) setDetail(null);
          }}
        >
          <div
            ref={modalRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-project-title"
            onMouseDown={(e) => e.stopPropagation()}
            className="animate-sheetUp relative flex max-h-[92dvh] w-full max-w-3xl flex-col overflow-hidden rounded-t-[1.5rem] border border-line bg-white shadow-2xl dark:border-white/10 dark:bg-[#16301F] sm:max-w-4xl sm:flex-row sm:rounded-[1.5rem]"
          >
            {/* Media: video / embed / placeholder (kiri di desktop, atas di HP) */}
            <div className="relative h-[26vh] shrink-0 bg-black sm:h-auto sm:w-[44%]">
              {detail.videoUrl ? (
                <video
                  className="absolute inset-0 h-full w-full bg-black object-contain"
                  controls
                  preload="none"
                  poster={detail.posterUrl || undefined}
                  src={detail.videoUrl}
                  title={detailText.name}
                />
              ) : embed ? (
                <div className="absolute inset-0 bg-black">
                  <iframe
                    className="h-full w-full"
                    src={embed}
                    title={detailText.name}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              ) : (
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-1.5 bg-mint-50 px-5 text-center dark:bg-[#0E1F17]">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-forest-700 shadow-card dark:bg-mint-200/10 dark:text-mint-200">
                    <Play className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <p className="text-sm font-bold text-ink dark:text-white">
                    {t.modal.videoPending}
                  </p>
                  <p className="text-xs leading-[1.5] text-muted dark:text-white/60">
                    {t.modal.videoNote}
                  </p>
                </div>
              )}

              {/* Tombol tutup */}
              <button
                type="button"
                onClick={() => setDetail(null)}
                aria-label={t.modal.close}
                className="absolute right-3 top-3 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-line bg-white text-ink shadow-card transition hover:bg-forest-700 hover:text-white dark:border-white/15 dark:bg-[#16301F]/90 dark:text-white dark:hover:bg-mint-200 dark:hover:text-forest-900"
              >
                <X className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>

            {/* Isi modal — dipadatkan supaya muat pas di layar */}
            <div className="min-h-0 flex-1 overflow-y-auto p-5 sm:p-7">
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-full border border-line bg-mint-50 px-3 py-1 text-[0.6875rem] font-semibold text-forest-700 dark:border-white/10 dark:bg-white/5 dark:text-mint-200">
                  {t.categories[detail.category]}
                </span>
                {detail.tech.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-line bg-white px-3 py-1 text-[0.6875rem] font-semibold text-muted dark:border-white/10 dark:bg-white/5 dark:text-white/70"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <h3
                id="modal-project-title"
                className="mt-4 text-lg font-extrabold leading-snug tracking-[-0.02em] text-ink dark:text-white sm:text-xl"
              >
                {detailText.name}
              </h3>

              <p className="label-mono mt-5 dark:text-mint-200">
                {t.modal.aboutLabel}
              </p>
              <p className="mt-1.5 line-clamp-3 text-sm leading-[1.7] text-muted dark:text-white/70">
                {detailText.description}
              </p>

              {detailText.features.length > 0 ? (
                <>
                  <p className="label-mono mt-5 dark:text-mint-200">
                    {t.modal.featuresLabel}
                  </p>
                  <ul className="mt-2 flex flex-wrap gap-1.5">
                    {detailText.features.map((feature) => (
                      <li
                        key={feature}
                        className="inline-flex items-center gap-1.5 rounded-full border border-line bg-mint-50 px-2.5 py-1 text-[0.6875rem] font-semibold text-forest-700 dark:border-white/10 dark:bg-white/5 dark:text-mint-200"
                      >
                        <CheckCircle2
                          className="h-3 w-3 shrink-0"
                          aria-hidden="true"
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </>
              ) : null}

              {/* Aksi */}
              <div className="mt-5 flex flex-wrap gap-3">{renderActions(detail)}</div>
              {hasPendingLink(detail) ? (
                <p className="mt-2.5 text-xs text-muted dark:text-white/60">
                  {t.modal.linkPending}
                </p>
              ) : null}
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}
