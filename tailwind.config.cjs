/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      colors: {
        one: "#D4ECDD",
        two: "#345B63",
        three: "#152D35",
        four: "#112031",
      },
      fontFamily: { oswald: ["Oswald", "sans-sarif"] },
    },
  },
  plugins: [],
};
