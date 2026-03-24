import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#13304a",
        cream: "#f6eddc",
        wheat: "#d5a63d",
        dusk: "#6a9ed6",
      },
      fontFamily: {
        display: ['"Iowan Old Style"', '"Palatino Linotype"', '"Book Antiqua"', "serif"],
        sans: ['"Avenir Next"', "Manrope", "Segoe UI", "sans-serif"],
      },
      boxShadow: {
        horizon: "0 24px 80px rgba(19, 48, 74, 0.14)",
      },
      animation: {
        "hero-rise": "hero-rise 700ms cubic-bezier(0.2, 0.65, 0.16, 1) forwards",
      },
      keyframes: {
        "hero-rise": {
          to: {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
      },
    },
  },
  plugins: [],
};

export default config;
