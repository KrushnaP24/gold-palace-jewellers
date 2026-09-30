/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        peacock: {
          50: '#f1fafb',
          100: '#e1f4f6',
          200: '#c5e8ec',
          300: '#99d6de',
          400: '#64bcca',
          500: '#2b9cae',
          600: '#1b7d8d',
          700: '#165d68',
          800: '#0f444c',
          850: '#0b343a',
          900: '#072428',
          950: '#031417',
        },
        gold: {
          50: '#fdfbf2',
          100: '#fbf6df',
          200: '#f6ecbe',
          300: '#eedc8a',
          400: '#e4c660',
          500: '#d4af37',
          600: '#bfa035',
          700: '#9a7820',
          800: '#785c15',
          900: '#5a4510',
        },
        cream: {
          50: '#fcfbfa',
          100: '#f8f6f0',
          200: '#f3efe4',
          300: '#e9e3d3',
          400: '#ded5bf',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Cinzel', 'Playfair Display', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Montserrat', 'Inter', 'sans-serif'],
      },
      letterSpacing: {
        'widest-luxury': '0.25em',
        'super-wide': '0.35em',
      },
      boxShadow: {
        'luxury': '0 20px 40px -15px rgba(7, 36, 40, 0.15)',
        'luxury-gold': '0 10px 30px -10px rgba(212, 175, 55, 0.3)',
        'luxury-glow': '0 0 35px -5px rgba(43, 156, 174, 0.25)',
      }
    },
  },
  plugins: [],
}
