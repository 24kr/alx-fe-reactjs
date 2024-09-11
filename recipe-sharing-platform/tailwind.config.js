/** @type {import('tailwindcss').Config} */
export default {
  purge: ['./index.html','./src/**/*.{js,jsx,ts,tsx}', './public/index.html'], // Purge unused styles
  darkMode: false, // Or 'media' or 'class'
  theme: {
    extend: {},
  },
  plugins: [],
};
