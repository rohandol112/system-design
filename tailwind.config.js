/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          dark: '#0F0720',
          DEFAULT: '#170B34',
        },
        accent: {
          start: '#818CF8',  // Start color of gradient
          end: '#6366F1',    // End color of gradient
        }
      },
    },
  },
  plugins: [],
}