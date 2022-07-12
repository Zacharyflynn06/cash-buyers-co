/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      colors: {
        one: "#F0EBE3",
        two: "#E4DCCF",
        three: "#7D9D9C",
        four: "#576F72",
      },
      fontFamily: { oswald: ["Oswald", "sans-sarif"] },
    },
  },
  plugins: [],
};
