import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      Roboto: ["Roboto", "sans-serif"],
      Poppins: ["Poppins", "sans-serif"],
      Inter: ["Inter", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        // secondary: "#00ffee",
        wtsecondary: "#087e8b",
        // wtsecondary: "#8AAAE5",
        // witary: "#080808",
        wtprimary: "#fff",

        // dark theme color
        secondary: "#00ffee",
        darkary: "#080808",
        primary: "#ffffff",
      },
      boxShadow: {
        "3xl": "0 0 25px var(--main-color)",
        "4xl":
          "0 0 10px var(--main-color), 0 0 20px var(--main-color),0 0 50px var(--main-color)",
        "5xl": "0 0 25px  #8AAAE5",
        "6xl": "0 0 10px #8AAAE5, 0 0 20px #8AAAE5,0 0 50px #8AAAE5",
      },
    },
  },
  plugins: [],
};
export default config;
