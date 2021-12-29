module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        lexend: ["lexend", "sans-serif"],
      },
      colors: {
        primary: "#3A3C42",
        "primary-light": "#52555D",
        "primary-dark": "#222327",
        secondary: "#9CCD62",
        "secondary-light": "#B4D989",
        "secondary-dark": "#83BF3D",
        text: "#E3FFC2",
        "text-gray": "#DEE0E0",
        carnation: {
          DEFAULT: "#F56565",
          50: "#FFFFFF",
          100: "#FFFFFF",
          200: "#FEF5F5",
          300: "#FBC5C5",
          400: "#F89595",
          500: "#F56565",
          600: "#F23535",
          700: "#E50F0F",
          800: "#B50C0C",
          900: "#850909",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
