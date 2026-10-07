// Nomor WhatsApp studio (tanpa tanda +)
export const WA_NUMBER = '6285651996642';

/** Susun link WhatsApp dengan pesan yang sudah di-encode. */
export const waLink = (text) =>
  `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`;
