import { useRef, useState } from 'react';
import { Code2, Zap } from 'lucide-react';
import Logo from './Logo.jsx';
import { useInView } from '../hooks/useInView.js';
import { useLang } from '../i18n/context.js';
import { renderMarker } from '../lib/marker.jsx';

/** Chip pill melayang: ikon + teks, float pelan (arah bergantian). */
function FloatChip({ position, animation, delay, icon: Icon, children }) {
  return (
    <span
      className={`absolute z-10 flex items-center gap-2 rounded-full border border-line bg-white px-4 py-2.5 text-sm font-bold text-ink shadow-mockup dark:border-white/10 dark:bg-[#16301F] dark:text-white ${position} ${animation}`}
      style={delay ? { animationDelay: delay } : undefined}
    >
      <Icon className="h-4 w-4 text-forest-600 dark:text-mint-200" aria-hidden="true" />
      {children}
    </span>
  );
}

/** Section Tentang Kami: visual card di kiri, teks + tab Cerita/Visi/Misi di kanan. */
export default function Tentang() {
  const { t } = useLang();
  const [ref, inView] = useInView();
  const [active, setActive] = useState('cerita');
  const tablistRef = useRef(null);

  const a = t.tentang;

  /* Tab bisa dioperasikan keyboard: panah kiri/kanan memilih + memindah fokus */
  const handleTabKeyDown = (e) => {
    if (e.key !== 'ArrowLeft' && e.key !== 'ArrowRight') return;
    e.preventDefault();
    const index = a.tabs.findIndex((tab) => tab.id === active);
    const next =
      e.key === 'ArrowRight'
        ? (index + 1) % a.tabs.length
        : (index - 1 + a.tabs.length) % a.tabs.length;
    setActive(a.tabs[next].id);
    const buttons = tablistRef.current?.querySelectorAll('button');
    if (buttons instanceof NodeList) buttons[next]?.focus();
  };

  return (
    <section
      id="tentang"
      ref={ref}
      className={`relative overflow-hidden border-t border-line bg-white py-24 dark:border-white/10 dark:bg-[#132019] md:py-28 ${
        inView ? 'in-view' : ''
      }`}
    >
      {/* Tekstur titik halus untuk section latar putih */}
      <span
        className="pattern-dots pointer-events-none absolute inset-0 opacity-50"
        aria-hidden="true"
      />
      <span
        className="deco-circle -right-44 top-16 h-[25rem] w-[25rem]"
        aria-hidden="true"
      />

      <div className="container-x relative grid items-center gap-14 lg:grid-cols-2 lg:gap-16">
        {/* ================= Kolom kiri: visual card ================= */}
        <div className="reveal">
          <div className="relative mx-auto w-full max-w-md lg:max-w-none">
            {/* Kartu besar: gradasi hijau + pola grid tipis */}
            <div className="relative flex min-h-[19rem] items-center justify-center overflow-hidden rounded-[1.5rem] border border-forest-600/40 bg-gradient-to-br from-mint-100 via-mint-50 to-white p-10 dark:border-mint-200/25 dark:from-[#1B3B27] dark:via-[#142A1E] dark:to-[#0C1B14]">
              <span
                className="pattern-grid pointer-events-none absolute inset-0 opacity-70 dark:opacity-30"
                aria-hidden="true"
              />

              {/* Lingkaran garis putus-putus mengelilingi logo */}
              <div className="relative flex h-52 w-52 items-center justify-center">
                <span
                  className="absolute inset-0 rounded-full border border-dashed border-forest-600/45 dark:border-mint-200/30"
                  aria-hidden="true"
                />
                <span
                  className="absolute inset-5 rounded-full border border-dashed border-forest-600/25 dark:border-mint-200/15"
                  aria-hidden="true"
                />
                <div className="flex items-center gap-2.5">
                  <Logo className="h-10 w-10" />
                  <span className="text-lg font-extrabold tracking-[0.18em]">
                    <span className="text-ink dark:text-white">ACE</span>
                    <span className="text-forest-600 dark:text-mint-200">
                      ANTARA
                    </span>
                  </span>
                </div>
              </div>
            </div>

            {/* Dua chip melayang (di luar overflow kartu supaya tidak terpotong) */}
            <FloatChip
              position="-left-3 top-7 sm:-left-5"
              animation="animate-float-up"
              icon={Code2}
            >
              {a.chips[0]}
            </FloatChip>
            <FloatChip
              position="-bottom-5 right-3 sm:-right-5"
              animation="animate-float-down"
              delay="-1.6s"
              icon={Zap}
            >
              {a.chips[1]}
            </FloatChip>
          </div>
        </div>

        {/* ================= Kolom kanan: teks + tab ================= */}
        <div>
          <p className="reveal label-mono">{a.label}</p>

          <h2
            className="reveal mt-4 text-[clamp(1.75rem,1.3rem+2vw,2.5rem)] font-extrabold leading-[1.1] tracking-[-0.03em] text-ink dark:text-white"
            style={{ transitionDelay: '90ms' }}
          >
            {a.titleLines.map((line, i) => (
              <span key={line} className="block">
                {renderMarker(line, `tentang-${i}`)}
              </span>
            ))}
          </h2>

          <p
            className="reveal mt-4 text-base leading-[1.7] text-muted dark:text-white/70"
            style={{ transitionDelay: '180ms' }}
          >
            {a.intro}
          </p>

          {/* Tab pill: Cerita | Visi | Misi */}
          <div
            ref={tablistRef}
            role="tablist"
            aria-label={a.tabsLabel}
            onKeyDown={handleTabKeyDown}
            className="reveal mt-7 inline-flex rounded-full border border-line bg-white p-1 dark:border-white/10 dark:bg-white/5"
            style={{ transitionDelay: '260ms' }}
          >
            {a.tabs.map((tab) => {
              const isActive = active === tab.id;
              return (
                <button
                  key={tab.id}
                  id={`tentang-tab-${tab.id}`}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  aria-controls={`tentang-panel-${tab.id}`}
                  tabIndex={isActive ? 0 : -1}
                  onClick={() => setActive(tab.id)}
                  className={`rounded-full px-5 py-2 text-sm font-semibold transition ${
                    isActive
                      ? 'bg-forest-700 text-white dark:bg-mint-200 dark:text-forest-900'
                      : 'text-muted hover:text-forest-700 dark:text-white/70 dark:hover:text-mint-200'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* Panel teks sesuai tab aktif (fade saat berganti) */}
          <div
            id={`tentang-panel-${active}`}
            role="tabpanel"
            aria-labelledby={`tentang-tab-${active}`}
            tabIndex={0}
            className="reveal card mt-5 p-6"
            style={{ transitionDelay: '320ms' }}
          >
            <p
              key={active}
              className="animate-fadeUp text-sm leading-[1.75] text-muted dark:text-white/70"
            >
              {a.panels[active]}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
