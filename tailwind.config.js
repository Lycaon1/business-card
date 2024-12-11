/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#f0f3f9',
          100: '#d9e1f1',
          200: '#b3c3e3',
          300: '#8da5d5',
          400: '#6687c7',
          500: '#4069b9',
          600: '#334f94',
          700: '#263b6f',
          800: '#1a274a',
          900: '#0d1325',
        },
        gold: {
          50: '#fdf9e9',
          100: '#fbf3d3',
          200: '#f7e7a7',
          300: '#f3db7b',
          400: '#efcf4f',
          500: '#ebc323',
          600: '#bc9c1c',
          700: '#8d7515',
          800: '#5e4e0e',
          900: '#2f2707',
        },
      },
    },
  },
  plugins: [],
};