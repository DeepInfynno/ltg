/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "375px",
        "2xl": "1537px",
      },
      fontFamily: {
        helvetica: ["Helvetica Neue", ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: {
        careerBg: "url('../assets/images/careerbg.svg')",
        pieroHuerto: "url('../assets/images/piero-huerto.svg')",
        pieroHuertoResponsive:
          "url('../assets/images/piero-huerto-responsive.svg.svg')",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
