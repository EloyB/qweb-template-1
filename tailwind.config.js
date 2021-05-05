module.exports = {
  purge: ["./pages/**/*.js", "./components/**/*.js"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#1E90FF",
        "primary-hover": "#0081FF",
        secondary: "#6246EA",
      },
      fontFamily: {
        manrope: "Manrope",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
