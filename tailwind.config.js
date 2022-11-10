/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      borderRadius: {
        "ish": "3px"
      },
      fontFamily: {
        "sans": ["SFUIDisplay"],
      },
      animation: {
        "fadein": "fadein 0.5s ease-out",
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
}
