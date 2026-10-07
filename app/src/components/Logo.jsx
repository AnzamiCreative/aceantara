import logo from '../assets/LOGO-mark.png';

/** Ikon logo Aceantara (mark "A" utuh, tanpa teks, latar hijau brand). */
export default function Logo({ className = 'h-9 w-9' }) {
  return (
    <img
      src={logo}
      alt=""
      aria-hidden="true"
      decoding="async"
      className={`block shrink-0 rounded-lg object-cover ${className}`}
    />
  );
}
