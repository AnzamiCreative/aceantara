import { useEffect, useRef } from 'react';
import { Chrome, Figma, Gamepad2 } from 'lucide-react';
import WaButton from './WaButton.jsx';
import { useInView } from '../hooks/useInView.js';
import { useLang } from '../i18n/context.js';
import { renderMarker } from '../lib/marker.jsx';

/* Kartu mengambang: posisi & animasi dipisah supaya transform tidak bentrok */
function FloatingCard({ position, animation, delay, icon: Icon, title, subtitle }) {
  return (
    <div className={`absolute z-10 ${position}`}>
        <div
          className={`flex ${animation} items-center gap-2.5 rounded-2xl border border-line bg-white px-3 py-2.5 shadow-[0_1.5rem_3.75rem_rgba(31,92,58,0.14)] dark:border-white/[0.14] dark:bg-[#14291D]/85 dark:shadow-[0_18px_36px_-14px_rgba(0,0,0,0.65)] dark:backdrop-blur-md sm:px-3.5 sm:py-3`}
          style={delay ? { animationDelay: delay } : undefined}
        >
        <span
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-mint-100 text-forest-700 dark:bg-mint-200/10 dark:text-mint-200 dark:ring-1 dark:ring-inset dark:ring-mint-200/20"
          aria-hidden="true"
        >
          <Icon className="h-[1.125rem] w-[1.125rem]" />
        </span>
        <div className="min-w-0">
          <p className="whitespace-nowrap text-[0.75rem] font-bold leading-tight text-ink dark:text-white sm:text-[0.8125rem]">
            {title}
          </p>
          <p className="whitespace-nowrap font-mono text-[0.59375rem] uppercase tracking-[0.1em] leading-tight text-muted dark:text-white/60 sm:text-[0.625rem]">
            {subtitle}
          </p>
        </div>
      </div>
    </div>
  );
}

