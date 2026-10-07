import { createContext, useContext } from 'react';

/** Context tema: diisi oleh ThemeProvider di src/theme/index.jsx. */
export const ThemeContext = createContext({ theme: 'light', setTheme: () => {} });

/** Ambil { theme, setTheme } — 'light' | 'dark'. */
export function useTheme() {
  return useContext(ThemeContext);
}
