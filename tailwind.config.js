/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#38bdf8', // Sky blue
        'secondary': '#0ea5e9', // Lighter sky blue
        'accent': '#fbbf24', // Subtle yellow accent
        'dark': '#1e1e1e',
      },
      fontFamily: {
        'manrope': ['Manrope', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

