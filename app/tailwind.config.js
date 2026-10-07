/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        mint: {
          50: '#F2FAF4',
          100: '#E3F4E8',
          200: '#BFE8C9',
        },
        forest: {
          600: '#2E7D4F',
          700: '#1F5C3A',
          900: '#0F3321',
        },
        ink: '#10281B',
        muted: '#5B7266',
        line: '#D3E8D9',
        putih: '#FFFFFF',
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      maxWidth: {
        container: '1200px',
      },
      boxShadow: {
        card: '0 0.5rem 1.875rem rgba(31,92,58,0.06)',
        'card-hover': '0 1rem 2.5rem rgba(31,92,58,0.12)',
        mockup: '0 1.5rem 3.75rem rgba(31,92,58,0.14)',
      },
      keyframes: {
        float: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        'float-up': {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'float-down': {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(0.625rem)' },
        },
        blink: {
          '0%,100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(0.75rem)' },
          '100%': { opacity: '1', transform: 'none' },
        },
        popIn: {
          '0%': { opacity: '0', transform: 'scale(0.97)' },
          '100%': { opacity: '1', transform: 'none' },
        },
        sheetUp: {
          '0%': { opacity: '0', transform: 'translateY(1.5rem)' },
          '100%': { opacity: '1', transform: 'none' },
        },
      },
      animation: {
        float: 'float 4s ease-in-out infinite',
        'float-up': 'float-up 5s ease-in-out infinite',
        'float-down': 'float-down 6s ease-in-out infinite',
        blink: 'blink 1.1s step-end infinite',
        fadeUp: 'fadeUp .45s ease both',
        popIn: 'popIn .35s ease both',
        sheetUp: 'sheetUp .3s cubic-bezier(0.22, 1, 0.36, 1) both',
      },
    },
  },
  plugins: [],
};
