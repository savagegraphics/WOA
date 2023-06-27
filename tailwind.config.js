const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      indigo: {
        '50': '#f5faff',
        '100': '#eef5ff',
        '200': '#d6e6ff',
        '300': '#bdd5ff',
        '400': '#8bb2ff',
        '500': '#598fff',
        '600': '#4f7de6',
        '700': '#4166cc',
        '800': '#3553a3',
        '900': '#2b437f',
        transparent: 'transparent',
        current: 'currentColor',
        black: colors.black,
        white: colors.white,
        rose: colors.rose,
        pink: colors.pink,
        fuchsia: colors.fuchsia,
        purple: colors.purple,
        violet: colors.violet,
        indigo: colors.indigo,
        blue: colors.blue,
        sky: colors.lightBlue, // Only in Tailwind CSS <=v2.1
        sky: colors.sky, // As of Tailwind CSS v2.2, `lightBlue` has been renamed to `sky`  
        cyan: colors.cyan,
        teal: colors.teal,
        emerald: colors.emerald,
        green: colors.green,
        lime: colors.lime,
        yellow: colors.yellow,
        amber: colors.amber,
        orange: colors.orange,
        red: colors.red,
        slate: colors.slate,
        zinc: colors.zinc,
        gray: colors.gray,
        neutral: colors.slate,
        stone: colors.stone,
      },
      'transparent': 'transparent',
      'current': 'currentColor',
      'black': '#000',
      'white': '#fff',
      'blue': '#1fb6ff',
      'purple': '#7e5bef',
      'pink': '#ff49db',
      'orange': '#ff7849',
      'green': '#13ce66',
      'yellow': '#ffc82c',
      'gray-dark': '#273444',
      'gray': '#8492a6',
      'gray-light': '#d3dce6',
    },
    fontFamily: {
      sans: [ 'Graphik', 'sans-serif' ],
      serif: [ 'Merriweather', 'serif' ],
    },
    extend: {
      spacing: {
        '8xl': '96rem',
        '9xl': '128rem',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography'),
  ],
}
