module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "dark-teal": "#00545A", // This is an example color code for dark teal.
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
