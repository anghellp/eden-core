// tailwind.config.ts
import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: [
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'sans-serif',
        ],
      },
      animation: {
        pulseAura: 'pulseAura 2s infinite',
      },
      keyframes: {
        pulseAura: {
          '0%, 100%': {
            boxShadow: '0 0 0 0 rgba(16, 185, 129, 0.7)',
          },
          '50%': {
            boxShadow: '0 0 0 10px rgba(16, 185, 129, 0)',
          },
        },
      },
    },
  },
  plugins: [],
}

export default config
