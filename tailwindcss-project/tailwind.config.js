/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-blue-2' : '#044b86',
        'custom-beige' : '#ffdb6d',
        'custom-blue-3' : '#33A9FF',
        'custom-black' : '#022644;',
        'custom-blue' : '#0065b8',
    },
  },
  plugins: [],
}
}

