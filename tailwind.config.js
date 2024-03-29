module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {

    extend: {
      fontFamily: {
        default: ["'Work Sans', sans-serif"],
      },
        colors: {
          'default': 'rgb(99 102 241)',
          'bg': 'rgb(10 20 30)',
          'blue': 'rgb(14 165 233)',
          'gold': 'rgba(182,149,65,255)',
          'red': 'rgba(236,27,46,255)'
    },
    backgroundImage: {
      'contact': 'url("../images/6_ContactMe/PNG/Background_1.png")',
      'default': 'url("../images/header2/header.png")'
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