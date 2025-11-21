/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "!./src/**/node_modules/**",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background, #000000)",
        foreground: "var(--foreground, #171717)",
      },
      fontFamily: {
        sans: ["Arial", "Helvetica", "sans-serif", "var(--font-geist-sans)"],
        mono: ["Courier New", "monospace", "var(--font-geist-mono)"],
      },
    },
  },
  // optional to remove IntelliSense warnings
  plugins: [],
};
