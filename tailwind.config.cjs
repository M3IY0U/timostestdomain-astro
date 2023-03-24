/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      backgroundImage: {
        emanon: "url('/emanon.webp')"
      },
      colors: {
        blackAcrylic: "rgba(0, 0, 0, 0.5)"
      }
    }
  },
  plugins: []
};
