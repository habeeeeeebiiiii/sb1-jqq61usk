/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Nunito', 'sans-serif'],
        display: ['Quicksand', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#eef7fe',
          100: '#d8ebfd',
          200: '#b8dcfb',
          300: '#89c6f8',
          400: '#52a8f3',
          500: '#65B7E5', // sky blue
          600: '#1566c2',
          700: '#13519f',
          800: '#154684',
          900: '#173c6d',
          950: '#12264a',
        },
        secondary: {
          50: '#f5fbf4',
          100: '#e6f7e4',
          200: '#ceecc8',
          300: '#a5dca0',
          400: '#7ED957', // soft green
          500: '#7ED957', // soft green
          600: '#37a033',
          700: '#2d8029',
          800: '#296624',
          900: '#245421',
          950: '#102f0f',
        },
        accent: {
          50: '#fffbe5',
          100: '#fff8c5',
          200: '#ffed85',
          300: '#ffde59', // sunshine yellow
          400: '#ffde59', // sunshine yellow
          500: '#ffde59', // sunshine yellow
          600: '#e3ac00',
          700: '#bb8100',
          800: '#9a6300',
          900: '#7e510b',
          950: '#472a00',
        },
      },
      backgroundImage: {
        'dot-pattern': 'radial-gradient(#e5e7eb 1px, transparent 1px)',
      },
      boxShadow: {
        'inner-lg': 'inset 0 2px 15px 0 rgba(0, 0, 0, 0.05)',
      },
    },
  },
  plugins: [],
};