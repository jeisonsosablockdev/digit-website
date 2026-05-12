import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#7c4dff",
        secondary: "#00E5FF",
        background: "#050505",
        surface: "#0a0a0a",
        "surface-container": "#111111",
        "on-surface": "#f8f5fd",
        "on-surface-variant": "#a1a1aa",
        "glass-bg": "rgba(10, 10, 10, 0.72)"
      },
      fontFamily: {
        headline: ["var(--font-space-grotesk)", "sans-serif"],
        body: ["var(--font-manrope)", "sans-serif"],
        utility: ["var(--font-inter)", "sans-serif"]
      },
      boxShadow: {
        neon: "0 0 25px rgba(124, 77, 255, 0.28)",
        "neon-secondary": "0 0 24px rgba(0, 229, 255, 0.16)"
      },
      borderRadius: {
        "4xl": "2rem"
      }
    }
  },
  plugins: []
};

export default config;
