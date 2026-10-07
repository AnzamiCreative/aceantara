import { useEffect, useMemo, useState } from 'react';
import { ThemeContext } from './context.js';

const STORAGE_KEY = 'ace-theme';

/** Tema awal: pilihan tersimpan → light (default, tidak ikut sistem). */
function detectTheme() {
  if (typeof window === 'undefined') return 'light';
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (saved === 'light' || saved === 'dark') return saved;
  } catch {
    /* localStorage tidak tersedia — abaikan */
  }
  return 'light';
}

/**
 * Provider tema global: menambah/menghapus class `.dark` di <html>
 * sehingga semua section (varian dark:) ikut berubah.
 */
export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(detectTheme);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle('dark', theme === 'dark');
    root.style.colorScheme = theme;

    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute('content', theme === 'dark' ? '#0A1811' : '#1F5C3A');

    try {
      window.localStorage.setItem(STORAGE_KEY, theme);
    } catch {
      /* abaikan */
    }
  }, [theme]);

  const value = useMemo(() => ({ theme, setTheme }), [theme]);

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}
