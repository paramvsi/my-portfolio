module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "dark-teal": "#00545A",
        "light-teal": "#66b2b2",
      },
      backgroundImage: {
        "teal-gradient": "linear-gradient(to right , #00545A, #32A1AE )",
      },
      fontFamily: {
        playfair: ['"Playfair Display"', "serif"],
        merriweather: ["Merriweather", "serif"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
