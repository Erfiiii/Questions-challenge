/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    backgroundColor: '#E5E5E5',
    colors: {
      'green': '#27AE60',
      'green-light': '#66CB9F',
      'red': '#F16063'
    },
    fontSize: {
      'x-sm': ['10px', {
        lineHeight: '16px',
        letterSpacing: '0',
        fontWeight: '400',
      }],
      sm: ['12px', {
        lineHeight: '24px',
        letterSpacing: '0',
        fontWeight: '400',
      }],
      'sm-b': ['12px', {
        lineHeight: '24px',
        letterSpacing: '0',
        fontWeight: '700',
      }],
      base: ['14px', {
        lineHeight: '20px',
        letterSpacing: '0',
        fontWeight: '400',
      }],
      'base-b': ['14px', {
        lineHeight: '20px',
        letterSpacing: '0',
        fontWeight: '700',
      }],
      lg: ['24px', {
        lineHeight: '36px',
        letterSpacing: '0',
        fontWeight: '800',
      }],
      xl: ['24px', '32px'],
    },
    extend: {
      fontFamily: {
        'Vazir': ["Vazir", "Roboto", "Helvetica", "Arial", "sans-serif"]
      }
    },
  },
  plugins: [],
}
