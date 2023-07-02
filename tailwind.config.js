/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './domains/**/*.{js,ts,jsx,tsx,mdx}',
    './shared/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#FFFFFF',
        foreground: '#221C55',
        foregroundLight: '#513ED9',
        foregroundExtraLight: '#7F66FF',
        primary: '#F5F7FB',
        secondary: '#F8FAFB',
        text: '#1F2937',
        bar: '#1DA584',
      },
      fontFamily: {
        sans: ['Quicksand', 'sans-serif'],
        secondary: ['Inter var', 'Quicksand'],
      },
    },
  },
  plugins: [],
};

module.exports = config;
