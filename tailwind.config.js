/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        ink: '#211D18',
        navy: '#16324F',
        'navy-deep': '#0E2038',
        clay: '#A6432B',
        'clay-deep': '#7E3220',
        leaf: '#4C6B3A',
        'leaf-deep': '#374F29',
        gold: '#D9A441',
        sand: '#F7EFE0',
        'sand-deep': '#EDE1CB',
      },
      fontFamily: {
        display: ['var(--font-fraunces)', 'serif'],
        body: ['var(--font-inter)', 'sans-serif'],
      },
      maxWidth: {
        content: '1180px',
      },
    },
  },
  plugins: [],
}
