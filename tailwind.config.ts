import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brandCol1: "#F2F0E6", // Off-white
        brandCol2: "#2B2B2B", // Off-black
        brandCol3: "#00A7E1", // Electric blue
        brandCol4: "#7FFF00", // Lively green
        brandCol5: "#4CBB17", // Complementary green
      },
    },
  },
  plugins: [],
};

export default config;
