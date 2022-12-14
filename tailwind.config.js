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
        "3xl": "2290px",
        "4xl": "2560px",
      },
      fontFamily: {
        helvetica: ["Helvetica Neue", ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: {
        careerBg: "url('../assets/images/careers/careerbg.svg')",
        affiliateBg: "url('../assets/images/affiliate/affiliatebg.svg')",
        sellerBg: "url('../assets/images/seller/sellerbg.svg')",
        aboutBg: "url('../assets/images/about-us/aboutbg.svg')",
        pieroHuerto: "url('../assets/images/piero-huerto.svg')",
        pieroHuertoResponsive:
          "url('../assets/images/piero-huerto-responsive.svg.svg')",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
