/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-blue-1' : '#0D4D88',
        'custom-blue-2' : '#0858A1',
        'custom-blue-4' : '#1C71AF',
        'custom-beige' : '#ffdb6d',
        'custom-blue-3' : '#33A9FF',
        'custom-black' : '#022644;',
        'custom-blue' : '#0065b8',
    },
      gridTemplateColumns: {
        '13': 'repeat(13, minmax(0, 1fr))',
        '14': 'repeat(14, minmax(0, 1fr))',
        '16': 'repeat(16, minmax(0, 1fr))',
        '20': 'repeat(20, minmax(0, 1fr))',
        '24': 'repeat(24, minmax(0, 1fr))',
    },
  },
  plugins: [],
}
}

