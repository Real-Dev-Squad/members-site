/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens:{
      'laptop' : '970px'
    },
    boxShadow: {
      'lg':'0 10px 15px rgba(0 0 0 / 0.5)'
    },
    extend: {},
  },
  plugins: [],
}
