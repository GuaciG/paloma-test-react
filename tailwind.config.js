/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Anton, sans-serif']
    },
    extend: {
      rotate: {
        270: '270deg'
      },
      backgroundImage: {
        'hero-pattern': "url('/src/assets/paloma-infinity.png')"
      }
    }
  },
  plugins: []
}
