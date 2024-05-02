import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
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
        secondary: "#00ffee",
        primary: "#ffffff",
      },
      boxShadow: {
        "3xl": "0 0 25px var(--main-color)",
        "4xl":
          "0 0 10px var(--main-color), 0 0 20px var(--main-color),0 0 50px var(--main-color)",
      },
    },
  },
  plugins: [],
};
export default config;
