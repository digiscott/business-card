import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./content/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#162033",
        paper: "#f8f4ec",
        accent: "#1f7a8c",
        copper: "#b56b45",
      },
      boxShadow: {
        soft: "0 20px 60px rgba(22, 32, 51, 0.14)",
      },
    },
  },
  plugins: [],
};

export default config;
