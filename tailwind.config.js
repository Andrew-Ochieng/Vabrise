/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      display: ['group-focus'],
      opacity: ['group-focus'],
      inset: ['group-focus']
    }
  },
  plugins: [require('flowbite/plugin')],
} 