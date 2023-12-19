/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        "dark-gray": "#2E2E2E",
        "mid-gray": "#3c3c3c",
        "light-gray": "#d7d7d7",
        "superlight-gray": "#f7f7f7",
        "alert-yellow": "#ffb200",
      },
      fontFamily: {
        title: ["DIN", "Helvetica Condensed", "Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
};
