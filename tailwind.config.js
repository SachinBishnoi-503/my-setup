/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "20px",
      },
      backgroundImage: {
        'lineargradiant': "linear-gradient(107.6deg, #FF5501 8.81%, #B1106F 163.48%)"
      },
      fontFamily: {
        'lato': "Lato, sans-serif",
        'Montserrat': "Montserrat , sans-serif",
      }
    },
  },
  plugins: [],
}