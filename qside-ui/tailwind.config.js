const { black } = require('tailwindcss/colors')
const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {

  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],

  daisyui: {
    themes: [
      "synthwave",
      "night",
      "coffee",
      "retro"
      
    ]
  },
  theme: {

    extend: {
      transitionProperty: {
        'height': 'height',
        'spacing': 'margin, padding',
        'width': 'width'
      },

      // colors: {
      //   primaryBackgroundDark: colors.slate[700],
      //   secondaryBackgroundDark: colors.slate[900],
      //   primaryTextDark: colors.white,
      //   darkBorder: colors.black,

      //   primaryButtonWhite: colors.white,
      //   primaryButtonDark: colors.black,

      //   purpleButton: colors.purple[500],


      //   primary: colors.black,
      //   primaryAccent: colors.gray[600],
      //   secondary: colors.gray[800],
      //   secondaryAccent: colors.gray[200],
      //   textPrimary: colors.black,
      //   textSecondary: colors.white

      // },
    },
  },

  plugins: [
    require("tailwindcss-animate"),

    require("daisyui"),
    require("@tailwindcss/typography")
  ],
}
