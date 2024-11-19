/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'coffee-brown': '#6F4F28',
        'latte-beige': '#C6A57E',
        'espresso': '#3B2F2A',
        'cream': '#F4F1E1',
        'ivory': '#FFFFF0',
        'olive-green': '#708238',
        'sage': '#A3B18C',
        'burnt-orange': '#D06A4B',
        'soft-gold': '#E1C16E',
      },
      fontFamily: {
        sans: ['Source Sans Pro', 'sans-serif'],
     },
    },
  },
  plugins: [],
};