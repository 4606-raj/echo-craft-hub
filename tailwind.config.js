/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  important: true,  
  theme: {
    extend: {},
    colors: {
      primary: 'hsl(266, 98%, 60%) !important',
      secondary: '#ecc94b !important',
      // white: '#fff !important',
    },

  },
  plugins: [],
}