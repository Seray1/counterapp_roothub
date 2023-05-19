/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/*.html"],
  theme: {
    extend: {
      colors: {
        softBlue: "hsl(215, 51%, 70%)",
        Cyan: "hsl(178, 100%, 50%)",
        VeryDarkBlueMainBG: "hsl(217, 54%, 11%)",
        VeryDarkBlueCardBG: "hsl(216, 50%, 16%)",
        VeryDarkBlueLine: "hsl(215, 32%, 27%)",
        White: "hsl(0, 0%, 100%)",
      },
    },
  },
  plugins: [],
}
