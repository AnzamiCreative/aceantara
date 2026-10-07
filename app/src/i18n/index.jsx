import { useEffect, useMemo, useState } from 'react';
import { LangContext } from './context.js';
import id from './id.js';
import en from './en.js';

const dicts = { id, en };
const STORAGE_KEY = 'ace-lang';

/** Bahasa awal: pilihan tersimpan → ikut bahasa browser → Indonesia. */
function detectLang() {
  if (typeof window === 'undefined') return 'id';
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (saved === 'id' || saved === 'en') return saved;
  } catch {
    /* localStorage tidak tersedia — abaikan */
  }
  return navigator.language?.toLowerCase().startsWith('id') ? 'id' : 'en';
}

/** Provider i18n: simpan pilihan, atur <html lang> + judul halaman. */
export function LangProvider({ children }) {
  const [lang, setLang] = useState(detectLang);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.title = dicts[lang].meta.title;
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute('content', dicts[lang].meta.description);
    try {
      window.localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      /* abaikan */
    }
  }, [lang]);

  const value = useMemo(() => ({ lang, setLang, t: dicts[lang] }), [lang]);

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}
