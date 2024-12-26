/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'bible-bg': "url('./src/assets/bible.webp')",
        'cross-bg': "url('./src/assets/cross.webp')",
        'landscape-bg': "url('./src/assets/landscape.webp')"
      },
      animation: {
        'fade-in': 'fadeIn 1.5s ease-out', // Custom animation name
      },
      keyframes:{
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        }
      }
    },
  },
  plugins: [],
}
