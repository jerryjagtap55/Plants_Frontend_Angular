/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {

        primary100: '#FAFAFA',
        primary200: '#F1F5F4',
        primary300: '#EAEAEA',
        primary400: '#E0EAE8',
        primary500: '#DFE7D8',
        primary550:'#676867',
        primary600: '#586f69',
        primary700: '#28463e',
        primary800: '#07261d',
        primary900: '#011c14',
      },
      dropShadow: {
        'primary100': [
          '0 4px 3px rgb(88 111 105 / 0.07)',
          '0 2px 2px rgb(88 111 105 / 0.06)'
        ]
      },
      fontFamily: {
        'dm-sans': ['DM Sans', 'Arial', 'sans-serif'],
        'dm-serif': ['DM Serif Display', 'Georgia', 'serif'],
      },

    },
  },
  plugins: [],
}