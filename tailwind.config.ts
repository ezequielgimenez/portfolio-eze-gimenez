import type { Config } from "tailwindcss";
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "375px",
      },
      opacity: {
        "85": "0.85",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      boxShadow: {
        "text-glow": "0 0 10px rgba(197, 75, 140, 0.8)",
      },
      animation: {
        "bounce-slow": "bounce 3s infinite",
      },
    },
  },
  plugins: [],
} satisfies Config;