/** Hero dua kolom: teks di kiri, visual browser mockup di kanan. */
export default function Hero() {
  const { t } = useLang();
  const [ref, inView] = useInView();
  const visualRef = useRef(null);

  /* Visual mockup bergeser pelan mengikuti scroll (parallax halus) */
  useEffect(() => {
    const reduce =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) return undefined;

    let frame = 0;
    const update = () => {
      frame = 0;
      const el = visualRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const progress = Math.min(
        Math.max((window.innerHeight - rect.top) / (window.innerHeight + rect.height), 0),
        1
      );
      el.style.setProperty('--parallax', `${(progress - 0.5) * -40}px`);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <section
      id="hero"
      ref={ref}
      className={`relative flex min-h-screen flex-col justify-center overflow-hidden pb-20 pt-24 md:pb-24 md:pt-28 ${
        inView ? 'in-view' : ''
      }`}
    >
      <span
        className="deco-circle -left-40 top-24 h-[26.25rem] w-[26.25rem]"
        aria-hidden="true"
      />

      {/* Tekstur: pola titik yang memudar + noda warna lembut */}
      <span
        className="pattern-dots pattern-fade pointer-events-none absolute inset-x-0 top-0 h-[70%]"
        aria-hidden="true"
      />
      <span
        className="blob -right-28 top-20 h-[24rem] w-[24rem] bg-mint-200/70 dark:bg-mint-200/20"
        aria-hidden="true"
      />
      <span
        className="blob -left-36 bottom-0 h-[20rem] w-[20rem] bg-mint-100 dark:bg-mint-200/15"
        aria-hidden="true"
      />

      <div className="container-x relative">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-16">
          {/* ================= Kolom kiri ================= */}
          <div>
            {/* Badge */}
            <div className="reveal inline-flex items-center gap-2 rounded-full border border-line bg-white px-4 py-2 shadow-card dark:border-white/10 dark:bg-[#16301F]">
              <span
                className="h-2 w-2 rounded-full bg-forest-600 dark:bg-mint-200"
                aria-hidden="true"
              />
              <span className="font-mono text-[0.6875rem] font-medium uppercase tracking-[0.16em] text-ink dark:text-white">
                {t.hero.badge}
              </span>
            </div>

            {/* Judul — 3 baris di desktop (≥1280px) */}
            <h1
              className="reveal mt-6 text-[clamp(2.25rem,1.5rem+3.4vw,3.5rem)] font-extrabold leading-[1.1] tracking-[-0.03em] text-ink dark:text-white"
              style={{ transitionDelay: '90ms' }}
            >
              {t.hero.titleLines.map((line, i) => (
                <span key={line} className="xl:block xl:whitespace-nowrap">
                  {renderMarker(line, `h1-${i}`)}
                </span>
              ))}
            </h1>

            {/* Paragraf */}
            <p
              className="reveal mt-6 max-w-xl text-base leading-[1.7] text-muted dark:text-white/70 md:text-[1.0625rem]"
              style={{ transitionDelay: '180ms' }}
            >
              {t.hero.paragraph}
            </p>

            {/* Tombol */}
            <div
              className="reveal mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
              style={{ transitionDelay: '270ms' }}
            >
              <WaButton text={t.hero.waPrimary} className="w-full sm:w-auto">
                {t.hero.ctaPrimary}
              </WaButton>
              <a href="#portofolio" className="btn btn-secondary w-full sm:w-auto">
                {t.hero.ctaSecondary}
              </a>
            </div>
          </div>

          {/* ============ Kolom kanan: visual ============ */}
          <div
            className="reveal relative w-full"
            style={{ transitionDelay: '160ms' }}
          >
            <div ref={visualRef} className="parallax">
            {/* Cahaya lembut di belakang jendela (mode gelap) */}
            <span
              className="pointer-events-none absolute -inset-6 -z-10 hidden rounded-[2.5rem] bg-mint-300/20 blur-3xl dark:block"
              aria-hidden="true"
            />

            {/* ---- Browser window mockup (mengisi kolom kanan) ---- */}
            <div className="relative rounded-3xl border border-line bg-white p-3 shadow-[0_1.5rem_3.75rem_rgba(31,92,58,0.14)] dark:border-white/10 dark:bg-gradient-to-b dark:from-[#16301F] dark:to-[#0B1A12] dark:shadow-[0_34px_70px_-24px_rgba(45,212,191,0.22),0_0_0_1px_rgba(255,255,255,0.05)]">
              {/* Header jendela */}
              <div className="flex items-center gap-1.5 px-1 py-1">
                <span
                  className="h-2 w-2 shrink-0 rounded-full bg-forest-700 dark:bg-rose-400/85"
                  aria-hidden="true"
                />
                <span
                  className="h-2 w-2 shrink-0 rounded-full bg-mint-200 dark:bg-amber-400/85"
                  aria-hidden="true"
                />
                <span
                  className="h-2 w-2 shrink-0 rounded-full bg-[#CBD5E1] dark:bg-emerald-400/70"
                  aria-hidden="true"
                />
                <span className="ml-1 flex min-w-0 flex-1 items-center rounded-full border border-line bg-mint-50 px-2.5 py-1 dark:border-mint-200/15 dark:bg-mint-200/[0.07]">
                  <span className="truncate font-mono text-[0.625rem] text-muted dark:text-mint-200/75">
                    {t.hero.url}
                  </span>
                </span>
              </div>

              {/* Isi window: code snippet (lega, tinggi ±300-340px total) */}
              <div className="mt-2 min-h-[16.5rem] rounded-[1rem] bg-mint-50 p-6 dark:bg-[#0A1712] dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] dark:ring-1 dark:ring-inset dark:ring-white/[0.05]">
                <pre className="whitespace-pre-wrap break-words font-mono text-[0.8125rem] leading-[1.7] text-forest-700 dark:text-mint-200 dark:[text-shadow:0_0_18px_rgba(52,211,153,0.25)] lg:text-[0.875rem]">
                  <code>
                    {t.hero.code}
                    <span
                      className="ml-1 inline-block h-[0.95em] w-[0.5em] animate-blink bg-forest-700 align-[-0.1em] dark:bg-mint-200 dark:shadow-[0_0_10px_rgba(167,243,108,0.75)]"
                      aria-hidden="true"
                    />
                  </code>
                </pre>
              </div>
            </div>

            {/* ---- Floating card: kiri atas (Landing Page) ---- */}
            <FloatingCard
              position="-left-3 -top-6 lg:-left-8 lg:-top-8"
              animation="animate-float-up"
              delay="-0.4s"
              icon={Chrome}
              title={t.hero.cards[0].title}
              subtitle={t.hero.cards[0].subtitle}
            />

            {/* ---- Floating card: kanan atas (UI/UX Design) ---- */}
            <FloatingCard
              position="-right-3 -top-6 lg:-right-8 lg:-top-8"
              animation="animate-float-up"
              delay="-2.4s"
              icon={Figma}
              title={t.hero.cards[2].title}
              subtitle={t.hero.cards[2].subtitle}
            />

            {/* ---- Floating card: kanan bawah (Game Unity 2D) ---- */}
            <FloatingCard
              position="-bottom-6 -right-3 lg:-bottom-8 lg:-right-8"
              animation="animate-float-down"
              delay="-1.4s"
              icon={Gamepad2}
              title={t.hero.cards[1].title}
              subtitle={t.hero.cards[1].subtitle}
            />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
