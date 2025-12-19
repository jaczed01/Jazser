/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          red: '#DC2626',
          darkRed: '#B91C1C',
          lightRed: '#EF4444',
        }
      }
    },
  },
  plugins: [],
}









