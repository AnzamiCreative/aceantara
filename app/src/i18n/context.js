import { createContext, useContext } from 'react';

/** Context bahasa: diisi oleh LangProvider di src/i18n/index.jsx. */
export const LangContext = createContext({ lang: 'id', setLang: () => {}, t: null });

/** Ambil { lang, setLang, t } sesuai bahasa aktif. */
export function useLang() {
  return useContext(LangContext);
}
