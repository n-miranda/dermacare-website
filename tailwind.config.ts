import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#F2EDE1',
        foreground: '#4A3D38',
        accent: '#B98D4D',
        surface: '#FAF8F3',
        muted: '#7A6B63',
      },
      fontFamily: {
        serif: ['var(--font-serif)', 'Georgia', 'serif'],
        sans: ['var(--font-sans)', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 12px 40px rgba(74, 61, 56, 0.08)',
      },
    },
  },
  plugins: [],
}

export default config
