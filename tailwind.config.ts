import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        green: "#81845C",
        red: {
          DEFAULT: "#e64011",
          alt: "#D83D35",
          light: "#FFF5F5",
        },
        black: {
          DEFAULT: "#000000",
          light: "#424242",
          medium: "#979797",
          dark: "#162035",
          transparent: "rgba(0,0,0,0.2)",
          lessTransparent: "rgba(0,0,0,0.8)",
        },
        gray: {
          DEFAULT: "#E2E2E2",
          light: "#F1F1F1",
          mid: "#888",
          dark: "#332E2D",
        },
        cat: {
          eventi: "#89E0E0",
          linguaggi: "#FFF3E3",
          workshop: "#F2C94C",
          artisti: "#FF9891",
          compagnie: "#F26122",
          residenze: "#FFBFDB",
          progetto: "#D7FAFA",
          news: "#BFC9FF",
          pubblicazioni: "#BFE9C6",
          reti: "#F2CEBF",
          partner: "#F285B5",
          festival: "#181818",
        },
      },
      boxShadow: {
        title: "5px 0 0 white, -5px 0 0 white",
        "title-lg": "10px 0 0 white, -10px 0 0 white",
        "title-xl": "15px 0 0 white, -15px 0 0 white",
      },
      fontSize: {
        "4xs": ["11px", "20px"],
        "3xs": ["12px", "22px"],
        xxs: ["14px", "24px"],
        xs: ["16px", "26px"],
        sm: ["18px", "28px"],
        base: ["23px", "33px"],
        lg: ["30px", "40px"],
        xl: ["35px", "43px"],
        "2xl": ["40px", "52px"],
        "3xl": ["80px", "90px"],
        "4xl": ["140px", "150px"],
      },
      fontFamily: {
        serif: ["Work Sans", "sans-serif"],
        sans: ["Work Sans", "sans-serif"],
      },
      height: {
        "50vh": "50vh",
        "80vh": "80vh",
        "90vh": "90vh",
      },
      backgroundImage: {
        "arrow-right": "url('/icone/arrow_long_right.svg')",
        "arrow-right-black": "url('/icone/arrow_long_right_black.svg')",
        "arrow-right-red": "url('/icone/arrow_long_right_red.svg')",
        "arrow-left": "url('/icone/arrow_long_left.svg')",
        "arrow-left-black": "url('/icone/arrow_long_left_black.svg')",
        "arrow-small-right": "url('/icone/arrow_small_right.svg')",
        "arrow-small-right-white": "url('/icone/arrow_small_right_white.svg')",
        check: "url('/icone/check.svg')",
        "arrow-small-down": "url('/icone/arrow_small_down.svg')",
        open: "url('/icone/open.svg')",
        close: "url('/icone/close.svg')",
      },
    },
  },
  variants: {},
  corePlugins: {
    container: false,
  },
  plugins: [
    require("@tailwindcss/forms"),
    function ({ addComponents }: { addComponents: any }) {
      addComponents({
        ".container": {
          maxWidth: "100%",
          "@screen sm": {
            maxWidth: "640px",
          },
          "@screen md": {
            maxWidth: "768px",
          },
          "@screen lg": {
            maxWidth: "1024px",
          },
          "@screen xl": {
            maxWidth: "1280px",
          },
          "@screen 2xl": {
            maxWidth: "1380px",
          },
        },
      });
    },
  ],
};
export default config;
