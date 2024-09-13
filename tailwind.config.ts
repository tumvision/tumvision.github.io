import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        logo_bg: "#1D2534",
        logo_txt: "#F6F6F6",
        logo_main: "#1DAFFF",
      },
    },
  },
  plugins: [],
};
export default config;
