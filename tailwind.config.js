/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        'header-bg': '#080D29',
        'custom-bg': '#242A4A',
        'new-btn-bg': '#008558',
        'btn': '#4A5069',
        'hover-sidebar': '#383E5A',
        'header-btn-bg': '#0B1A3E',
        'header-btn-font': '#5AB2F9',
        'filter-header': '#111739',
        'filter-header-btn': '#13234C',
        'warning-bg': '#282D4D',
        'dashboard-bg': '#1D2345',
        'queued-btn': '#403539',

      },
      fontSize: {
        'xxs': '0.625rem',
        '3xs': '0.312rem'
      },
      width: {
        '0.5': '0.125rem',
      },
      margin: {
        '84': "21rem"
      }
    },
  },
  plugins: [],
}