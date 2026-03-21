/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      screens: {
        'xs': '384px',  // Extra small screens (common mobile width)
        'sm': '640px',  // Small mobile devices
        'md': '768px',  // Tablets
        'lg': '1024px', // Desktop
        'xl': '1280px', // Large desktop
        '2xl': '1536px' // Extra large desktop
      },
    },
  },
  plugins: [],
}