import { createElement } from 'react';

/**
 * Render teks dengan sintaks marker: "Tiga layanan untuk {digitalmu}".
 * Bagian dalam kurung kurawal dibungkus <span className="marker">.
 * Teks biasa dilepas apa adanya supaya aman untuk teks user.
 */
export function renderMarker(text, keyPrefix = 'm') {
  if (typeof text !== 'string') return text;

  const parts = text.split(/(\{[^}]+\})/g).filter(Boolean);

  return parts.map((part, i) =>
    part.startsWith('{') && part.endsWith('}') ? (
      <span key={`${keyPrefix}-${i}`} className="marker">
        {part.slice(1, -1)}
      </span>
    ) : (
      createElement('span', { key: `${keyPrefix}-${i}` }, part)
    )
  );
}
