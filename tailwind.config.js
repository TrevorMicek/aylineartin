module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {

    extend: {
        colors: {
          'default': 'rgb(99 102 241)',
          'bg': 'rgb(10 20 30)',
          'blue': 'rgb(14 165 233)'
    },
    backgroundImage: {
      'contact': 'url("../images/6_ContactMe/PNG/Background_1.png")'
  }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
       require('@tailwindcss/aspect-ratio'),
       require('@tailwindcss/typography'),
       require('@tailwindcss/forms'),
],
}
