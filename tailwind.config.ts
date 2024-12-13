import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        blurple: "#5754F9",
        raspberry: "#F44599",
        kiwi: "#20D287",
      },
      fontFamily: {
        title: "var(--font-title)",
      },
    },
  },
  plugins: [typography],
} satisfies Config;
