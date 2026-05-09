import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          DEFAULT: '#f7f3ed',
          light: '#faf8f5',
          dark: '#f5f1eb',
        },
        gold: '#c9a86a',
        charcoal: '#2a2a2a',
        muted: '#6b6b6b',
        olive: {
          DEFAULT: '#4a5d4e',
          dark: '#3d4f41',
        },
        border: '#f0ebe5',
      },
      fontFamily: {
        serif: ['var(--font-cormorant)', 'Georgia', 'serif'],
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest2: '0.25em',
        widest3: '0.3em',
      },
    },
  },
  plugins: [],
}

export default config
