import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center:true,
      padding:'15px'
    },
    extend: {
      colors: {
        primary: "#31a9b8",
        secondary: "#64748b",
        dark:"#0f172a",
        foreground: "var(--foreground)",
      },
      screens: {
        '2xl':"1320px"
      },
    },
  },
  plugins: [],
} satisfies Config;
