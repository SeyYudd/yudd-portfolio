/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
        display: ['Orbitron', 'sans-serif'],
        script: ['Rajdhani', 'sans-serif'],
      },
      colors: {
        dark: {
          DEFAULT: '#050505',
          900: '#050505',
          800: '#0f0f0f',
          700: '#161616',
          600: '#222222',
        },
        accent: {
          DEFAULT: '#00fff0',
          light: '#7ffcf6',
          dark: '#00d1c5',
          pink: '#ff007a',
          lime: '#adff00',
        },
      },
    },
  },
  plugins: [],
}

