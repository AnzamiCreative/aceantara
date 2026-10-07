import SectionHeading from './SectionHeading.jsx';
import { services } from '../data/services.js';
import { useInView } from '../hooks/useInView.js';
import { useLang } from '../i18n/context.js';

/** Section layanan: 3 kartu ringkas bernomor 01–03. */
export default function Layanan() {
  const { t } = useLang();
  const [ref, inView] = useInView();

  return (
    <section
      id="layanan"
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
        className="deco-circle -left-48 bottom-0 h-[25rem] w-[25rem]"
        aria-hidden="true"
      />

      <div className="container-x relative">
        <SectionHeading
          label={t.layanan.label}
          title={t.layanan.title}
          subtitle={t.layanan.subtitle}
        />

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {services.map((service, index) => {
            const copy = t.layanan.items[service.id];

            return (
              <article
                key={service.id}
                className="reveal card flex flex-col p-7"
                style={{ transitionDelay: `${index * 90}ms` }}
              >
                <div className="flex items-start justify-between">
                  <span
                    className="flex h-12 w-12 items-center justify-center rounded-xl bg-mint-100 text-forest-700 dark:bg-mint-200/10 dark:text-mint-200"
                    aria-hidden="true"
                  >
                    <service.icon className="h-5 w-5" />
                  </span>
                  <span className="font-mono text-xs font-medium text-muted dark:text-white/60">
                    {service.number}
                  </span>
                </div>

                <h3 className="mt-6 text-xl font-extrabold tracking-[-0.02em] text-ink dark:text-white">
                  {copy.title}
                </h3>

                <p className="mt-3 text-sm leading-[1.7] text-muted dark:text-white/70">
                  {copy.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
