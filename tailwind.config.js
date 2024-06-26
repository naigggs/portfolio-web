import { nextui } from "@nextui-org/theme";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-geist-mono)"],
      },
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      themes: {
        dark: {
          colors: {
            background: {
              DEFAULT: "#01121a",
            },
            primary: {
              DEFAULT: "#ebd7a5",
              foreground: "#000000",
            },
            focus: "#2F2F2D",
          },
        },
        light: {
          colors: {
            background: {
              DEFAULT: "#E0E0DC",
            },
            background2: {
              DEFAULT: "#2F2F2D",
            },
            foreground2: "#E0E0DC",
            foreground: "#000000",
            focus: "#BEF264",
          },
        },
      },
    }),
  ],
};
