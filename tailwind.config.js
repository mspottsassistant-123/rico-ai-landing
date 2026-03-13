/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        obsidian: '#1a1a1a', // Fallback dark
        champagne: '#C9B7A3',
        ivory: '#FAF8F5',
        slate: '#2A2A35',

        // Rico AI Brand Colors
        'rico-primary': '#2D4A3A',
        'rico-accent': '#9CAF88',
        'rico-border': '#C7E6D7',
        'rico-secondary': '#C9B7A3',
        'rico-text': '#6C5B4B',
        'rico-purple': '#D8B4FE',
        'rico-bg': '#F7F6F2',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['"Playfair Display"', 'serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      borderRadius: {
        '2xl': '2rem',
        '3xl': '3rem',
      },
      transitionTimingFunction: {
        'magnetic': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(to top, rgba(247, 246, 242, 1) 0%, rgba(247, 246, 242, 0.6) 50%, rgba(247, 246, 242, 0) 100%)',
      }
    },
  },
  plugins: [],
}
