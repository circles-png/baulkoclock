/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        "sans": ["SFUIDisplay"],
      },
      animation: {
        "fadein": "fadein 2s ease-out",
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
  plugins: [],
}
