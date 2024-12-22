/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        memhirETBlue: {
          500: "#153d59",
          700: "#1b3e98",
        },
        memhirETWhite: {
          500: "#F8F9F5",
        },
        memhirETBlack: {
          300: "#1E1E1E",
          500: "#1E2328",
        },
        memhirETYellow: {
          500: "#f2b41c",
        },
      },
      fontFamily: {
        bauhaus: ["Bauhaus", "sans-serif"],
        body: ["DM Sans", "sans-serif"],
      },
      keyframes: {
        "fade-up": {
          "0%": {
            opacity: "0",
            transform: "translateY(20px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
      },
      animation: {
        "fade-up": "fade-up 0.5s ease-out forwards",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
