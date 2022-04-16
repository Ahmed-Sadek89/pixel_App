module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      // all additions are here
    },
    container: {
      center: true,
      padding: '1rem',
      screens: {
        lg: '1124px',
        xl: '1124px',
        '2xl': '1124px'
      }
    },
    fontFamily: {
      custom: ['Roboto Mono', 'monospace']
    },
  },
  plugins: [],
}
