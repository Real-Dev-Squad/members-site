/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    maxWidth: {
      'cusXS': '260px',
    },
    boxShadow: {
      'cus': '0 0 15px -5px rgba(0, 0, 0, 0.65)',
    },
    extend: {},
  },
  plugins: [],
}
