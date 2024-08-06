/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        manrope: ["Manrope", "sans-serif"],
      },
      colors: {
        // primary
        primaryMain: "#102A56",
        primary25: "#F5FAFF",
        primary50: "#EFF8FF",
        primary100: "#D1E9FF",
        primary200: "#B2DDFF",
        primary300: "#84CAFF",
        primary600: "#1570EF",
        primary800: "#1849A9",
        primary900: "#194185",
        primary950: "#102A56",

        // gray
        grayMain: "#0C111D",
        gray200: "#E4E7EC",
        gray300: "#D0D5DD",
        gray500: "#667085",
        gray700: "#344054",
        gray900: "#101828",
        gray950: "#0C111D",

        // white
        white20: "rgba(255, 255, 255, 0.2)",
        white60: "rgba(255, 255, 255, 0.6)",
        white80: "rgba(255, 255, 255, 0.8)",
      },
    },
    screens: {
      xxs: "0px",
      xs: "280px",
      small: "368px",
      sm: "640px",
      md: "768px",
      medium: "857px",
      lg: "1024px",
      "2lg": "1100px",
      large: "1200px",
      xl: "1280px",
      extraLarge: "1400px",
      "2xl": "1536px",
      "3xl": "1769px",
      "4xl": "1848px",
    },
  },
  plugins: [],
};
