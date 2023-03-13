/** @type {import('tailwindcss').Config} */ // @import url('https://fonts.googleapis.com/css2?family=Signika:wght@300;400;500;600;700&display=swap');
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        signika: ['Signika', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
