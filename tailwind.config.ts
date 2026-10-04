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
        surface: "#232D3F",
        surface_hover: "#29354A",
        line: "#33405A",
        muted: "#9AA8BD",
      },
      fontFamily: {
        sans: ["var(--font-nunito)", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(29,175,255,0.35), 0 8px 30px -8px rgba(29,175,255,0.35)",
      },
    },
  },
  plugins: [],
};
export default config;
