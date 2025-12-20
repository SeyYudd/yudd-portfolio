/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Poppins', 'sans-serif'],
      },
      colors: {
        dark: {
          DEFAULT: '#000000',
          900: '#000000',
          800: '#0a0a0a',
          700: '#111111',
          600: '#1a1a1a',
        },
        accent: {
          DEFAULT: '#ec3711',
          light: '#ff5733',
          dark: '#c42d0e',
        },
      },
    },
  },
  plugins: [],
}

