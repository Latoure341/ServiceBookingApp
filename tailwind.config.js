/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        ink: '#123326',
        forest: '#087A3D',
        leaf: '#149447',
        mint: '#EAF6EF',
        cloud: '#F7FAF8',
      },
    },
  },
  plugins: [],
};
