import SectionHeading from './SectionHeading.jsx';
import { useInView } from '../hooks/useInView.js';
import { useLang } from '../i18n/context.js';

/** Proses 4 langkah: horizontal di desktop, vertikal (garis kiri) di mobile. */
export default function Proses() {
  const { t } = useLang();
  const [ref, inView] = useInView();

  return (
    <section
      id="proses"
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
        className="deco-circle -left-32 bottom-10 h-[22.5rem] w-[22.5rem]"
        aria-hidden="true"
      />

      <div className="container-x relative">
        <SectionHeading
          label={t.proses.label}
          title={t.proses.title}
          subtitle={t.proses.subtitle}
        />

        <div className="relative mt-14">
          {/* Garis horizontal penghubung (desktop) */}
          <span
            className="absolute left-0 right-0 top-[1.375rem] hidden h-px bg-line dark:bg-white/15 md:block"
            aria-hidden="true"
          />
          {/* Garis vertikal (mobile) */}
          <span
            className="absolute bottom-6 left-[1.3125rem] top-6 w-px bg-line dark:bg-white/15 md:hidden"
            aria-hidden="true"
          />

          <ol className="grid gap-9 md:grid-cols-4 md:gap-4">
            {t.proses.steps.map((step, index) => (
              <li
                key={step.title}
                className="reveal relative flex gap-5 md:flex-col md:items-center md:gap-4 md:text-center"
                style={{ transitionDelay: `${index * 80}ms` }}
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-forest-700 font-mono text-sm font-medium text-white ring-4 ring-white dark:bg-mint-200 dark:text-forest-900 dark:ring-[#132019] md:ring-0">
                  {`0${index + 1}`}
                </span>

                <div className="md:max-w-[13rem]">
                  <h3 className="text-sm font-extrabold leading-snug tracking-[-0.02em] text-ink dark:text-white">
                    {step.title}
                  </h3>
                  <p className="mt-1.5 text-xs leading-[1.6] text-muted dark:text-white/70">
                    {step.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
