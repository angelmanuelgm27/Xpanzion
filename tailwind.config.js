/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      width: {
        '2/5': '32.3333%'
      },
      padding: {
        100: '35rem'
      },
      screens: {
        xs: "300px",
      }
    }
  },
  plugins: []
}
