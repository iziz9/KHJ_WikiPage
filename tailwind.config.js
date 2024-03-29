/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        main: '#196FEF',
        highlight: '#67d0c3',
        lightgray: '#D9D9D9'
      },
      screens: {
        xs: '400px',
        sm: '540px',
        md: '800px',
        lg: '1024px',
        xl: '1280px',
      },
      fontSize: {
        xxs: '0.6rem',
        xs: '0.75rem',
        sm: '0.875rem',
        base: '1rem',
        xl: '1.25rem',
      },
    },
  },
  plugins: [],
}

