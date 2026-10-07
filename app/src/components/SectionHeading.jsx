import { renderMarker } from '../lib/marker.jsx';

/**
 * Heading bawaan untuk tiap section.
 * - label: mono kecil di atas (contoh "01 — LAYANAN")
 * - title: string (pakai sintaks {marker}) atau ReactNode
 * - subtitle: teks muted di bawah judul
 * - align: 'center' (default) atau 'left'
 */
export default function SectionHeading({
  label,
  title,
  subtitle,
  align = 'center',
  className = '',
}) {
  const centered = align === 'center';

  return (
    <div
      className={`${
        centered ? 'mx-auto max-w-2xl text-center' : 'text-left'
      } ${className}`}
    >
      <p className="label-mono reveal">{label}</p>

      <h2
        className="reveal mt-4 text-[clamp(1.75rem,1.3rem+2vw,2.5rem)] font-extrabold leading-[1.1] tracking-[-0.03em] text-ink dark:text-white"
        style={{ transitionDelay: '90ms' }}
      >
        {typeof title === 'string' ? renderMarker(title) : title}
      </h2>

      {subtitle ? (
        <p
          className={`reveal mt-4 text-base leading-[1.7] text-muted dark:text-white/70 ${
            centered ? '' : 'max-w-xl'
          }`}
          style={{ transitionDelay: '180ms' }}
        >
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
