import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: "#f6f3ed",
        paperStrong: "#fbfaf7",
        ink: "#141414",
        muted: "#5f5a52",
        line: "rgba(20, 20, 20, 0.12)",
        accent: "#d4a62a",
        accentSoft: "#f0e1ad",
        cream: "#f8f6f1",
      },
      fontFamily: {
        display: ['"Iowan Old Style"', '"Palatino Linotype"', '"Book Antiqua"', "serif"],
        sans: ['"Avenir Next"', "Manrope", "Segoe UI", "sans-serif"],
      },
      boxShadow: {
        horizon: "0 24px 80px rgba(20, 20, 20, 0.08)",
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
