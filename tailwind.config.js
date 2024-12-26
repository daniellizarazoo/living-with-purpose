/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'cross-bg': "url('/cross.webp')",
        'landscape-bg': "url('/landscape.webp')"
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

