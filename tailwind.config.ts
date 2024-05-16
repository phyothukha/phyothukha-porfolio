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
      Ubuntu: ["Ubuntu", "sans-serif"],
      Fira: ["Fira Mono", "monospace"],
      Poetsen: ["Poetsen One", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        wtsecondary: "#087e8b",
        wtprimary: "#fff",

        // dark mode
        secondary: "#00ffee",
        darkary: "#080808",
        primary: "#ffffff",
      },
      boxShadow: {
        small: "0 0 5px  var(--main-color)",
        medium: "0 0 15px var(--main-color)",
        wtsmall: "0 0 5px #8AAAE5",
        wtmedium: "0 0 15px #8AAAE5",
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
