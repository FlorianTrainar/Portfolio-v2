/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        'space-grotesk': ['Space Grotesk', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        'clash-display': ['ClashDisplay', 'sans-serif'],

        'jet-brains': ['JetBrains Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}
