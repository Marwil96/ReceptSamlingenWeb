module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    screens: {
      xs: "350px",
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: "#000000",
      smoothBlack: "#0B0D17",
      white: "#FFFFFF",
      primary: "#071B6A",
      clearBlue: "#3D55D3",
      pureBlack: "#000000",
      yellowish: "#FEBD2E",
      beige: "#FFC392",
      white: "#ffffff",
      yellowish: "#FEBD2E",
    },
    spacing: {
      0: "0rem",
      1: "0.8rem",
      2: "1.2rem",
      3: "1.6rem",
      4: "2.4rem",
      5: "3.2rem",
      6: "4.8rem",
      7: "6.4rem",
      8: "8.2rem",
      9: "10rem",
      10: "12rem",
      11: "14rem",
      12: "16rem",
      13: "20rem",
      14: "30rem",
      15: "40rem",
      16: "50rem",
      17: "60rem",
      18: "70rem",
      19: "80rem",
      20: "90rem",
      21: "100rem",
      22: "110rem",
      23: "120rem",
      24: "130rem",
    },
    fontSize: {
      xs: "1rem",
      sm: "1.2rem",
      tiny: "1.4rem",
      base: "1.6rem",
      lg: ["2rem", "3rem"],
      xl: ["3.2rem", "4.4rem"],
      "1xl": ["4.2rem", "5.5rem"],
      "2xl": ["4.8rem", "6.4rem"],
      "3xl": ["6.4rem", "8rem"],
      "4xl": ["7.2rem", "9.8rem"],
      "5xl": "10rem",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
