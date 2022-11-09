/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        "sans": ["SFUIDisplay"],
      },
      animation: {
        "fadein": "fadein 1s ease-out",
      },
      keyframes: {
        fadein: {
          "0%": {
            opacity: 0
          },
          "100%": {
            opacity: 1
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
